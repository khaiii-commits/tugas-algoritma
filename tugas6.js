const prompt = require('prompt-sync')();

let x = parseInt(prompt('Masukkan jarak dalam cm: '));

let km = parseInt(x / 100000);
let sisa = x % 100000;

let m = parseInt(sisa / 100);
let cm = sisa % 100;

console.log('\nHasil Konversi:');
console.log(`${km} km`);
console.log(`${m} m`);
console.log(`${cm} cm`);