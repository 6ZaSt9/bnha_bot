const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");
    const Discord = require('discord.js')
    
   const cont = message.content.split(' ').slice(1);
    const arg = cont.join(' ').split(' | ');
 let f = arg[0]
  let x = f.length - f.length
let z = f[x].toUpperCase() + f.slice(1) 
  
message.channel.send(arg[1])
/* 
async function jutsu(name, desc, efecto, req, gif, elemento) {
  
const e = new Discord.RichEmbed()
.setAuthor(`${message.guild.member(message.author).displayName} ha activado su habilidad ${name}.`, message.author.avatarURL)
.setDescription(`**Descripción:** ${desc}\n\n **Efecto:** ${efecto}\n\n **Requisito:** ${req}`)
.setImage(gif)
.setFooter(`${elemento}`)
.setColor('BLUE')
message.channel.send({embed: e})
}
jutsu(arg[0], arg[1], arg[2], arg[3], arg[4], arg[5])
  */
} 
module.exports.help = {
    name: "test"
}