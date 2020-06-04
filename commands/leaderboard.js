exports.run = async(bot, message, args, cmd, Discord, PREFIX, db, power) => {
    if(db[message.author.id].rank == 'Banned') return;

    message.channel.send('Work in Progress')
}