//function
// ada built-in function dan built-user function
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
// function ekspresi tidak bisa dipanggil sebelum dideklarasikan, sedangkan function deklarasi bisa dipanggil sebelum dideklarasikan
// function ekspresi bisa disimpan dalam variabel, array, object, dan bisa dikirim sebagai argumen ke function



// function parameter

var fungsi1 = function(x,y) { // parameter merupakan variabel khusus untuk menyimpan nilai atau bahan yang akan di proses oleh  fungsi
    var result = x - y
    return result;
}
console.log(fungsi1(4,2)) // argument adalah nilai yang dimasukan kedalam parameter


function tambah(a,b){
    return a + b
}

function kali(c,d){
    return c * d
}

var hasil = kali(tambah(4,2), tambah(7,1)) // kamu bisa menyimpan argumen lain dalam satu argumen yang berbeda dan funtion berbeda
console.log(hasil)

// function refactoring

// refactoring adalah mengubah sebuah program menjadi lebih 'baik' tanpa mengubah fungsionalitas
//contoh refactoring sederhana =

//Sebelum refactoring:
function jumlahVolumeKubus(a,b) {
 var total
    var vkubusA =  a * a * a
    var vkubusB =  b * b * b
     
     total = vkubusA + vkubusB
     return total;
}

console.log(jumlahVolumeKubus(8,3))

// Setelah refactoring
function jumlahVolumeKubus2(a,b) {
     return a * a * a + b * b * b; 
}

console.log(jumlahVolumeKubus2(8,3))


// Variable scope

//Javascript mengadopsi Function scope

var a =  1 // global scope / window scope

function percobaan(){
    
    // name conflit
    var a = 2
    var b = 4
    console.log(a) // variable luar atau global variable bisa diakses dari dalam function
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
tes(x) // mengacu pada variable global x
console.log(x) // mengacu pada variable global x


//Rekursif

// rekursif adalahn function yang memanggil dirinya sendiri
//base-case berfungsi menghentikan rekursif dari function agar pemanggilannya tidak menjadi infinite

function tampilangka(n){
    if(n === 0) return // menggunakan base-case
    console.log(n)
    return tampilangka(n-1)
}

tampilangka(10)

function faktorisasi(Y){
    if( Y===0) return 1
    return Y * faktorisasi(Y-1)
}

console.log("hasil faktorisasi : ", faktorisasi(5))



