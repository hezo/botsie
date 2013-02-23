var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tag.db');

exports.modexec = function (to, bot, modargs) {
    if (modargs) getTags(modargs, to, bot);
    else console.log("Tags called without args");
}


function getTags(tagholder, to, bot) {
    db.serialize(function () {
        var stmt = db.prepare("SELECT tag FROM tags WHERE tagholder = ?");
        stmt.all([tagholder], function (err, row) {
            if (err) throw err;
            if (row) rows = row;
        });

        stmt.finalize(function () {
            if (rows.length === 0) {
                if (bot) bot.say(to, "No tags found :|");
                console.log("No tags for" + tagholder);
            }
            else {
                tagstr = "";
                rows.forEach(function (tag) {
                    tagstr += tag.tag + ", ";
                });

                //Limit the size a bit so we don't hit the IRC limit for no reason.
                if (tagstr.length > 450) tagstr = tagstr.substr(0, 450);

                //Take off that last dot.
                tagstr = tagstr.substr(0, tagstr.length - 2);

                console.log("Tags for " + tagholder + ": " + tagstr);
                if (bot) bot.say(to, "Tags for " + tagholder + ": " + tagstr);
            }
        });

    });
}