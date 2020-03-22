module.exports = {
	name: 'suggest',
    description: 'Haz una sugerencia de funciones que añadir a Rapsta Bot.',
    args: true,
    usage: '<sugerencia>',
	guildOnly: true,
	aliases: ['sugerencia', 'idea'],
	execute(message, args) {
        var procMessage = message.content;
        procMessage = procMessage.replace("-suggest","").replace("-sugerencia","").replace("-idea",""); //fugly but fast

        //const channel = message.client.channels.fetch('690575674544619571',false)
        const channel = message.client.channels.cache.get('690575674544619571');

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
          //message.channel.send({ embed });
          channel.send({embed});


	},
};