var mongoose = require('mongoose');
var nconf = require('nconf');

nconf.argv().env().file({ file: '../../config/mongo.json' });
var uri = nconf.get('uri');
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

exports.init =  function(app,response,bot) {
	app.get('/url/all', function(req, res) {
		urlModel.find().exec(function(err, urls) {
			response.json(res, urls);
		});
	});
}