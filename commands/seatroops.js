exports.run = async(bot, message, args, cmd, Discord, PREFIX, db,ms) => {
  if(db[message.author.id].rank == 'Banned') return;
   
    
    let timeObj = ms(7.2e+6 - (Date.now()- db[message.author.id].seatroopscd))    

if (db[message.author.id].seatroopscd !== null && 7.2e+6- (Date.now()- db[message.author.id].seatroopscd) > 0){
         message.channel.send(`:stopwatch: |Sorry ${message.author.username}, please wait for **${timeObj.hours}h ${timeObj.minutes}m** to use that command again!`)
     } else {
   let iRandomNumber=(Math.floor(Math.random()* 20+1))*50
   
   db[message.author.id].seatroops+=iRandomNumber
   message.channel.send(' :white_check_mark: You gained '+iRandomNumber + ' Sea troops! You now have '+db[message.author.id].seatroops+' Sea troops! :ocean: ')
   db[message.author.id].seatroopscd =Date.now()
     }
   }