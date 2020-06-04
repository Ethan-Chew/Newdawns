exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, ms) => {

    // Check for User Banned/Temp Banned
    if(db[message.author.id].rank == 'Banned' || db[message.author.id].rank == 'tempban'){
      
    
        
    
        message.channel.send('The Appeal format is sent to you in your DMs')

        message.author.send('1. Date and Time you were banned. (DD/MM/YY,GMT)')
        message.author.send('2. What was the Ban Message?')
        message.author.send('3. Moderator that Banned You?')
        message.author.send('4. Perm Ban? Temp Ban? (If Tempban, include length)')
        message.author.send('5. Why do you think you deserve a Appeal/Reduce')
        message.author.send('6. Do you agree that if you repeat the mistake, you will be Perm Banned?')
        message.author.send('7. Screenshot of Ban Message')
        message.author.send('Copy the Ban Appeal Format, and DM CrypticDevv#9411')
        message.author.send('Your Appeal will take 1 Day - 7 Days to be reviewed.')
    }else{
      message.channel.send('You are not Banned or Tempbanned.')
    }
    
}