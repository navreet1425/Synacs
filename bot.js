const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("WELCOME TO SYNACS")
})

app.listen(3000, () => {
 console.log("Ronnie Here You Go!")
})

let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "With ♛尺〇れれ工乇❥"}, status: "online" })
})

client.on("guildMemberAdd", member => {
  if(member.guild.id === "990643565292032040") {
    client.channels.cache.get("990840217382563880").send(`Welcome Dude Please Follow The ${member}!`)
  }
})

client.on('guildMemberRemove', member => {
 member.guild.channels.get('733259010878472279').send("Someone left the server")
})
client.on("message", message => {
  if(message.content === "Hey" || message.content === "hello" ||
message.content === "hi" || message.content === "HI" ||message.content === "hey") {
  message.channel.send("Hey There!! How Are You?" + " " + message.author.username)}
  if(message.content === "Im fine" || message.content === "i am fine" || message.content === 'im fine' || message.content === "IM FINE" || message.content === 'fine' || message.content === 'FINE' || message.content === 'Fine') {
    message.channel.send("Thats Great" + " " + message.author.username)
  }

if(message.content === "~embed") {
    let embed = new Discord.MessageEmbed()
    .setTitle("This is Embed Title")
    .setDescription("This is Embed description")
    .setColor("RANDOM")
    .setFooter("This is Embed Footer")
    message.channel.send(embed);
}
if (message.content === 'thuglife' || message.content === 'Thuglife') {
  message.channel.send("Hello Chicks")
}
if(message.content === "suswat" || message.content === "Suswat" || message.content === " SUSWAT") {
  message.channel.send("IITian")
}
if(message.content === "void" || message.content === "Void" || message.content === "pote" || message.content === "Pote") {
  message.channel.send("Pote Hoon Bc")
}
if(message.content.startsWith("bsdk")) {
  message.channel.send("Tu Bhosdiwala")
}
if(message.content ==='hiya') {
    message.channel.send('hello' + ' '  + message.author.username)
}
if(message.content === 'doom' || message.content === 'Doom' || message.content === 'DOOM') {
  message.channel.send("Hello im feeling hungry")
}
if(message.content === "amaan" || message.content === 'AMAAN' || message.content === "Amaan") {
  message.channel.send("AAj Bahut Workout Kiya! Samose Tasty Thee")
}
if(message.content === "lurching" || message.content === "Lurching" || message.content === "lurch" || message.content === 'Lurch') {
  message.channel.send("I'm Radiant #1")
}
if(message.content === "Broken" || message.content === "broken") {
  message.channel.send("Gand Lelo Pls")
}
if(message.content === "Wtf" || message.content === "wtf" || message.content === "WTF") {
    message.channel.send("Fuck Off")
}
if(message.content === 'Nou' || message.content === 'no u' || message.content === 'nou') {
  message.channel.send("Tu Hi Hai Bhai Nou Nou mat kar")
}
if(message.content === 'inf'|| message.content === 'INF') {
  message.channel.send("I bought New knife skin")
}
if(message.content === "KS" || message.content === "ks" || message.content === "Killer spree" || message.content === "killer spree") {
  message.channel.send("VC AJAO AGAR HACKER BOLNA HAI TO")
}
if(message.content === 'link' || message.content === 'Link'|| message.content === 'renegades') {
  message.channel.send("https://discord.gg/fNRpktEKxT")
}
if(message.content.includes("ronnie") || message.content.includes("Ronnie")) {
  message.channel.send("Kya kaam hai bhai?")
}
if(message.content === "happy holi" || message.content === "Happy Holi" || message.content === "Holi") {
    message.channel.send("Same To You!")
}
if(message.content.includes("happy diwali") || message.content.includes('Happy Diwali')) {
  message.channel.send("Same To You Mate!!!! :heart:")
}
if(message.content === "gurjar" || message.content === "GURJAR" || message.content === "Gurjar") {
  message.channel.send("BACHON WALI HARKATIEN KARTA HOON ZRA KUCHH BOLO ABHI SERVER LEAVE KARDUNGA")
} 
if(message.content === 'intruder' || message.content === "Intruder" || message.content === "INTRUDER") {
  message.channel.send("Ki haal Ne Maharaaj")
}
/*if(message.content === 'hio') {
  let a = message.
  message.channel.send(`${user} hi`)
} */
if(message.content === "bro" || message.content === "bruh" || message.content === "BRUH" || message.content === "BRO") {
  message.channel.send("Yes Brother!!")
}
if(message.content === "thunder" || message.content === "Thunder" || message.content === "THUNDER") { message.channel.send("Lafandar")
}
if(message.content === "Yoyo" || message.content === "YoYo" ||
message.content === "YOYO" || message.content === "yoyo") {
  message.channel.send("douknowme")
}
if(message.content === "sb?" || message.content === "SB" || message.content === "search sb" || message.content === "sb") {
  message.channel.send("SB kya String Buffer?")
}
if(message.content === "~nickname") {
  let nicknames = ["dumbass", "noob", "newbie", "d!cknell", "ponnu", "karan lodu", "GOD OF MC5"]
message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your new nickname`)
}
if(message.content === "owo" || message.content === "UwU" || message.content === "OwO" || message.content === "uwu") {
  message.channel.send("OwO What Is This?")
}
if(message.content.startsWith("~kill")) {
  let victim = message.mentions.users.first()
  if(!victim) message.reply("Mention someone to kill")
  else {
    message.channel.send(`${victim} Died RIP`)
  }
}
if(message.content.startsWith("shu")) {
  let a = message.mentions.users.first() 
  if(!a) message.reply(' ' + 'shu')
  else {
    message.channel.send(`${a}` + `Hey Im Shu27`)
  }
}
  const Math = require('math.js');
if(message.content.startsWith("d!p")) {
   images = [
     "https://tenor.com/view/mochi-cat-vans-gif-21776348",
     "https://tenor.com/view/peachandgoma-peachmad-couplegoals-peach-and-gif-22394109"
   ]

     personHugged = message.mentions.users.first()
      if(personHugged){
      let hugEmbed = new Discord.MessageEmbed()
          .setTitle(`Punched ${personHugged.username} :punch:`)
          .setImage(images[Math. floor(Math. random()*images. length)])
          .setTimestamp()
          message.channel.send(hugEmbed)
      }
      else{
        message.channel.send('That person is not in this guild')
      }
}
if(message.content.startsWith("how gay")) {
 let gayrate = ["0%", "9%", "19%", "25%", "98%", "96%", "5%", "63%", "43%", "36%", "67%", "61%", "52%", "59%", "77%", "84%", "81%", "12%", "100%", "21%"]
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention User Whom You Want To Check")
 else{
 message.channel.send(`${victim} e ${gayrate[Math.floor(Math.random() * gayrate.length)]} Gay :rainbow_flag: `)
 }
}
if(message.content.startsWith("~hug")) {
 let l = message.mentions.users.first()
 if(!l) message.reply("Please Mention someone to Hug")
 else {
 message.channel.send(` https://media.tenor.com/images/afbc39fcc4cbe67d9622f657d60d41cf/tenor.gif You Hugged ${l}`)
 }
}
if(message.content === "owner" || message.content === "Who is the owner?") {
  message.channel.send("♛尺〇れれ工乇❥#1425")
}
if(message.content === "invite" || message.content === "Invite" || message.content === "INVITE") {
  message.channel.send("https://discord.gg/bhSnjJ8fgR")
}
if(message.content.startsWith("~cuddle")) {
 let l = message.mentions.users.first()
 if(!l) message.reply("Please Mention someone to Cuddle")
 else {
 message.channel.send(` https://tenor.com/view/goodnight-couple-rolling-boy-girl-gif-15482089 You Cuddled ${l}`)
 }
}
if(message.content === "gm" || message.content === "GM" || message.content === "Gm") {
  message.channel.send("GOOD MORNING! HAVE A NICE DAY")
}
if(message.content.startsWith("~punch")) {
 let l = message.mentions.users.first()
 if(!l) message.reply("Please Mention someone to Punch")
 else {
 message.channel.send(` https://tenor.com/view/come-fight-cat-punch-gif-15561222 You Punched Successfully ${l}`)
 }
}
if(message.content === "gn" || message.content === "GN" || message.content === "Gn") {
  message.channel.send("Sweet Dreams :)")
}
 if (message.content === "~avatar" || message.content === "~Avatar" || message.content === "~AVATAR" || message.content === '~avatar') { 
 let embed = new Discord.MessageEmbed()
.setTitle("YOUR AVATAR!")
.setImage(`${message.author.displayAvatarURL({dynamic : true, size : 512})}`)
.setColor("GREEN")
.setFooter(`${message.author.username}`)
message.channel.send(embed)
}
const https = require('https');
 const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

 if (message.content.startsWith('~meme')) {
 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }

 var image = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(image)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
 if(message.content.startsWith("~purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
if(message.content.startsWith("~mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("Mention That Bastard to mute!")
 else {
 member.roles.add("YOUR MUTED ROLE ID HERE")
 message.channel.send("Member has been succesfully muted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
if(message.content.startsWith("~unmute")) {
 if(message.member.hasPermission("MANAGE_MESSAGES")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("Mention Muted Person to unmute!")
 else {
 member.roles.remove("990840217382563880")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
const messageArray = message.content.split(" ");
const args = messageArray.slice(1);
if (message.content.startsWith("~kick")) {
        if (!args[0]) return message.reply("You need to put someone in this command!")
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Where is your permission bro...");
        if (!message.guild.me.permissions.has("KICK_MEMBERS")) return message.reply("I don't have permission to kick people!");
        if (message.member.id === member.id) return message.reply("You can't kick yourself...");

        member.kick()
        message.channel.send(`${member} just got kicked.`)
    }
if (message.content.startsWith("~ban")) {
        if (!args[0]) return message.reply("Please Mention That Member")
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply("Where is your permission bro...");
        if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply("I don't have permission to ban people!");
        if (message.member.id === member.id) return message.reply("You can't ban yourself...");

        let reason = args.slice(1).join(" ") || "No reason"

        member.ban({ reason: reason })
        message.channel.send(`${member} just got banned.\nReason: ${reason}`)
}
module.exports = {
    name: 'hug',
    description: 'hug your friend',
    async execute(message, args, Discord){
      images = [
        "https://tenor.com/view/come-fight-cat-punch-gif-15561222",
        "https://tenor.com/view/mochi-cat-vans-gif-21776348"
      ]
      personHugged = message.mentions.users.first()
      if(personHugged){
      let hugEmbed = new Discord.MessageEmbed()
          .setTitle(`You Hug ${personHugged.username} :heart:`)
          .setImage(images[Math. floor(Math. random()*images. lenght)])
          .setTimestamp()
          message.channel.send(hugEmbed)
      }
      else{
        message.channel.send('That person is not in this guild')
      }
    }
}
});


client.login(process.env.Token);
