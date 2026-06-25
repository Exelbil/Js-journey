// manipulasi array
// apa itu array ?
// array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel
// array dapat menyimpan berbagai tipe data seperti string, number, boolean, object, dan lain-lain
// array juga dapat menyimpan banyak nilai sekaligus dalam satu variabel

//1. menambah elemen di array secara manual
// var arr  = [];
// arr[0] = "satu";
// arr[1] = "dua";
// arr[2] = "tiga";
// console.log(arr[0])

//2. mengahapus isi array secara manual/ mengubah element pada array menjadi unde
// var arr  = [];
// arr[0] = "satu";
// arr[1] = "dua";
// arr[2] = "tiga";
// arr[1] = undefined;
// console.log(arr)

//3. menampilkan isi array 
var arr  = [];
arr[0] = "satu";
arr[1] = "dua";
arr[2] = "tiga";

for(var i = 0 ; i < arr.length; i++){
    console.log(`elemen ke ${i} adalah ${arr[i]}`)
}

// method join digunakan untuk menggabungkan semua elemen dari array menjadi sebuah string
var arr  = [];
arr[0] = "satria";
arr[1] = "yudi";
arr[2] = "hasim";
console.log(arr.join(` `)) // menggabungkan semua elemen array dengan spasi

//4. menambah atau menghilangkan elemnt pada akhir array PUSH & POP

var array = [];
array[0] = "satu";
array[1] = "dua";
array[2] = "tiga";

array.push("empat", "lima")//push
console.log(array.join(` - `))

array.pop()//pop
console.log(array.join(` - `))

//5. menambah atau menghilangkan element pada awal array UNSHIFT & SHIFT
var array2 = [];
array2 [0] = "Nasgor";
array2 [1] = "Mieayam";
array2 [3] = "Bakso";

array.unshift("Sate madura", "Rendang")//UNSHIFT
console.log(array2.join(`  `))
array2.shift()//SHIFT
console.log(array2.join(`  `))


//6. menghapus atau menambah element pada array dengan SPLICE
var array3 = ["agus", "budi", "caca", "dodi", "erik"];
//rumus splice = splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
array3.splice(3, 1, "sustri") // menambah element pada index ke 3 tanpa menghapus element
console.log(array3.join(` - `))

//7. mengiris isi array dengan SLICE
//rumus slice = slice(indexAwal, indexAkhir)
var array4 = ["apel", "mangga", "jeruk", "semangka", "anggur"];
var buah = array4.slice(1,3)
console.log(array4.join(` - `))// array asli masih dapat diakses
console.log(buah.join(` - `))

//8. ForEach pada array


var hewan = ["kucing", "anjing", "burung", "ikan"];// menggunakan for
for( var i = 0; i < hewan.length; i++){
    console.log(`hewan ke ${i} adalah = ${hewan[i]}`)
}

hewan.forEach(function(e){// menggunakan forEach
    console.log(`hewan ke- adalah = ${e}`)
})

//9. Map pada array dapat mengembalikan nilai array baru
var angka = [1,2,3,4,5];
var angka2 = angka.map(function(e){
    return e * 2;
})
console.log(angka2.join(` - `))

//10. Sort pada array
var angka3 = [3,5,10,30,1,4,2];
angka3.sort(function(a,b){ // a dan b digunakan sebagai parameter pembanding antar nilai lalu diurutkan kembali pada array dan dikembalikan 
    return a - b; // untuk mengurutkan dari kecil ke besar
                  // return b - a; untuk mengurutkan dari besar ke kecil
})
console.log(angka3.join(` - `))

//11. Filter pada array
var angka4 = [1,2,3,4,5,6,7,8,9,10];

var angkaaGenap = angka4.filter(function(n){ // filter dapat mengembalikan banyak nilai sesuai kondisi  
    return n > 5;
})
console.log(angkaaGenap.join(` - `)) 

var angkaGanjil = angka4.find(function(n){
    return n > 5;
})
console.log(angkaGanjil)// find hanya mengembalikan satu nilai jadi tidak bisa gunakan method join

