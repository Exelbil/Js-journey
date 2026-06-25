// day 2 belajar js full



// Operator pada javascript 
//Ada operator binary unary ternary


//Operator aritmatika  + - *  / %
console.log(`\n\nOperator Aritmatika`)
a = 3
b = 3
hasil = a + b  // penjumlahan
console.log(`hasil  ${a} + ${b} = ${hasil}`) 

hasil = a - b  // pengurangan
console.log(`hasil  ${a} - ${b} = ${hasil}`) 

hasil = a * b  //  perkalian
console.log(`hasil  ${a} * ${b} = ${hasil}`) 

hasil = a / b  // pembagian 
console.log(`hasil  ${a} / ${b} = ${hasil}`) 

hasil = a % b // modulus / sisa bagi
console.log(`hasil ${a} % ${b} = ${hasil}`)

//operator Penugasan  =, +=, -=, *=, /=, %=
console.log(`\n\nOperator Penugasan`)
c = 10 
console.log(`nilai c = ${c}`)

c += 5
console.log(`nilai c += ${c}`)

c -= 5
console.log(`nilai c -= ${c}`)

c *= 5
console.log(`nilai c *= ${c}`)

c /= 5
console.log(`nilai c /= ${c}`)

c %= 5
console.log(`nilai c %= ${c}`)

//Operator perbandingan ==, !=, ===, !==, >, <, >=, <=
console.log(`\n operator perbandingan`)
d = 5
e = "6"

f = d == e // pengecekan nilai
console.log(`${d} == ${e} = ${f}`)

f = d != e // mengecek  nilai yang tidak sama antara d dan e
console.log(`${d} != ${e} = ${f}`)

f = d === e // pengecekan nilai dan tipe data
console.log(`${d} === ${e} = ${f}`)

f = d !==e // pengecekan nilai  dan tipe data yang tidak sama antara  d dan e
console.log(`${d} !== ${e} = ${f}`)

f =  d > e //pengecekan nilai d lebih besar daro e
console.log(`${d} > ${e} = ${f}`)

f = d < e//pengecekan nilai d lebih kecil dari e
console.log(` ${d} < ${e} = ${f}`)

f = d >= e //pengecekan nilai d lebih besar atau sama dengan e
console.log(`${d} >= ${e} = ${f}`)

f = d <= e//penggecelan nilai d lebih kecil atau  sama dengan e
console.log(`${d} <= ${e} = ${f}`)

// operator logika
console.log(`\n\nOperator Logika`)
g = ( a === b)
h = (d > e) 

i = g && h // and
console.log(`${g} && ${h} = ${i}`)

i = g || h // or
console.log(`${g} || ${h} = ${i}`)

i = !g // not 
console.log(`${g} = ${i}`)

// operator string
console.log(`\noperator string`)
// sesama string bisa digabungkan dengan operator +
x = "exel" 
y = "aceng"

z = x + " " + y
console.log(`${x} dan ${y} digabung jadi ${z}`)

// sesama angka dan string dapat di gabungkan dengan operator +
m = 20
n = "hari"

o = m + " " + n
console.log(`${m} dan ${n} digabung jadi ${o}`)

//sesama angka yang satunya bertipe number dan satunya bertipe string dengan operator +
q = 15 + "4"
p = 15

r = q + p
console.log(`${q} dan ${p}  digabung jadi ${r}`)

//operator tipe data
console.log(`\n\nOperator Tipe Data`)
var s = 10
var t = "exel"
var u = true
console.log(`tipe data dari ${s} adalah ${typeof(s)}, tipe dta dari ${t} adalah ${typeof(t)}, tipe data dari ${u} adalah ${typeof(u)}`)

//Operator precedence / Operator 
console.log(`\n Operator Precedence`)
var v = 10 + 2 * 2 // operator dari perkalian dihitung duluan
var w = (10 + 2) * 2 // operator dalam tanda kurung dihitung duluan
console.log(`hasil dari 10 + 2 * 2 = ${v}`)
console.log(`hasil dari (10 + 2) * 2 = ${w}`)

//Operator ternary
//Operator ternary adalah operator yang digunakan untuk mengevaluasi sebuah kondisi dan mengembalikan salah satu dari dua nilai yang berbeda, tergantung pada hasil evaluasi kondisi tersebut. Operator ini sering digunakan sebagai alternatif dari pernyataan if-else yang lebih panjang dan kompleks. Operator ternary terdiri dari tiga bagian: kondisi, nilai jika kondisi benar, dan nilai jika kondisi salah. Sintaksnya adalah sebagai berikut:
//kondisi ? nilai_true : nilai_false
console.log(`\n Operator tenary / Operator kondisi`)
var umur= 17
var sim = (umur >= 18) ? "Boleh  buat sim" : "Belum bisa buat sim"
console.log(` umur saya adalah ${umur} tahun jadi saya  ${sim}`)