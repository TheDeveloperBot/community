const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);

    bot.guilds.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "announcements";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "announcements") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
         setInterval (function () {
           defaultChannel.send({embed: {
    color: 3447003,
    author: {
      name: bot.user.username,
      icon_url: bot.user.avatarURL
    },
    title: "👍 UPDATE LOG! 👍",
    url: "http://google.com",
    description:"This is an update log.",                      
    fields: [{
        name: "#1 Chatbot Updates",
      value:"Now you can chat with the bot using **Kim** or just **DM** the bot."
      },
      {
        name: "#2 giveaways added",//wait l'm sending an update log  //what is it?
        value:"giveaways has been added and update!"
      },
     {
        name: "#3 Cmds added",
      value: "Some more cmds have been added as well!"
    
     },
             {
               name:"#4 leveling/coins system upgraded!",
               value:"updated level and conis system worker"//hold on
             },
             {
               name:"#5 Bugs fixes",
               value:"Fixes some bugs"
             },
             {
               name:"Feedback",
               value:"you can join us by clicking [here](https://discord.gg/ZY7DbYJ) also you can vote for the bot here to keep it update and free [vote](https://discordbots.org/bot/447044725820620810/vote)"
             },
      {
        name: "Bugs reports",
        value: "If you find any bugs pls report it using ?bugreport"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© By Community Of People Developers"
    }       
           }
                               })

 }, 1 * 1000); 
    })
});
  

