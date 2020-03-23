module.exports = {
	name: 'say',
    description: 'Rapsta Bot dice lo que escribas después de éste comando.',
    args: true,
    usage: '<texto>',
	guildOnly: false,
	//aliases: ['di', 'habla'],
	execute(message, args) { 
		message.channel.send(message.content.replace("-say","")); //But this makes it so i cant use aliases
		message.remove()
	},
};