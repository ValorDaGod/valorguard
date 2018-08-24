const Discord = require('discord.js');

const client = new Discord.Client();

const ytdl = require('ytdl-core');

const queue = new Map();

const prefix = ";";

var servers = {};

var dispatcher;

client.on('ready', () => {
    console.log("Bot Ready !");
    client.user.setGame("*help")
 
})

client.login('NDgyNjQ5MTI0NDI1MTcwOTQ2.DmH9wg.UAXtE_RurI0Fn7TQ4MxLy_H_eqU');


client.on('message', message => {
       if(message.content[0] === prefix) {
        let splitMessage = message.content.split(" ");
        if(splitMessage[0] === ';play') {
            if(splitMessage.length === 2)
            {
                if(message.member.voiceChannel)
                {
                    message.member.voiceChannel.join().then(connection => {
                        dispatcher = connection.playArbitraryInput(splitMessage[1]);

                        dispatcher.on('error', e => {
                            console.log(e);
                        });

                        dispatcher.on ('error', e => {
                            dispatcher = undefined;
                            console.log('Fin du son');
                        });

                    }).catch(console.log);
                }
                else
                    sendError(message, "Vous devez d'abord rejoindre un salon vocal!");
            }
            else
                sendError(message, "Problème dans les paramètres!");
        }
        else if(splitMessage[0] === ';pause') {
            if(dispatcher !== undefined)
                dispatcher.pause();
        }
        else if(splitMessage[0] === ';resume') {
            if(dispatcher !== undefined)
                dispatcher.resume();
        }
    }
});
