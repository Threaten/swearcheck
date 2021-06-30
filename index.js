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

client.user.setActivity("with depression", {
  type: "PLAYING",
  url: "Temporarily offline for enhancements."
});

//temp for commit
//client.on("message", async (message) => {
  //var role = message.guild.roles.cache.get("850693745133355008");
  //var checkStr = message.content;
  //console.log(message.author.id);
  //var str = checkStr.replace(/[!@#$%^&*=()-_,.?"`:{}|<>+]/g, "");
  //if (message.author.id !== "259733877826912257") {
  //  console.log(message.author.id);
  // if (config.FILTER_LIST.some((word) => str.toLowerCase().includes(word))) {
  //    if (role) {
  //      message.member.roles.add(role);
  //      message.reply("alo thằng này chửi thề nè <@692708913396580432>");
  //      console.log("1");
  //    } else {
  //     message.reply("alo thằng này chửi thề nè <@692708913396580432>");
  //      console.log("2");
  //    }
  //  }
  // }
//});
