/* eslint-disable no-console */

//Don't touch from here down unless you know partially what you're doing
const Discord = require("discord.js");
require("discord-reply");
const client = new Discord.Client();
const config = require("./config.json");

client.login(process.env.DISCORD_TOKEN).catch(console.error);
client.on("ready", () => {
  console.log("Now Online, ready to filter!");
});

client.on("message", async (message) => {
  var role = message.guild.roles.cache.get("850693745133355008");
  var checkStr = message.content;
  var str = checkStr.replace(/[!@#$%^&*=(),.?":{}|<>\s+]/g, "");
  if (config.FILTER_LIST.some((word) => str.toLowerCase().includes(word))) {
    if (role) {
      message.member.roles.add(role);
      message.reply("alo thằng này chửi thề nè <@692708913396580432>");
      console.log("1");
    } else {
      message.reply("alo thằng này chửi thề nè <@692708913396580432>");
      console.log("2");
    }
  }
});
