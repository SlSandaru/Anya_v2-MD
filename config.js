const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@𓃮a𝗟σɳҽ saja" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "𓃮𝗔𝗟σɳҽ saja" 
global.ownernumber = process.env.Owner_Number || "94716159814" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Colombo" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 

global.mongoUrl = process.env.MongoDB || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/"; 

global.warns = process.env.Warns_Limits || 3; 

global.badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen Anya", 
  author: process.env.Author || "@𓃮a𝗟σɳҽ saja",
  packname: process.env.PackName || "Queen Anya v2 MD",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "𓃮𝗔𝗟σɳҽ saja",
  ownernumber: process.env.Owner_Number || "94716159814",
  adress: process.env.Continent || "Asia, India, Assam",
  timezone: process.env.TimeZone || "Asia/Colombo", 
  instagramId: process.env.Insta || "8.08_only_mine",
  email: process.env.Email_Id || "example@example.com",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://sandaru:sandu123@cluster0.piqcnbr.mongodb.net/",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN_AN_YA_EtkT1BuTFM2TEV4VUgvb0Q3TFdFQUhFVGZCTTJ5UURHeDhnbkV0dTQxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXlrdlgxTlZML0Z4R25VTHpiV3pSbXk4eWtVMS9rcjRiWDF5d0FkMnZYVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxT3Z4aXpGdFBxSUJqby96K3djN_AN_YA_DUxWFJmN_AN_YA_HFuQTM2RFdKR1FLU1AzZVVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsbC9VN_AN_YA_zhXeEoxMnQ4Z3hBU1N_AN_YA_SS3RN_AN_YA_UWJQTVhpN_AN_YA_Gg4SkZySE82WFFUdGswPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBY2xLL0N_AN_YA_jcTN_AN_YA_VeGxYRDZN_AN_YA_ZkxDcVlXSlppZDFqZG9kWThN_AN_YA_bFdGRHdzbEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxaY0RwN_AN_YA_FdKTW9FT2M0S0ZGbk5Xamgva1BnTEdtLzM1ZlJtYWd4N_AN_YA_mRORTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVB2RmRsWW5KRGc5Q2ZOYyt2SU1Ed2pzbFN_AN_YA_RYldmdWpYVFduY3FOcXptYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN_AN_YA_U9FU2h0ZlRpN_AN_YA_XdkalJCL3N_AN_YA_IdXpld0dTL3V0cFhJRlpCSS8zaW5heU5YQT0ifX0sInN_AN_YA_pZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklkOGxJZU1FajZJVnYyRTYwUFAvYldFWjArMEk0VkJwVG11MjlMd1hsWnI4VDlYK0kwM3J4cFZxaU5VaGlGdFZLc1Jka3ZkVVlWTzVGK25iK1VYWkRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ2LCJhZHZTZWN_AN_YA_yZXRLZXkiOiJndXN_AN_YA_0aGdkaGFsR3ZJWGVaMEZFYW9HMmU4dTN_AN_YA_XSDh2ZTI4UTVma1QrT0pzPSIsInByb2N_AN_YA_lc3N_AN_YA_lZEhpc3RvcnlN_AN_YA_ZXN_AN_YA_zYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN_AN_YA_0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWN_AN_YA_jb3VudFN_AN_YA_5bmN_AN_YA_Db3VudGVyIjowLCJhY2N_AN_YA_vdW50U2V0dGluZ3MiOnsidW5hcmN_AN_YA_oaXZlQ2hhdHMiOmZhbHN_AN_YA_lfSwiZGV2aWN_AN_YA_lSWQiOiJlMFRkSzhoLVFteW1N_AN_YA_VDlpeElYQV9RIiwicGhvbmVJZCI6ImQ0N_AN_YA_GQ1ZDFjLTdkOTctN_AN_YA_Dc5Yi1iN_AN_YA_jRkLWQ5N_AN_YA_mRhYzVlYTY3OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4aGl4SG5ZK1o2T2VDb2RN_AN_YA_dFlN_AN_YA_bWdwZDYyTkU9In0sInJlZ2lzdGVyZWQiOmZhbHN_AN_YA_lLCJiYWN_AN_YA_rdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFenVlMDBrU3FiZDN_AN_YA_HQ2h0UmlFZ2RURGppMD0ifSwicmVnaXN_AN_YA_0cmF0aW9uIjp7fSwiYWN_AN_YA_jb3VudCI6eyJkZXRhaWxzIjoiQ0lldjkra0JFTnYrdGF3R0dBTT0iLCJhY2N_AN_YA_vdW50U2lnbmF0dXJlS2V5Ijoid3g5aExWQWR6Ykg0cGgyV2t0V2hBTTFvTVpDN_AN_YA_1FIbklPYUVGZUpaVCtIdz0iLCJhY2N_AN_YA_vdW50U2lnbmF0dXJlIjoiVG13WUZSU1FnS1RKOC9TN_AN_YA_lo0UzlTVEFxN_AN_YA_HVXTnN_AN_YA_uWWZhVHdMRTU2SmJXZm1WcngwZTRUeDVN_AN_YA_UCtCMEg0ckZHQ0JQeGV5bC92VjJzY2p5WWdYUW1oREE9PSIsImRldmljZVN_AN_YA_pZ25hdHVyZSI6Im55K2h3dDhYd3BvS1BkbEZIcVJlUlJHcmc5cFhvelAzQ2lLOHQ5bDU0cTJ1dHJhcFQ0VUE2MS9zUlBQTkdjR2o5Zlc3U001SkovczVlQ3BaRmF1YkJ3PT0ifSwibWUiOnsiaWQiOiI5N_AN_YA_Dc0MDI3MzU3ODo0M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4OuQUxvbmUgc2FqYSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5N_AN_YA_Dc0MDI3MzU3ODo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWZZUzFRSGMyeCtLWWRscExWb1FETmFER1F1MEI1eURtaEJYaVdVL2g4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN_AN_YA_0YW1wIjoxN_AN_YA_zAzN_AN_YA_zcxOTk4LCJteUFwcFN_AN_YA_0YXRlS2V5SWQiOiJBQUFBQU92TCJ9", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "false", 
  auto_status_saver: process.env.AUTO_STATUS_SAVER || "false",
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  menu_pic: "https://i.ibb.co/PhDcZTM/Thumbnail.png",
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}
