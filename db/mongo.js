var mongoose = require('mongoose');

var urlSchema = mongoose.Schema({
    from: String,
    to: String,
    url: String,
    date: String,
    bot: String
});
var urlModel = mongoose.model('urlModel', urlSchema);

var loggingSchema = mongoose.Schema({
    from: String,
    to: String,
    message: String,
    date: String,
    bot: String
});
var loggingModel = mongoose.model('loggingModel', loggingSchema);


exports.urlModel = urlModel;
exports.loggingModel = loggingModel;