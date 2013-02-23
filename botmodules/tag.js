var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('tag.db');


exports.modexec = function (to, bot, modargs) {
    splitparams = modargs.split(" ");

    if (splitparams.length > 2) {
        addTag(to, bot, splitparams[0], modargs.substring(splitparams[0].length+1))
    }

}

function addTag(to, bot, tagholder, tag) {
    db.serialize(function () {
        var stmt = db.prepare("INSERT INTO tags VALUES (?, ?)");
        stmt.run([tagholder, tag]);
        stmt.finalize(function () {
            console.log("Tag added.");
            if (bot) bot.say(to, "Tag added.")
        });
    });
}