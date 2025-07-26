const fs = require("fs");
require("dotenv").config();

const config = {
  // 🧠 Session & Identity
  SESSION_ID: process.env.SESSION_ID || "Popkidmd$MLJjtNih",
  PREFIX: process.env.PREFIX || '.',
  BOT_NAME: process.env.BOT_NAME || "alex-piku",
  BOT: process.env.BOT || "hello 👋",
  STATUS_READ_MSG: "👋 Hello! I saw your status.",
  NEW_CMD: process.env.NEW_CMD || "ᴀᴅᴅᴠᴀʀ\n│ sᴜᴅᴏ\n| popkid",
  CAPTION: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ by alexpiku",
  AUTO_STATUS_REPLY: false,
  AUTO_STATUS_REPLY_MSG: "👋 Hello! I saw your status.",
  // 🤖 GPT/AI API KEYS
  GPT_API_KEY: process.env.GPT_API_KEY || "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", // Groq key
  GROQ_API_KEY: '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',
  WEATHER_API_KEY: "ec32bfa1c6b8ff81a636877b6ba302c8",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  PRINCETECH_APIKEY: "prince_api_tjhv",
 
  // 🔧 Auto features
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN === 'true',
  AUTO_BIO: process.env.AUTO_BIO === 'false',
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT === 'true',
  AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS === 'false',
  AUTO_STICKER: process.env.AUTO_STICKER === 'false',
  AUTO_READ: process.env.AUTO_READ === 'false',
  AUTO_TYPING: process.env.AUTO_TYPING === 'true',
  AUTO_RECORDING: process.env.AUTO_RECORDING === 'false',
  AUTO_REACT: process.env.AUTO_REACT === 'false',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === 'false',
  AUTO_BLOCK: process.env.AUTO_BLOCK !== 'false', // true by default

  // 📦 Extra Features
  ANTI_LEFT: process.env.ANTI_LEFT === 'true',
  MASS_TARGET_JID: '254111385747@s.whatsapp.net',
  ANTILINK: process.env.ANTILINK === 'true',
  ANTI_DELETE: process.env.ANTI_DELETE === 'true',
  CHAT_BOT: process.env.CHAT_BOT === 'true',
  CHAT_BOT_MODE: process.env.CHAT_BOT_MODE || "public",
  LYDEA: process.env.LYDEA === 'true',
  REJECT_CALL: process.env.REJECT_CALL === 'true',
  NOT_ALLOW: process.env.NOT_ALLOW !== 'false',
  BLOCK_UNKNOWN: process.env.BLOCK_UNKNOWN === 'true',

  // 🛠 Other
  MODE: process.env.MODE || "public",
  DELETED_MESSAGES_CHAT_ID: process.env.DELETED_MESSAGES_CHAT_ID || "254111385747@s.whatsapp.net",

  // 👑 Owner & Permissions
  OWNER_NAME: process.env.OWNER_NAME || "ALEXPIKU",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "8536881026",
  SUDO_NUMBER: process.env.SUDO_NUMBER || "+919153068527",

  // 💚 Auto react emoji
  AUTOLIKE_EMOJI: process.env.AUTOLIKE_EMOJI || '☠️',
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || 'Status Viewed by alexpiku',
  WELCOME: process.env.WELCOME === 'false',
};

module.exports = config;
