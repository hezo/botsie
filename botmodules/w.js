var request = require("request");
var parseString = require('xml2js').parseString;

/*var bot = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};*/


//Module for finnish weater
//this is public api key for Finnish Meteorological Institute
var apikey = "b37f3e99-cdb8-4858-b850-bfffea6542f9";
//www.fmi.fi
var store = "fmi::observations::weather::timevaluepair";
var weatherUrl = 'http://data.fmi.fi/wfs?request=GetFeature&timestep=0&storedquery_id='+store+'&fmi-apikey='+apikey;
//b37f3e99-cdb8-4858-b850-bfffea6542f9&place=Turku
exports.modexec = function(to, bot, place) {
	weatherUrl += "&place="+place;
	var message = place+": ";
	request(weatherUrl, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			parseString(body, function (err, result) {
				var tempArray = result["wfs:FeatureCollection"]["wfs:member"][0]["omso:PointTimeSeriesObservation"][0]["om:result"][0]["wml2:MeasurementTimeseries"][0]["wml2:point"];
				var lastTemp = tempArray[tempArray.length-1]["wml2:MeasurementTVP"][0]["wml2:value"][0];
				
				var windArray = result["wfs:FeatureCollection"]["wfs:member"][1]["omso:PointTimeSeriesObservation"][0]["om:result"][0]["wml2:MeasurementTimeseries"][0]["wml2:point"];
				var lastWind = windArray[tempArray.length-1]["wml2:MeasurementTVP"][0]["wml2:value"][0];
				
				var airPressureArray = result["wfs:FeatureCollection"]["wfs:member"][9]["omso:PointTimeSeriesObservation"][0]["om:result"][0]["wml2:MeasurementTimeseries"][0]["wml2:point"];
				var lastAirPressure = airPressureArray[tempArray.length-1]["wml2:MeasurementTVP"][0]["wml2:value"][0];
				
				var rainArray = result["wfs:FeatureCollection"]["wfs:member"][7]["omso:PointTimeSeriesObservation"][0]["om:result"][0]["wml2:MeasurementTimeseries"][0]["wml2:point"];
				var lastRain = rainArray[tempArray.length-1]["wml2:MeasurementTVP"][0]["wml2:value"][0];
				
				var snowArray = result["wfs:FeatureCollection"]["wfs:member"][8]["omso:PointTimeSeriesObservation"][0]["om:result"][0]["wml2:MeasurementTimeseries"][0]["wml2:point"];
				var snow = snowArray[tempArray.length-1]["wml2:MeasurementTVP"][0]["wml2:value"][0];

				console.log(lastAirPressure);
				console.log(lastRain);
				console.log(snow);
				
				
				if(lastTemp !== 'NaN') {
					message += lastTemp +"c";
				}
				
				if(lastWind !== 'NaN') {
					message += ", Wind: "+lastWind+"m/s";
				}
				
				if(lastAirPressure !== 'NaN') {
					message += ", Air pressure: "+lastAirPressure+"hPa";
				}
				
				if(lastRain !== 'NaN' && lastRain !== "0.0") {
					message += ", Rain: "+lastRain+"mm/h";
				}
				
				if(snow !== 'NaN' && snow !== "0.0") {
					message += ", Snow level: "+snow+"cm";
				}
				
				bot.say(to, message);
			});
		}
	});
};

this.modexec("kanava", bot, "Turku");