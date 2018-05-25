const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hello') {
    	message.reply('Hey There');
  	});
   
 client.on('message', message => {
    if (message.content === 'how are you?) {
    	message.reply('lm going good what about you?');
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
