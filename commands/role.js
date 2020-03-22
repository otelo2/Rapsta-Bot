module.exports = {
	name: 'role',
    description: 'Give selected user the selected role',
    args: true,
    usage: '<user> <role>',
	guildOnly: true,
	aliases: ['giveRole', 'roleSet'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};