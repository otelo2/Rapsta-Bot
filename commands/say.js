//Normal use
var prefix
try {
	var { prefix, TOKEN } = require('./config.json'); //normal use-case
} catch (error) {
	//For Heroku integration
	var prefix = process.env.prefix;
}

module.exports = {
	name: 'say',
    description: 'Rapsta Bot dice lo que escribas después de éste comando.',
    args: true,
    usage: '<texto>',
	guildOnly: false,
	aliases: ['di', 'habla'],
	execute(message, args) { 
		message.channel.send(message.content.replace(`${prefix}say`,"").replace(`${prefix}di`,"").replace(`${prefix}habla`,""));
		message.delete()
	},
};