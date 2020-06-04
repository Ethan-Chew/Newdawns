exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, version, wars) => {
  if(db[message.author.id].rank == 'Banned') return;
    
    let userTagged = message.mentions.users.first()
    let sender = message.author

    if(message.mentions.users.size < 1) {
        message.channel.send('Enemy not Definied. Tag your Enemy')
    } else {
      if (userTagged.id == '537528785126293515' || userTagged.id =='598106065934090260') {

      }
      message.reply(`has challenged ${userTagged} to war! Do acceptwar to start!`)
      const filter = m =>  m.author.id === userTagged.id && m.content === `acceptwar`
     const collector = message.channel.createMessageCollector(filter, { time: 800000 });
      collector.on('collect', m => {
        message.channel.send(`War has started between ${db[m.author.id].country} and ${db[sender.id].country}!`)
        if (db[m.author.id].power > db[sender.id].power){
          message.channel.send(`${userTagged} won! :trophy: `)
          wars += wars + 1
          
        } else{
          message.channel.send(`${sender} won! :trophy: `)
          wars += wars + 1
        }
        collector.stop()
        
      })
      
        
        
        
    }
}
