const Discord = require('discord.js');

const client = new Discord.Client();

const ms = require("ms");

var prefix = ("*")

const express = require('express');
const app = express();


//PARAMETRES
app.set('port', (process.env.PORT || 5000))

app.listen(app.get('port'), function(){
    console.log(`Bot en fonctionnement sur le port ${app.get('port')}`);
    
})




client.on('ready', () => {
    console.log("Bot Ready !");
    client.user.setGame("*help")

})


app.set('token', (process.env.TOKEN))
        
app.listen(app.get('token'), function(){



client.on('message', message => {


    let sender = message.author;

    let cont = message.content.slice(prefix.length).split(" ");

    let msg = message.content.toUpperCase();

    let args2 = cont.slice(1);



    if (message.content === prefix +"help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#240B3B")
        .setTitle("**:tools:  Bot Commands  :tools:**")
        //.setThumbnail(message.author.displayAvatarURL)
        .addField("__[---Commands List---]__", "-----------------------------")
        .addField(" *help", "Show informations about how to use the bot")
        .addField(" *info", "Show the version, the name and the owner of the bot")
        .addField(" *stats", "Send your statistics in private message \n --------------------------")
        .addField("__[---Staff Commands---]__", "--------------------------")
        .addField(" *kick @player", "To kick a player away from the server")
        .addField(" *ban @player", "To ban a player abusing the rules")
        .addField(" *mute @player", "To mute a player messing with other players")
        .addField(" *unmute @player", "To unumute a player that is already muted")
        .addField("Note:","If you try to use another command than *help or *stats in private message, the bot will crash.")
        .setFooter("Help Menu - Valor Guard")
        message.channel.sendMessage(help_embed);
        console.log("*Un utilisateur a ouvert le menu d'aide*")

    }



    if (!message.content.startsWith(prefix)) return;
 
    var args = message.content.substring(prefix.length).split(" ");
 
    switch (args[0].toLowerCase()) {
        case "stats":
 
        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;
 
        var stats_embed = new Discord.RichEmbed()
        .setColor ("#240B3B")
        .setTitle(`**Statistics of ${message.author.username}**`)
        .addField(`**User ID**`, msgauthor, true)
        .addField("**Date of first account registration**", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("**statistics sent in private message! :newspaper: :white_check_mark:**")
        message.author.send({embed: stats_embed});
        break;
    }


    if (message.content === prefix +"info") {
        var info_embed = new Discord.RichEmbed()
        .setColor("#240B3B")
        .setTitle("**:newspaper:  Bot Informations  :newspaper:**")
        .addField(" - Bot Coded By Nono84569#0517", "With the managing help of ⚡ Vαlσя ⚡#6836")
        .addField(" - Name: ", `${client.user.tag}`, true)
        .addField(" - Version: ", "Beta Release 1.0.0")
        .addField(" - Bot ID", `${client.user.id}`)
        .addField(" - Members:", message.guild.members.size)
        .setFooter("Info - Valor Guard")
        message.channel.sendMessage(info_embed);
        console.log("Info du bot et du serveur demandés !")

    }


    if (message.content.startsWith ("Hi")) {
        message.channel.send("Hey my friend! :smile:")
    }

    if (message.content.startsWith ("I love you")) {
        message.channel.send("Me too my love :3 :heart:")
    }

    if (message.content.startsWith ("S*ck my banana")) {
        message.channel.send("Yeeees :kiss: :banana:")
    }

    if (message.content.startsWith ("Hello")) {
        message.channel.send("Goodbye *OOF*")
    }

    if (message.content.startsWith ("Can you help me")) {
        message.channel.send("Write ;help :smile: :heart:")
    }

    if (message.content.startsWith("OMAE WA MOU SHINDEIRU")) {
        message.channel.send("NANI???!!")
    }

    if (message.content.startsWith("SIIICK, YOU SUCK! :joy:")) {
        message.channel.send("WHY YOU BULLY ME... :cry:")

    }   


    if(message.content.startsWith(prefix + "kick")) {
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("**You don't have permission to execute that command ! :x:**");
    

        if(message.mentions.users.size === 0) {
            return message.channel.send("**You have to mention a correct player first! :x:**")
     
            
    }
    var kick = message.guild.member(message.mentions.users.first());
    if(!kick) {
        return message.channel.send("**The user you tried to ban doesn't exist or isn't in the server ! :x:**")
    }

 
        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("**You don't have the permission to kick this player! :x:**");
        }
 
        kick.kick().then(member => {
            message.channel.send(`**${member.user.username} has got kicked by ${message.author.username}**`);
        });
    }
       
        //if(message.content.startsWith(prefix + "clear")) {
            //if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGE")) return message.channel.send("**You don't have permission to clear the chat! :x:**");

            //let args = message.content.split(" ").slice(1); 

            //if(!args[0]) return message.channel.send("**You have to say a number of messages to be deleted! :x:**")
            //message.channel.bulkDelete(args[0]).then(() => {
                //message.channel.send(`**${args[0]} messages have been deleted! :smile:**`);
            //});
        //}


        if(message.content.startsWith(prefix + "ban")) {
            if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.channel.send("**You don't have the permission to ban a player! :x: :rage:**");
    
            if(message.mentions.users.size === 0) {
                return message.channel.send("**You may mention an user to ban! :x: :hammer:\n                          :arrow_up_down:\nThe user you tried to ban doesn't exist or isn't in the server ! :x:**");
            }
            
            var ban = message.guild.member(message.mentions.users.first());
            if(!ban) {
                return message.channel.send("**The user you tried to ban doesn't exist or isn't in the server ! :x:**")
            }

            if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) {
                return message.channel.send(" ");
            }
            ban.ban().then(member => {
                message.channel.send(`**${member.user.username} has been banned by ${message.author.username}! :hammer: :white_check_mark:**`)
            });
            
        }


        if(message.content.startsWith(prefix + "mute")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have the permission to mute! :x: :zipper_mouth:**");

            if(message.mentions.users.size === 0) {
                return message.channel.send("**You may mention an user to mute! :x: :zipper_mouth:\n                          :arrow_up_down:\nThe user you tried to mute doesn't exist or isn't in the server ! :x: :zipper_mouth:**");
            }       

            var mute = message.guild.member(message.mentions.users.first());
            if(!mute) {
                return message.channel.send("**The user you tried to mute doesn't exist or isn't in the server! :x: :zipper_mouth:**");
            }


            if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have the permission to mute that player! :x: :zipper_mouth:**");
            message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
                message.channel.send(`**${mute.user.username} has been succesfully muted! :zipper_mouth:**`);
            })
        }
        
        if(message.content.startsWith(prefix + "unmute")) {
            if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have the permission to unmute! :x: :zipper_mouth:**");

            if(message.mentions.users.size === 0) {
                return message.channel.send("**You may mention an user to unmute! :x: :zipper_mouth:\n                          :arrow_up_down:\nThe user you tried to unmute doesn't exist or isn't in the server ! :x: :zipper_mouth:**");
            }       

            var unmute = message.guild.member(message.mentions.users.first());
            if(!unmute) {
                return message.channel.send("**The user you tried to mute doesn't exist or isn't in the server! :x: :zipper_mouth:**");
            }


            if (!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("**You don't have the permission to unmute that player! :x: :zipper_mouth:**");
            message.channel.overwritePermissions(unmute, { SEND_MESSAGES: true}).then(member => {
                message.channel.send(`**${unmute.user.username} has been succesfully unmuted on ! :smile: :white_check_mark:**`)
            })
        }

    module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You don't have the permission to use that command! :x: :hammer:**");


    var user = message.guild.member(message.mentions.users.first());

    if (!user) return message.channel.send('**You may use it like that: "*tempban <player> <time (/s)> <reason>"**');


    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**You can't tempban this player! :x: :hammer:**");

    var reason = args.join(" ").slice(22);

    if (!reason) return message.channel.send("**You have to specify a reason! :x: :newspaper:**");

    var tempBanTime = args[1];

    if (ms(tempBanTime)) {


        await message.guild.member(user).ban(reason);

        message.channel.send(`**${user} has been succesfully tempbanned for ${tempBanTime} :hammer: :clock8:**`);

        setTimeout(function () {
            

            message.guild.unban(user.id);

            message.channel.send(`**${user} is no longer banned! :hammer: :white_check_mark:**`);

        }, ms(tempBanTime));

    } else {
        return message.channel.send("**Enter and set a valid time! :x: :clock8:**");
    }
}
     
module.exports.help = {
    name: "tempban"

}

});
