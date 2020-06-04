exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, power) => {
  if(db[message.author.id].rank == 'Banned') return;
  
  let currentplanes = ['1: Cessna ', '2: F15']
  let prices = ['90000', '1000000']
  let capacity = ['3', '2']
  let speed = ['100 knts', '900 knts']
  let firePower = ['0', '100']
  let length = prices.length
  let selectedPlane = message.content.slice(8).trim() -1
  let cash = db[message.author.id].money
  let Power = db[message.author.id].power
  let yn = 0
const filter = m =>  m.author.id === message.author.id
const collector = message.channel.createMessageCollector(filter, { time: 10000 });
if (selectedPlane.length > 1) return message.channel.send (`That purchase number does not exist!`)
  if(selectedPlane == -1){

    var myInfo = new Discord.RichEmbed()
    .setTitle('Planes  :airplane_small: ')
    .setThumbnail('https://i.imgur.com/O0j6Tty.png')

     .addField('Types', currentplanes)
     .addField('Prices', prices)
     .addField('Capacity', capacity)
     .addField('Speed', speed)
     .addField('Fire Power', firePower)
     .setColor(0x008000)
     .setFooter(`Purchase a plane using ${PREFIX}planes [number] (from 1 - ${currentplanes.length})`)

    message.channel.send(myInfo)
    
    } else {
        message.channel.send(`You have selected ${currentplanes[selectedPlane]} for ${prices[selectedPlane]}. Confirm purchase? (y/n)`)


    collector.on('collect', m => {
  
        if (m.content ==='y'){
        if (db[message.author.id].money - prices[selectedPlane] < 0) return message.channel.send('You do not have enough cash!')
        
        message.channel.send(`You have bought ${currentplanes[selectedPlane]} for ${prices[selectedPlane]}`)
        db[message.author.id].money -= prices[selectedPlane]
        Power = firePower[selectedPlane]
        db[message.author.id].firepower += Power
        message.channel.send(`New Balance: ${db[message.author.id].money}`)
        db[message.author.id].planes.push(currentplanes[selectedPlane])
          yn = 1
        collector.stop()
        }else if (m.content ==='n'){
        message.channel.send('Plane purchase cancelled')
          yn = 1
        collector.stop()
        }
        
      });
      
      collector.on('end', collected => {
        if (yn = 0){
          message.channel.send('Timed out!')
          
        }
          
        })

    }
}

