const Discord = require('discord.js');
const client = new Discord.Client();

var config = require("./config.json");

client.login(config.token);

client.on('ready', () => {
  	client.user.setActivity(config.prefix + " help", { type: 'LISTENING' });
});

client.on('message', async message => {

	let channel = client.channels.get(config.radioChannelId);

	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "play") {

		if(config.radioChannelId) {

			const connection = await channel.join();

			const dispatcher = connection.playStream(config.radioStream, {});
			

		} else {

			if (message.member.voiceChannel) {

				const connection = await message.member.voiceChannel.join();

				const dispatcher = connection.playStream(config.radioStream, {});
				
			} else {

				/* Error if no voice channel joined) */
				message.reply("you're not in vc..");
				
			}

		}
	}

	if(command === "stop") { 

		const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);

		/* Error (wrong textChannel message) */
		if (voiceConnection === null) return message.reply("I'm not broadcasting.");

		/* Stopping stream message */
		message.reply("I stop broadcasting the radio **" + config.radioName + "**.");

		voiceConnection.player.dispatcher.end();
		voiceConnection.disconnect();

		client.user.setActivity(config.prefix + " help", { type: 'LISTENING' });
	}

	if(command === "help") {
		/* Help message (listing commands) */
		message.reply("I'm broadcasting the radio " + config.radioName + ". The orders I understand are : \n"
		+ "*" + config.prefix + " play* : starts the broadcast ; \n"
		+ "*" + config.prefix + " stop* : stop the broadcast.n"
		+ "We're working to add more radio./__");
	}

	/*Development function
	if (command === 'sd') {
		process.exit(0);
	}*/
});
