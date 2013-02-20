console.log("Piraatti :: Start");
var irc = require("irc");
var request = require('request');
var botmodules = require('./botmodules');
/*
 * Only some of these config are used...
 */
var config = {
	channels : ["#quhbottest"],
	server : "irc.quakenet.org",
	botName : "SexRowBot",
	userName : 'nodebot',
	realName : 'nodeJS IRC client',
	port : 6667,
	debug : false,
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

bot.addListener('message', function(from, to, message) {

	if (message.substring(0, 1) === "!") {
		splitted = message.split(" ");
		switch(splitted[0]) {
			case "!yarr":
				bot.say(to, "http://meri.rosvot.org");
				break;
			case "!dota":
				getDotaStats(splitted[1]);
				break;
			case "!wot":
				getWotStats(splitted[1], to);
			break;
            case "!test":
                botmodules.botsample.hello(to, bot);
                break;
			default:
				console.log(from + ' => ' + to + ': ' + message);
				break;
		}
	}

});

