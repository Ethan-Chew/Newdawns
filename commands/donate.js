exports.run = async(bot, message, args, cmd, Discord, PREFIX, db,ms, version, ideologyinfo) => {
  if(db[message.author.id].rank == 'Banned') return;

  var myInfo = new Discord.RichEmbed()
  .setTitle('*Donation* :dollar: ')
  .setColor(0x228B22)
  .setDescription('*You can donate to support the developers! Donating also gives you extra perks and ranks!*')
  .addField('***Our Patreon***','https://www.patreon.com/newdawns')
  .addField('***Patreon perks***',` **Early access $1** \n -Early access to new features of our bot! \n \n **VIP $2.50** \n -More money earned when claiming resources \n -A Special VIP Role in our Support Discord Server \n -Faster support time \n \n **MVP $6** `)
  message.channel.send(myInfo)
  
}