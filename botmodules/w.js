var request = require("request");
var xml = require("node-xml-lite");
var util = require("util");

var bot = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};

//Module for finnish weather
//this is public api key for Finnish Meteorological Institute
var apikey = "b37f3e99-cdb8-4858-b850-bfffea6542f9";
//www.fmi.fi
var store = "fmi::observations::weather::timevaluepair";
var weatherUrl = 'http://data.fmi.fi/wfs?request=GetFeature&timestep=0&storedquery_id='+store+'&fmi-apikey='+apikey;
//b37f3e99-cdb8-4858-b850-bfffea6542f9&place=Turku
exports.modexec = function(to, bot, place) {
	console.log("Weather for %s", place);
	request(weatherUrl+"&place="+place, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var data = xml.parseString(body);
			var message = place+": ";
			try {
				var tempArray = data.childs[0].childs[0].childs[6].childs[0].childs;
				var lastTemp = tempArray[tempArray.length-1].childs[0].childs[1].childs[0];
				
				var windArray = data.childs[1].childs[0].childs[6].childs[0].childs;
				var lastWind = windArray[windArray.length-1].childs[0].childs[1].childs[0];
				
				var airPressureArray = data.childs[9].childs[0].childs[6].childs[0].childs;
				var lastAirPressure = airPressureArray[airPressureArray.length-1].childs[0].childs[1].childs[0];
				
				var rainArray = data.childs[7].childs[0].childs[6].childs[0].childs;
				var lastRain = rainArray[rainArray.length-1].childs[0].childs[1].childs[0];
				
				var snowArray = data.childs[8].childs[0].childs[6].childs[0].childs;
				var snow = snowArray[snowArray.length-1].childs[0].childs[1].childs[0];
				
				if(lastTemp !== 'NaN') {
					message += lastTemp +"c";
				}
				
				if(lastWind !== 'NaN') {
					message += ", Wind: "+lastWind+"m/s";
				}
				
				if(lastAirPressure !== 'NaN') {
					message += ", Pressure: "+lastAirPressure+"hPa";
				}
				
				if(lastRain !== 'NaN' && lastRain !== "0.0") {
					message += ", Rain: "+lastRain+"mm/h";
				}
				
				if(snow !== 'NaN' && snow !== "0.0") {
					message += ", Snow level: "+snow+"cm";
				}
			} catch(err) {
				console.error(err);
				message += "No Data";
			}
			bot.say(to, message);
			console.log("Weather: %s", message);
		} else {
			console.error(error);
			bot.say(to, place+" No Data");
		}
	});
};