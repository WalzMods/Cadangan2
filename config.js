
const fs = require('fs')
const chalk = require('chalk')

// Other
global.owner = ['6285899109527','6285723156229','6285811153194']
global.premium = ['6285899109527']
global.packname = '⏤͟͞ঔৣོ⃟ཿW̸a̸l̸z̸ M̸o̸d̸s̸༃⃟⚟'
global.author = '😜😜😜'
global.sessionName = 'Gyzxo'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '🤠'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/gyzxo.jpg')
global.visoka = { url: 'https://a.uguu.se/RsBibgWh.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
