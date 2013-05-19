var express = require('express');
var app = express();
var fs = require("fs")
var path = require('path');
var nconf = require('nconf');
var controllers = {};
nconf.argv().env().file({ file: './config/rest.json' });

var controllerFolderFull = nconf.get('modFolder')+''+nconf.get('controllerFolder');
var controllerFolder = nconf.get('controllerFolder');



//what port to bind
var port = nconf.get('port');
var bot = {
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

exports.init =  function(bot) {
	console.log("HTTP init()");
	app.get('/', function(req, res) {
		console.log("root");
	});
	
	app.use('/static', express.static(__dirname + '/static'));
	
    fs.readdirSync(controllerFolderFull).forEach(function(filename) {
        if (path.extname(filename) === ".js") {
            controllers[path.basename(filename, ".js")] = require("./"+controllerFolder+"/"+filename);
        }
    });

	for(controller in controllers) {
		if (typeof controllers[controller].init === "function") {
			controllers[controller].init(app, response, bot);
		}
	};
	app.listen(port);
	console.log('HTTP listening on: '+port);
}