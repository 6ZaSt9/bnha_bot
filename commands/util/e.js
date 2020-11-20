module.exports.run = async (client, message, uno, args) => {
  
const Discord = require('discord.js')

let h = [" ha logrado esquivar.**", " no ha logrado esquivar.**"]
message.channel.send("**" + message.author + h[Math.floor(h.length * Math.random())])
  }

  module.exports.help = {
    name: "e",
  }