var mongoose = require('mongoose');
var nconf = require('nconf');
require('date-utils');
var mongo = require('./../db/mongo.js');

nconf.argv().env().file({ file: './config/mongo.json' });
var uri = nconf.get('uri');
mongoose.connect(uri);

var quoteModel = mongo.quoteModel;
var quotesModel = mongo.quotesModel;
//for testing
var bot = {
	say: function(to, message) {
		console.log(to+": "+message);
	},
	botname: "testbed"
};

exports.modexec = function (to, bot, params) {
    splitparams = params.split(" ");
    username = splitparams[1];

    switch (splitparams[0]) {
        case "add":
            if (splitparams.length < 3) return;
            else {
                addquote(username, params.substring(username.length + 5), to, bot)
            }
            break;
        default:
        {
            username = splitparams[0];
            if (isNumber(splitparams[1])) getquote(username, parseInt(splitparams[1]), to, bot);
            else getquote(username, null, to, bot);
        }
    }

};

var addquote = function(username, text, to, bot) {
	quoteModel.findOne({'user': username}, function (err, quote) {
		if(err) {
			console.log(err);
			return
		}
		if(quote) {
			quote.quotes.push(new quotesModel({ quote: text}));
			quote.update({$set : {quotes: quote.quotes}}, function (err, quote) {
				if(err) {
					console.log(err);
					if (bot) bot.say(to, "Quote not added.");
					return;
				}
				console.log("Quote updated.");
				if (bot) bot.say(to, "Quote added.");
			});
		} else {
			//add new quote
			quotes = new quotesModel({ quote: text});
			quote = new quoteModel({ user: username, quotes:[quotes], date: Date.now(), bot: bot.botname});
			quote.save(function (err, quote) {
				if (err) {
					console.log(err);
				}
				console.log("Quote created.");
				if (bot) bot.say(to, "Quote added.");
			});
		}
	});
}

var getquote = function(username, quotenumber, to, bot) {
	quoteModel.findOne({'user': username}, function (err, quote) {
		if(!quote) {
			console.log(username + ": No quotes");
			if (bot) bot.say(to, "No quotes for " + username);
			return;
		}
		console.log("Botsie:  " + username + " [" + (quotenumber) + "/" + quote.quotes.length + "]: " + quote.quotes[quotenumber-1].quote)
		if (bot) bot.say(to, username + " [" + (quotenumber) + "/" + quote.quotes.length + "]: " + quote.quotes[quotenumber-1].quote);
	});
};

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}