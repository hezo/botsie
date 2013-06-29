var request = require("request");
var xml = require("node-xml-lite");
var util = require("util");
var nconf = require('nconf');
nconf.argv().env().file({ file: './config/modules.json' });

var bot = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};



//Module for finnish weather
var apikey = nconf.get('fmiApikey');
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
				// C
				var tempArray = data.childs[0].childs[0].childs[6].childs[0].childs;
				var lastTemp = tempArray[tempArray.length-1].childs[0].childs[1].childs[0];

				// m/s
				var windArray = data.childs[1].childs[0].childs[6].childs[0].childs;
				var lastWind = windArray[windArray.length-1].childs[0].childs[1].childs[0];

				// m/s
				var windGustArray = data.childs[2].childs[0].childs[6].childs[0].childs;
				var lastGust = windGustArray[windGustArray.length-1].childs[0].childs[1].childs[0];

				//in degrees
				var windDirectionArray = data.childs[3].childs[0].childs[6].childs[0].childs;
				var lastDirection = windDirectionArray[windDirectionArray.length-1].childs[0].childs[1].childs[0];

				//in %
				var humidityArray = data.childs[3].childs[0].childs[6].childs[0].childs;
				var lastHumidity = humidityArray[humidityArray.length-1].childs[0].childs[1].childs[0];				

				//in C , kastepiste
				var dewPointArray = data.childs[4].childs[0].childs[6].childs[0].childs;
				var lastDewPoint = dewPointArray[windArray.length-1].childs[0].childs[1].childs[0];					

				// mm
				var rainInAreaArray = data.childs[6].childs[0].childs[6].childs[0].childs;
				var lastRainInArea = rainInAreaArray[rainInAreaArray.length-1].childs[0].childs[1].childs[0];

				// mm/h
				var rainArray = data.childs[7].childs[0].childs[6].childs[0].childs;
				var lastRain = rainArray[rainArray.length-1].childs[0].childs[1].childs[0];

				//snow cover cm
				var snowArray = data.childs[8].childs[0].childs[6].childs[0].childs;
				var snow = snowArray[snowArray.length-1].childs[0].childs[1].childs[0];		
	
				//air pressure hPa
				var airPressureArray = data.childs[9].childs[0].childs[6].childs[0].childs;
				var lastAirPressure = airPressureArray[airPressureArray.length-1].childs[0].childs[1].childs[0];

				//Horizontal visibility m
				var visibilityArray = data.childs[10].childs[0].childs[6].childs[0].childs;
				var lastVisibility = visibilityArray[visibilityArray.length-1].childs[0].childs[1].childs[0];

				
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
				
				if(lastVisibility !== 'NaN') {
					message += ", Visibility: "+lastVisibility+"m";
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