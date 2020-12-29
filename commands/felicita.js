const { Pool } = require('pg');

function getBirthdaysDatabase() {
    return new Promise(function(resolve, reject) {

        const pool = new Pool({
            connectionString: process.env.DATABASE_URL || 'postgresql://postgres:marcian0@localhost:5432/localdb',
            ssl: process.env.DATABASE_URL ? true : false
        });
        pool.connect();
        pool.query('SELECT * FROM cumples;', (err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res);
            pool.end();
        });
    });
}

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

        var dateArray = new Array();

        getBirthdaysDatabase().then(function(res) {

            congratulated = false;

            for (let row of res.rows) {
                //dateArray.push(row.fecha);

                if (row.fecha == today) {
                    message.channel.send(`Muchas Felicidades <@${row.discordid}>! Que tengas un muy feliz día y te la pases muy bien :)`);
                    congratulated = true;
                }
            }

            if (!congratulated) {
                message.channel.send('Feliz no cumpleaños para todos!');
            }

        }).catch((err) => setImmediate(() => {throw err; }));

    },
};