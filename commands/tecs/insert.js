const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
    const Discord = require('discord.js')
   const cont = message.content.split(' ').slice(1);
    const arg = cont.join(' ').split(' | ');
let z = arg[0]
let a = arg[1]
let b = arg[2]
let c = arg[3]
let d = arg[4]
let e = arg[5]

/* let SQLCreate = "CREATE TABLE IF NOT EXISTS tecnicas (nombre TEXT, desc TEXT, efecto TEXT, req TEXT, gif TEXT, elemento TXT)";

db.run(SQLCreate, function(err) {
    if (err) return console.error(err.message)
}) */
  
  let SQLInsert = `INSERT INTO tecnicas(nombre, desc, efecto, req, gif, elemento) VALUES('${z}', '${a}', '${b}', '${c}', '${d}', '${e}')`;

db.run(SQLInsert, function(err) {
    if (err) return console.error(err.message)
})
  
}
module.exports.help = {
    name: "insert"
}