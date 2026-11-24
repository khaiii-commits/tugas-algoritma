const prompt = require('prompt-sync')({ sigint: true });

// 1. Baca input tiga bilangan
let x = Number(prompt('Masukkan nilai x: '));
let y = Number(prompt('Masukkan nilai y: '));
let z = Number(prompt('Masukkan nilai z: '));

console.log(`Sebelum ditukar: x = ${x}, y = ${y}, z = ${z}`);

// 2. Simpan nilai x ke variabel sementara
let temp = x;

// 3. Pindahkan y ke x
x = y;

// 4. Pindahkan z ke y
y = z;

// 5. Pindahkan temp (nilai x asli) ke z
z = temp;

// 6. Tampilkan hasil
console.log(`Sesudah ditukar: x = ${x}, y = ${y}, z= ${z}`);