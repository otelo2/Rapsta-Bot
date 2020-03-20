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
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `-`
    if (message.substring(0, 1) == '-') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // -ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            //Suggestions
            case 'suggest':
                //bot.channels.get(`690575674544619571`).send('Sugerencia: ' + args);
                var procMessage = message.replace('-suggest','');
                bot.sendMessage({
                    to: '690575674544619571', //channelID, //ID of the suggestions channel
                    message: 'Sugerencia: ' + procMessage
                });
                break;
            //Make the bot say whatever the user wants
            case 'say':
                var procMessage = message.replace('-say','');
                bot.sendMessage({
                    to: channelID, //channelID, //ID of the suggestions channel
                    message: procMessage
                });
                break;
            //If there is no known command
            default:
                bot.sendMessage({
                    to: channelID,
                    message: '¿Qué ladras?'
                });
                break;
            // Just add any case commands if you want to..
         }
     }
});