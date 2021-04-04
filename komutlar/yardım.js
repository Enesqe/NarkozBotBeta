const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Vuffy")
.addField(":okiareti: .moderasyon","Moderasyon komutlarını atar.",true)
.addField(":okiareti: .eğlence","eğlence komutlarını atar.",true)
.addField(":okiareti: .ekstra" ,"ekstra komutları gösterir.",true)
.addField(":okiareti: .kullanıcı","Kullanıcı komutları atar.",true)


message.channel.sendEmbed(lembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };