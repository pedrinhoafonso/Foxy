const Discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: "serverinfo",
    aliases: ['serverinfo', 'aboutserver'],
    cooldown: 5,
    guildOnly: true,

    async execute(client, message, args) {
        
        let guild = client.guilds.cache.get(args[0]) || message.guild;

        var servericon = guild.iconURL();
        moment.locale('pt-br');
        const joinDiscord = moment(guild.createdAt).format('lll');
        const clientjoin = moment(guild.joinedTimestamp).format('lll');

        let region = {
            "brazil": "Brasil",
            "eu-central": "Central Europe",
                "singapore": "Singapore",
                "us-central": "U.S. Central",
                "sydney": ":Sydney",
                "us-east": "U.S. East",
                "us-south": "U.S. South",
                "us-west": "U.S. West",
                "eu-west": "Western Europe",
                "vip-us-east": "VIP U.S. East",
                "london": "London",
                "amsterdam": "Amsterdam",
                "hongkong": "Hong Kong",
                "russia": "Russia",
                "southafrica": "South Africa"
          };    
          
          
let verification = guild.verificationLevel
let partner = guild.partnered
if(partner == false) partner = "Não"
if(partner == true) partner = "Sim"

let rules = guild.rulesChannel
if(rules == null) rules = "Não"

let afk = guild.afkChannel
if(afk == null) afk = "Não"
var level = verification.replace("MEDIUM", 'Médio').replace("_HIGH", "Alto").replace("HIGH", "Alto").replace("VERY", "Muito ").replace("LOW", "Baixo").replace("NONE", "Sem verificação")

const embed = new Discord.MessageEmbed()
        .setColor('b2fba4')
        .setTitle(guild.name)
        .setThumbnail(servericon)
        .addFields(
            {name: ":crown: Owner", value: `${guild.owner}`, inline: true},
            { name: "<:info:718944993741373511> Owner ID", value: `\`${guild.ownerID}\``, inline: true},
            {name: ":earth_americas: Região", value: `${region[guild.region]}`, inline: true},
            {name: ":computer: Server ID", value: `\`${guild.id}\``, inline: true},
            { name: ":busts_in_silhouette: Membros", value: `${guild.memberCount}`, inline: true},
            {name: ":calendar: Criado em:", value: `${joinDiscord}`, inline: true},
            { name: ":star: Entrei aqui em:", value: `${clientjoin}`, inline: true},
            { name: ":computer: Shard ID", value: `${guild.shardID}`, inline: true},
            { name: "<a:sleeepy:803647820867174421> Canal AFK", value: `${afk}`, inline: true},
            { name: "<:rules:797183150475575337> Canal de regras", value: `${rules}`, inline: true},
            { name: "<:WindowsShield:777579023249178625> Nível de verificação", value: `${level}`, inline: true},
            { name: "<:DiscordPartner:763767066150305812> Servidor Parceiro:", value: `${partner}`, inline: true}
        )
    .setFooter("Caso não apareça o dono, peça para o dono do servidor executar o comando duas vezes ;) ")
        message.channel.send(embed)

    }
}