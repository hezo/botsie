var request = require("request");

/*
 0 Show ID@5410
 1 Show Name@Supernatural
 2 Show URL@http://www.tvrage.com/Supernatural
 3 Premiered@2005
 4 Started@Sep/13/2005
 5 Ended@
 6 Latest Episode@08x15^Man's Best Friend with Benefits^Feb/20/2013
 7 Next Episode@08x16^Remember the Titans^Feb/27/2013
 8 RFC3339@2013-02-27T21:00:00-5:00
 9 GMT+0 NODST@1362013200
10 Country@USA
11 Status@Returning Series
12 Classification@Scripted
13 Genres@Action | Adventure | Drama | Horror/Supernatural | Sci-Fi
14 Network@The CW
15 Airtime@Wednesday at 09:00 pm
16 Runtime@60
 */

var botten = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};

var error = function(exception) {
	console.dir(exception);
};

exports.modexec = function(to, bot, show) {
	console.log(":: TV MODULE ::");
	request('http://services.tvrage.com/tools/quickinfo.php?show='+show, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var info = body.split("\n");
			var ended = info[5].split("@")[1];
			var showName = info[1].split("@")[1];
			if(ended != "") {
				var endDate = new Date(Date.parse(ended));
				var endDateToHuman = endDate.getDate()+"."+(endDate.getMonth()+1)+"."+endDate.getFullYear();
				var message = showName+', Ended: '+endDateToHuman;
			} else {
				var episodeInfo = info[7].split("@")[1].split("^");
				var status = info[8].split("@")[1];
				var episodeName = episodeInfo[1];
				var episodeNumber = episodeInfo[0];
				var air = Date.parse(episodeInfo[2]);
				var airDate = new Date(air);
				var airDateToHuman = airDate.getDate()+"."+(airDate.getMonth()+1)+"."+airDate.getFullYear();
				var currentTime = new Date();
				var etaDays = daysBetween(currentTime, airDate);
				//for those series that dosent have episode info
				if(episodeName === undefined) {
					var message = showName+', status: '+status+', no next episode info!';
				} else {
					var message = showName+', next episode: '+episodeName+' ('+episodeNumber+') @ '+airDateToHuman+' ('+etaDays+' days)';
				}
				
			}
			
			console.log(message);
			bot.say(to, message);
		} else {
			console.log(error);
			bot.say(to, "Oh Desperate Housewives is on, again...");
		}
	});
};

var parseDate = function (date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
}

var daysBetween = function(startDate, endDate) {
    var millisecondsPerDay = 24 * 60 * 60 * 1000;
    var days = (parseDate(endDate) - parseDate(startDate)) / millisecondsPerDay;
    days = Math.round(days) + 1;
    return days; 
}