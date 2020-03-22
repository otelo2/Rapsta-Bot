module.exports = {
	name: 'suggest',
    description: 'Haz una sugerencia de funciones que añadir a Rapsta Bot.',
    args: true,
    usage: '<sugerencia>',
	guildOnly: true,
	aliases: ['sugerencia', 'idea'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};