var request = require("request");

exports.getDotaStats =  function(player, bot) {
    request('http://www.google.com', function(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body); // Print the google web page.
        }
    });
}