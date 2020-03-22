module.exports = {
	name: 'server',
	description: 'Description of the server',
	execute(message, args) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};