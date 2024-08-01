const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_52_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NixcbiAgICAgICAgODksXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDMxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNixcbiAgICAgICAgNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAzNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxMixcbiAgICAgICAgODUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM0LFxuICAgICAgICA5NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICA4MixcbiAgICAgICAgMTgxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjEwLFxuICAgICAgICA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NixcbiAgICAgICAgMjE0LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDY1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjksXG4gICAgICAgIDk2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibG9QTlg0NjQ2MitjdjVVdDdVeVNOUkRCaFNYUzlueUhUQWdLVjlGVXlCUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY5Njc1Mzg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMTI3QjExNkM4NzQzNjNCNUY1MDVDNEM2MUM0NTZEOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0Njk5NTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTY5Njc1Mzg1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MEZEQ0REM0U5MTRGMTczNDQ2QzVFNDQ0QTE4OUQ5OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI0Njk5NTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY29GcUwyNnZTNTZJOHRDMy0yRm81QVwiLFxuICBcInBob25lSWRcIjogXCJlNjUzYTkyOC1lNmViLTRjZDEtYWJiYS1jOWZiOGRiNmVjYjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYzLFxuICAgICAgOSxcbiAgICAgIDE1LFxuICAgICAgNDMsXG4gICAgICAxMyxcbiAgICAgIDIzOCxcbiAgICAgIDEzOSxcbiAgICAgIDEwNSxcbiAgICAgIDIyMSxcbiAgICAgIDc3LFxuICAgICAgMjI4LFxuICAgICAgOTksXG4gICAgICAxNjgsXG4gICAgICAxNjQsXG4gICAgICAyMTEsXG4gICAgICA2MSxcbiAgICAgIDEzLFxuICAgICAgNTMsXG4gICAgICA2MixcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAxOTUsXG4gICAgICAxMDQsXG4gICAgICAyMyxcbiAgICAgIDI0NyxcbiAgICAgIDExLFxuICAgICAgMjU1LFxuICAgICAgMTkwLFxuICAgICAgMjI3LFxuICAgICAgNTUsXG4gICAgICAxMTEsXG4gICAgICAyMTgsXG4gICAgICAxOTMsXG4gICAgICAyNTMsXG4gICAgICAxODMsXG4gICAgICA0OSxcbiAgICAgIDQ0LFxuICAgICAgMTA3LFxuICAgICAgMjUxLFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUdYR0ZQRUZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjk2NzUzODU6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4ODgwMzA1NDU3MTYwMDoxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJCb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYTErd29RdUp5cnRRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldOTmFVRElmQTJ1Y3RmazRQaElXT0p5eDh3WWU2aFptM3VUclUyOVlSeFE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWHZ2RXZaSW05M3FRTnhkZ2o5dlowL01TTmQrL2o2eGNNWjNkeTF6cENQMXNzQUNyaXI0TUI4M1c2SlN3d2lDSHcvRW8zNUFhcGtoNytndVllaVIrQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS1VYTVdLWEY5dlk3ZThPNVp3blQza0diTFNIYktVdFAvVkt4U081UklSVGRybDA5M2VLNUQvSWQxVWVISXU1N01FM2JCOTVBNCtiMDdsM2ZGTm1mQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2OTY3NTM4NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0Njk5NDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHTkdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdORy5qc29uIjogIntcImtleURhdGFcIjpcImVrVjBERE8zai9xSVpObWVTMDVyaldlRG5SWlBHWHdiZnpDNi9jajBhcDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjI5OTM2MDYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjQ2OTk1MzIwN1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
