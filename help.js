
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("list of Commands")
  .setDescription("__Community Of People™ at your service!__")
  
  .setColor("#0000FF")
  .addField("?ban", "Bans the mentioned user ``(IN WORK)``.", false)
  .addField("?checkinvites","Returns a list of members with an invite as their game.", false)
  .addField("?info","Info about uptime, Servers, users and more.", false)
  .addField("?vote","Make a nice vote for you",false)
  .addField("?ping","Get your internet speed.", false)
  .addField("?rthelp","Get info about the report command.", false)
  .addField("?warnhelp", "Help you with the warn commands.",false)
  .addField("?warn","Drop a warn on someone.",false) 
  .addField("?serverinfo","Info about the server.", false)
  .addField("?khelp","Info/help about Kick commands.", false)
  .addField("?report","report somebody", false)
  .addField("?tempmute","Tempmute someone.", false)
  .addField("?clear","Clears all reactions from given number of message.",false)
  .addField("?botinfo","More About The Bot ``only``.", false)
  .addField("?kick", "Kicks the user that is being naughty.", false)
  .addField("?help", "Displays all the available commands.", false)
  .addField("?level", "What level are you on.", false)
  .addField("?about", "(AKA. theteam) The Community.", false)
  .addField("?say", "Copies what u said.", false)
  .addField("?sayd", "Copies what u said (BOT DELETES THE COMMAND AFTER WORDS) [Administrator required]")
  .addField("Discord Server", "https://discord.gg/DrpkVTS For support and feedback.", false)
  message.channel.send({embed});
}

module.exports.help = {
  name: "help"
}