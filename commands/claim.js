exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, ms) => {
  if(db[message.author.id].rank == 'Banned') return;
  
  let timeObj = 0
   let claimtime = Date.now()- db[message.author.id].lastclaim   
         if (claimtime > 4.32e+7){
          timeObj = ms(4.32e+7)
         }else{
           timeObj = ms(Date.now()- db[message.author.id].lastclaim)
           
         }
         
         
         
  
        
   
   if (claimtime > 4.32e+7){
    claimtime = 4.32e+7
   }
  
  let economypower = 100
  let farmingpower = 100 
  let populationpower = 100
  let ideology = db[message.author.id].ideology
  if (ideology === 'communism'){
  economypower = 20
  farmingpower = 180
  populationpower = 10
}else if(ideology === 'conservatism'){
  economypower = 180
  farmingpower = 50
  populationpower = 180
               
               
 }else if (ideology === 'liberalism'){
   populationpower = 140
   economypower = 180
   farmingpower = 50
           
   }else if (ideology === 'monarchy'){
     economypower = 130
     farmingpower = 50
     populationpower = 80
     
   }else if (ideology === 'theocracy'){
     economypower = 110
     farmingpower = 130
     populationpower = 40
     
   } else if (ideology === 'developer') {
      economypower = 500
      farmingpower = 500
      populationpower = 500
   } else{
     message.channel.send('an error occured in detecting your ideology')
   }
  let moneyclaim = Math.floor(claimtime/11000/100*economypower)
  let expclaim = Math.floor(claimtime/20000/100*farmingpower)
  let populationclaim = Math.floor(claimtime/1950000/100*populationpower)
            
            
            var myInfo = new Discord.RichEmbed()
            .setTitle("Claimed! :gift: ")
             .addField('Rewards claimed for',`${timeObj.hours}h ${timeObj.minutes}m :alarm_clock: `)
             .addField('Amount Claimed $',` Money: $${moneyclaim} \n Experience points: ${expclaim} xp \n population: ${populationclaim} people`)
             .setColor(0x008000)
             .setFooter(`Tip: Claims max at 12hrs`)
    
         message.channel.send(myInfo)

  db[message.author.id].lastclaim = Date.now()
  db[message.author.id].money += moneyclaim
  db[message.author.id].exp += expclaim
  db[message.author.id].population += populationclaim
  db[message.author.id].cash += moneyclaim
  if(db[message.author.id].exp > db[message.author.id].level*500){
    db[message.author.id].level ++
    db[message.author.id].exp = 0
    message.reply(`You levelled up! :tada: You are now level ${db[message.author.id].level}!`)
    
    
  }
    
}