//TODO: Maybe further check that the first two digits are <=31 and the last two are <=12
var fs = require('fs');
var os = require('os');
const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:marcian0@localhost:5432/localdb',
    ssl: process.env.DATABASE_URL ? true : false
});

client.connect();

//RE for the date
var re = /^\d{2}\/\d{2}$/;

module.exports = {
    name: 'cumpleaños',
    description: 'Añade la fecha de cumpleaños del usuario',
    args: true,
    usage: '<dd/mm>',
    aliases: ['cumple'],
    guildOnly: false,
    execute(message, args) {
        //Check if the argument is correct
        var res = args.toString().match(re);

        if (res) {
            message.reply(`Voy a recordar que cumples el ${args}`);

            //Send the data to the DB
            client.query(`INSERT into CUMPLES values (DEFAULT, '${message.author.id}', '${args}');`, (err, res) => {
                if (err) throw err; 
                for (let row of res.rows) {
                    console.log(JSON.stringify(row));
                }
                client.end();
            });

        } else {
            message.reply('Por favor escribe tu fecha en formato dd/mm (día/mes). Ej: 23/09.');
        }
        
    },
};

//client.end();