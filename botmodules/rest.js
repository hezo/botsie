var express = require('express');
var app = express();
//what port to bind
var port = 8081;

var botten = {
	say: function(to, message) {
		console.log(to+": "+message);
	}
};

var response = {
	json: function(res, object) {
		res.setHeader('Content-Type', 'application/json');
		res.send(object);
	}
}

exports.modexec = function (to, bot, modargs) {
    console.log("no rest for the wicked");
}

exports.init =  function(bot) {
	console.log("REST init()");
	app.get('/', function(req, res) {
		console.log("root");
	});

	app.get('/bot/say/:to/:message', function(req, res){
		var body = {
			to: req.params.to,
			message: req.params.message,
		};
		bot.say(req.params.to, req.params.message);
		response.json(res, body);
	});

	app.get('/bot/join/:channel/:password', function(req, res){
		var body = {
			channel: req.params.channel,
			password: req.params.password
		};
		bot.join('#'+req.params.channel+' '+req.params.password');
		response.json(res, body);
	});

	app.get('/bot/part/:channel', function(req, res){
		var body = {
			channel: req.params.channel
		};
		bot.part('#'+req.params.channel);
		response.json(res, body);
	});

	app.get('/bot/send/:channel/:operation/:nick', function(req, res){
		var body = {
			channel: req.params.channel,
			operation: req.params.operation,
			nick: req.params.nick
		};
		bot.send('MODE', '#'+req.params.channel, req.params.operation, req.params.nick);
		response.json(res, body);
	});

	app.listen(port);
	console.log('REST service Listening on port '+port);
}

this.init(botten);