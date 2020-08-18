const Discord = require("discord.js");
const config = require("./Storage/config.json");
const packages = require("./package.js")
const bot = new Discord.Client({
    disableEveryone: true,
    autoReconnect: true,
    disabledEvents: ["TYPING_START"],
    partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'REACTION']
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}

load();
bot.login("NzM1ODc4NTgyODc4MDc3MDY5.XxmqVg.IdoxgbjelygMpoPhxwHRr9sh2O0")
