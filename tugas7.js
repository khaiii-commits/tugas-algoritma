const prompt = require('prompt-sync')({ sigint: true });

let p = Number(prompt('Masukkan Panjang Benda: '));

let yard = Math.floor(p / 91.44);
let sisa = p % 91.44;

let feet = Math.floor(sisa / 30.48);
sisa = sisa % 30.48;

let inch = Math.floor(sisa / 2.54);

console.log(`
Hasil Konversi:
    ${yard} yard
    ${feet} feet
    ${inch} inch`);