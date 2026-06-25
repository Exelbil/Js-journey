// tebak angka
var ulang = true
while(ulang){
var input = prompt("Masuka angka dari 1 - 10")

var bot = Math.floor(Math.random()*10)+1;

if(input == bot){
    alert("Angka yang kamu masukan benar yaitu " + bot)
} else if(input > bot){
    alert("Angka yang kamu masukan terlalu besar, hasil yang benar adalah " + bot )
}
else{
    alert("Angka yang kamu masukan terlalu kecil, hasil yang benar adalah " + bot)
}

 ulang = confirm('Mau ulang?')
}

alert('Terima-Kasih telah coba permainan saya')