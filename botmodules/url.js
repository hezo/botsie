var request = require("request");
var cheerio = require('cheerio');
var express = require('express');
var mongoose = require('mongoose');
var nconf = require('nconf');

nconf.argv().env().file({ file: './config/mongo.json' });
mongoose.connect(nconf.get('uri'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var urlSchema = mongoose.Schema({
    from: String,
    to: String,
    url: String
});

var urlModel = mongoose.model('urlModel', urlSchema);

var functions = {};
//for testing
var botten = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};
exports.modexec = function (to, bot, modargs) {
    console.log("no rest for the wicked");
}
exports.init =  function(bot) {
	initContains();
	bot.addListener('message', function (from, to, message) {
		var hit = false;
		if(message.match('https?://') != null) {
			var url = getUrl(message);
			for(func in functions) {
	    		if (url.contains(func)) {
	    			hit = true;
	    			functions[func](url, bot, to);
	    			var mUrl = new urlModel({ from: from, to:to, url:url});
	    			mUrl.save(function (err, mUrl) {
						if (err) {
							console.log(err);
						}
					});
	    			break;
	    		}
	    	};
	    	//no specific function found
	    	if(!hit) {
				general(url, bot, to);
	    	}
		}
	});
}
//for not specific url
var general = function(url, bot, to) {
	console.log("[general]: "+url);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			$=cheerio.load(body, {xmlMode: true});
			if($('title').length != 0) {
				var message = "[url] "+cleanup($('title').text());
				bot.say(to, message);
			}
		} else {
			//else do nothing...
		}
	});
}
//what to do when theres youtube url
functions["youtube"] = function(url, bot, to) {
	console.log("[youtube]: "+url);
	//http://www.youtube.com/watch?v=2pWZRJd4z8o
	var matchArray = url.match("https?://youtu.be/(.*)");
	if(matchArray == null) {
		matchArray = url.match("https?://.*?youtube.com/watch\?.*?v=([^&]+)");
	}
	url = "http://gdata.youtube.com/feeds/api/videos/"+matchArray[1]+"?alt=json"
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			var response = JSON.parse(body);
			var message = "[Youtube] ";
			message += response.entry["media$group"]["media$title"]["$t"];
			message += " by: "+response.entry.author[0].name["$t"];
			var time = response.entry["media$group"]["yt$duration"].seconds;
			var minutes = Math.floor(time / 60);
			var seconds = time - minutes * 60;
			message += " ["+minutes+"m"+seconds+"s]";
			bot.say(to, message);
		} else {
			//else do nothing...
		}
	});
}
functions["youtu.be"] = function(url, bot, to) { 
	functions["youtube"](url, bot, to);
}

//and for spotify
functions["spotify"] = function(url, bot, to) {
	var api = false;
	console.log("[spotify]: "+url);
	var matchArray = url.match(".*(https?:\/\/open.spotify.com\/|spotify:)(album|artist|track)([:\/])([a-zA-Z0-9]+)\/?.*");
	if(matchArray != null) {
		api = true;
		url = "http://ws.spotify.com/lookup/1/.json?uri=spotify:"+matchArray[2]+":"+matchArray[4];
	}
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			if(api) {
				var response = JSON.parse(body);
				var message = "[Spotify] ";
				switch(matchArray[2]) {
					case "track":
						for(index in response.track.artists) {
							message += response.track.artists[index].name+", ";
						}
						message = message.replace(new RegExp(', '+'$'), '');
						message += " - ";
						message += response.track.name;
					break;
					case "album":
						message += response.album.artist+" - ";
						message += response.album.name;
						message += " ("+response.album.released+")";
					break;
					case "artist":
						message += response.artist.name;
					break;
				}
			} else {
				//backup
				$=cheerio.load(body, {xmlMode: true});
				var message = "[Spotify] "+cleanup($('h1').text());
			}
			bot.say(to, message);
		} else {
		}
	});
}

var initContains = function() {
	if (!String.prototype.contains) {
	    String.prototype.contains = function (arg) {
	        return !!~this.indexOf(arg);
	    };
	}
}

var getUrl = function(message) {
	var splitted = message.split(" ");
	for(index in splitted) {
		if(splitted[index].contains('http://') || splitted[index].contains('https://'))
			return splitted[index];
	}
}
//just trim for now
var cleanup = function(text) {
	return text.replace(/(\r\n|\n|\r)/gm,"").trim();
}

var testBed = function(message) {
	initContains();
	var hit = false;
	var to = "testbed";
	var from = "testbed";
	if(message.match('https?://') != null) {
		var url = getUrl(message);
		for(func in functions) {
    		if (url.contains(func)) {
    			hit = true;
    			functions[func](url, botten, to);
    			var mUrl = new urlModel({ from: from, to:to, url:url});
				mUrl.save(function (err, mUrl) {
					if (err) {
						console.log(err);
					}
				});
    			break;
    		}
    	};
    	//no specific function found
    	if(!hit) {
			general(url, botten, to);
    	}
	}
}