module.exports = {
	name: 'say',
    description: 'Rapsta Bot dice lo que escribas después de éste comando.',
    args: true,
    usage: '<texto>',
	guildOnly: false,
	aliases: ['di', 'habla'],
	execute(message, args) {
        const dataArr = [];
        dataArr.push(args);
        var stringData = dataArr.join(' ');
        stringData = stringData.replace(/,/g," "); //Ugly fix until i figure out why join aint working

		message.channel.send(stringData);
	},
};