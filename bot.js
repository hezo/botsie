var irc = require("irc");
var request = require('request');
var fs = require("fs");
var path = require('path');

/*
 * Only some of these configs are used...
 */
var config = {
    channels:["#finnexus"],
    server:"irc.quakenet.org",
    botName:"Botsie",
    userName:'nodebot',
    realName:'nodeJS IRC client',
    port:6667,
    debug:true,
    showErrors:false,
    autoRejoin:true,
    autoConnect:true,
    secure:false,
    selfSigned:false,
    certExpired:false,
    floodProtection:false,
    floodProtectionDelay:1000,
    stripColors:false,
    channelPrefixes:"&#",
    messageSplit:512
};
console.log("Bot :: Start");
var bot = new irc.Client(config.server, config.botName, {
    channels:config.channels,
    userName:'seilori',
    realName:'Pekka Merimies',
    autoRejoin:true,
    autoConnect:true,
    floodProtection:true,
    floodProtectionDelay:1000,
    showErrors:true
});


bot.addListener("join", function (channel, who) {
    // Welcome them in!
    if (who == "hezo") {
        bot.say(channel, who + " ooh its me clown!");
    }
    if (who == "Quh") {
        bot.say(channel, who + ": my master!");
    }
});

bot.addListener('error', function (message) {
    console.log('error: ', message);
});

var modules = {}
var commands = "";
//load modules
reloadModules();

bot.addListener('message', function (from, to, message) {
	var buffer = new Buffer(message, "UTF-8");
	message = buffer.toString();
    if (message.substring(0, 1) == "!") {
        splitted = message.split(" ");
        askedmodule = splitted[0].substring(1);
        modargs = message.substring(askedmodule.length + 2);

        switch (askedmodule) {
            case "help":
                listModules(to);
                break;
            case "reload":
                reloadModules(to);
                break;
        }

        if (typeof modules[askedmodule] !== "undefined")
            modules[askedmodule].modexec(to, bot, modargs);
    }
});

function listModules(to) {
    bot.say(to, "Supported commands: " + commands);
}


function reloadModules(to) {
    modules = {};
    commands = "";
    console.log("Modules loaded:");
    fs.readdirSync("./botmodules").forEach(function (filename) {
        if (filename != 'index.js' && path.extname(filename) == ".js") {
            modules[path.basename(filename, ".js")] = require("./botmodules/" + filename);
            commands += "!" + path.basename(filename, ".js") + ", ";
            console.log(filename + " : " + path.basename(filename, ".js"));
        }
    });

	//init if module has init() function
    for(mod in modules) {
    	if (typeof modules[mod].init === "function") {
    		console.log("init(): "+mod);
    		modules[mod].init(bot);
    	}
    };

    commands = commands.substr(0,commands.length-2);
    if (to) bot.say(to, "Modules reloaded!");
}

//do some error handling magic here!
//and this is bad place to be
process.on('uncaughtException', function (err) {
    console.log(err);
});