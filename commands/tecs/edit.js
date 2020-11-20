const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
    const Discord = require('discord.js')
   const cont = message.content.split(' ').slice(1);
    const arg = cont.join(' ').split(' | ');

  let SQLUpdate = `UPDATE tecnicas SET ${arg[1]} = '${arg[2]}' WHERE nombre = '${arg[0]}'`;

db.run(SQLUpdate, function(err) {
    if (err) return console.error(err.message)
 let SQLSelect = `SELECT * FROM tecnicas WHERE nombre = '${arg[0]}'`;
db.get(SQLSelect, (err, filas) => { 
    if (err) return console.error(err.message)
    if (!filas) return;
const em = new Discord.RichEmbed()
.setDescription('```La habilidad ' + filas.nombre + ' ha sido actualizada con éxito.\n\n\n **Nombre:** ' + filas.nombre + '\n\n **Descripción:** ' + filas.desc + '\n\n **Efecto:** ' + filas.efecto + '\n\n **Requisitos:** ' + filas.req + '\n\n **Gif:** ' + filas.gif + '\n\n **Elemento:** ' + filas.elemento + '```')
message.channel.send(em)
})
})
 
}
module.exports.help = {
    name: "edit"
}