console.log("Piraatti :: Start");
var irc = require("irc");
var request = require('request');
/*
 * Only some of these config are used...
 */
var config = {
	channels : ["#meri.rosvot.org", "#finnexus"],
	server : "irc.quakenet.org",
	botName : "Merkkari",
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
		bot.say(channel, who + ": my master!");
	}
	if (who == "Quh") {
		bot.say(channel, who + " ooh its me clown!");
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
			default:
				console.log(from + ' => ' + to + ': ' + message);
				break;
		}
	}

});

var getDotaStats = function(player) {
	request('http://www.google.com', function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log(body); // Print the google web page.
		}
	});
}

var getWotStats = function(playerName, to) {
	try {
		request('http://worldoftanks.eu/community/accounts/api/1.1/?source_token=WG-WoT_Assistant-1.2.2&search='+playerName+'&offset=0&limit=1', function(error, response, body) {
			if (!error && response.statusCode == 200) {
				var player = JSON.parse(body);
				request('http://worldoftanks.eu/community/accounts/'+player.data.items[0].id+'/api/1.3/?source_token=WG-WoT_Assistant-1.2.2', function(error, response, body) {
					if (!error && response.statusCode == 200) {
						var stats = JSON.parse(body);
						var winsPer = (stats.data.summary.wins / stats.data.summary.battles_count) * 100;
						winsPer = winsPer.toFixed(2);
						if(stats.data.clan.clan != null) {
							var clan = " Clan: "+stats.data.clan.clan.name +" ("+stats.data.clan.clan.abbreviation+"); ";
						} else {
							var clan = " ";
						}
						
						var killRatio = stats.data.ratings.frags.value / (stats.data.summary.battles_count - stats.data.summary.survived_battles);
						killRatio = killRatio.toFixed(2);
						var avgxp = stats.data.ratings.battle_avg_xp.value;
						var avgPlace = stats.data.ratings.battle_avg_xp.place;
						var wotrating = stats.data.ratings.integrated_rating.value;
						var wotratingPlace = stats.data.ratings.integrated_rating.place;
						
						console.log(player.data.items[0].name+":"+clan+"Win: "+winsPer+"%; Kill ratio: "+killRatio+"; avg xp:"+avgxp+"("+avgPlace+"); Rating: "+wotrating+"("+wotratingPlace+")");
						bot.say(to, player.data.items[0].name+":"+clan+"Win: "+winsPer+"%; Kill ratio: "+killRatio+"; avg xp:"+avgxp+"("+avgPlace+"); Rating: "+wotrating+"("+wotratingPlace+")");
					} else {
						bot.say(to, "Error Error ;)");
					}
				});
			} else {
				bot.say(to, "Error Error ;)");
			}
		});
	} catch(err){
		console.log(err);
		bot.say(to, "Error Error ;)");
	}
}
