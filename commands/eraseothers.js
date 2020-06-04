exports.run = async(bot, message, args, cmd, Discord, PREFIX,db,cd, ms) => {
    
    
    let userTagged = message.mentions.users.first()
    let sender = message.author

    if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {
        if(message.mentions.users.size < 1) {
            message.channel.send('Erased user not defined.')
        } else {
            delete db[message.mentions.users.first().id]
            message.channel.send(`Deleted ${userTagged}'s data.`)
            collector.stop()  
          }           
        } else {
        message.channel.send('Access Denied.')
    }  
  }      
  
  