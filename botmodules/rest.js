var express = require('express');
var app = express();
var fs = require("fs")
var path = require('path');
var nconf = require('nconf');
var controllers = {};
nconf.argv().env().file({ file: './config/rest.json' });

var controllerFolderFull = nconf.get('modFolder')+nconf.get('controllerFolder');
var controllerFolder = nconf.get('controllerFolder');
//what port to bind
var port = nconf.get('port');
var botten = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};

var response = {
	json: function(res, object) {
		res.setHeader('Content-Type', 'application/json');
		res.send(object);
	}
}

exports.modexec = function (to, bot, modargs) {
    bot.say(to, "no rest for the wicked");
}

exports.init =  function(bot) {
	console.log("REST init()");
	app.get('/', function(req, res) {
		console.log("root");
	});
	console.log(controllerFolder);
    fs.readdirSync(controllerFolderFull).forEach(function(filename) {
        if (path.extname(filename) === ".js") {
        console.log(path);
            controllers[path.basename(filename, ".js")] = require("./"+controllerFolder+"/"+filename);
            console.log("controller: "+filename+" : "+path.basename(filename, ".js"));
        }
    });

	for(controller in controllers) {
		if (typeof controllers[controller].init === "function") {
			controllers[controller].init(app,response, bot);
		}
	};
	app.listen(port);
	console.log('REST listening on: '+port);
}

this.init(botten);
