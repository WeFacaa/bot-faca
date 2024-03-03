const fs = require('fs')

global.fotomenfess = fs.readFileSync("./menfess.jpg")
global.owner = ["6282125841007"]

global.help = {
Menu(pushname){
  return `Halo ${pushname}

Saya adalah bot WhatsApp confess 👋 ketik .confess untuk memulai chat.
`
}
}
