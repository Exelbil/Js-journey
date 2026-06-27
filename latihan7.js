// manipulasi array
// apa itu array ?
// array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel
// array dapat menyimpan berbagai tipe data seperti string, number, boolean, object, dan lain-lain
// array juga dapat menyimpan banyak nilai sekaligus dalam satu variabel
//Nilai dalam array dapat diakses menggunakan index, dimana index dimulai dari 0
//Nilai dalam array disebut elemen, dan setiap elemen dalam array memiliki index yang unik. Index digunakan untuk mengakses elemen dalam array. Array dapat diubah, ditambah, atau dihapus elemennya. Array juga memiliki properti dan method yang dapat digunakan untuk memanipulasi array. Properti adalah nilai yang dimiliki oleh sebuah object, sedangkan method adalah fungsi yang dimiliki oleh sebuah object. Array juga dapat digunakan untuk menyimpan data dalam bentuk list atau tabel. Array juga dapat digunakan untuk menyimpan data dalam bentuk stack atau queue. Array juga dapat digunakan untuk menyimpan data dalam bentuk linked list atau tree. Array juga dapat digunakan untuk menyimpan data dalam bentuk graph atau hash table. Array juga dapat digunakan untuk menyimpan data dalam bentuk set atau map. Array juga dapat digunakan untuk menyimpan data dalam bentuk matrix atau tensor.

//1. menambah elemen di array secara manual
var arr  = [];
arr[0] = "satu";
arr[1] = "dua";
arr[2] = "tiga";
console.log(arr[0])

//atau

var arr = ["Satu","Dua","Tiga"]
console.log(arr[0])

// 2. mengahapus isi array secara manual/ mengubah element pada array menjadi undefined
var arr  = [];
arr[0] = "satu";
arr[1] = "dua";
arr[2] = "tiga";
arr[1] = undefined;
console.log(arr)

//3. menampilkan isi array 
var arr  = [];
arr[0] = "satu";
arr[1] = "dua";
arr[2] = "tiga";

for(var i = 0 ; i < arr.length; i++){ // maksud dari i < arr.length adalah menampilkan semua isi elemen pada array dari index 0 sampai index terahkir
    console.log(`elemen ke ${i} adalah ${arr[i]}`) //Maksud dari arr[i] adalah menampilkan isi elemen pada array sesuai dengan index yang diinginkan, dimana i adalah index yang akan ditampilkan.
}// arr.length adalah properti yang dimiliki oleh array yang digunakan untuk mengetahui jumlah elemen dalam array. Properti length mengembalikan nilai berupa angka yang menunjukkan jumlah elemen dalam array. Properti length dapat digunakan untuk melakukan perulangan pada array, karena kita dapat menggunakan nilai length sebagai batas perulangan. Properti length juga dapat digunakan untuk menambah atau menghapus elemen dalam array, karena kita dapat mengubah nilai length untuk menambah atau menghapus elemen dalam array. Properti length juga dapat digunakan untuk mengetahui index terakhir dari array, karena index terakhir dari array adalah panjang array dikurangi 1. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array kosong atau tidak, karena jika panjang array adalah 0 maka array tersebut kosong. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array memiliki elemen tertentu atau tidak, karena kita dapat membandingkan panjang array sebelum dan sesudah menambahkan elemen baru. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array memiliki elemen yang sama atau tidak, karena kita dapat membandingkan panjang array sebelum dan sesudah menambahkan elemen baru yang sama. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array memiliki elemen yang unik atau tidak, karena kita dapat membandingkan panjang array sebelum dan sesudah menambahkan elemen baru yang unik. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array memiliki elemen yang berurutan atau tidak, karena kita dapat membandingkan panjang array sebelum dan sesudah menambahkan elemen baru yang berurutan. Properti length juga dapat digunakan untuk mengetahui apakah sebuah array memiliki elemen yang acak atau tidak, karena kita dapat membandingkan panjang array sebelum dan sesudah menambahkan elemen baru yang acak.

//method adalah fungsi yang dimiliki oleh sebuah object, sedangkan properti adalah nilai yang dimiliki oleh sebuah object. Method join digunakan untuk menggabungkan semua elemen dari array menjadi sebuah string, sedangkan properti length digunakan untuk mengetahui jumlah elemen dalam array.

// method join digunakan untuk menggabungkan semua elemen dari array menjadi sebuah string
var arr  = [];
arr[0] = "satria";
arr[1] = "yudi";
arr[2] = "hasim";
console.log(arr.join(`-`)) // menggabungkan semua elemen array dengan spasi

//4. menambah atau menghilangkan elemnt pada akhir array PUSH & POP

var array = [];
array[0] = "satu";
array[1] = "dua";
array[2] = "tiga";
//Push adalah menambahka elemnt pada akhir array
array.push("empat", "lima")//push
console.log(array.join(` - `))
//Pop adalah menghilangkan element pada akhir array
array.pop()//pop
console.log(array.join(` - `))

//5. menambah atau menghilangkan element pada awal array UNSHIFT & SHIFT
var array2 = [];
array2 [0] = "Nasgor";
array2 [1] = "Mieayam";
array2 [2] = "Bakso";
//Unshift adalah menambahkan element pada awal array
array2.unshift("Sate madura", "Rendang")//UNSHIFT
console.log(array2.join(` - `))
//Shift adalah menghilangkan element pada awal array
array2.shift()//SHIFT
console.log(array2.join(` - `))


//6. menghapus atau menambah element pada array dengan SPLICE
var array3 = ["agus", "budi", "caca", "dodi", "erik"]
//rumus splice = splice(indexdiganti, jumlahElementYangDihapus, elementBaru1, elementBaru2, ...)
//indexdiganti = index yang ingin diganti, jumlahElementYangDihapus = jumlah element yang ingin dihapus, elementBaru1, elementBaru2, ... = element baru yang ingin ditambahkan
array3.splice(2, 2, "sustri","exel") //menghapus 2 element pada index ke 3 dan ke - 4 menambahkan element baru "sustri" pada index ke 3 dan element baru "exel" pada index ke 4
console.log(array3.join(` - `))

//7. mengiris isi array dengan SLICE
//rumus slice = slice(indexAwal, indexAkhir)
//indexAwal = index awal yang ingin diiris, indexAkhir = index akhir yang ingin diiris (indexAkhir tidak termasuk dalam hasil irisannya)
//slice tidak mengubah isi array asli, slice hanya mengembalikan isi array yang diiris
//Slice digunakan untuk membuat array baru dari array yang sudah ada, tanpa mengubah array asli
var array4 = ["apel", "mangga", "jeruk", "semangka", "anggur"];
var buah = array4.slice(1,3)
console.log(array4.join(` - `))// array asli masih dapat diakses
console.log(buah.join(` - `))

//8. ForEach pada array

var hewan = ["kucing", "anjing", "burung", "ikan"];// menggunakan for
for( var i = 0; i < hewan.length; i++){
    console.log(`hewan ke ${i} adalah = ${hewan[i]}`)
}

//Apa yang dimaksud  dengan callback function ?
// Callback function adalah sebuah fungsi yang dikirimkan sebagai argumen ke fungsi lain, dan akan dipanggil (dieksekusi) di dalam fungsi tersebut. Callback function memungkinkan kita untuk menunda eksekusi suatu fungsi hingga kondisi tertentu terpenuhi, atau untuk mengatur urutan eksekusi fungsi-fungsi dalam program. Callback function sering digunakan dalam pemrograman asynchronous, seperti pada event handling, AJAX requests, dan setTimeout/setInterval.

// Apa itu forEach ?
// forEach adalah method pada array yang digunakan untuk melakukan perulangan pada setiap elemen dalam array. forEach menerima sebuah callback function sebagai argumen, dimana callback function ini akan dipanggil untuk setiap elemen dalam array. Callback function ini memiliki tiga parameter yaitu currentValue (nilai dari elemen saat ini), index (index dari elemen saat ini), dan array (array itu sendiri). forEach tidak mengembalikan nilai, sehingga tidak bisa digunakan untuk membuat array baru. forEach hanya digunakan untuk melakukan aksi pada setiap elemen dalam array.
hewan.forEach(function(e,i){// menggunakan forEach
    console.log(`hewan ke - ${i+1} adalah = ${e}`)
})

//9. Map pada array dapat mengembalikan nilai array baru
//Map adalah method pada array yang digunakan untuk membuat array baru dari array yang sudah ada. Map menerima sebuah callback function sebagai argumen, dimana callback function ini akan dipanggil untuk setiap elemen dalam array. Callback function ini memiliki tiga parameter yaitu currentValue (nilai dari elemen saat ini), index (index dari elemen saat ini), dan array (array itu sendiri). Map mengembalikan array baru yang berisi hasil dari callback function yang dipanggil untuk setiap elemen dalam array.
var angka = [1,2,3,4,5];
var angka2 = angka.map(function(e){
    return e * 2;
})
console.log(angka2.join(` - `))

//10. Sort pada array
//Apa itu sort ?
//Sort adalah method pada array yang digunakan untuk mengurutkan elemen-elemen dalam array. Sort mengubah urutan elemen dalam array asli dan mengembalikan array yang sudah diurutkan. Secara default, sort mengurutkan elemen-elemen dalam array sebagai string, sehingga hasilnya mungkin tidak sesuai dengan yang diharapkan jika elemen-elemen dalam array adalah angka. Untuk mengurutkan angka, kita perlu memberikan fungsi pembanding (compare function) sebagai argumen pada sort. Fungsi pembanding ini menentukan urutan elemen-elemen dalam array berdasarkan nilai yang dikembalikan oleh fungsi tersebut.
var angka3 = [3,5,10,30,1,4,2];
angka3.sort(function(a,b){ // a dan b digunakan sebagai parameter pembanding antar nilai lalu diurutkan kembali pada array dan dikembalikan 
    return a - b; // untuk mengurutkan dari kecil ke besar
                  // return b - a; untuk mengurutkan dari besar ke kecil
})
console.log(angka3.join(` - `))

//11. Filter pada array
//Apa itu filter ?
//Filter adalah method pada array yang digunakan untuk membuat array baru dari array yang sudah ada, dengan menyaring elemen-elemen dalam array berdasarkan kondisi tertentu. Filter menerima sebuah callback function sebagai argumen, dimana callback function ini akan dipanggil untuk setiap elemen dalam array. Callback function ini memiliki tiga parameter yaitu currentValue (nilai dari elemen saat ini), index (index dari elemen saat ini), dan array (array itu sendiri). Callback function harus mengembalikan nilai boolean (true atau false), dimana elemen-elemen yang mengembalikan true akan dimasukkan ke dalam array baru, sedangkan elemen-elemen yang mengembalikan false akan diabaikan.
var angka4 = [1,2,3,4,5,6,7,8,9,10];

var angkaaGenap = angka4.filter(function(n){ // filter dapat mengembalikan banyak nilai sesuai kondisi  
    return n > 5;
})
console.log(angkaaGenap.join(` - `)) 

//12. Find pada array
//Apa itu find ?
//Find adalah method pada array yang digunakan untuk mencari elemen dalam array berdasarkan kondisi tertentu. Find menerima sebuah callback function sebagai argumen, dimana callback function ini akan dipanggil untuk setiap elemen dalam array. Callback function ini memiliki tiga parameter yaitu currentValue (nilai dari elemen saat ini), index (index dari elemen saat ini), dan array (array itu sendiri). Callback function harus mengembalikan nilai boolean (true atau false), dimana find akan mengembalikan elemen pertama yang mengembalikan true, sedangkan elemen-elemen yang mengembalikan false akan diabaikan. Jika tidak ada elemen yang mengembalikan true, maka find akan mengembalikan undefined.  
var angkaGanjil = angka4.find(function(n){
    return n % 2 !== 0;
})
console.log(angkaGanjil)// find hanya mengembalikan satu nilai jadi tidak bisa gunakan method join

