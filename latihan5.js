//Pengkondisian 



// menggunakan IF dan ELSE
// var angkotberoperasi = 7
// var jumlahangk0t = 10
// var noAngkot = 1
// for(noAngkot, jumlahangk0t, angkotberoperasi; noAngkot <= jumlahangk0t ;noAngkot++) {
//     if(noAngkot <= angkotberoperasi){
//         console.log("Angkot No. " + noAngkot + " berfungsi dengan baik")
//     }
//     else{
//         console.log("Angkot No. " + noAngkot + " Tidak berfungsi dengan baik")
//     }
// }

// menggunakan IF, ELSE IF, dan ELSE

// for(noAngkot, jumlahangk0t, angkotberoperasi; noAngkot <= jumlahangk0t ;noAngkot++) {
//     if(noAngkot <= angkotberoperasi && noAngkot != 5){ // menggunakan operator logika untuk memodifikasi  kondisi pada if, supaya nilai dari angkot nomor 5 di kerjakan pada kondisi (else if)
//         console.log("Angkot No. " + noAngkot + " berfungsi dengan baik")
//     }

//     else if(noAngkot == 8 || noAngkot == 10 || noAngkot == 5) { // menggunakan operator  logika untuk menambahkan 2 atau lebih kondisi yang sama  dalam 1 else-if
//         console.log("angkot No. " + noAngkot + " Sedang lembur")
//     }

//     else{
//         console.log("Angkot No. " + noAngkot + " Tidak berfungsi dengan baik")
//     }
// }
// //Menggunakan switch
console.log("\n Switch")

var makanan = prompt("Pilih jenis makanan :  \n-Nasgor \n-Bakso\n-Tahu goreng\n-Mie ayam\n-Mie ayam komplit")

switch(makanan) {
    case 'Nasi goreng' : 
                alert("Harga Rp. 75.000")
                break; 
    case 'Bakso'  : 
    case 'Mie ayam komplit' : 
                alert("Harga Rp. 50.000")
                break; // break bisa tidak  gunakan bila 2 atau lebih case (kasus) memiliki action(aksi) yang sama, sehingga memudahkan efektivitas dalam membuat program
    case 'Tahu goreng' ||'tahu goreng' : 
                alert("Harga Rp. 100.000")
                break;
    case 'Mie ayam' ||'mie ayam' : 
                alert("Harga Rp. 20.000")
                break;
    default :
                alert("Menu yang anda masukan tidak ada dalam list")
}