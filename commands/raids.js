exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
  const ms = require('parse-ms')
    if(db[message.author.id].rank == 'Banned') return;

  let raidNews = [`Capture and secure the abandoned underground base`,'Explore and find new unclaimed land',`Fertilise the fields of the farmers`,'Protect city Caskonat from the invading giants', 'A Rogue 787 is in the air. We do not know its intentions. Shoot it down.']
    let raidType = [`The south oceans of Corsola`,`The north lands of ThunderGuard`,`${db[message.author.id].country} country's lands`]
    let raidPowerRequire = [`2000`,'7000','3500','13000','9500']
    let raidTime = [`4`,'10','7','12','8']
    let raidSphere = [`sea`,`land`,'air', 'land','air']
    let raidTroopsRequire = [`1500`,'1000','500','10000','5000']
    let landSize = [50,100,0,20,0]
    let expgain  = [600,1700,1000,3000,2200]
    let randomPick  = db[message.author.id].raidpicknumber
    let debugging = false 
    
    
    
   let timeObj = ms(72000000 - (Date.now()- db[message.author.id].raidtime))

    
   
    let landtroops = db[message.author.id].landtroops
    let airtroops = db[message.author.id].airtroops
    let seatroops = db[message.author.id].seatroops
         
    if (debugging = false || message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {

    if(db[message.author.id].raidstatus < 0 ){
    if (db[message.author.id].raidtime!== null && 72000000 - (Date.now()- db[message.author.id].raidtime) < 0){
    
    
  db[message.author.id].raidpicknumber = Math.floor((Math.random() * raidType.length));
      randomPick  = db[message.author.id].raidpicknumber 
      
  db[message.author.id].raidtime = Date.now()
  let timeObj = ms(Date.now())
  db[message.author.id].raidstatus = -2
      
    }
    var myInfo = new Discord.RichEmbed()
  .setTitle('Daily Raids')
  .setThumbnail('https://i.imgur.com/O0j6Tty.png')
   .setDescription(`Raid resets in: **${timeObj.hours}h ${timeObj.minutes}m**`)
   .addField('Raid Info', raidNews[randomPick])
   .addField('Raid Location', raidType[randomPick])
  .addField('Raid Rewards',`Land Size: ${landSize[randomPick]*(db[message.author.id].level/2)} \n  EXP: ${expgain[randomPick]*(db[message.author.id].level/2)}`)
   .addField('Power Requirement', raidPowerRequire[randomPick])
   .addField('Raid Time', raidTime[randomPick] +'h')
   .addField('Raid Biome', raidSphere[randomPick])
   .addField('Raid Troops Requirement', raidTroopsRequire[randomPick] + ' '+raidSphere[randomPick] + 'troops')
   .setColor('#0099ff')
   .setFooter(`Type ${PREFIX}startraid to start the raid`)
   message.channel.send(myInfo)

   
    const filter = m =>  m.author.id === message.author.id && m.content === `n!startraid`
     const collector = message.channel.createMessageCollector(filter)
      collector.on('collect', m => {
        
      if (db[message.author.id].raidstatus == -1)return message.channel.send('You already completed the raid!')
    if (db[message.author.id].power >= raidPowerRequire[randomPick]) {
        if (raidSphere[randomPick] === 'land') {
            if (db[message.author.id].landtroops >= raidTroopsRequire[randomPick]) {
              message.channel.send(`Raid started! The raid will complete in another ${raidTime[randomPick]}hrs. *Use ${PREFIX}raids to view your raid information and progress*`)
              message.reply('Land')
              
              db[message.author.id].raidmissiontime = Date.now()
              db[message.author.id].raidstatus = 1
              
            } else {
                message.channel.send('Requirement not met.')
            }
        } else if (raidSphere[randomPick] === 'sea') {
            if (db[message.author.id].seatroops >= raidTroopsRequire[randomPick]) {
              message.channel.send(`Raid started! The raid will complete in another ${raidTime[randomPick]}hrs *Use ${PREFIX}raids to view your raid information and progress*`)
              message.reply('Sea')

              db[message.author.id].raidmissiontime = Date.now()
              db[message.author.id].raidstatus = 1
                
            } else {
                message.channel.send('Requirement not met.')
            }
        } else if (raidSphere[randomPick] === 'air') {
            if (db[message.author.id].airtroops >= raidTroopsRequire[randomPick]) {
              message.channel.send(`Raid started! The raid will complete in another ${raidTime[randomPick]}hrs *Use ${PREFIX}raids to view your raid information and progress*`)
              message.reply('Air')

              db[message.author.id].raidmissiontime = Date.now()
              db[message.author.id].raidstatus = 1
              
                
            } else {
                message.channel.send('Requirement not met.')
            }
        } else {
            message.channel.send('Requirement not met.')
        }
    } else {
        message.channel.send('Requirement not met.')
    }
   })
      

} else{
  message.channel.send(raidTime[randomPick])
      let raidtime = ms(raidTime[randomPick]*3600000 - (Date.now()- db[message.author.id].raidmissiontime))
      if (db[message.author.id].raidmissiontime!== null && raidTime[randomPick]*3600000 - (Date.now()- db[message.author.id].raidmissiontime) > 0){
      var myInfo = new Discord.RichEmbed()
  .setTitle('Currently on a raid')
  .setThumbnail('https://i.imgur.com/O0j6Tty.png')
   .setDescription(`Here is your current raid information`)
   .addField('RaidNews', raidNews[randomPick])
   .addField('Location', raidType[randomPick])
  .addField('Raid Rewards',`Land Size: ${landSize[randomPick]*(db[message.author.id].level/2)} \n  EXP: ${expgain[randomPick]*(db[message.author.id].level/2)}`)
   .addField('Raid Time', `**${raidtime.hours}h ${raidtime.minutes}m** left until completion!`)
   .setColor('#0099ff')
   .setFooter(`You can claim your rewards using ${PREFIX}raids when the raid is completed! `)
     message.channel.send(myInfo)
  }else{
        var myInfo = new Discord.RichEmbed()
  .setTitle(' :triangular_flag_on_post: Raid claim :triangular_flag_on_post: ')
  .setThumbnail('https://i.imgur.com/O0j6Tty.png')
   .setDescription(`**Raid completed!**`)
   .addField('**Rewards**', ` EXP: ${expgain[randomPick]} \n Landsize: ${landSize[randomPick]}`)
  .setFooter(`You have to wait for raids to reset to try another raid!`)
   message.channel.send(myInfo)
    db[message.author.id].exp += expgain[randomPick]*(db[message.author.id].level/2)
    db[message.author.id].landsize += landSize[randomPick]*(db[message.author.id].level/2)
        db[message.author.id].raidstatus = -1
  


      }
      
      
    }

  
  } else {
    message.reply('Raid Command debugging in Process. Sorry for your inconvenience caused. The command will be up shortly.')
  }
}