//function
// ada built-in function dan built-user function
// function built-in= alert(), prompt(), confirm(), parseInt(), parseFloat(), isNaN(), isFinite(), eval(), encodeURI(), decodeURI(), encodeURIComponent(), decodeURIComponent() dan lain-lain
// ada dua jenis function yaitu deklarasi function dan ekspressi function


// function deklarasi
function Jumlahbilangan(a,b){ 
    var  hasil = a + b
    return hasil;
}

console.log(Jumlahbilangan(2,3)) // pemanggilan secara deklarasi

//function ekspresi
var fungsi1 = function(c,d){
    var result = c - d
    return result;
}

console.log(fungsi1(5,4))  // pemanggilan secara ekspresi


//Contoh function ekspresi 
let fungsi2 = function(x,y){
    return x * y
}
console.log(fungsi2(5,6))
// function ekspresi tidak bisa dipanggil sebelum dideklarasikan, sedangkan function deklarasi bisa dipanggil sebelum dideklarasikan
// function ekspresi bisa disimpan dalam variabel, array, object, dan bisa dikirim sebagai argumen ke function



// function parameter

// var fungsi1 = function(x,y) { // parameter merupakan variabel khusus untuk menyimpan nilai atau bahan yang akan di proses oleh  fungsi
//     var result = x - y
//     return result;
// }
// console.log(fungsi1(4,2)) // argument adalah nilai yang dimasukan kedalam parameter


// function tambah(a,b){
//     return a + b
// }

// function kali(c,d){
//     return c * d
// }

// var hasil = kali(tambah(4,2), tambah(7,1)) // kamu bisa menyimpan argumen lain dalam satu argumen yang berbeda dan funtion berbeda
// console.log(hasil)

// function bagi(p,q){
//     return p / q
// }

// function modulus(r,s){
//     return r % s
// }

// var result = modulus(bagi(15,2), 2) // bisa menyimpan function lain didalam satu function yang berbeda
// console.log(result)
// function refactoring

// refactoring adalah mengubah sebuah program menjadi lebih 'baik' tanpa mengubah fungsionalitas
//contoh refactoring sederhana =

//Sebelum refactoring:
// function jumlahVolumeKubus(a,b) {
//  var total
//     var vkubusA =  a * a * a
//     var vkubusB =  b * b * b
     
//      total = vkubusA + vkubusB
//      return total;
// }

// console.log(jumlahVolumeKubus(8,3))

// // Setelah refactoring
// function jumlahVolumeKubus2(a,b) {
//      return a * a * a + b * b * b; 
// }

// console.log(jumlahVolumeKubus2(8,3))


 // Variable scope
 //Variable scope adalah cakupan dari sebuah variable, dimana variable hanya bisa diakses pada cakupan tertentu saja. Variable scope dibagi menjadi 2 yaitu global scope dan local scope

 //Javascript mengadopsi Function scope

var a =  1 // global scope / window scope

function percobaan(){
    
    // name conflit
    var a = 2
    var b = 4
    console.log(a) // variable yang diakses adalah variable local
    console.log(window.a) // variable yang dipanggil adalah variable global  bukan variable local
}

percobaan()
console.log(a) //variable dalam function tidak bisa diakses dari luar
console.log() // jika ada dua variable yang sama tapi cakupannya berbeda
//  itu disebut name conflit, nah jadi variable a yang saya panggil adalah variable global, bukan variable di dalam function


var x = 1
function tes(x){ // mengacu pada variable local x
    console.log(x) // mengacu pada variable local x
    
}
tes(x) // mengacu pada local global x
console.log(x) // mengacu pada variable global x


// //Rekursif

// rekursif adalahn function yang memanggil dirinya sendiri
//base-case berfungsi menghentikan rekursif dari function agar pemanggilannya tidak menjadi infinite

function tampilangka(n){
    if(n === 0) return // menggunakan base-case //Base-case adalah kondisi yang menghentikan rekursif dari function agar pemanggilannya tidak menjadi infinite
    console.log(n)
    return tampilangka(n-1)
}

tampilangka(10)// memanggil function tampilangka dengan argumen 10, sehingga akan menampilkan angka 10 sampai 1

function faktorisasi(Y){
    if( Y===0) 
    return 1
    return Y * faktorisasi(Y-1)
}

console.log("hasil faktorisasi : ", faktorisasi(5))

//Arrow function
const kali = (n,m) => { //Arrow function adalah sintaks singkat untuk membuat function
    return n * m
}
console.log(`Hasil perkalian  adalah ${kali(8,6)}`) 
//Yang membedakan arrow function dengan function biasa adalah arrow function tidak memiliki this, arguments, super, dan new.target. Sehingga arrow function tidak bisa digunakan sebagai constructor.

//penggunaan this pada function
//contoh penggunaan this pada function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
  console.log(new Person("John", 30)); // Output: Person { name: 'John', age: 30 }
 //Apa itu this?
 //This digunakan untuk merujuk pada objek yang sedang digunakan. Dalam contoh di atas, this merujuk pada objek Person yang sedang dibuat. Dengan menggunakan this, kita dapat mengakses properti dan metode dari objek tersebut.
 //Mengapa this digunakan dalam function?
 //This digunakan dalam function untuk mengakses properti dan metode dari objek yang sedang digunakan. Dengan menggunakan this, kita dapat membuat function yang dapat digunakan untuk membuat objek baru dengan properti dan metode yang sama.

