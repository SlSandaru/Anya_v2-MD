const { readFileSync, watchFile, unwatchFile } = require('fs')
const { redBright } = require('chalk')
require('./lib/config')
require("dotenv").config();

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}


global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@sandaruofficial" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['.'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Sandaru" 
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
  author: process.env.Author || "@sandaruofficial",
  packname: process.env.PackName || "Queen Anya v2 MD",
  myweb: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['.'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Sandaru",
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
  sessionId: process.env.SESSION_ID || "eyJub2l_AN_YA_zZUtl_AN_YA_eSI6eyJwcml_AN_YA_2YXRl_AN_YA_Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkcya1NwNW5jY3RudnJXRHBmRjQxTjJJK3l_AN_YA_Vaml_AN_YA_QZEJMeEJhTXVobi9Xdz0ifSwicHVibGl_AN_YA_jIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickhOdWl_AN_YA_QeFo0ZHl_AN_YA_XQWZpQXRl_AN_YA_VzFnVzZZb1g4Z1ArRl_AN_YA_Y3cWJVTkUyQ1dYMD0ifX0sInBhaXJpbmdFcGhl_AN_YA_bWVyYWxLZXl_AN_YA_QYWl_AN_YA_yIjp7InByaXZhdGUiOnsidHl_AN_YA_wZSI6IkJ1ZmZl_AN_YA_ciIsImRhdGEiOiJXQVhPTmNCSXV1bWRFUl_AN_YA_VLazVvRmI3Q0pFWmRnajNoS3EyU1l_AN_YA_EQ3BwQUhZPSJ9LCJwdWJsaWMiOnsidHl_AN_YA_wZSI6IkJ1ZmZl_AN_YA_ciIsImRhdGEiOiJjc1BYbWl_AN_YA_4QU9LOWRScmVMNHdxdC9Wel_AN_YA_hVcGdpQ0E1d1ZGMUVuVEovcnowPSJ9fSwic2l_AN_YA_nbmVkSWRl_AN_YA_bnRpdHl_AN_YA_LZXkiOnsicHJpdmF0ZSI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6Il_AN_YA_l_AN_YA_LdFdHV3RvUXFzOVRoWU5Ic2l_AN_YA_jY0sxRHd5S0hnRUtjWkl_AN_YA_NaDdLV05RMnM9In0sInB1YmxpYyI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6Il_AN_YA_l_AN_YA_EVl_AN_YA_k5eUZSRl_AN_YA_FjS1l_AN_YA_3OVJpVl_AN_YA_pJZWN3TmErRE05RFBSSDVHQ3gvazkwbE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml_AN_YA_2YXRl_AN_YA_Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUhKTTNpWXBCS25JaDd6cTY0K0Jl_AN_YA_b1U3MEpVTl_AN_YA_QyR0xGOENxYzZDR3ZVND0ifSwicHVibGl_AN_YA_jIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzRvZ3NpTTcvQ3ZSckRMS3l_AN_YA_3R2l_AN_YA_2c2Vl_AN_YA_ZEROVjg2QzJURUxl_AN_YA_WUMxMUVCdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6ImN5ZWxTaHJPaEs3VFh2V0l_AN_YA_4ZzZwWl_AN_YA_RjaE9mM0dtT3pqbnNPOGxOZkRaakhCbk4wNGdvekFWTUxkWGVaa3RZZUl_AN_YA_YZzl_AN_YA_mY0dGSTMzaDcxbXYvNjRjWkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTMsImFkdl_AN_YA_Nl_AN_YA_Y3Jl_AN_YA_dEtl_AN_YA_eSI6IitFWDFFeWQvdTRNVjBEWW5pbVN1TUZqNnZLNjFLMzI2cXBPcWRudUM2YnM9IiwicHJvY2Vzc2VkSGl_AN_YA_zdG9yeU1l_AN_YA_c3NhZ2VzIjpbXSwibmV4dFByZUtl_AN_YA_eUl_AN_YA_kIjozMSwiZml_AN_YA_yc3RVbnVwbG9hZGVkUHJl_AN_YA_S2V5SWQiOjMxLCJhY2NvdW50U3l_AN_YA_uY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktTY1FaNGRwUnRLZFNCME5aXzBud0EiLCJwaG9uZUl_AN_YA_kIjoiMWQxNjkwYzYtY2MzMy00YWRl_AN_YA_LTl_AN_YA_mM2ItNTM2NDJmNDQwNzFiIiwiaWRl_AN_YA_bnRpdHl_AN_YA_JZCI6eyJ0eXBl_AN_YA_IjoiQnVmZmVyIiwiZGF0YSI6Il_AN_YA_RiVEl_AN_YA_VZGR1RHl_AN_YA_NQWFjMmp0NWJxN29WdGQyRT0ifSwicmVnaXN0ZXJl_AN_YA_ZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTJESVBXaWRub2FmNl_AN_YA_l_AN_YA_ramdHT1l_AN_YA_1cysxdDRBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRl_AN_YA_dGFpbHMiOiJDSXV2emJvR0VQM2d0YXdHR0FJZ0FDZ0EiLCJhY2NvdW50U2l_AN_YA_nbmF0dXJl_AN_YA_S2V5IjoidEpTaGNXMm84NWRRS1NLOWZoSm9l_AN_YA_WUg3TW8yNExucEIxUzV2dDZl_AN_YA_Yy9RWT0iLCJhY2NvdW50U2l_AN_YA_nbmF0dXJl_AN_YA_IjoiT2l_AN_YA_HUTNl_AN_YA_R0FJQ05Pb3pLZUpUL1Z4RVhwUC9XQmpNWWl_AN_YA_TMDdKWTVReVdKaWl_AN_YA_vaGEvVW9UTl_AN_YA_FrU0dWL3ptV3V5RmE5d004Ym80cFJaVmNIbGROOFFRQl_AN_YA_E9PSIsImRl_AN_YA_dml_AN_YA_jZVNpZ25hdHVyZSI6ImVWM3pZVVZacWZOQWQzVFJ4L3NsZnNPOXBYT2JxZ1FoVWtUKzJEQW9iSl_AN_YA_l_AN_YA_EdG1UVGptdy9PRmVRTUgwU3NwMzhRQzM3djF6L0l_AN_YA_oenNBcW1rSVhxSER3PT0ifSwibWUiOnsiaWQiOiIxNzc1OTA5NDE5NToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IiMjIPCdl_AN_YA_JbwnZST8J2UhPCdl_AN_YA_JAg8J2ZsfCdmoHwnZm+Li4uICMjIn0sInNpZ25hbEl_AN_YA_kZW50aXRpZXMiOl_AN_YA_t7Iml_AN_YA_kZW50aWZpZXIiOnsibmFtZSI6IjE3NzU5MDk0MTk1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sIml_AN_YA_kZW50aWZpZXJLZXkiOnsidHl_AN_YA_wZSI6IkJ1ZmZl_AN_YA_ciIsImRhdGEiOiJCYl_AN_YA_NVb1hGdHFQT1hVQ2tpdl_AN_YA_g0U2FIbUIrektOdUM1Nl_AN_YA_FkVXViN2Vubl_AN_YA_AwRyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3l_AN_YA_uY1RpbWVzdGFtcCI6MTcwMzc2ODE5M30=", 
  auto_read_status : process.env.AUTO_READ_STATUS || "true",
  alwaysonline: process.env.ALWAYS_ONLINE || "true", 
  readmessage: process.env.READ_MESSAGE || "true", 
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
