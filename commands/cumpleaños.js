//TODO: Maybe further check that the first two digits are <=31 and the last two are <=12
var fs = require('fs');
var os = require('os');
path = require('path');
//Set where the file that stores the id's and dates is located
let filepath = path.join(__dirname, '..', 'cumpleaños', 'fechas.txt');

//RE for the date
var re = /^\d{2}\/\d{2}$/;

module.exports = {
    name: 'cumpleaños',
    description: 'Revisa si el usuario tiene privilegios para comandos avanzados',
    args: true,
    usage: '<dd/mm>',
    aliases: ['cumple'],
    guildOnly: false,
    execute(message, args) {
        //Check if the argument is correct
        var res = args.toString().match(re);

        if (res) {
            message.reply(`Voy a recordar que cumples el ${args}`);
            console.log(filepath);
            let contents = `${message.author.id} ${args}${os.EOL}`
            fs.appendFile(filepath, contents, function(err,file){
                if (err) throw err;
                console.log(`Wrote ${contents} to the file in ${filepath}`);
            });
        } else {
            message.reply('Por favor escribe tu fecha en formato dd/mm (día/mes). Ej: 23/09.');
        }
        
    },
};