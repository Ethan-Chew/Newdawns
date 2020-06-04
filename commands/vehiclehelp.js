exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, version) => {
    if(db[message.author.id].rank == 'Banned') return;
    
    var myInfo = new Discord.RichEmbed()
    .setTitle('Vehicles Help')
    .setThumbnail('https://i.imgur.com/O0j6Tty.png')
     .addField(`How do I buy Vehicles?`,`Do ${PREFIX}planes, ${PREFIX}ships or ${PREFIX}cars`)
     .addField('What is Fire Power?','Fire Power is the amount of fighing energy your Vehicle has.It contributes to your overall power')
     .addField(`How do I get troops?`,`We have 3 types of troops! Land, Air and Sea! Do ${PREFIX}landtroops, ${PREFIX}airtroops or ${PREFIX}seatroops to gain a random number of troops!`)
     .addField(`How do I get vehicles?`,`Do ${PREFIX}cars, ${PREFIX}planes or ${PREFIX}ships!`)
     .setColor(0x008000)
     .setFooter(`Powered by NewDawn™ Game Engine`)
     message.channel.send(myInfo)
}
  