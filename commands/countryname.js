exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, ms) => {
    if(db[message.author.id].rank == 'Banned') return; 
    
    let debug = false
    let msLength = 1036800000
    let commandWork = false

    if (debug = true) {
        msLength = 0
    } else {
        msLength = 1036800000
    }
    if (commandWork = true) {
      let timeObj = ms(msLength - (Date.now()- db[message.author.id].country))    

      message.channel.send('Highly Unstable Command.')
      
      if (db[message.author.id].country !== null && msLength- (Date.now()- db[message.author.id].country) > 0){
          message.channel.send(`:stopwatch: | Sorry ${message.author.username}, please wait for **${timeObj.days}d ${timeObj.hours}h ${timeObj.minutes}m** to use that command again!`)
        
      }else{
         if (!args.length) {
             message.channel.send('No new country name Specified')
         } else if (db[message.author.id].country == args[0]){
             message.channel.send('New Country name cannot be the same as Old Country name')
         } else {
             db[message.author.id].country === args[0]
             message.channel.send(`Country Name Changed to ${args[0]}`)
         }
      }
    } 
  }
  
