exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, armypower) => {
    if(db[message.author.id].rank == 'Banned') return;
let member = message.mentions.members.first();

  let info = message.author.id
  if(message.mentions.users.size < 1){
 let author = message.author.id
  
let money = db[author].money
let airtroops = db[author].airtroops
let landtroops = db[author].landtroops
let seatroops = db[author].seatroops
let population = db[author].population
let power = db[author].power
let totalArmyPower = db[author].power
let landSize = db[author].landsize
let ideology = db[author].ideology

var userInfo = new Discord.RichEmbed()
             .setTitle(message.author.username)
             .setColor(0x008000)
             .setThumbnail(message.author.avatarURL)
             .addField('Rank:', `${db[message.author.id].rank}`)
             .addField ('Country :earth_americas: ' ,`${db[message.author.id].country} `)
             .addField ('Ideology', ideology)
             .addField ('Wealth :money_with_wings:  ', `$${money}`)
             .addField ('Landsize :island: ', `${landSize} km²` )
             
             .addField('Levels :bar_chart: ',`Level: ${db[message.author.id].level} \n EXP: ${db[message.author.id].exp} / ${db[message.author.id].level*500}`)
             .addField ('Population Size :person_with_blond_hair: ', `${population} people`)
             .addField ('Troops :guardsman: ',`Air troops: ${db[message.author.id].airtroops}\n Land troops: ${db[message.author.id].landtroops}\n Sea Troops: ${db[message.author.id].seatroops}`)
             .addField('Vehicles',`:airplane: ${db[message.author.id].planes} \n :blue_car: ${db[message.author.id].cars} \n :cruise_ship:  ${db[message.author.id].ships}`)
             .addField ('Army Power', totalArmyPower)
             .setFooter ('NewDawns™ Game Engine')
  
    message.channel.send(userInfo).then(sentMsg => sentMsg.delete(60000))
  } else if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {
    
    let member = message.mentions.members.first()
    
    if(!db[member.id]) return message.channel.send('That user does not have data')
  
let money = db[member.id].money
let airtroops = db[member.id].airtroops
let landtroops = db[member.id].landtroops
let seatroops = db[member.id].seatroops
let population = db[member.id].population
let power = db[member.id].power
let totalArmyPower = db[member.id].power
let landSize = db[member.id].landsize
let ideology = db[member.id].ideology

var userInfo = new Discord.RichEmbed()
             .setTitle(member.username)
             .setColor(0x008000)
             .setThumbnail(member.user.avatarURL)
             .addField('Rank:', `${db[member.id].rank}`)
             .addField ('Country :earth_americas: ' ,`${db[member.id].country} `)
             .addField ('Ideology', ideology)
             .addField ('Wealth :money_with_wings:  ', `$${db[member.id].money}`)
             .addField ('Landsize :island: ', `${db[member.id].landSize} km²` )
             
             .addField('Levels :bar_chart: ',`Level: ${db[member.id].level} \n EXP: ${db[member.id].exp} / ${db[member.id].level*500}`)
             .addField ('Population Size :person_with_blond_hair: ', `${population} people`)
             .addField ('Troops :guardsman: ',`Air troops: ${db[member.id].airtroops}\n Land troops: ${db[member.id].landtroops}\n Sea Troops: ${db[member.id].seatroops}`)
             .addField('Vehicles',`:airplane: ${db[member.id].planes} \n :blue_car: ${db[member.id].cars} \n :cruise_ship:  ${db[member.id].ships}`)
             .addField ('Army Power', totalArmyPower)
             .setFooter ('NewDawns™ Game Engine')
  
    message.channel.send(userInfo).then(sentMsg => sentMsg.delete(60000))
     } else {
       message.channel.send('Do not @ people.')
     }
    
}

