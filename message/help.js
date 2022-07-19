const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

 *INFO BOT*
 Library : *Baileys-MD*
 Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
 *WIB* : ${moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')}
 *WITA* : ${moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')}
 *WIT* : ${moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')}

 *INFO USER*
 Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
 Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
 Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
 Balance : $${toCommas(getBalance(sender, balance))}
 ${readmore}
 *MAIN MENU*
 ${setting.sb} ${prefix}menu
 ${setting.sb} ${prefix}owner
 ${setting.sb} ${prefix}donasi
 ${setting.sb} ${prefix}speed
 ${setting.sb} ${prefix}runtime
 ${setting.sb} ${prefix}cekprem
 ${setting.sb} ${prefix}listprem
 ${setting.sb} ${prefix}listban
 ${setting.sb} ${prefix}listsewa
 ${setting.sb} ${prefix}join
 ${setting.sb} ${prefix}sewabot
 ${setting.sb} ${prefix}delete

 *CONVERTER/TOOLS*
 ${setting.sb} ${prefix}sticker
 ${setting.sb} ${prefix}toimg
 ${setting.sb} ${prefix}tovid
 ${setting.sb} ${prefix}blur

 *DOWNLOADER*
 ${setting.sb} ${prefix}play
 ${setting.sb} ${prefix}tiktok
 ${setting.sb} ${prefix}ytmp4
 ${setting.sb} ${prefix}ytmp3
 ${setting.sb} ${prefix}getvideo
 ${setting.sb} ${prefix}getmusic
 ${setting.sb} ${prefix}instagram
 ${setting.sb} ${prefix}mediafire
  
 *WALLPAPER MENU*
 ${setting.sb} ${prefix}wallml
 ${setting.sb} ${prefix}wallrandom
 ${setting.sb} ${prefix}wallcode
 ${setting.sb} ${prefix}wallneon
 ${setting.sb} ${prefix}wallpubg

 *SHORTLINK MENU*
 ${setting.sb} ${prefix}shortlink
 ${setting.sb} ${prefix}cuttly
 ${setting.sb} ${prefix}bitly
 ${setting.sb} ${prefix}tinyurl
  
 *RANDOM MENU*
 ${setting.sb} ${prefix}quote
 ${setting.sb} ${prefix}galau
 ${setting.sb} ${prefix}bucin
 ${setting.sb} ${prefix}gombal
 ${setting.sb} ${prefix}cecan
 ${setting.sb} ${prefix}cogan
 ${setting.sb} ${prefix}artinama
 ${setting.sb} ${prefix}artimimpi
 ${setting.sb} ${prefix}resepmasakan
 ${setting.sb} ${prefix}katajago
 ${setting.sb} ${prefix}darkjokes
 ${setting.sb} ${prefix}quotesmaker
 ${setting.sb} ${prefix}asupan

 *EDUCATION MENU*
 ${setting.sb} ${prefix}persegipanjang
 ${setting.sb} ${prefix}perkalian
 ${setting.sb} ${prefix}kuadrat
 ${setting.sb} ${prefix}kubik
  
 *SEARCH MENU*
 ${setting.sb} ${prefix}lirik
 ${setting.sb} ${prefix}grupwa
 ${setting.sb} ${prefix}ytsearch
 ${setting.sb} ${prefix}gsmarena

 *TEXT PRO MENU*
 ${setting.sb} ${prefix}circuit
 ${setting.sb} ${prefix}sketch
 ${setting.sb} ${prefix}hallowen
 ${setting.sb} ${prefix}rainbow
 ${setting.sb} ${prefix}scfi
 ${setting.sb} ${prefix}blue
 ${setting.sb} ${prefix}juice
 ${setting.sb} ${prefix}purple
 ${setting.sb} ${prefix}toxic
 ${setting.sb} ${prefix}peridot
 ${setting.sb} ${prefix}metal
 ${setting.sb} ${prefix}realistic
 ${setting.sb} ${prefix}impressive
 ${setting.sb} ${prefix}cracked
 ${setting.sb} ${prefix}magma
 ${setting.sb} ${prefix}berry
 ${setting.sb} ${prefix}transformer
 ${setting.sb} ${prefix}horror
 ${setting.sb} ${prefix}metallic
 ${setting.sb} ${prefix}pencil
 ${setting.sb} ${prefix}thunder
 ${setting.sb} ${prefix}greenneon
 ${setting.sb} ${prefix}skeleton
 
 *ANIME MENU*
 ${setting.sb} ${prefix}naruto
 ${setting.sb} ${prefix}yaoi
 ${setting.sb} ${prefix}loli
 ${setting.sb} ${prefix}waifu
 ${setting.sb} ${prefix}husbu

 *INFO MENU*
 ${setting.sb} ${prefix}covidglobal
 ${setting.sb} ${prefix}infogempa
 
 *STALK MENU*
 ${setting.sb} ${prefix}ghstalk
 ${setting.sb} ${prefix}igstalk
 
 *GAME & FUN MENU*
 ${setting.sb} ${prefix}duithoki
 ${setting.sb} ${prefix}tictactoe
 ${setting.sb} ${prefix}delttc
 ${setting.sb} ${prefix}tebakgambar
 ${setting.sb} ${prefix}caklontong
 ${setting.sb} ${prefix}asahotak
 ${setting.sb} ${prefix}tebakjenaka
 ${setting.sb} ${prefix}tebakbendera
 ${setting.sb} ${prefix}siapakahaku
 ${setting.sb} ${prefix}dadu
  
 *PAYMENT & BANK*
 ${setting.sb} ${prefix}buylimit
 ${setting.sb} ${prefix}buyglimit
 ${setting.sb} ${prefix}transfer
 ${setting.sb} ${prefix}limit
 ${setting.sb} ${prefix}balance
  
 *GROUP MENU*
 ${setting.sb} ${prefix}antilink
 ${setting.sb} ${prefix}welcome
 ${setting.sb} ${prefix}linkgrup
 ${setting.sb} ${prefix}setppgrup
 ${setting.sb} ${prefix}setnamegc
 ${setting.sb} ${prefix}setdesc
 ${setting.sb} ${prefix}group
 ${setting.sb} ${prefix}revoke
 ${setting.sb} ${prefix}hidetag
 ${setting.sb} ${prefix}tagall
 ${setting.sb} ${prefix}listadmin
 ${setting.sb} ${prefix}infogc
 ${setting.sb} ${prefix}promote
 ${setting.sb} ${prefix}demote
 ${setting.sb} ${prefix}add
 ${setting.sb} ${prefix}kick
 ${setting.sb} ${prefix}mute
  
 *OWNER MENU*
 > evalcode
 x evalcode-2
 $ executor
 ${setting.sb} ${prefix}textchat
 ${setting.sb} ${prefix}setprefix
 ${setting.sb} ${prefix}masuk
 ${setting.sb} ${prefix}broadcast
 ${setting.sb} ${prefix}setppbot
 ${setting.sb} ${prefix}exif
 ${setting.sb} ${prefix}leave
 ${setting.sb} ${prefix}addprem
 ${setting.sb} ${prefix}delprem
 ${setting.sb} ${prefix}ban
 ${setting.sb} ${prefix}unban
 ${setting.sb} ${prefix}mode
 ${setting.sb} ${prefix}addsewa
 ${setting.sb} ${prefix}delsewa

*OTHER MENU*
 ${setting.sb} ${prefix}readmore
 ${setting.sb} ${prefix}getpp
 ${setting.sb} ${prefix}tts
 ${setting.sb} ${prefix}ppcp
 ${setting.sb} ${prefix}kontak

\`\`\`${setting.botName} By ${setting.ownerName}\`\`\`
`
}
exports.sewabot = (pushname, ownerName) => {
	return `_*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'} 👋*_

*── 「 SEWA BOT 」 ──*

*Harga Sewa*
7 Hari = 5.000
30 Hari = 15.000
Permanen = 25.000

*Keuntungan :*
- Bot Masuk Sesuai Waktu Sewa
- Gratis Premium 3 Hari
- Antilink
- On 24 Jam
- Fitur Banyak
- Welcome
- Dan Lainnya

*_Minat Chat : wa.me/${setting.ownerNumber}_*
`
}
