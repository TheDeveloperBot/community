const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("list of Commands (click here to join us)")
  .setDescription("__Community Of People™ at your service!__")
  
  .setColor("#4290AE")
  .setTimestamp()
  .setURL('https://discord.gg/DrpkVTS')
  .setAuthor(`${bot.user.tag}`, bot.user.displayAvatarURL)
  .setDescription(`Thanks you ${message.author} for using me`)
  .setThumbnail(bot.user.displayAvatarURL)
  .addField ("?welcome","**__set up your welcome message channel.__**")
  .addField("?main ``18 cmds available``","**display all the __main__ commands**", false)
  .addField("?mod ``9 cmds available``","**display all __mods__ commands**", false)
  .addField("?fun ``19 cmds available``", "**display all __fun__ commands**", false)
  .addField("?time ``3 cmds available``","**display all the __time__ commands**")
  .addField("?game ``8 cmds available``","**display the __game__ commands**",false)
  .addField("?music ``9 cmds available``","**display all the __music__ commands**",false)
 .addField("?nsfw ``23 cmds available``","**display all the __nsfw__ commands**",false)
  .addField("?dev ``4 cmds available``","**display all the __developer__ commands**")
  .addField("?statistics ``9 cmds available``", "**display all the __statistics__ commands**", false)
  .addField("bad words filter on ❌","This will remove all bad word.",false)
  .addField ("**Kim** is always here to chat with you","To chat with Kim all you have to do is put ``Kim`` before your message. __Ex__ kim hi ``(it will take some time to message back)``")
  .setFooter("If you found a bug please report it using ?bugreport | Do ?invite to invite me to your server")
  message.channel.send(embed).then(message => message.react('📥'))

}
module.exports.help = {
  name: "?help"
}