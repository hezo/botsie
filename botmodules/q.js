var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('quote.db');


exports.modexec = function (to, bot, params) {
    splitparams = params.split(" ");
    username = splitparams[1];

    switch (splitparams[0]) {
        case "add":
            if (splitparams.length < 3) return;
            else {
                addquote(username, params.substring(username.length + 5))
            }
            break;
        default:
        {
            username = splitparams[0];
            if(isNumber(splitparams[1])) getquote(username, splitparams[1], to, bot);
            else getquote(username, null, to,bot);
        }
    }

};

function addquote(username, quote) {
    db.serialize(function () {
        var stmt = db.prepare("INSERT INTO quotes VALUES (?, ?)");
        stmt.run([username, quote]);
        stmt.finalize();
    });

}

function getquote(username, quotenumber, to, bot) {
    var rows = [];
    db.serialize(function () {
        var stmt = db.prepare("SELECT quote FROM quotes WHERE user = ?");
        stmt.all([username], function(err,row){
            if (err) throw err;
            if(row) rows = row;
        });

        stmt.finalize(function(){
            if(quotenumber)
            {
                if(rows.length > quotenumber)
                {
                    console.log("Botsie: "+rows[quotenumber].quote)
                    if(bot) bot.say(to, rows[quotenumber].quote);
                }
                else
                {
                    if(bot) bot.say(to, "No such quote, dipshit.");
                    console.log("Botsie: No such quote, dipshit.")
                }
            }
            else if(rows.length > 0 )
            {
                console.log("Botsie: "+rows[0].quote)
                if(bot) bot.say(to, rows[0].quote);
            }
            else
            {
                console.log("Botsie: No quotes");
                if(bot) bot.say(to, "No quotes.");
            }
        });
    });
}

function isNumber(n) { return !isNaN(parseFloat(n)) && isFinite(n);
}