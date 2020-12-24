//Normal use
var prefix
try {
	var { prefix, TOKEN } = require('./config.json'); //normal use-case
} catch (error) {
	//For Heroku integration
	const prefix = process.env.prefix;
}

module.exports = {
	name: 'suggest',
    description: 'Haz una sugerencia de funciones que añadir a Rapsta Bot.',
    args: true,
    usage: '<sugerencia>',
	guildOnly: true,
	aliases: ['sugerencia', 'idea'],
	execute(message, args) {
        var procMessage = message.content;
        procMessage = procMessage.replace(`${prefix}suggest`,"").replace(`${prefix}sugerencia`,"").replace(`${prefix}idea`,""); //fugly but fast

        //const channel = message.client.channels.fetch('690575674544619571',false)
        const channel = message.client.channels.cache.get('690672830777655396'); //suggersions channel

        const embed = {
            "title": "Sugerencia",
            "description": `${procMessage}`,
            "color": 1503970,
            "timestamp": new Date(),
            "footer": {
              "text": `${message.author.username}`
            },
            "author": {
              "name": "Rapsta Bot",
              "url": "https://github.com/otelo2/Rapsta-Bot",
              "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
            }
          };
          //Send and Add the voting reactions to the suggestion
          channel.send({embed}).then(sentMessage => {
            sentMessage.react('👍');
            sentMessage.react('😐')
            sentMessage.react('👎');
          });

          //Delete the message sent by the user
          message.delete();
	},
};