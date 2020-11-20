const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  const Discord = require("discord.js");

  message.delete();

  const random_percentage = require("random-with-percentage");
  const randomArray = [
    {
      name: "A+",
      chance: 33.75
    },
    {
      name: "A-",
      chance: 6.5
    },
    {
      name: "B+",
      chance: 11.53
    },
    {
      name: "B-",
      chance: 1.63
    },
    {
      name: "AB+",
      chance: 3.52
    },
    {
      name: "AB-",
      chance: 0.48
    },
    {
      name: "O+",
      chance: 35.48
    },
    {
      name: "O-",
      chance: 7.11
    }
  ];

  random_percentage(randomArray).then(result => message.channel.send(result));
};
module.exports.help = {
  name: "random"
};
