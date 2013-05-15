var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('quote.db');


exports.modexec = function (to, bot, params) {
    splitparams = params.split(" ");
    username = splitparams[1];

    switch (splitparams[0]) {
        case "add":
            if (splitparams.length < 3) return;
            else {
                addquote(username, params.substring(username.length + 5), to, bot)
            }
            break;
        default:
        {
            username = splitparams[0];
            if (isNumber(splitparams[1])) getquote(username, parseInt(splitparams[1]), to, bot);
            else getquote(username, null, to, bot);
        }
    }

};

function addquote(username, quote, to, bot) {
    db.serialize(function () {
        var stmt = db.prepare("INSERT INTO quotes VALUES (?, ?)");
        stmt.run([username, quote]);
        stmt.finalize(function () {
            console.log("Quote added.");
            if (bot) bot.say(to, "Quote added.")
        });
    });

}

function getquote(username, quotenumber, to, bot) {
    var rows = [];
    db.serialize(function () {
        var stmt = db.prepare("SELECT quote FROM quotes WHERE user = ?");
        stmt.all([username], function (err, row) {
            if (err) throw err;
            if (row) rows = row;
        });

        stmt.finalize(function () {
            if (rows.length === 0) {
                console.log("Botsie:  " + username + ": No quotes");
                if (bot) bot.say(to, "No quotes for " + username);
            }
            else {
                if (!quotenumber) {
                    quotenumber = Math.floor(Math.random() * rows.length);
                }
                else if (quotenumber < 0) {
                    quotenumber = (rows.length + quotenumber) >= 0 ? (rows.length + quotenumber) : Infinity;
                }

                if (rows.length > quotenumber) {

                    console.log("Botsie:  " + username + " [" + (quotenumber+1) + "/" + rows.length + "]: " + rows[quotenumber].quote)
                    if (bot) bot.say(to, username + " [" + (quotenumber+1) + "/" + rows.length + "]: " + rows[quotenumber].quote);
                }
                else {
                    if (bot) bot.say(to, "No such quote.");
                    console.log("Botsie:  " + username + ": No such quote.")
                }
            }
        });
    });
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}