const fs = require("fs");
const prefix = process.env.prefix;
module.exports.run = async (bot, message, args) => {
  const sqlite3 = require("sqlite3").verbose();
  const db = new sqlite3.Database("./data.sqlite");

  const Discord = require("discord.js");
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    else return text;
  }
  if (
    message.author.id !== "441386684186361856" &&
    message.author.id !== "210538854543917056"
  )
    return;
  try {
    const code = args.join(" ");
    let evaled = eval(code);

    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

    message.channel.send(clean(evaled), { code: "xl" });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};
module.exports.help = {
  name: "eval"
};
