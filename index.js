const Discord = require('discord.js');
const client = new Discord.Client();

var config = require("./config.json");

client.login(config.token);

client.on('ready', () => {
});

client.on('message', async message => {

	let channel = client.channels.get(config.radioChannelId);

	if(message.author.bot) return;
	if(message.content.indexOf(config.prefix) !== 0) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if(command === "top") {

		if(config.radioChannelId) {

			const connection = await channel.join();

		const dispatcher = connection.playStream(config.top, {});

		} else {

			if (message.member.voiceChannel) {

				const connection = await message.member.voiceChannel.join();

				const dispatcher = connection.playStream(config.top, {});
				
			
			} else {

				/* Error if no voice channel joined) */
				message.reply("you're not in vc..");
				
			}

		}
	}
  
  if(command === "play") {

		if(config.radioChannelId) {

			const connection = await channel.join();

			const dispatcher = connection.playStream(config.radioStream, {});
			/* Starting stream message */
			message.reply("I start broadcasting the radio **" + config.radioName + "** in **" + channel.name + "**.");

		} else {

			if (message.member.voiceChannel) {

				const connection = await message.member.voiceChannel.join();

				const dispatcher = connection.playStream(config.radioStream, {});
				/* Starting stream message */
				message.reply("I start broadcasting the radio **" + config.radioName + "** in **" + message.member.voiceChannel.name + "**.");
					
			} else {

				/* Error if no voice channel joined) */
				message.reply("you're not in a vc..");
				
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

  }

	/*Development function
	if (command === 'sd') {
		process.exit(0);
	}*/
});