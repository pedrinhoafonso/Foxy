module.exports = {
    name: "ponpon",
    aliases: ['ponpon', 'pon', 'ponponpon'],
    cooldown: 5,
    guildOnly: true,
    
    async execute(client, message, args) {

        const { MessageEmbed } = require("discord.js")
        var ponpon = [
            'https://cdn.discordapp.com/attachments/776930851753426945/809837318331695165/tenor.gif',
            'https://cdn.discordapp.com/attachments/776930851753426945/809837318331695165/tenor.gif',
            'https://cdn.discordapp.com/attachments/776930851753426945/809837318331695165/tenor.gif'
        ]
        var rand = ponpon[Math.floor(Math.random() * ponpon.length)];

        let embed = new MessageEmbed()
        
        .setColor("006cb7")
        .setTitle("PONPONPON :3")
        .setURL('https://www.youtube.com/watch?v=yzC4hFK5P3g')
        .setDescription(`${message.author} **Está dançando ponpon**`)
        .setImage(rand)

        message.reply(embed)
    }
}