exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
  if(db[message.author.id].rank == 'Banned') return;

    let userTagged = message.mentions.users.first()
    let sender = message.author

    if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {
        if(message.mentions.users.size < 1) {
            message.channel.send('Unbanned user not defined.')
        } else {

          if (db[userTagged.id].rank != 'Banned' || db[userTagged].rank != 'tempban') {
            message.reply('User is not Banned.')
          } else {
          userTagged.send('You have been unbanned from the NewDawns™ Game Engine.')
          message.reply(`Unbanned ${userTagged.username}`)
          db[userTagged.id].rank = 'Newbie'
            }  
          } 
      } else {
        message.channel.send('Access Denied')
      }
    }
