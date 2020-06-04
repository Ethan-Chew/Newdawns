exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, version) => {
  if(db[message.author.id].rank == 'Banned') return;
  
  const verse = "Alpha 4.2.95"
  
var myInfo = new Discord.RichEmbed()
            .setTitle('NewDawns™')
            .setThumbnail('https://i.imgur.com/O0j6Tty.png')
        
             .addField('Hello!','I am NewDawns!')
             .addField('Developers:','Existance#3316, CrypticDevv#9411')
             .addField('How do I see all the commands?','Do n!help')
             .addField('What am i about?','In am NewDawns, a game bot,where you can expand your army, choose an ideology, go to war, increase your population and economy')
             .addField('Want to support us?','Become a patreon member here! https://www.patreon.com/newdawns')
             .addField('Wannt to hang out or contact the developers?','Join the Offical Discord Server here: https://discord.gg/3xQmCvp')
             .addField('Want to invite me to your server?','Use this link: https://discordapp.com/oauth2/authorize?client_id=603546206311809044&scope=bot&permissions=325696')
            
             .addField('Version',verse)
             .setColor(0x008000)
             .setFooter(`Looking for your stats and data? Do ${PREFIX}profile`)
             message.channel.send(myInfo)
          }
