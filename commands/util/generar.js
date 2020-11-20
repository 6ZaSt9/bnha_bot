const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  const Discord = require('discord.js')
  
  let user = message.mentions.users.first() || args[3]
  let limit = parseInt(args[2])
  let min = parseInt(args[0])
    let num = Math.floor(Math.random() * (limit +1 - min) + min)
        let num1 = Math.floor(Math.random() * (limit +1 - min) + min)
            let num2 = Math.floor(Math.random() * (limit +1 - min) + min)
                let num3 = Math.floor(Math.random() * (limit +1 - min) + min)
                    let num4 = Math.floor(Math.random() * (limit +1 - min) + min)
                        let num5 = Math.floor(Math.random() * (limit +1 - min) + min)
                            let num6 = Math.floor(Math.random() * (limit +1 - min) + min)
    const em = new Discord.RichEmbed()
    .setDescription(`
__**Estadísticas de ${user}**__

**Vida:** ${num}
**Ánima:** ${num1}
**Atq. Físico:** ${num2}
**Atq. Especial:** ${num3}
**Def. Física:** ${num4} 
**Def. Especial:** ${num5}
**Velocidad:** ${num6}
`)
    message.channel.send(em)
  
}
module.exports.help = {
    name: "generar"
}