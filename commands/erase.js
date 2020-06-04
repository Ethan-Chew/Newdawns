exports.run = async(bot, message, args, cmd, Discord, PREFIX,db,cd, ms) => {
  if(db[message.author.id].rank == 'Banned') return;
  
message.channel.send('You already have data! Would you like to erase it? (y/n)')
  
  let yn = 0
const filter = m =>  m.author.id === message.author.id
const collector = message.channel.createMessageCollector(filter, { time: 10000 });

collector.on('collect', m => {
  
  if (m.content ==='y'){
    
	delete db[message.author.id]
  message.channel.send(`Success! Do ${PREFIX}start to start a game!`)
    yn = 1
  collector.stop()
  }else if (m.content ==='n'){
  message.channel.send('Data erase function cancelled.Your data is still saved!')
  yn = 1
  collector.stop()
  }
  
});

collector.on('end', collected => {
  if (yn = 0){
    message.channel.send('timed out!')
    
  }
	
  })
             
             
};      

