var request = require("request");
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var showID, showName, seasons, active, etaDays;

var error = function(exception) {
	console.dir(exception);
};

exports.modexec = function(to, bot, show) {
	request('http://services.tvrage.com/feeds/search.pp?show='+show, function(error, response, body) {
		try {
			parser.parseString(body, function(error, result) {
				showID = result.Results.show[0].showid;
				showName = result.Results.show[0].name;
				seasons = result.Results.show[0].seasons;
				active = result.Results.show[0].ended;
				request('http://services.tvrage.com/feeds/full_show_info.php?sid='+showID, function(error, response, body) {
					try {
						parser.parseString(body, function(error, result) {
							var currentTime = new Date();
							var dayNum = currentTime.getDay();
							//this info is not to be trusted, should loop episode list and find closest one
							etaDays = dayNum - dayToNumber(result.Show.airday[0]);
							if(etaDays == 0) {
								etaDays = "next episode TODAY";
							} else {
								if(etaDays == 1) {
									etaDays = "next episode in: "+etaDays+" day";
								} else {
									etaDays = "next episode in: "+etaDays+" days";
								}
							}
							console.log("Show: "+showName+", "+etaDays);
							bot.say(to, "Show: "+showName+", "+etaDays);
						});
					}  catch(err) {
						console.log(err);
						bot.say(to, "Error while fetching show info");
					}
				});
    		});
		}  catch(err) {
			console.log(err);
			bot.say(to, "Error while searchig show");
		}
	});
};

var dayToNumber = function(day) {
	var dayArray = new Array(7);
	dayArray[0] = "Sunday";
	dayArray[1] = "Monday";
	dayArray[2] = "Tuesday";
	dayArray[3] = "Wednesday";
	dayArray[4] = "Thursday";
	dayArray[5] = "Friday";
	dayArray[6] = "Saturday";
	return dayArray.indexOf(day);
}

var numberToDay = function(number) {
	var dayArray = new Array(7);
	dayArray[0] = "Sunday";
	dayArray[1] = "Monday";
	dayArray[2] = "Tuesday";
	dayArray[3] = "Wednesday";
	dayArray[4] = "Thursday";
	dayArray[5] = "Friday";
	dayArray[6] = "Saturday";
	return dayArray[number];
}