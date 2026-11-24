const prompt = require('prompt-sync')({sigint:true})
let t1 = prompt('masukkan tanggal 1  :')
let t2 = prompt('masukkan tanggal 2  :')

// Pecah string jadi angka (urutan: tahun, bulan, tanggal)
const [y1, m1, d1] = t1.split("-").map(Number);
const [y2, m2, d2] = t2.split("-").map(Number);

// Ubah ke total hari
const total1 = (y1 * 365) + (m1 * 30) + d1;
const total2 = (y2 * 365) + (m2 * 30) + d2;

const jarak = Math.abs(total2 - total1);

console.log(`Jarak antara kedua tanggal adalah ${jarak} hari`);