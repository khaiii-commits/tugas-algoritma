const prompt = require('prompt-sync')();

let uang = parseInt(prompt('Masukkan uang: Rp'));
const pecahan = [1000, 500, 100, 50, 25];

console.log(`\nUang Rp${uang} dapat ditukar menjadi:`);

for (let p of pecahan) {
    let jumlah = Math.floor(uang / p);
    if (jumlah > 0) {
        console.log(`${jumlah} buah pecahan Rp${p}`);
        uang = uang % p; 
    }
}

if (uang > 0) {
    console.log(`Sisa yang tidak dapat ditukar: Rp${uang}`);
}