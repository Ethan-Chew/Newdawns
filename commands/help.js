exports.run = async(bot, message, args, cmd, Discord, PREFIX, db) => {

  
    message.reply('A DM is sent you containing the help message!');
        
      var myInfo = new Discord.RichEmbed()
                  .setTitle('NewDawns™ Help')
                  .setThumbnail('https://i.imgur.com/O0j6Tty.png')
                   .addField('How do i see my data?',`Use ${PREFIX}profile`)
                   .addField('How do I claim my resources?','Do n!claim')
                   .addField('How do I get troops?',`We have 3 types of troops! Land, Air and Sea! Do ${PREFIX}landtroops, ${PREFIX}airtroops or ${PREFIX}seatroops. This will give you a random number of troops`)
                   .addField('How do I get vehicles? :blue_car: ','Do n!vehiclehelp for more infomation!')
                   .addField('How do i start a game? :checkered_flag: ','Do n!start to set up data!')
                   
                   .addField('Bugs in the Game Engine? :beetle: ','Join the Offical Discord Server here: https://discord.gg/3xQmCvp')
                   .setColor(0x008000)
                   .setFooter(`Powered by NewDawn™ Game Engine`)
                   message.member.send(myInfo)
}
