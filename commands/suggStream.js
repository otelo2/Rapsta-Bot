module.exports = {
	name: 'suggStream',
    description: 'Haz una sugerencia de funciones que añadir a Rapsta Bot.',
    args: true,
    usage: '<sugerencia>',
	guildOnly: true,
	aliases: ['sugerenciaStream', 'sStream', 'suggestStream'],
	execute(message, args) {
        var procMessage = message.content;
        procMessage = procMessage.replace("-suggest","").replace("-sugerencia","").replace("-idea",""); //fugly but fast

        //const channel = message.client.channels.fetch('690575674544619571',false)
        const channel = message.client.channels.cache.get('692173788560883792'); //suggersions channel inside ZP

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