const fs = require('fs');
const chalk = require('chalk');

// Settings Bot 
global.owner = '6283119115977'//ganti no mu
global.owner2 = "6288210180505@s.whatsapp.net"//penting garus ganti
//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
global.DataPc = "6666666666666@s.whatsapp.net"
//ini mo di ganti gpp mo ga di ganti gpp jugaa,,,
global.versi = "3.3.0"
global.namaOwner = "HiraaXz"
global.packname = 'HirraXz'
global.botname = 'irumaMD'
global.botname2 = 'irumaMD'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah
global.game = true
// Settings Link / Tautan
global.linkOwner = "https://wa.me/628999811229"
global.linkGrup = "https://chat.whatsapp.com/G0524sAJCqV3tD4dYa3lK2"
global.linkGrup2 = "https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idgc = "120363250393272873@g.us" // 
global.f1 = (a, b) => {
let fake = {key: {remoteJid: 'status@broadcast', participant: '42424242435@s.whatsapp.net'}, message: {orderMessage: {itemCount: 1, status: 1, surface: 1, message: a, orderTitle: '', thumbnail: b, sellerJid: '4242242354@s.whatsapp.net'}}};
return fake
}
// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3500
global.delayPushkontak = 6000
global.api = "cs_2AtCW"
// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idSaluran = "120363335989645846@newsletter"
global.idch = "120363335989645846@newsletter"
global.namaSaluran = "iruma Multi Device"

global.merchantIdOrderKuota = "OK2000300"
global.apiOrderKuota = "503037817337498462000300OKCTE710F6DB6C0525EF47135143AF15B565"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214526072661395590303UMI51440014ID.CO.QRIS.WWW0215ID20243611425300303UMI5204541153033605802ID5921LYLIA STORE OK20003006006BEKASI61051711162070703A016304B08B"

// Settings All Payment
global.dana = "085692195658"
global.ovo = "ga ada"
global.gopay = "085692195658"
global.qris = "minta ke owner"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://-"
global.apikeyV2 = "-" //ptla
global.capikeyV2 = "-" //ptlc

// Settings Api Subdomain
global.subdomain = {
"skyzopedia.us.kg": {
"zone": "9e4e70b438a65c1d3e6d0e48b82d79de", 
"apitoken": "odilM9DpvLVPodbPyZwW7UcDKg1aIWsivJc0Vt_o"
}, 
"marketplace.us.kg": {
"zone": "2f33118c3db00b12c38d07cf1c823ed1", 
"apitoken": "6WS_Op6yuPOWcO17NiO-sOP8Vq9tjSAFZyAn82db"
}, 
"serverpanell.biz.id": {
"zone": "225512a558115605508656b7bdf29b28", 
"apitoken": "XasxSSnGp8M9QixvT6AAlh1vEm4icVgzDyz7KDiF"
}, 
"sincecraf.my.id": {
"zone": "a89500d3dcf7e531f5a6e25081c7c874", 
"apitoken": "aV-ilSaLRwfgIGz0c79ah6fbnpcLilDREvysdUsk"
}, 
"xyz-store.biz.id": {
"zone": "8ae812c35a94b7bd2da993a777b8b16d", 
"apitoken": "oqZafkd3mSt1bABD9MMTidpCtD9VZdiPTjElVKJB"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "4qOupI-Of-6yNrBaeS1-H0KySuKCd0wS-x0P5XQ4"
}
}
// SETTING GAME
global.gamewaktu = 60 // Game waktu
global.bmin = 1000 // Balance minimal 
global.bmax = 3000 // Balance maksimal
global.limit = 15 // Set limit
global.limitawal = {
premium: "Infinity",
free: 8000,
monayawal: 1000
}

// SETTING RPG
global.rpg = { // Bebas ubah value/angka
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
// DATABASE GAME
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};
// Message Command 
global.mess = {
	owner: "* *access denied*\n`Fitur ini hanya untuk owner bot!`",
	admin: "* *access denied*\n`Fitur ini hanya untuk admin grup!`",
	botAdmin: "* *access denied*\n`Fitur ini hanya untuk ketika bot menjadi admin!`",
	group: "* *access denied*\n`Fitur ini hanya untuk dalam grup!`",
	private: "* *access denied*\n`Fitur ini hanya untuk dalam private chat!`",
	prem: "* *access denied*\n`Fitur ini hanya untuk user premium!`",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})