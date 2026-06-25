//pilihan pemain
var repeat = true
while(repeat){
var suit = prompt("Pilih = \n-Batu \n-Gunting \n-Kertas")


//pilihan bot
var bot = Math.random();



if( bot <= 0.34){
    bot ="Batu"
} 
else if( bot >= 0.34 && bot < 0.67){
    bot = "Gunting"
}

else{
    bot = "Kertas"
}

console.log(bot)

//rules
var result
if(suit == bot){
    result = "Seri"
}
 else if(suit == "Batu"){
    if (bot == "Kertas"){
        result = "Kalah"
    } else {
        result = "Menang"
    }
   

}

else if(suit == "Kertas"){
    if(bot = "Batu"){
        result = "Menang"
    }
    else{
        result = " Kalah"
    }
}

else if (suit == "Gunting"){
    result = (bot == "Batu") ? "Menang" : "Kalah"
}

else{
    result = "Selain diatas yang kamu pilih salah"
}

//Output
alert(" Kamu memilih  " + suit + " dan Lawanmu memilih " + bot + " dan hasil-nya kamu " + result )

  repeat = confirm("Coba lagi? ")
  
}

alert("Trima kasih telah mencoba")