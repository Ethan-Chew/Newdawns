exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
  if(db[message.author.id].rank == 'Banned') return;

    let userTagged = message.mentions.users.first()
    let sender = message.author

    if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {
        if(message.mentions.users.size < 1) {
            message.channel.send('Ban user not defined.')
        } else {
          message.reply(`Banned ${userTagged.username}`)
          userTagged.send('You have been Banned from the NewDawns™ Game Engine. DM @CrypticDevv#9411 for more info or run command n!appeal')
          db[userTagged.id].rank = 'Banned'
            collector.stop()  
          }           
        } else {
        message.channel.send('Access Denied')
    }
}