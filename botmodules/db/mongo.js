var mongoose = require('mongoose');

var urlSchema = mongoose.Schema({
    from: String,
    to: String,
    url: String
});
var urlModel = mongoose.model('urlModel', urlSchema);

exports.urlModel = urlModel;