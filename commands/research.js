exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
    if(db[message.author.id].rank == 'Banned') return;

    let recLvl = db[message.author.id].recLvl
    let researchCost = recLvl + recLvl * 25

    message.channel.send('Work in Progress')

    var researchInfo = new Discord.RichEmbed()
            .setTitle("Research and Development")
             .addField('Current Research Avaliable:', `Level ${recLvl + 1}`)
             .addField('Current Research Level:', `Level ${recLvl}`)
             .addField('Research Current Level For:', `$${researchCost}`)
             .setColor(0x008000)
             .setFooter(`Do n!profile for Profile Data`)
    message.channel.send(researchInfo)

    if(!args.length) {
    message.channel.send('Research with n!research (Level of Research)')
    } else {
        if (args[0] !== researchArr) {
            message.channel.send(`Research of Level ${args[0]} is not avaliable. Research of Level ${researchArr} only.`)
        } else {
            if (db[message.author.id].money >= researchCost) {
                message.channel.send(`Researching Level ${recLvl}...`)
                db[message.author.id].money -= db[message.author.id].money - researchCost
                recLevel += recLvl + '1'
                message.channel.send(`New Level: ${db[message.channel.send].recLvl}, New Amount: ${db[message.author.id].money}`)
            } else {
                message.channel.send('Insufficent Funds.')
            }
        } 
    }
}