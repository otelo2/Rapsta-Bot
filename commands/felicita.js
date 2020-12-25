module.exports = {
    name: 'felicita',
    description: 'Forza que el bot felicite a alguien que cumple años',
    args: true,
    usage: '<no se we>',
    guildOnly: false,
    execute(message, args) {
        message.channel.send(`Muchas Felicidades <@${message.author.id}>! Que tengas un muy feliz día y te la pases muy bien`);

    },
};