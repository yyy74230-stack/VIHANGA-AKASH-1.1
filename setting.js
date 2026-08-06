const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With KIRA-MD Hear
SESSION_ID: process.env.SESSION_ID || "SHITSU-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tQbmJkUnpFUVBqcnh4cSsrR2hKd3k3THlUMFJuc0RhbklSN3pHVFhHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ3JvVjdKS1J6aHdMay8vQkJ1OTRMZmx1azdnOHJDc2t6VnhiU1BuaGhSST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RlpkN3lmZGpPY2E4bnlnMFl0K00vamVXcS93QUM1dlVUOHFiMmV3T1cwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjc0J1a2VKcWNENmFySTZ5dlgyMjBNdmRFUGRiTHR3N0NyN3cwNnkrQ0JFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktBbmRuL0xwemxEZC8zY1Vja3FiSW1SaTdjUEgva1oyMnBzdTBmOUc4blU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRKQ0dYdDYxWlVrSHpkNVUwRWQ0R2MrSVY3V2l2VmFDNkY4ek9pSnFURTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid1BwUC9ScVRwSjZzNVRkTnRLMWhKSzh2QVJReWRMM3hNeGVwYUVBOGlsVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnRWVFN0Y1YvWVRaMDZQM1BqVWNsOXUwT0VrSVppaHBQcnZjRncxYk95ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9uc0I0cm9DbmFTRWVXTWFWdXJZVkJrUG1pbTVTVnRDVVZhUWZzUXVlRjVucDN0YURETDZnVGY3T0R6b3BUNGVmemQ4ak1ZQjRPUmo0bXhKOWZSVmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE4LCJhZHZTZWNyZXRLZXkiOiJ6ZmhLZ0dBb2dUYkNoT1ZzQnhFRWxLN3I3SzVFRDU3WHYxTFl4TDhiNmpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijc4NVhIRTI5IiwibWUiOnsiaWQiOiI5NDc2NDY0MjQzMjozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IsqAXG7htIBcbsm0XG7htIpcbuG0gFxuybRcblxu4bSFXG7Jqlxuyp9cbsqcXG7qnLFcbsqcXG7htIBcbsm0IiwibGlkIjoiNTI0NTA2OTQyOTE2NDg6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09yMnRQc0dFTnVhcHM4R0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRxZ0tGYjl5d0FxOTZCbktXdkdIdnVDeUlwcFBBRk85QWFPNDRGdnhxVjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IitTbTczdzltU3lhbTdqR1hRaFQ4U2xOUnFVQUVNK216Y1VhbFRXc0FqUmIrRlQxbzJ5QXN2aXZjak5YSzJnTjFTWWg1YW1iODBaRGNqTTE0Q3E2ZUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIwQWRsSlJRMjduckJ3dnhDZHg3a2UxSE4rdWJGdDhpbzh2ejFpRDl1RzIwd3JyWjErVzJwL2FGeTFQUVQvUDFzb3VmMWlhZ3dUcVFpVWM3Wkp0VE1oQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUyNDUwNjk0MjkxNjQ4OjNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlU2b0NoVy9jc0FLdmVnWnlscnhoNzdnc2lLYVR3QlR2UUdqdU9CYjhhbGUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDUWdTIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NjkxMzc2MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOVC8ifQ==",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY SHITSU-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "SHITSU-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "SHITSU-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94764642432",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "LovelyMD Official",

SEND_WELCOME: process.env.SEND_WELCOME || "false",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94764642432",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







