var nconf = require('nconf');
var express = require('express');
nconf.argv().env().file({ file: './config/rest.json' });
var user = nconf.get('adminUser');
var pass = nconf.get('adminPass');

exports.init =  function(app, response, bot) {
	var auth = express.basicAuth(user,pass);
	app.get('/bot/', auth, function(req, res){
		var body = { message: "bot root"};
		response.json(res, body);
	});
	
	app.get('/bot/say/:net/:to/:message', auth, function(req, res){
		var body = {
			net: req.params.net,
			to: req.params.to,
			message: req.params.message
		};
		bot[req.params.net].say('#'+req.params.to, req.params.message);
		response.json(res, body);
	});

	app.get('/bot/private/:net/:to/:message', auth, function(req, res){
		var body = {
			net: req.params.net,
			to: req.params.to,
			message: req.params.message
		};
		bot[req.params.net].say(req.params.to, req.params.message);
		response.json(res, body);
	});

	app.get('/bot/join/:net/:channel/:password', auth, function(req, res){
		var body = {
			net: req.params.net,
			channel: req.params.channel,
			password: req.params.password
		};
		bot[req.params.net].join('#'+req.params.channel+' '+req.params.password);
		response.json(res, body);
	});

	app.get('/bot/part/:net/:channel', auth, function(req, res){
		var body = {
			net: req.params.net,
			channel: req.params.channel
		};
		bot[req.params.net].part('#'+req.params.channel);
		response.json(res, body);
	});

	app.get('/bot/send/:net/:channel/:operation/:nick', auth, function(req, res){
		var body = {
			net: req.params.net,
			channel: req.params.channel,
			operation: req.params.operation,
			nick: req.params.nick
		};
		bot[req.params.net].send('MODE', '#'+req.params.channel, req.params.operation, req.params.nick);
		response.json(res, body);
	});
}