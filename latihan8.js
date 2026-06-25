//Belajar DOM
//Apa itu dom?
//DOM adalah singkatan dari Document Object Model, yaitu sebuah interface yang digunakan untuk mengakses dan memanipulasi elemen-elemen dalam sebuah dokumen HTML atau XML. DOM memungkinkan kita untuk mengubah struktur, gaya, dan konten dari sebuah halaman web secara dinamis menggunakan bahasa pemrograman seperti JavaScript. Dengan DOM, kita dapat menambahkan, menghapus, atau memodifikasi elemen-elemen dalam halaman web tanpa harus memuat ulang halaman tersebut. DOM juga menyediakan berbagai metode dan properti yang memungkinkan kita untuk berinteraksi dengan elemen-elemen dalam dokumen dengan mudah.
//contoh penggunaan DOM untuk mengubah teks dalam sebuah elemen HTML
//HTML
// <p id="demo">Hello World!</p>
//JavaScript
document.getElementById("demo").innerHTML = "Hello JavaScript!"; //mengubah teks dalam elemen dengan id "demo" menjadi "Hello JavaScript!"
//contoh penggunaan DOM untuk mengubah gaya dari sebuah elemen HTML
//HTML
// <p id="demo">Hello World!</p>
//JavaScript
document.getElementById("demo").style.color="red";
document.getElementById("demi").style.fontStyle="italic";
docment