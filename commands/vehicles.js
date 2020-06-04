exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {

    if (db[message.author.id].cars.length == 0 && db[message.author.id].planes.length == 0 && db[message.author.id].ships.length == 0) {
        message.channel.send('You have not bought any Vehicles!')
    } else {

        let totalCount = db[message.author.id].cars.length + db[message.author.id].planes.length + db[message.author.id].ships.length
        var vehicleInfo = new Discord.RichEmbed()
            .setTitle("Vehicle Info")
             .addField('Amount of Cars', `${db[message.author.id].cars.length} Cars`)
             .addField('Amount of Planes', `${db[message.author.id].planes.length} Planes`)
             .addField('Amount of Ships', `${db[message.author.id].ships.length} Ships`)
             .addField('Total amount of Vehicles:', `${totalCount}`)
             .setColor(0x008000)
             .setFooter(`Do n!vehiclehelp for Vehicle Help`)
             message.channel.send(vehicleInfo)
    }
}