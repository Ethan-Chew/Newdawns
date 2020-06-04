exports.run = async(bot, message, args, cmd, Discord, PREFIX, db) => {
  if(db[message.author.id].rank == 'Banned') return;
  
    let ships = ['1: Jetski', '2: Motorboat', '3: Class A Battleship']
    let prices = ['30000', '80000', '500000']
    let capacity = ['2', '10', '300']
    let speed = ['35knts', '60knts', '30knts']
    let firePower = ['0', '2', '250']
    let length = prices.length
    let selectedShip = message.content.slice(7).trim() -1
    let yn = 0
    const filter = m =>  m.author.id === message.author.id
   const collector = message.channel.createMessageCollector(filter, { time: 10000 });
    let power = db[message.author.id].power

    if (selectedShip > length) return message.channel.send (`that purchase number does not exist!`)

    if (selectedShip == -1){
      
        var myInfo = new Discord.RichEmbed()
        .setTitle('Ships :cruise_ship: ')
        .setThumbnail('https://i.imgur.com/O0j6Tty.png')
    
         .addField('Types', ships)
         .addField('Prices', prices)
         .addField('Capacity', capacity)
         .addField('Speed', speed)
         .addField('Fire Power', firePower)
         .setColor(0x008000)
         .setFooter(`Purchase a ship using ${PREFIX}ships [number] (from 1 - ${ships.length})`)
        message.channel.send(myInfo)
    } else{
          message.channel.send(`You have selected ${ships[selectedShip]} for $${prices[selectedShip]}. Confirm purchase? (y/n)`)
        
            collector.on('collect', m => {
          
                if (m.content ==='y'){
                  if (db[message.author.id].money - prices[selectedShip] < 0) return message.channel.send('You do not have enough cash!')
                if (db[message.author.id].money - prices[selectedShip] < 0) return message.channel.send('You do not have enough cash!')
                message.channel.send(`You have bought ${ships[selectedShip]} for ${prices[selectedShip]}`)
                db[message.author.id].money -= prices[selectedShip]
                db[message.author.id].firepower += firePower[selectedShip]
                db[message.author.id].ships.push(ships[selectedShip])
                message.channel.send(`New Balance: ${db[message.author.id].money}`)
                  yn = 1
                collector.stop()
                }else if (m.content ==='n'){
                message.channel.send('Ship purchase cancelled')
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