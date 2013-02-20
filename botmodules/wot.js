var request = require("request");

exports.wot = function(playerName, to, bot) {
    try {
        request('http://worldoftanks.eu/community/accounts/api/1.1/?source_token=WG-WoT_Assistant-1.2.2&search='+playerName+'&offset=0&limit=1', function(error, response, body) {
            if (!error && response.statusCode == 200) {
                var player = JSON.parse(body);
                request('http://worldoftanks.eu/community/accounts/'+player.data.items[0].id+'/api/1.3/?source_token=WG-WoT_Assistant-1.2.2', function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        var stats = JSON.parse(body);
                        var winsPer = (stats.data.summary.wins / stats.data.summary.battles_count) * 100;
                        winsPer = winsPer.toFixed(2);
                        if(stats.data.clan.clan != null) {
                            var clan = " Clan: "+stats.data.clan.clan.name +" ("+stats.data.clan.clan.abbreviation+"); ";
                        } else {
                            var clan = " ";
                        }

                        var killRatio = stats.data.ratings.frags.value / (stats.data.summary.battles_count - stats.data.summary.survived_battles);
                        killRatio = killRatio.toFixed(2);
                        var avgxp = stats.data.ratings.battle_avg_xp.value;
                        var avgPlace = stats.data.ratings.battle_avg_xp.place;
                        var wotrating = stats.data.ratings.integrated_rating.value;
                        var wotratingPlace = stats.data.ratings.integrated_rating.place;

                        console.log(player.data.items[0].name+":"+clan+"Win: "+winsPer+"%; Kill ratio: "+killRatio+"; avg xp:"+avgxp+"("+avgPlace+"); Rating: "+wotrating+"("+wotratingPlace+")");
                        bot.say(to, player.data.items[0].name+":"+clan+"Win: "+winsPer+"%; Kill ratio: "+killRatio+"; avg xp:"+avgxp+"("+avgPlace+"); Rating: "+wotrating+"("+wotratingPlace+")");
                    } else {
                        bot.say(to, "Error Error ;)");
                    }
                });
            } else {
                bot.say(to, "Error Error ;)");
            }
        });
    } catch(err){
        console.log(err);
        bot.say(to, "Error Error ;)");
    }
};