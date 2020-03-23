module.exports = {
    name: 'privileges',
    description: 'Revisa si el usuario tiene privilegios para comandos avanzados',
    args: false,
    aliases: ['priv'],
    guildOnly: false,
    execute(message, args) {
        if (message.author.id === '113787633930469379') { //My discord ID
            message.reply("Only you are worthy");
        }
        else{
            message.reply("Aún no puedes acceder a esa función.");
        }

    },
};