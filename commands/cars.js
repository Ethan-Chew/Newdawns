exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
  if(db[message.author.id].rank == 'Banned') return;
  
  let car = ['1: Car', '2: Transport Vehicles', '3: Tank']
  let prices = ['8000', '200000', '700000']
  let capacity = ['4', '20', '5']
  let speed = ['150 km/h', '100 km/h', '50 km/h']
  let firePower = ['0', '0', '200']
  let length = prices.length

  let cash = db[message.author.id].money
  let Power = db[message.author.id].power
  let yn = 0
  const filter = m =>  m.author.id === message.author.id
  const collector = message.channel.createMessageCollector(filter, { time: 10000 });
  let selectedCar = message.content.slice(6).trim() -1
  if (selectedCar > car.length) return message.channel.send (`that purchase number does not exist!`)
  if (selectedCar == -1){
  var myInfo = new Discord.RichEmbed()
  .setTitle('Cars :blue_car: ')
  .setThumbnail('https://i.imgur.com/O0j6Tty.png')

   .addField('Types', car)
   .addField('Prices', prices)
   .addField('Capacity', capacity)
   .addField('Speed', speed)
   .addField('Fire Power', firePower)
   .setColor(0x008000)
   .setFooter( `Purchase a car using ${PREFIX}cars [number] (from 1 - ${car.length})`)
   message.channel.send(myInfo)
  
  } else {
  message.channel.send(`You have selected ${car[selectedCar]} for $${prices[selectedCar]}. Confirm purchase? (y/n)`)
 

    collector.on('collect', m => {
  
        if (m.content ==='y'){
          
        if (db[message.author.id].money - prices[selectedCar] < 0) return message.channel.send('You do not have enough cash!')
        message.channel.send(`You have bought ${car[selectedCar]} for ${prices[selectedCar]}`)
        db[message.author.id].money -= prices[selectedCar]
        db[message.author.id].firepower += firePower[selectedCar]
        db[message.author.id].cars.push(car[selectedCar])
        message.channel.send(`New Balance: ${db[message.author.id].money}`)
          
          yn = 1
        collector.stop()
        }else if (m.content ==='n'){
        message.channel.send('Car purchase cancelled')
          collector.stop()
          yn = 1
        }
         });
  
collector.on('end', collected => {
  if (yn = 0){
    message.channel.send('Timed out!')
    
      }
    
    })

  }
}