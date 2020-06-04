exports.run = async(bot, message, args, cmd, Discord, PREFIX,db,cd, ms, ideologyinfo) => {
  

  let guild = message.guild.id
  let Developer1 = '537528785126293515';
  let Developer2 = '598106065934090260';
  

  if(db[message.author.id]) return message.channel.send('You already have data!')
  
  
  db[message.author.id]= {
  
    country: 'ûü²æú÷²ÿûü÷�Õýæ',
    ideology: 'ûü²æú÷²ÿûü÷�Õýæ',
    airtroops: 500,
    landtroops: 1500,
    seatroops: 800,
    airtroopscd: Date.now(),
    landtroopscd: Date.now(),
    seatroopscd: Date.now(),
    lastclaim: Date.now(),
    money: 100000,
    landsize: 360.75,
    population: 1000000,
    power: 100,
    exp: 0,
    level: 0,
    cash: 100000,
    rank: 'Newbie',
    raidtime: Date.now(), 
    raidpicknumber: 0,
    raidmissiontime: 0,
    raidstatus: -2,
    ships: [],
    cars: [],
    planes: [],
    firepower: 0,
    civilRights: 0,
    ecoPower: 0,
    farmPower: 0,
    manPower: 0

  }

  message.channel.send('What is your country name?')
  
let  filter = m => m.author.id === message.author.id
let  collector = message.channel.createMessageCollector(filter, { time: 35000 });

collector.on('collect', m => {

message.channel.send(`Your country name is now called ${m.content}`)
db[message.author.id].country = m.content

  collector.stop()
});

collector.on('end', collected => {

  if (db[message.author.id].country === "ûü²æú÷²ÿûü÷�Õýæ"){
    message.channel.send('Timed out!')
    delete db[message.author.id]
    return;
    
  } else {
  


const item = ["LIBERALISM","COMMUNISM",'MONARCHY','CONSERVATISM','THEOCRACY', 'DEVELOPER']

const filter = response => {
	return item.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};

message.channel.send('What is your ideology? *Ideology information has been sent to you!*').then(() => {
  
    message.member.send(ideologyinfo)
    message.channel.awaitMessages(filter, { maxMatches: 1, time: 60000, errors: ['time'] })

		.then(collected => {

      db[message.author.id].ideology = collected.first().content.toLowerCase()
      
      if (collected.first().content.toLowerCase() === 'developer'){
        if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {
          message.channel.send(`Welcome, ${message.author.username}`)
          db[message.author.id].money = '9999999999999999999'
          db[message.author.id].cash = db[message.author.id].money
          message.channel.send('Max stats given to you.')
        } else {
          message.channel.send('Developer Ideology Access Denied. Please Restart the start process.')
          db[message.author.id].ideology = "ûü²æú÷²ÿûü÷�Õýæ"
          db[message.author.id].country = "ûü²æú÷²ÿûü÷�Õýæ"
          return
        }
      } else{

      message.channel.send(`Your ideology is now ${collected.first().content.toLowerCase()}`)    
      message.reply(`Congrats!:tada: you have successfully set up your game! DO ${PREFIX}help for more info!`)
      }
      
		})
		.catch(collected => {
      
      
			message.channel.send('Timed out!')
      delete db[message.author.id]
      return;
		});
});

  


  

}


})
}       