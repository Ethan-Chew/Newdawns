// Bot Index
// Do not edit lines 4 - 56

const Discord = require("discord.js");
const bot = new Discord.Client();

var iRandomNumber;
const PREFIX = "n!";
const ms = require("parse-ms");
const fs = require("fs");
let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
const cash = "10000";
const version = 1;
const war = 0;
const appListenPort = "3000";
const ignorecommands = ["n!start", "n!info", "n!help", "n!appeal"];
const collectorcommands = ["n!startraid"];
const http = require("http");
const express = require("express");
const app = express();
const levelUpReqTtl = "100";
const lvlReward = "50";
const debug = true;
const offline = false;
const dnd = false;

const TOKEN = "NzIwMDg5OTc5MTMyNDQ0ODIz.XuA6UQ.O6HXDF0bF31nZ6XZskYnS_DJb8k";

bot.on("ready", () => {
  if (offline == true && debug == false && dnd == false) {
    bot.user.setStatus("invisible");
  } else {
    bot.user.setStatus("Online");
    bot.user.setActivity("Alpha");
  }

  if (offline == false && debug == true && dnd == false) {
    bot.user.setStatus("idle");
    bot.user.setActivity("Debugging in progress");
  } else {
    bot.user.setStatus("Online");
    bot.user.setActivity("Alpha");
  }

  if (offline == true && debug == false && dnd == true) {
    bot.user.setStatus("dnd");
    bot.user.setActivity("Debugging in progress");
  } else {
    bot.user.setStatus("Online");
    bot.user.setActivity("Alpha");
  }

  // Switches all String Value Variables into Int

  // db[message.author.id].cash = Integer.parseInt(db[message.author.id].cash)
  // db[message.author.id].airtroops = Integer.parseInt(db[message.author.airtroops])
  // db[message.author.id].seatroops = Integer.parseInt(db[message.author.seatroops])
  // db[message.author.id].landtroops = Integer.parseInt(db[message.author.landtroops])

  console.log("This bot is online!");
});

//farming power = xp, economy power = money, civil rights = population, manpower = army
let ideologyinfo = `►MAIN IDEOLOGIES
Here is a selection of different Ideologies for your country. This also includes some info/rules about the ideology you pick. You may only choose, ONE ideology.

COMMUNISM :communism:
Horrible for economy, good for farming and manpower. Very equal.
-90% Less civil rights
-80% Less economy power
+80% More farming power
+90% More manpower


LIBERALISM :democrat: 
Purely economy based.
+40% More civil rights
+80% More economy power
-50% Less farming power
-70% Less manpower


CONSERVATISM :republican:
Purely civil rights based.

+80% More civil rights
+80% More economy power
-50% Less farming power
+20% More manpower


THEOCRACY :cross:
Very balanced. Civil rights decreased though. 
-60% Less civil rights
+10% More economy power
+30% More farming power
+30% More manpower



MONARCHY :crown: 
Good for control over your country
-20% Less civil rights
+30% More economy power
-50% More farming power
+60% More manpower

Input your choice of ideology in the previous text channel. (other idelogies inputed which are not found in this list will be ignored)



`;

bot.on("message", message => {
  if (message.channel.type === "dm") return;

  if (db[message.author.id]) {
    let userRank = db[message.author.id].rank;
    db[message.author.id].power = Math.floor(
      db[message.author.id].cash / 100000 +
        db[message.author.id].landtroops / 3 +
        db[message.author.id].seatroops +
        db[message.author.id].airtroops * 1.02 +
        db[message.author.id].population / 1000000 +
        parseInt(db[message.author.id].firepower)
    );

    if (db[message.author.id].rank == "Banned") {
      db[message.author.id].money = "0";
      db[message.author.id].ideology = "Erase data to restart game.";
      db[message.author.id].landtroops = "0";
      db[message.author.id].airtroops = "0";
      db[message.author.id].seatroops = "0";
      db[message.author.id].wars = "0";
    }

    if (
      db[message.author.id.rank] == "Banned" ||
      db[message.author.id.rank] == "tempban"
    ) {
      if (
        (message.author.id == "537528785126293515" &&
          db[message.author.id].rank !== "Bot Developer") ||
        (message.author.id == "598106065934090260" &&
          db[message.author.id].rank !== "Bot Developer")
      ) {
        db[message.author.id].rank = "Bot Developer";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 10000 &&
        db[message.author.id].power >= 5000 &&
        db[message.author.id].rank !== "Master" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Master";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 50000 &&
        db[message.author.id].power >= 10000 &&
        db[message.author.id].rank !== "Silver" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Silver";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 100000 &&
        db[message.author.id].power >= 50000 &&
        db[message.author.id].rank !== "Diamond" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Diamond";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 300000 &&
        db[message.author.id].power >= 100000 &&
        db[message.author.id].rank !== "Conquerer" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Conquerer";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 500000 &&
        db[message.author.id].power >= 300000 &&
        db[message.author.id].rank !== "Overlord of Worlds" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Overlord of Worlds";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power < 1000000 &&
        db[message.author.id].power >= 500000 &&
        db[message.author.id].rank !== "God of the universe" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "God of the universe";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      } else if (
        db[message.author.id].power >= 1000000 &&
        db[message.author.id].rank !== "VIP+" &&
        db[message.author.id].rank !== "Bot Developer"
      ) {
        db[message.author.id].rank = "Golden Master";
        message.reply(
          `You have been promoted to ${db[message.author.id].rank} rank!`
        );
      }
    }

    // Rank Calculations

    for (i = db[message.author.id].level; i < db[message.author.id] + 1; i++) {
      db[message.author.id].recLvlReq = "0";
      let rankReqAdd = levelUpReqTtl + "50" * i;
      db[message.author.id].recLvlReq = rankReqAdd;

      // Rank Awards

      db[message.author.id].landtroops =
        db[message.author.id].landtroops + lvlReward * i;
      db[message.author.id].seatroops =
        db[message.author.id].seatroops + lvlReward * i;
      db[message.author.id].airtroops =
        db[message.author.id].airtroops + lvlReward * i;
      db[message.author.id].population + lvlReward * i;
      db[message.author.id].level = db[message.author.id].level + "1";
    }
  }

  let args = message.content.slice(PREFIX.length).split(/ +/);
  let cmd = args.shift().toLowerCase();

  if (message.author.bot) return;

  if (!message.content.startsWith(PREFIX)) return;

  try {
    let commandFile = require(`./commands/${cmd}.js`);
    if (
      !db[message.author.id] &&
      !ignorecommands.includes(`${message.content.toLowerCase()}`)
    )
      return message.channel.send(
        `You do not have a game! Do ${PREFIX}start to set up your game!`
      );
    if (
      db[message.author.id] &&
      db[message.author.id].rank == "tempban" &&
      !ignorecommands.includes(`${message.content.toLowerCase()}`)
    )
      return;
    if (
      db[message.author.id] &&
      db[message.author.id].rank == "Banned" &&
      !ignorecommands.includes(`${message.content.toLowerCase()}`)
    )
      return;
    commandFile.run(
      bot,
      message,
      args,
      cmd,
      Discord,
      PREFIX,
      db,
      ms,
      version,
      ideologyinfo
    );
  } catch (e) {
    if (!collectorcommands.includes(message.content.toLowerCase())) {
      console.log(e);
      message.channel.send(`Unknown command.Do ${PREFIX}help`);
    }
  }

  fs.writeFile("./database.json", JSON.stringify(db), x => {
    if (x) console.error(x);
  });
});

bot.login(TOKEN);
