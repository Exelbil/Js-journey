//OOP
//object Oriented Programming (OOP) adalah paradigma pemrograman yang menggunakan objek dan kelas untuk memodelkan data dan perilaku dalam program. OOP memungkinkan pengembang untuk membuat kode yang lebih modular, dapat digunakan kembali, dan mudah dipelihara. Konsep utama dalam OOP meliputi enkapsulasi, pewarisan, dan polimorfisme.
//Enkapsulasi adalah konsep OOP yang menyembunyikan detail implementasi dari objek dan hanya menampilkan antarmuka publik yang dapat digunakan oleh pengguna objek. Dengan enkapsulasi, pengguna objek tidak perlu mengetahui bagaimana objek bekerja di dalamnya, sehingga memudahkan penggunaan dan pemeliharaan kode.
//Pewarisan adalah konsep OOP yang memungkinkan sebuah kelas untuk mewarisi sifat dan perilaku dari kelas lain. Dengan pewarisan, pengembang dapat membuat kelas baru yang memiliki semua sifat dan perilaku dari kelas induknya, sehingga memudahkan penggunaan kembali kode dan mempercepat pengembangan aplikasi.
//Polimorfisme adalah konsep OOP yang memungkinkan objek dari kelas yang berbeda untuk digunakan secara bergantian melalui antarmuka yang sama. Dengan polimorfisme, pengembang dapat membuat kode yang lebih fleksibel dan dapat digunakan kembali, karena objek dari kelas yang berbeda dapat digunakan dengan cara yang sama.



//Contoh penggunaan  tanpa menggunakan OOP
var namaMahasiswa = "Exel"
var umurMahasiswa = 21
var lulusMahasiswa = true
var Ipsemester = [3.5, 3.7, 3.9, 4.0] 

var Ipkumulatif = function (Ipsemester) {
    let total = 0
    let hasil = 0
    for(let i = 0; i < Ipsemester.length; i++) {
        total += Ipsemester[i] //Kenapa pake kurung siku? karena Ipsemester adalah array, jadi untuk mengakses nilai dalam array harus menggunakan kurung siku dan indexnya

    }
    return hasil = total / Ipsemester.length
}

console.log(`Ipkumulatif dari ${namaMahasiswa} adalah ${Ipkumulatif(Ipsemester)}`)

//Menggunakan Array
var Mahasiswa = ["Exel", 21, true, [3.5, 3.7, 3.9, 4.0]] //Array adalah tipe data yang digunakan untuk menyimpan banyak nilai dalam satu variabel
var ipkumulatif1 = function (Ipsemester) {
    let total = 0
    for(let i = 0; i < Ipsemester.length; i++){
        total += Ipsemester[i]
    }
    return  total / Ipsemester.length
}

let Ipk = ipkumulatif1(Mahasiswa[3])
console.log(`Mahasiswa bernama ${(Mahasiswa[0])} dengan perolehan Ipk adalah ${Ipk}`)


//Menggunakan Object
var mahasiswa = {
    //Properties object
    //Properties adalah variabel didalam object
    nama :`exel`,
    umur : 21,
    lulus : true,
    alamat : {
            Jalan : "Jln Soekarno, No 23",
            Perumahan :"Elit youth",
            blok : 17,
            Nmrumah : 34
    },
    ipsemester : [3.5, 3.7, 3.9, 4.0],
    //Method dari object
    //Method adalah function yang berjalan didalam object
    ipkumulatif : function(){
        let total = 0
        let ips = this.ipsemester
        for(let i = 0; i < ips.length; i++){
            total += ips[i]
        }
        return total / ips.length
    }
}

console.log(mahasiswa.ipkumulatif());
console.log(`Perkenalkan nama saya ${mahasiswa.nama}, saya berumur ${mahasiswa.umur} tahun, saya tahun ini lulus dengan Indeks prestasi kumulatif ${mahasiswa.ipkumulatif()}-IPK, saya tinggal di ${mahasiswa.alamat.Jalan}`)