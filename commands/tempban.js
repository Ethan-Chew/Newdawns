exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {

let userTagged = message.mentions.users.first()
    let sender = message.author
   
    if (message.author.id == '537528785126293515' || message.author.id =='598106065934090260') {
      if(!db[userTagged.id]) return message.channel.send('This user does not have data!')
        if(message.mentions.users.size < 1) return message.channel.send('Ban user not defined.')
      try{
      let msg = message;
      msg = msg.content.split(' ')
      
      let timemeasure = msg[2].substring((msg[2].length - 1), (msg[2].length))
      let returntime = msg[2].substring(0, (msg[2].length - 1))
      
      switch (timemeasure) {
				case 's':
					returntime = returntime * 1000;
					break;

				case 'm':
					returntime = returntime * 1000 * 60;
					break;

				case 'h':
					returntime = returntime * 1000 * 60 * 60;
					break;

				case 'd':
					returntime = returntime * 1000 * 60 * 60 * 24;
					break;

				default:
					returntime = returntime * 1000;
					break;
			}
     
      msg.shift();
				msg.shift();
      msg.shift();
      
				var content = msg.join();
				content = content.replace(/,/g, ' ');
      
        db[userTagged.id].rank = 'tempban'
      msg = message;
      msg = msg.content.split(' ')
				message.reply(`${userTagged} has been banned for ${content} for ${msg[2].substring(0, (msg[2].length - 1))}${timemeasure}`)
      userTagged.send(`:warning: | ${userTagged.username} You have been temp banned from NewDawns for ${msg[2].substring(0, (msg[2].length - 1))}${timemeasure}, For: ${content}. \n If you think this is a mistake, contact the developers here: https://discord.gg/3xQmCvp or use the command n!appeal.`)
      bot.setTimeout(function () {
        
		userTagged.send(`You have been unbanned from NewDawns! Data has been saved.`)
        
		db[userTagged.id].rank = 'Newbie'
        
        
      },returntime)
      
      }catch(e){
        message.channel.send(`an error occured. Usage: ${PREFIX}tempban <@user> <time> <message>`)
      }
      
    } else {
		message.channel.send('Access Denied')
	}
      
            

}