// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const kola=50;
const cips=30;
const dondurma=20;

console.log(kola+cips+dondurma);

let toplam=kola+cips+dondurma;

console.log(toplam);

// bir arttir

toplam++
toplam=toplam+1

console.log(toplam);


//10 arttir

toplam=toplam+10

toplam+=10  //toplam=toplam+10

console.log(toplam);

//? + operatorü string concatination(birlestirme) islemide yapar.

const sayi1="3";
const sayi2=8;

console.log(sayi1+sayi2);
console.log(sayi1-sayi2);




//! BACKTICKS (template literals)


const ad="erkan";
const soyad="sevim";

console.log(ad + soyad);

console.log("adim soyadim" + " "+ ad+ " " +soyad);

``

console.log(`adim soyadim ${ad} ${soyad}`);


const dogumTarihi=1979;

console.log(`${ad} ${soyad} ${2024-dogumTarihi} yasindadir `);


//? Bazı fonksiyonlar

// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar 11.1 i 12 ye yuvarlar.
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.

// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.

//tofixed(x) //*virgülden sonra x adet basamak birak.

const ab = 1.3;
console.log(Math.trunc(ab));
console.log(Math.floor(ab));
console.log(Math.ceil(ab));
console.log(Math.round(ab));

const ba = -1.3;
console.log(Math.trunc(ba));
console.log(Math.floor(ba));
console.log(Math.ceil(ba));
console.log(Math.round(ba));
document.write(Math.trunc(ba));

/*Random:rastgele
rastgele sayi üretmek icin kullanilir.
0-1 arasinda bir sayi üretir*/
console.log(Math.random());
console.log(Math.ceil(Math.random()*20));

const randomSayi = Math.random()
console.log(randomSayi);
console.log(randomSayi.toFixed(2));
console.log(Math.random().toFixed(3));

//*ARTTIRMA AZALTMA

let a = 5;
console.log("ilk" , a++); //++ lar sonra oldugunda onlari ilk hesapta görmüyor. 
console.log("ikinci" , a);

let b =a++;
console.log(b); //6
console.log(a); //7

let c = 10;
console.log("ilk", ++c); // 11, ++ lar basta olunca onlari ilk hesapta görüyor.
let d = ++c;
console.log(d); //12
console.log(c); //12

let e = 33;
console.log(--e); //32  e=e-1
console.log(e--); //32
console.log(e); //31

//! e yi 5 arttir.
// e=e+5

console.log(e+=5); //36

//! e yi 5 le carp

console.log(e*5); //180

//? Carpma ve Üs alma

const PI = 3.14;  // pi nin degismeyecegine eminsek büyük harflede yazilir.

const r = 5;
const alan = PI * r **2;
console.log(alan);

//!Math pow (power) bir sayinin kuvvetini(karesini) almak icin kullanilir. */

console.log(PI*Math.pow(r,2));

//! Math.sqrt : verilen degerin karekökünü verir.

console.log(Math.sqrt(144));
console.log(144**(1/2));

// **********MOD ALMA**********

const number=456;
console.log(number%10);//6

console.log("onlar", Math.trunc(number/10)%10);

console.log("yüzler", Math.trunc(number/100));

// console.log(number = number +i2) 
// console.log(number -= i2) 
// console.log(number *= i2) 
// console.log(number /= i2)
// console.log(number %= i2) 


//KARSILASTIRMA OPERATÖRLERI//

const sayi4 = 4;
console.log(sayi4 == 4); // esit mi?
console.log(sayi4 === 4); // esit mi? type da esit mi?
console.log(sayi4 == "4"); //  true, cift esittir type a bakmiyor.
console.log(sayi4 === "4"); //  false, 3 tane esittir type a bakiyor.
console.log(sayi4 != 5); // true, 5 e esit degil mi sorusunu soruyoruz?
console.log(sayi4 != "4"); // != bu sembol su sembole dönüyor ==. Ve type a bakmiyor.

console.log(sayi4 > 4);  // büyük mü?, false
console.log(sayi4 >= 4);


// MANTIKSAL OPERATÖRLER//
console.log("*********************");

//? TRUE

console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean(1,2,5));

//?FALSE

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

const v1 = false || 0 || 12.6 || false || null
console.log(v1);
console.log(Boolean (v1));
const v2 = false || 0 || null || undefined || NaN
console.log(v2);
console.log(Boolean (v2));

const v3 = 5 &&  true && 0 && ""
console.log(v3);
console.log(Boolean(v3));  //false

const v4 = 5 && 12.6 && -7 
console.log(v4); // -7,  hata aradigi icin son ana kadar bakiyor fakat bulamadi ve en son ki güzel sonucu veriyor.
console.log(Boolean(v4));



//? TIP DÖNÜSÜMLERI //

const para = Number("1000") + Number("900")
console.log(para);

let aa = 10
let bb = '5'

console.log('Toplama', aa + bb) //105
console.log('Çıkarma', aa - bb) // 5
console.log('Çarpma', aa * bb) // 50
console.log('Bölme', aa / bb) //2

console.log(aa + Number(bb)); //15

console.log(typeof bb);
console.log(bb ** 2); //25
 //Toplama disindaki tüm islemlerde Number a cevirmek zorunda degiliz. 


 //****** */
  let ee = "123.65";
 console.log(parseInt(ee)); // 123, Tam kismi alir Number a cevirir.
 console.log(parseFloat (ee)); // 123.45 stringi number a cevirir.
//**** */

// .toString() Methodu numberlari stringe cevirir.

let f = 123.45;
console.log(f.toString ()); // bu satirda stringe cevirir.

//! + ile de Number a cevirebiliriz.
console.log(+ee); 
// sadece o satirda number a cevirir diger satira gecince yine string olur. eski haline döner yani.

let i =+ee
console.log(typeof i);
console.log(typeof ee);

//* .toFixed() noktadan sonra kaç basamak alacağımızı belirtir.Sayıyı stringe çevirir.

let z = 0.3456775678;
console.log(typeof (z.toFixed (2)));
console.log(typeof (+z.toFixed (2)));

//* prompt komutu da toFixed gibi kullanilan sayiyi string yapar. 

// const age = prompt ("lütfen yasinizi giriniz");

// console.log(typeof age); //string


// const age2 = +prompt ("lütfen yasinizi giriniz");

// console.log(typeof age2); //number



//? Null Undefined NaN

console.log(typeof null); //object
let n = null;

console.log(Boolean (n)); // false

console.log(null-5); // -5

console.log(null == undefined); // true, tipe bakmiyor ikiside false deger bos küme diyo.
console.log(null === undefined); // false, typeoflari  esıt degıl.

// "" bu ile bu " " ayni sey degil.Bu  " " boslugu temsil eder.

console.log(Number ("asdf"));
console.log(Number ("1234"));
console.log(null === null);

//!GENEL KÜLTÜR

console.log(Number ("0x11")); // x=hexa 16 lik taban, 0x 16lik taban oldugunu belirtiyor,  sonuc 1.16*0 + 1.16*1 = 17

console.log(Number ("0b101")); // b=binary 2 lik taban, 0b 2lik taban oldugunu belirtiyor,  sonuc 1.2*0 + 0.2*1 + 1.2*2 = 5

console.log(Number ("0o11")); // o=octal 8 lik taban, 0o 8lik taban oldugunu belirtiyor,  sonuc 1.8*0 + 1.8*1 = 9