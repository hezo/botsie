//just an example on how to make modules

exports.modexec = function(to, bot, modargs){
	try {
		 bot.say(to, "Error Error: " + modargs );
	}  catch(err) {
		//yeap...
		console.log(err);
	}
   
};