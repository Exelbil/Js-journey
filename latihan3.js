// Day 3 belajar javascript full 
 
// Tipe data: String 

a = "Halo hari ini saya makan sate di hari jum`at sambil melihat iklan yang bertuliskan \"rokok membunuhmu \""
console.log(a)

b = " Nih orang \n suka makan sate \n tapi suka \t ngutang "
console.log(b)

c = " Yosep axxel f.b "
c.length // menghitung banyak karakter string pada variabel c
console.log(`Haii nama saya ${c},nama saya memiliki banyak karakter sebanyak ${c.length} karakter`)

// Tipe data: Boolean

x = 10
y = 20
z =  x > y
console.log(z) // cara umum

console.log(`${Boolean(x > y)}`) // fitur di javascript

// dalam javascript ada  nilai yang truly dan falsy



console.log(`\n Variabel Javascript`)

 var nama = "axxel", // melakukan deklarasi, inisiasi, dan assignment pada variable  dan juga menggunakan shorthand untuk mempersingkat
kelas = "XI RPL 2",
Absen = 36
Sekolah = "SMK 2 Bekasi"

    console.log(`hii nama saya ${nama} dari kelas ${kelas} dengan nomor absen ${Absen}`)

    // Pop-up box
    console.log(`\n Pop-up box`)
    alert("Selamat datang  " + nama) // menampilkan notifikasi berisi nama
    confirm("Apakah kamu manusia") // memberiikan 2 pilihan untuk konfirmasi
    prompt("Absen berapa kamu = ") // berisi form untuk diisi

    var nama1 = prompt("Kamu berasal daru sekolah mana? ")
    alert("sekolahmu adalah " + Sekolah ) // mengembalikan nilai yang sesuai setelah di-input user  

    var yakin = confirm("Benar atau tidak?")
    confirm(yakin) // mengembalikan  nilai ke user dalam bentuk boolean atau true dan false
     if( yakin == true ) { 
        alert("Kamu boleh akses") // jika user tekan tombol ok maka user boleh akses
     }
    
     else{
        alert("kamu ga boleh akses")
     }

     //Aplikasi sederhana

   //   alert("Selamat datang cik")
   //   var tes1 = true

   //   while(tes1) {
   //       var namamu = prompt("Masukan nama =")
   //       alert("namamu adalah " +namamu)

   //       tes1 = confirm("masukan nama lagi?")
   //   }

   //   alert("selesai wok")