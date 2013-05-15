var mongoose = require('mongoose');
var nconf = require('nconf');
var mongo = require('../../db/mongo.js');

nconf.argv().env().file({ file: './config/mongo.json' });
var uri = nconf.get('uri');

var urlModel = mongo.urlModel;

exports.init =  function(app,response,bot) {
	app.get('/url/all', function(req, res) {
		urlModel.find().exec(function(err, urls) {
			response.json(res, urls);
		});
	});
}