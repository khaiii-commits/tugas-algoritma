const prompt = require('prompt-sync')({sigint:true})

let hari = Number(prompt('hari : '))

const  TAHUN_KE_HARI = 365 
const BULAN_KE_HARI = 30 
let tahun = bulan = hari

tahun = parseInt(hari / TAHUN_KE_HARI)
sisa = hari % TAHUN_KE_HARI
bulan = parseInt(sisa / BULAN_KE_HARI)
hari %= BULAN_KE_HARI

console.log(`
    ${tahun} tahun ${bulan} bulan ${hari} sisa hari
`);