const fs = require('fs');
const os = require('os');
var path = require('path');
//Where the file that stores the id's and dates is located
let filepath = path.join(__dirname, '..', 'cumples', 'fechas.txt');

module.exports = {
    name: 'felicita',
    description: 'Forza que el bot felicite a alguien que cumple años',
    args: false,
    usage: '<null>',
    guildOnly: false,
    execute(message, args) {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        today = dd + '/' + mm;

        var data;
        try {
            var data = fs.readFileSync(filepath, 'utf-8');
        } catch (err) {
            console.error(err)
        }
        
        var array = data.toString().split(/\s+/);
        for (i in array) {
            if (!array[i]) {
                return;
            }
            if (i % 2 == 0) {
                //Is even
                console.log("userID: " + array[i]);
            } else {
                //Is odd
                console.log("birthday: " + array[i]);
                //Check if today is someones birthday
                if (array[i] == today) {
                    //Is their birthday, congratulate
                    message.channel.send(`Muchas Felicidades <@${array[i-1]}>! Que tengas un muy feliz día y te la pases muy bien :)`);
                    console.log("Congratulated " + array[i-1]);
                } else {
                    //Not their birthday
                    console.log("Today isn't the birthday of " + array[i-1]);
                    //message.channel.send(`Hoy no es el cumpleaños de <@${array[i-1]}> :)`);
                }
            }
        }


        //message.channel.send(`Muchas Felicidades <@${message.author.id}>! Que tengas un muy feliz día y te la pases muy bien :)`);

    },
};