var request = require("request");
var cheerio = require('cheerio');

var functions = {};
//for testing
var botten = {
	say: function(message) {
		console.log(message);
	}
};
exports.init =  function(bot) {
	initContains();
	bot.addListener('message', function (from, to, message) {
		var hit = false;
		if(message.contains('http://')) {
			var url = getUrl(message);
			for(func in functions) {
	    		if (url.contains(func)) {
	    			hit = true;
	    			functions[func](url, bot, to);
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
			$=cheerio.load(body);
			var message = "[url] "+cleanup($('title').text())
			bot.say(to, message);
		} else {
		}
	});
}
//what to do when theres youtube url
functions["youtube"] = function(url, bot, to) {
	console.log("[youtube]: "+url);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			$=cheerio.load(body);
			var message = "[youtube] "+cleanup($('#eow-title').text())
			bot.say(to, message);
		} else {
		}
	});
}
//and for spotify
functions["spotify"] = function(url, bot, to) {
	console.log("[spotify]: "+url);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			$=cheerio.load(body);
			var message = "[spotify] "+cleanup($('h1').text())
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
		if(splitted[index].contains('http://'))
			return splitted[index];
	}
}
//just trim for now
var cleanup = function(text) {
	return text.trim();
}

var testBed = function(message) {
	var hit = false;
	var to = "";
	if(message.contains('http://')) {
		var url = getUrl(message);
		for(func in functions) {
    		if (url.contains(func)) {
    			hit = true;
    			functions[func](url, botten, to);
    			break;
    		}
    	};
    	//no specific function found
    	if(!hit) {
			general(url, botten, to);
    	}
	}
}