let fs = require('fs')
let chalk = require('chalk')
global.owner = ['62882003806038']
global.autoread = false
global.selfmode = false
global.autobio = false // or node . --autobio
global.thumb = './thumb/itsuki.jpg'
global.fakereplyt = 'Rikka-Bot WhatsApp'
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Bye @user`,
promote: '@user Sekarang admin!',
demote: '@user Sekarang bukan admin!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.prefix = '🐤'
global.author = '@caliph91_'
global.packname = 'WhatsApp Bot'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://caliphapi.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me',
  caliphAPI: 'https://caliphapi.com'
}

global.APIKeys = { // APIKey Here
   'http://api.vhtear.com': 'YOUR-APIKEY',
   'https://api.lolhuman.xyz': 'YOUR-APIKEY',
  'https://api.xteam.xyz': 'YOUR-APIKEY'
,
  'https://api.zeks.me': 'rikkabotwa',
   'https://caliphapi.com': 'yntkts' 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
