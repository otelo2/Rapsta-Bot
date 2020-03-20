var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var client = new Discord.Client({
   token: auth.token,
   autorun: true
});
client.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(client.username + ' - (' + client.id + ')');
});
client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `-`
    if (message.substring(0, 1) == '-') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // -ping
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            //Suggestions
            case 'suggest':
                var procMessage = message.replace('-suggest','');
                client.sendMessage({
                    to: '690575674544619571', //channelID, //ID of the suggestions channel
                    "embed": {
                        "title": "Sugerencia",
                        "description": `${procMessage}`,
                        "color": 1503970,
                        "timestamp": "2020-03-20T19:14:49.939Z",
                        "footer": {
                          "text": `${user}`
                        },
                        "author": {
                          "name": "Rapsta Bot",
                          "url": "https://github.com/otelo2/Rapsta-Bot",
                          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                        }
                      }
                });
                // Delete the message the user sent
                client.deleteMessage({
                    channelID: channelID,
                    messageID: evt.d.id,
                })
                
                break;
            //Make the bot say whatever the user wants
            case 'say':
                var procMessage = message.replace('-say','');
                client.sendMessage({
                    to: channelID, //channelID, //ID of the suggestions channel
                    message: procMessage
                });
                break;
                //TODO: delete the message the user sent, not the bot
            //Dev command for testing wip things
            case 'test':
                var procMessage = message.replace('-test','');
                client.sendMessage({
                    to: '690575674544619571', //channelID, //ID of the suggestions channel
                    "embed": {
                        "title": "Sugerencia",
                        "description": `${procMessage}`,
                        "color": 1503970,
                        "timestamp": "2020-03-20T19:14:49.939Z",
                        "footer": {
                          "text": `${user}`
                        },
                        "author": {
                          "name": "Rapsta Bot",
                          "url": "https://github.com/otelo2/Rapsta-Bot",
                          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                        }
                      }
                });
                break;
            //If there is no known command
            default:
                client.sendMessage({
                    to: channelID,
                    message: '¿Qué ladras?'
                });
                break;
            // Just add any case commands if you want to..
         }
     }
});