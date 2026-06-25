// Control flow
// ada namanya perulangan(loop) dan pengkondisian atau percabangan


// while(true) {
//     console.log('hello world!')  // meruapakn infinite loop
// }

// cara menghentikan infinite loop bisa dengan 2 cara yaitu dari user atau program yang dibuat

// // user =
// var nilai1 = true
// while(nilai1) {
//     console.log('hai')
//     nilai1 = confirm('mau ulang? ')
// }

// // //program
// var nilai2 = 1
// while( nilai2 <= 10) {
//     console.log('Ngulang ' + nilai2 + 'x')
//     nilai2++; //increment atau decrement
// }

//increment adalah menambahkan nilai variabel sebanyak 1
//decrement adalah mengurangi nilai variabel sebanyak 1

//latihan perulangan

// var jmlAngkot = 10
// var angkot = 1
// while(angkot <= jmlAngkot){
   
//     console.log('Angkot No. ' + angkot + '  Beroperasi dengan baik' )
//     angkot++;
// }


// // for
for(var i = 1; i <= 5; i++ ){
console.log('Hello world!')
}
var i = 1
while(i <= 10
){
   console.log('Hello world')
   i++
}
 

// latihan
 var jumlahAngkot = 10
 var angkotberoperasi = 8
 var angkot = 1

 while(angkot <= angkotberoperasi){
    console.log("Angkot No. " + angkot + " Beroperasi dengan baik")
    angkot++
 }

 for(angkot = angkotberoperasi + 1, jumlahAngkot; angkot <= jumlahAngkot; angkot++ ){
    console.log("Angkot No. " + angkot + " Sedang tidak beroperasi")
 }