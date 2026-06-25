  
  function hitungTotalvolume(a,b){
    var total
    var vkubusA =  a * a * a
    var vkubusB =  b * b * b
     
     total = vkubusA + vkubusB
     return total;
  }

  // var kubus1 = prompt("Masuka nilai kubus 1 : ")
  // var kubus2 = prompt("Masuka nilai kubus 2 : ")
  // alert(hitungTotalvolume(kubus1,kubus2))

  var hasil = hitungTotalvolume(8,3) // pemanggilan function secara ekspresi 
  console.log(hasil)

  

  