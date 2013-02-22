console.log("Piraatti :: Start");
var irc = require("irc");
var request = require('request');

/*
 * Only some of these config are used...
 */
var config = {
	channels : ["#quhbottest"],
	server : "irc.quakenet.org",
	botName : "TESTIBOTTI V2 ROCKET",
	userName : 'nodebot',
	realName : 'nodeJS IRC client',
	port : 6667,
	debug : true,
	showErrors : false,
	autoRejoin : true,
	autoConnect : true,
	secure : false,
	selfSigned : false,
	certExpired : false,
	floodProtection : false,
	floodProtectionDelay : 1000,
	stripColors : false,
	channelPrefixes : "&#",
	messageSplit : 512
};

var bot = new irc.Client(config.server, config.botName, {
	channels : config.channels,
	userName : 'seilori',
	realName : 'Pekka Merimies',
	autoRejoin : true,
	autoConnect : true,
	floodProtection : true,
	floodProtectionDelay : 1000,
	showErrors : true
});


bot.addListener("join", function(channel, who) {
	// Welcome them in!
	if (who == "hezo") {
		bot.say(channel, who + " ooh its me clown!");
	}
	if (who == "Quh") {
		bot.say(channel, who + ": my master!");
	}
});

bot.addListener('error', function(message) {
	console.log('error: ', message);
});

//Load dem modules.
var fs = require("fs");
var path = require('path');

var modules = {};
console.log("Modules loaded:");
fs.readdirSync("./botmodules").forEach(function(filename) {
    if(filename != 'index.js' && path.extname(filename) == ".js")
    {
        modules[path.basename(filename, ".js")] = require("./botmodules/"+filename);
        console.log(filename +" : "+ path.basename(filename, ".js"));
    }
});

bot.addListener('message', function(from, to, message) {
    if (message.substring(0, 1) == "!") {
        splitted = message.split(" ");
        askedmodule = splitted[0].substring(1);
        modargs = message.substring(askedmodule.length+2);
        if(typeof modules[askedmodule] !== "undefined")
       		modules[askedmodule].modexec(to, bot, modargs);
    }
});

//do some error handling magic here!
//and this is bad place to be
process.on('uncaughtException', function(err) {
	console.log(err);
});