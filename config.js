const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bee20bed87',
}
//======================================//

global.wm = 'ɪɴʀʟ-ᴍᴅ'
global.ucpn = ''

//================= Url =================//
global.linkgc = 'https://chat.whatsapp.com/FOutIblZOj388UVIYfefcR'
global.linkig = 'https://www.instagram.com/mdh_fasweeh'
global.linkyt = 'https://youtu.be/c/undifind'
global.linkfb = 'https://fb.watch/p/undefined'
global.web = 'https://null/undifind'
global.web1 = 'https://null/undifind'
global.linkgh = 'https://github.com/inrl-official'

global.session = process.env.SESSION_ID|| ''
global.titlink = 'Folllow me on Instagram'
global.bodlink = 'inrl-official'
// Other
global.watermark = 'ɪɴʀʟ-ᴍᴅ'
global.owner = ['917025099154']
global.premium = ['917025099161']
global.packname = 'ɪɴʀʟ-ᴍᴅ'
global.author = 'ɪɴʀʟ-ᴍᴅ'
global.sessionName = 'session'
global.prefa = ['','!','.','_',',','*']
global.sp = '❄︎'
global.mess = {
    success: '𝑺𝒖𝒄𝒄𝒆𝒔𝒔✔︎',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Bot Owner Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number Users Special Feature',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./media/image.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
