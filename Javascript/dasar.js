// Membuat Sebuah Variabel

var a = "a";
let b = "b" ;
const c = "c";

// Tipe Data

let nama = "Zaky"; // string
let umur = 17; // number int
let Yes_or_No = true // Boolean
let Desimal = 95.9 // float

// Operator Aritmatika

let n1 = 20;
let n2 = 10;
console.log(n1 + n2, "Penjumlahan"); // Penjumlahan
console.log(n1 - n2, "Pengurangan"); // Pengurangan
console.log(n1 * n2, "Perkalian"); // Perkalian
console.log(n1 / n2, "Pembagian"); // Pembagian
console.log(n1 % n2, "Modulus"); // Hasil Bagi / Modulus

// Mengisi Value Pada Variable

let Operasi_Aritmatika = n1 + n2;
console.log(Operasi_Aritmatika); // 30

Operasi_Aritmatika = n1 - n2;
console.log(Operasi_Aritmatika); // 10

Operasi_Aritmatika = n1 * n2;
console.log(Operasi_Aritmatika); // 200

Operasi_Aritmatika = n1 / n2;
console.log(Operasi_Aritmatika); // 2

Operasi_Aritmatika = n1 % n2;
console.log(Operasi_Aritmatika); // 0

// Aritmatika Pada Tipe Data String
let firstname = "Muhammad";
let lastname = "Zaky";
let fullname = firstname + " " + lastname;
console.log(firstname+lastname);
console.log(fullname);

// Alur Membaca Code Dari Atas Kebawah Dari Kiri Kekanan.

let number = 20;
console.log(number + 10); // 30
number = 10;
console.log(number + 10); // 20
number = false;
console.log(number + 10); // 10
// Kenapa False - 10 Tetap Menjadi 10 ???, Karena False = 0 ,True = 1
console.log(true + 10); // 11

// Membaca Error
// const hewan = "Jerapah";
// console.log(hewan);
// hewan = "buaya";

// Uncaught TypeError TypeError: Assignment to constant variable.
// Dikarenakan const merupakan variable yang tidak bisa diubah valuenya
// Selalu teliti ketika menuliskan sebuah code 👌