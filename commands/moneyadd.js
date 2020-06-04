exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, ms, cash) => {
    if(db[message.author.id].rank == 'Banned') return;
    
   if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260'){       
       
    let moneyAdd = Integer.parseInt(message.content.slice(11).trim())
    if (moneyAdd.length < 1) {
        message.channel.send('Please Specify a amount to add.')
    } else {
       
        db[message.author.id].money += moneyAdd
        message.channel.send(`You have added $${moneyAdd} to your balance. New balance: $${db[message.author.id].money}`)       
    }
     
   } else {
       message.channel.send('Access Denied')
   }
}

