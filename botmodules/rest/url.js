var mongoose = require('mongoose');
var nconf = require('nconf');

nconf.argv().env().file({ file: '../../config/mongo.json' });
mongoose.connect(nconf.get('uri'));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var urlSchema = mongoose.Schema({
    from: String,
    to: String,
    url: String
});

var urlModel = mongoose.model('urlModel', urlSchema);


exports.init =  function(app,response,bot) {
	app.get('/url/all', function(req, res) {
		urlModel.find().exec(function(err, urls) {
			response.json(res, urls);
		});
	});
}