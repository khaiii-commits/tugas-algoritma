const prompt = require('prompt-sync')({sigint:true})

let tb = parseInt(prompt('Masukan Tinggi Badan: '))

let p1 = tb - 100
let p2 = p1 - (0.1 * p1) 

console.log(`berat badan ideal untuk ${tb} cm adalah ${p2}`)