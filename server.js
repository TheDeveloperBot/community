const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
let xp = require("./xp.json");
const bot = new Discord.Client({disableEveryone: false});
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

// //Setting up the bots presences
bot.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
 bot.user.setActivity(`${bot.users.size} USERS -|- ?help`, { type: 'WATCHING' }); 
});

bot.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  bot.user.setActivity(`${bot.users.size} USERS -|- ?help`, { type: 'WATCHING' });
});

bot.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  bot.user.setActivity(`${bot.users.size} USERS -|- ?help`, { type: 'WATCHING' });
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  if(!xp[message.author.id]){
    xp[message.author.id] = {
      xp: 0,
      level: 1
    };
  }


  let curxp = xp[message.author.id].xp;
  let curlvl = xp[message.author.id].level;
  let nxtLvl = xp[message.author.id].level * 300;
  xp[message.author.id].xp =  curxp + xpAdd;
  if(nxtLvl <= xp[message.author.id].xp){
    xp[message.author.id].level = curlvl + 1;
    let lvlup = new Discord.RichEmbed()
    .setTitle("Level Up!")
    .setColor(0x000000)
    .addField("New Level", curlvl + 1);

    message.channel.send(lvlup).then(msg => {msg.delete(5000)});
  }
  fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
    if(err) console.log(err)
  });

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);
  
//  //obc!say Command
  
//   if (cmd === `${prefix}hello`){
    
//   return message.channel.send("Hi! 👋😄");
    
//   }
  
//   if(cmd === `${prefix}serverinfo`){

//     let sicon = message.guild.iconURL;
//     let serverembed = new Discord.RichEmbed()
//     .setDescription("Server Information")
//     .setColor("#15f153")
//     .setThumbnail(sicon)
//     .addField("Server Name", message.guild.name)
//     .addField("Created On", message.guild.createdAt)
//     .addField("You Joined", message.member.joinedAt)
//     .addField("Total Members", message.guild.memberCount);

//     return message.channel.send(serverembed);
//   }



//   if(cmd === `${prefix}botinfo`){

//     let bicon = bot.user.displayAvatarURL;
//     let botembed = new Discord.RichEmbed()
//     .setDescription("Bot Information")
//     .setColor("#15f153")
//     .setThumbnail(bicon)
//     .addField("Bot Name", bot.user.username)
//     .addField("Created On", bot.user.createdAt);

//     return message.channel.send(botembed);
//   }
//     if(cmd === `${prefix}kick`){

//     //!kick @daeshan askin for it

//     let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!kUser) return message.channel.send("Can't find user!");
//     let kReason = args.join(" ").slice(22);
//     if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
//     if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

//     let kickEmbed = new Discord.RichEmbed()
//     .setDescription("~Kick~")
//     .setColor("#e56b00")
//     .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
//     .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
//     .addField("Kicked In", message.channel)
//     .addField("Tiime", message.createdAt)
//     .addField("Reason", kReason);

//     let kickChannel = message.guild.channels.find(`name`, "incidents");
//     if(!kickChannel) return message.channel.send("Can't find incidents channel.");

//     message.guild.member(kUser).kick(kReason);
//     kickChannel.send(kickEmbed);

//     return;
//   }

//   if(cmd === `${prefix}ban`){

//     let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!bUser) return message.channel.send("Can't find user!");
//     let bReason = args.join(" ").slice(22);
//     if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
//     if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

//     let banEmbed = new Discord.RichEmbed()
//     .setDescription("~Ban~")
//     .setColor("#bc0000")
//     .addField("Banned User", `${bUser} with ID ${bUser.id}`)
//     .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
//     .addField("Banned In", message.channel)
//     .addField("Time", message.createdAt)
//     .addField("Reason", bReason);

//     let incidentchannel = message.guild.channels.find(`name`, "incidents");
//     if(!incidentchannel) return message.channel.send("Can't find incidents channel.");

//     message.guild.member(bUser).ban(bReason);
//     incidentchannel.send(banEmbed);


//     return;
//   }


//   if(cmd === `${prefix}report`){

//     //!report @ned this is the reason

//     let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
//     if(!rUser) return message.channel.send("Couldn't find user.");
//     let reason = args.join(" ").slice(22);

//     let reportEmbed = new Discord.RichEmbed()
//     .setDescription("Reports")
//     .setColor("#15f153")
//     .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
//     .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
//     .addField("Channel", message.channel)
//     .addField("Time", message.createdAt)
//     .addField("Reason", reason);

//     let reportschannel = message.guild.channels.find(`name`, "reports");
//     if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


//     message.delete().catch(O_o=>{});
//     reportschannel.send(reportEmbed);

//     return;
//   }
  
});

bot.login(botconfig.token); 
