const Discord = require("discord.js");
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log(`Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`);

    bot.guilds.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "") {
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
        name: "#1 Updated create",
      value:"Now you can just set up the giveaways by using ?create"
      },
      {
        name: "Kim updated",//wait l'm sending an update log  //what is it?
        value:"more cell added"
      },
     {
        name: "#3 Cmds added",
      value: "Some more cmds have been added as well!"
    
     },
             {
               name:"#4 system upgraded!",
               value:"updated system worker"//hold on
             },
             {
               name:"#5 Bugs fixes",
               value:"Fixes some bugs"
             },
             {
               name:"Feedback",
               value:"you can join us by clicking [here](https://discord.gg/ZY7DbYJ) also you can vote for the bot here to keep it update and make kim online [vote](https://discordbots.org/bot/447044725820620810/vote)"
             },
             {
               name:"Add me to your server!",
               value:"Add me to your server using this [link.](https://discordapp.com/api/oauth2/authorize?client_id=447044725820620810&permissions=8&scope=bot)"
             },
      {
        name: "We love the community!",
        value:"make sure to show the teams some love by joining our [Server.](https://discord.gg/ZY7DbYJ)"
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: bot.user.avatarURL,
      text: "© By Community Of People Developers"
    }
  }
})       
         }
                      )
    })
});

bot.login("")