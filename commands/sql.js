const { Pool } = require('pg');

module.exports = {
    name: 'sql',
    description: 'Corre una consulta SQL. Sólo para usuarios avanzados',
    args: true,
    usage: '<sql query>',
    guildOnly: false,
    execute(message, args) {
        if (message.author.id === '113787633930469379') { //My discord ID
            query = args.toString().replace(/,/g, " ");
            message.channel.send(`La respuesta de la consulta ${query} es:`);

            //Send the query to the DB
            const pool = new Pool({
                connectionString: process.env.DATABASE_URL || 'postgresql://postgres:marcian0@localhost:5432/localdb',
                ssl: process.env.DATABASE_URL ? true : false
            });
            pool.connect();
            pool.query(`${query}`, (err, res) => {
                if (err) throw err; 
                for (let row of res.rows) {
                    console.log(JSON.stringify(row));
                    message.channel.send(`${JSON.stringify(row)}`)
                }
                pool.end();
            });
        }
        else{
            message.reply("No tienes permiso de acceder a éste comando. Se ha reportado éste incidente.");
        }

    },
};