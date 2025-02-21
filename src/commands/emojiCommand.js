const Discord = require("discord.js");

module.exports = {
name: "emoji",
aliases: ['emoji', 'emojo'],
cooldown: 3,
guildOnly: true,
async execute(client, message, args) {
   
  if (!args[0])
    return message.channel.send(
      `**${message.author.username}, a sintaxe correta é:** ` +
        "`" +
        "f!emoji nomedoemoji`"
    );
  let emoji = message.guild.emojis.cache.find(emoji => emoji.name === args[0]);

  if (!emoji) {
    message.channel.send(
      "`" + args[0] + "` **não é um emoji deste servidor.**"
    );
  } else if (emoji.animated === true) {
    await message.channel.send({files: [
      {
        attachment: emoji.url,
        name: 'emoji_owo.gif'
      }
      ]});
  } else {
    await message.channel.send({files: [
      {
        attachment: emoji.url,
        name: 'emoji_owo.png'
      }
      ]});
  }
  
}

}