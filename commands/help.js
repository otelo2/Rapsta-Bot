//Normal use
/* const {
    prefix
} = require('../config.json'); */
//For Heruku
const prefix = process.env.prefix;

module.exports = {
    name: 'help',
    description: 'Muestra la lista de comandos o información sobre un comando específico.',
    aliases: ['commands', 'h'],
    usage: '[command name]',
    cooldown: 0,
    execute(message, args) {
        const data = [];
        const {
            commands
        } = message.client;

        if (!args.length) {
            data.push('Aquí está la lista de todos mis comandos:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nPuedes enviar \`${prefix}help [comando]\` para recibir información de un comando en específico!`);

            return message.channel.send(data, {
                    split: true
                })
                /* .then(() => {
                    if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                })
                .catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });  */
        }
        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

        if (!command) {
            return message.reply('Ese no es un comando válido!');
        }

        data.push(`**Comando:** ${command.name}`);

        if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`);
        if (command.description) data.push(`**Descripción:** ${command.description}`);
        if (command.usage) data.push(`**Uso:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 0} second(s)`);

        message.channel.send(data, {
            split: true
        });
    },
};