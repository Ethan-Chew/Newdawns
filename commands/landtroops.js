exports.run = async(bot, message, args, cmd, Discord, PREFIX, db,ms) => {
  if(db[message.author.id].rank == 'Banned') return;
   
    
         let timeObj = ms(3.6e+6 - (Date.now()- db[message.author.id].landtroopscd))    
    
    if (db[message.author.id].landtroopscd !== null && 3.6e+6- (Date.now()- db[message.author.id].landtroopscd) > 0){
              message.channel.send(`:stopwatch: | Sorry ${message.author.username}, please wait for **${timeObj.hours}h ${timeObj.minutes}m** to use that command again!`)
          }else{
        let iRandomNumber=(Math.floor(Math.random()* 20+1))*100
        
        db[message.author.id].landtroops+=iRandomNumber
        message.channel.send(':white_check_mark: You gained '+iRandomNumber + ' land troops!You now have '+db[message.author.id].landtroops+' land troops! :guardsman: ')
        db[message.author.id].landtroopscd =Date.now()
          }
        }
