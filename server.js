const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {console.log(Date.now() + "Ping recived!");
response.sendStatus(200);});
app.listen(process.env.PORT);
setInterval(() => {http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);},
280000);

//^ Esa parte esta lista : @Bulzy

// Code in Programming =

const fs = require('fs');
const Discord = require('discord.js');
const prefix = "!"
const bot = new Discord.Client();

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("./data.sqlite");

let moment = require('moment-timezone')
let momento = require('moment')
let ms = require('ms')


bot.on('ready', () => {
    console.log("Registrado en Discord bajo el nombre de " + bot.user.tag + " y actualmente estoy en " + bot.guilds.size + " servidores.");
    bot.guilds.forEach(guild => {
    console.log(" - " + guild.name)
  })
    console.log(`https://discordapp.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=2146958847`)
  bot.user.setPresence( {
    status: "online"
  });
})

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
const categories = ['util', 'tecs'];
categories.forEach(c => {
	fs.readdir(`./commands/${c}/`, (err, files) => {
		if(err) console.error(err);
	
		const jsfiles = files.filter(f => f.split(".").pop() === "js")[0];
		if (err) throw err;
		console.log(`[Comandos] Cargando ${files.length} comandos del modulo ${c}`);

		files.forEach(f => {
			const props = require(`./commands/${c}/${f}`);
			bot.commands.set(props.help.name, props);
			});
		});
	});


bot.on("message", async message => {
  
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;  

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
	let cmds = messageArray[0].toLowerCase();
	let args = messageArray.slice(1);
	
    if	(!command.startsWith(prefix)) return; 
	if (message.author.bot) return;

    let cmd = bot.commands.get(command.slice(prefix.length));
    if(cmd) cmd.run(bot, message, args);

});
  
bot.login(process.env.TOKEN);