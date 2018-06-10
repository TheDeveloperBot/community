
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("list of Commands")
  .setDescription("__Community Of People™ at your service!__")
  
  .setColor("#4290AE")
  .addField("?Do you, ?play","Some Nice mini game", false)
  .addField("?ban, ?kick", "Bans the mentioned user (in beta)/kick the user that have been given .", false)
  .addField("?joke","Get some random jokes just like memes",false)
  .addField("?avatar","Get your own/user avater",false)
  .addField("?checkinvites","Returns a list of members with an invite as their game.", false)
  .addField("?number","pick a random number",false)  
  .addField("?state","Info about uptime, Servers, users and more.", false)
  .addField("?vote","Make a nice vote for you where all your members can vote.",false)
  .addField("?poll","Make a nice poll for ya",false)
  .addField("?ping","Get your internet speed.", false)
  .addField("?rthelp","Get info about the report command.", false)
  .addField("?warnhelp", "Help you with the warn commands.",false)
  .addField("?warn, ?warnlevel","Drop a warn on someone/displays some one warnlevel.",false) 
  .addField("?serverinfo","Info about the server.", false)
  .addField("?khelp","Info/help about Kick commands.", false)
  .addField("?report","report somebody.", false)
  .addField("?mute","mute someone.", false)
  .addField("?clear","Clears all reactions from given number of message.",false)
  .addField("?info","More About The Bot and us.", false)
  .addField("?meme", "meme generator.", false)
  .addField("?level", "What level are you on.", false)
  .addField("?say", "Copies what u said.", false)
  .addField("?sayd","Copies what u said (BOT DELETES THE COMMAND AFTER WORDS) [Administrator required]",false)
  .addField("bad words filter on ❌","This will remove all bad word (more than 1 warn Get banned)",false)
  .addField("Kim The bot","Chat with our bot (in work)",false)
  message.author.send({embed});
  message.reply ("l just send you all the commands in your DMs 📥")
}

module.exports.help = {
  name: "help"
}