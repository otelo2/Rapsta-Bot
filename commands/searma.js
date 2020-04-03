module.exports = {
	name: 'searma',
    description: 'Pregunta si hoy se va a armar el jugar algo chido.',
    args: false,
    usage: '<nada wey>',
	guildOnly: true,
	aliases: ['carma', 'arma', 'hoysearma?', 'searma?'],
	execute(message, args) {

        const channel = message.client.channel; //current channel

        const embed = {
            "title": "Hoy se arma?",
            "description": "Hoy se va armar o ya me voy a dormir perros?",
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