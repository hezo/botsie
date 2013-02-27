var request = require("request");

exports.modexec =  function(to, bot, modargs) {
    splitparams = modargs.split(" ");

    if (splitparams.length > 2) {
        bot.say(to, "Error Error. Nyt jumalauta");
    }
	else if (splitparams.length < 2) {
		playerStats(to, bot, splitparams)
	}
	else { 
		requestType(to, bot, splitparams)
	}
}
	
	
function getUrl(type) {
	
	var base = "http://api.steampowered.com/IDOTA2Match_570/";
	
}	
	
function requestType(to, bot, params) {
	
	
	
}
