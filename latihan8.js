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

//Membuat object secara literal
var mahasiswa = {
    //Properties object
    //Properties adalah variabel didalam object
    nama :`exel`,  //Key : Value , Merupakan struktur dari properti
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

//Membuat object dengan functio declaration
    function kendaraan(nama,modelkendaraan,jeniskendaraan){
    var kendaraan = {} //harus membuat objek kosong secara manual
    kendaraan.nama = nama;
    kendaraan.modelkendaraan = modelkendaraan;
    kendaraan.jeniskendaraan = jeniskendaraan;
    return kendaraan;//mengembalikan nilai objek 

}

    var Honda1 = kendaraan(`Honda-nsx`,`C7133`,`Roda empat`)
    var Honda2 = kendaraan(`Honda vario new 123`,`S3461`,`Roda dua`)
    
    kendaraan();
    console.log(Honda1)
    console.log(Honda2)

//Membuat object menggunakan constructor
    function Makanan(Nama,Jenismakanan,Rasamakanan){
    //New membuat object kosong : var makanan = {}
    this.Nama = Nama;
    this.Jenismakanan = Jenismakanan; //Inisiasi property
    this.Rasamakanan = Rasamakanan;
    //New otomatis mengembalikan nilai : return makanan;
}

    var Menu1 = new Makanan(`Seblak`,`Berkuah`,`Pedas`)//Keywoard New digunakan untuk membuat object kosong otomatis lalu mengarahkan this kedalam object, lalu otomatis akan mengembalikan nilai object, ini mempermudah pembuatan object dengan lebih singkat;
    console.log(Menu1)

//this
//dalam penggunaan this perlu memahami contextdari code tersebut
//global scope adalah?
//
//this adalah window sehingga this bisa dikatakan window, yaitu window merupakan object global
console.log(window === this)

//objek deklarasi
function hi (){
    console.log(this)
    console.log(`hii`)
}
//this dan window melakukan action yang sama yaitu menjalankan objek "hi" dengan cakupan global atau ke seluruh code
window.hi();
this.hi(); //this mengembalikan objek  global]

//objek literal
var Sapa = {
    Salam : hi,
    hello : function (){

        console.log(`Hii`)
        console.log(this)//Pada objek literal, this digunakan untuk mengembalikan nilai dalam bentuk objek  terkait dengannya
    }
}


Sapa.hello();

function komandan(){
    console.log(this)
}

new komandan();//This mengembalikan nilai dengan object yang baru dibuat



//Latihan membuat object
//Caffe

function Koki(NamaKoki,Gajikoki,Jamkerja){
    this.NamaKoki = NamaKoki;
    this.Gajikoki = Gajikoki;
    this.Jamkerja = Jamkerja;

    this.makanan = function(Menu,Tampilmenu){
        this.Menu =  [`Nasi goreng`,`Ayam geprek`,`Bakso`,`Mie ayam`]
        for(let i = 0; i < Menu.length; i++){
            console.log(this.Menu())
        }
    }

    
}

var koki1 = new Koki(`Ahmad`,`3jt`,`7 Malem - 3 Pagi`)
var koki2 = new Koki(`Roni`,`6jt`,`9 Pagi - 5 Sore`)
var koki3 = new Koki(`Remon`,`4jt`,`3 Pagi - 9 pagi`)
    console.log()
    console.log(`Customer 1 dibuatin makanan oleh koki ${this.koki1} `)

function barista(Namabarista,Gajibarista,Jamkerjabasrista){
    this.Namabarista = Namabarista;
    this.Gajbarista = Gajibarista;
    this.Jamkerjabasrista = Jamkerjabasrista;
}
var barista1 = new barista(`Mamad`,`2jt`,`7 malem - 3 Pagi`)
var barista2 = new barista(`Roni`,`1.5jt`,`9 Pagi - 5 Sore`)
console.log()


//Object.create
//Object.create adalah
//Merupakan perintah untuk membuat object baru yang mewarisi property serta method dari objek

var methodsiswa = {
    makan : function(makan){
        this.Energi += makan
        console.log(`Ayam goreng menambah energi siswa sebanyak ` + makan )
        
},

    tidur : function(tidur){
        this.Energi += tidur
        console.log(`Ayam goreng menambah energi siswa sebanyak ` + makan )
        
    }
}
//Tanpa object.create()
// function siswa(Namasiswa,Kelas,Umursiswa){
//     var Profilsiswa = {}
//     Profilsiswa.Namasiswa = Namasiswa;
//     Profilsiswa.Kelas = Kelas;
//     Profilsiswa.Umursiswa = Umursiswa;
//     Profilsiswa.Makan = methodsiswa.makan;
//     return Profilsiswa;
// }

//Dengan object.create()
// function siswa(Namasiswa,Kelas,Umursiswa,Energi){
//     var Profilsiswa = Object.create(methodsiswa);
//     Profilsiswa.Namasiswa = Namasiswa;
//     Profilsiswa.Kelas = Kelas;
//     Profilsiswa.Umursiswa = Umursiswa;
//     Profilsiswa.Energi = Energi;
//     return Profilsiswa;
// }

// let siswa1 = siswa(`Exel`, `3B`, `9tahun`,`5`)

//Belajar prototype

// function siswa(Nama, Energi){
//     //this.Siswa = Object.created(methodsiswa.prototype) // dalam constructor function, mereka menambahkan keyword prototype untuk menghubungkan antar inisiasi property dengan method
//     this.Nama = Nama;
//     this.Energi = Energi;
// }

// siswa.prototype.makan = function (mbg){  //Dengan prototype kita bisa buat satu object yang meiliki prototype dengan berbagai macam method
//     this.Energi += mbg;
//     return  `Hii, selamat menikmati mbg ya ${this.Nama}` 
// }

// siswa.prototype.tidur = function (jam) {
//     this.Energi += jam
//     return `Selamat tidur ya ${this.Nama}`
// }

// let siswa1 =  new  siswa (`Exel`, 20)


//Versi class

class Siswasmp {
    constructor(Nama,Energi){
        this.Nama = Nama;
        this.Energi = Energi;
    }

    makan(mbg){
    this.Energi += mbg;
    return  `Hii, selamat menikmati mbg ya ${this.Nama}` 
    }

    tidur(jam){
    this.Energi += jam
    return `Selamat tidur ya ${this.Nama}`
    }
}


let exel = new Siswasmp (`Exel`, 10)
let roni = new Siswasmp (`Roni`, 23)