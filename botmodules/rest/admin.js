var nconf = require('nconf');
var express = require('express');
nconf.argv().env().file({ file: '../../config/rest.json' });
exports.init =  function(app,response, bot) {
	var auth = express.basicAuth(nconf.get('adminUser'), nconf.get('AdminPass'));
	
	app.get('/bot/', auth, function(req, res){
		var body = { message: "bot root"};
		response.json(res, body);
	});
	
	app.get('/bot/say/:to/:message', auth, function(req, res){
		var body = {
			to: req.params.to,
			message: req.params.message
		};
		bot.say('#'+req.params.to, req.params.message);
		response.json(res, body);
	});

	app.get('/bot/private/:to/:message', auth, function(req, res){
		var body = {
			to: req.params.to,
			message: req.params.message
		};
		bot.say(req.params.to, req.params.message);
		response.json(res, body);
	});

	app.get('/bot/join/:channel/:password', auth, function(req, res){
		var body = {
			channel: req.params.channel,
			password: req.params.password
		};
		bot.join('#'+req.params.channel+' '+req.params.password);
		response.json(res, body);
	});

	app.get('/bot/part/:channel', auth, function(req, res){
		var body = {
			channel: req.params.channel
		};
		bot.part('#'+req.params.channel);
		response.json(res, body);
	});

	app.get('/bot/send/:channel/:operation/:nick', auth, function(req, res){
		var body = {
			channel: req.params.channel,
			operation: req.params.operation,
			nick: req.params.nick
		};
		bot.send('MODE', '#'+req.params.channel, req.params.operation, req.params.nick);
		response.json(res, body);
	});
}