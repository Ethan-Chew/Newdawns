exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, ms) => {
  if(db[message.author.id].rank == 'Banned') return;
  
    let timeObj = ms(14400000 - (Date.now()- db[message.author.id].airtroopscd))    
    
    if (db[message.author.id].airtroopscd !== null && 14400000- (Date.now()- db[message.author.id].airtroopscd) > 0){
        message.channel.send(`:stopwatch: | Sorry ${message.author.username}, please wait for **${timeObj.hours}h ${timeObj.minutes}m** to use that command again!`)
      
    }else{
      
       let iRandomNumber=(Math.floor(Math.random()* 20+1))
       db[message.author.id].airtroops+=iRandomNumber
        message.channel.send(':white_check_mark: You gained '+iRandomNumber + ' Air Troops! You now have '+db[message.author.id].airtroops+' Air troops! :airplane: ')
       
        
      db[message.author.id].airtroopscd = Date.now()
    }
}
