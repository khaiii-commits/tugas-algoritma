const prompt = require('prompt-sync')({sigint:true})
console.log('=====================')
console.log('KONVERSI DURASI WAKTU')
console.log('=====================')

let detik =Number(prompt('hari : '))

const HARI_KE_DETIK = 24 * 60* 60 ;
const JAM_KE_DETIK = 60*60;
const MENIT_KE_DETIK = 60;

let hari = jam = menit = sisa = 0

hari = parseInt(detik / HARI_KE_DETIK)
sisa = detik % HARI_KE_DETIK;
jam = parseInt(sisa / JAM_KE_DETIK)
sisa %= JAM_KE_DETIK
menit = parseInt(sisa / MENIT_KE_DETIK)
sisa %= MENIT_KE_DETIK

console.log(`
    ${hari} hari ${jam} jam ${menit} menit ${detik} detik
    `);