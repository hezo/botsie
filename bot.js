var irc = require("irc");
var request = require('request');
var fs = require("fs");
var path = require('path');
var nconf = require('nconf');
var mongoose = require('mongoose');
var mongo = require('./db/mongo.js');
var http = require('./http/http.js');
require('date-utils');

nconf.argv().env().file({ file: './config/bot.json' });
nconf.file('mongo', './config/mongo.json');

var loggingModel = mongo.loggingModel;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var botConfigs = nconf.get('bots');
var modulesDir = nconf.get('modules');
var bot = {};

for(config in botConfigs) {
	bot[config] = new irc.Client(botConfigs[config].server, botConfigs[config].botName, {
	    channels:botConfigs[config].channels,
	    userName:botConfigs[config].userName,
	    realName:botConfigs[config].realName,
	    autoRejoin:botConfigs[config].autoRejoin,
	    autoConnect:botConfigs[config].autoConnect,
	    floodProtection:botConfigs[config].floodProtection,
	    floodProtectionDelay:botConfigs[config].floodProtectionDelay,
	    showErrors:botConfigs[config].showErrors,
	    debug: false
	});
	
	bot[config].addListener('error', function (message) {
	    console.log('error: ', message);
	});
	
	bot[config].botname = config;
	bot[config].modules = {};
	bot[config].modulesCommands = "";
	bot[config].modulesDir = modulesDir;
	bot[config].loadModules = function() {
	    fs.readdirSync(this.modulesDir).forEach(function (filename) {
	        if (filename != 'index.js' && path.extname(filename) == ".js") {
	            bot[config].modules[path.basename(filename, ".js")] = require(modulesDir+"/"+filename);
	            bot[config].modulesCommands += "!" + path.basename(filename, ".js") + ", ";
	            console.log(filename + " : " + path.basename(filename, ".js"));
	        }
	    });
	
		//init if module has init() function
	    for(mod in bot[config].modules) {
	    	if (typeof bot[config].modules[mod].init === "function") {
	    		console.log("init(): "+mod);
	    		bot[config].modules[mod].init(this);
	    	}
	    };
	
	    bot[config].modulesCommands = bot[config].modulesCommands.substr(0,bot[config].modulesCommands.length-2);
	};
	bot[config].listModules = function(to) {
		bot[config].say(to, "Supported commands: " + this.commands);
	};
	//load modules
	bot[config].addListener('message', function (from, to, message, gg) {
	    if (message.substring(0, 1) == "!") {
	        splitted = message.split(" ");
	        askedmodule = splitted[0].substring(1);
	        modargs = message.substring(askedmodule.length + 2);
	
	        switch (askedmodule) {
	            case "help":
	                this.listModules(to);
	                break;
	        }
	
	        if (typeof bot[config].modules[askedmodule] !== "undefined")
	            bot[config].modules[askedmodule].modexec(to, this, modargs);
	    }
	    
	    var logging = new loggingModel({ from: from, to:to, message: message, date: Date.now(), bot: config});
		logging.save(function (err, mUrl) {
			if (err) {
				console.log(err);
			}
		});
	    
	});
	bot[config].loadModules();
}

http.init(bot);

//do some error handling magic here!
//and this is bad place to be
process.on('uncaughtException', function (err) {
    console.log(err);
});