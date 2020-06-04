exports.run = async(bot, message, args, cmd, Discord, PREFIX,db, ms) => {
       
let troopsAdd = parseInt(message.content.slice(11).trim())

if (message.author.id == '537528785126293515' || message.author.id=='598106065934090260') {

if (troopsAdd.length < 1) {
    message.channel.send('Please Specify a amount to add.')
} else {
    if (troopsAdd === 'NaN') {
        return
    } else {
    db[message.author.id].airtroops += troopsAdd
    db[message.author.id].landtroops += troopsAdd
    db[message.author.id].seatroops += troopsAdd

    var myInfo = new Discord.RichEmbed()
    .setTitle('Troops claim :white_check_mark:')
    .setColor(0x4286f4)
    .setDescription('Adding land,sea and air troops.')
    .setFooter('Troops have their own individual cooldowns')
    .addField('Troops',`**Landtroops**:guardsman:: ${troopsAdd} \n **Seatroops**:ocean:: ${troopsAdd} \n **Airtroops**:airplane:: ${troopsAdd}`)

    message.channel.send(myInfo)
    } 
}

    } else {
        message.channel.send('Access Denied')
    }
} 