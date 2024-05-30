//* ======================================================
//*                   FOREACH METHOD
//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır ve tüketir bitirir. Ekstra bir sey istemedikce diziyi degistirmez. 

//*======================================================

const prices1 = [100,250,50,90];

prices1.forEach((tutar) => console.log(tutar)); // tek tek yukardan asagiya sirayla yazdirir dizi gibi yazdirmiyor.
console.log(prices1); //(4) [100, 250, 50, 90] orijinal diziyi biz istemedikce bozmaz.

let toplam = 0;

const terminal = prices1.forEach((a) => console.log(toplam+=a)); // tek tek  toplayarak yukardan asagiya yazdiriyor, dizi gibi yan yana yazdirmiyor. Görmek istiyorsam buraya mutlaka console yazmam lazim. Yazmazsam göremem. Terminal islem yapar ve biter.

console.log(terminal); //undefined


//*********************************ORNEK******* */

//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. farklı isim kullanılabilir.

// Her bir elemani 2 katiyla carp ve bütün dizi elemanlarini topla.

const prices2 = [100,250,50,90];

let toplam1 = 0;

prices2.forEach((p,i,dizi)=>{

toplam1 += p;

console.log(`${i+1}. toplam ${toplam1}`);
console.log(dizi); //(4) [100, 250, 50, 90]

dizi[i] = p*2; // dizi  prices2'yi temsil ediyor kisa olmasi adina yazdik, opsiyonel olmak zorunda degil cünlü diziyi zaten const a atadik ama belirtince daha kolay anlasiliyor.
})

console.log(prices2); //(4) [200, 500, 100, 180] diziyi kalici olarak degistirdik.


//* örnek meyveler dizisindeki elemanlarin harf sayisi 3 ten büyük olan meyveleri büyük harfe cevir. 

const meyveler = ["elma","erik","muz","karpuz"];

meyveler.forEach((meyve)=>{

  if(meyve.length >3) {
    console.log(meyve.toUpperCase()); 

  }
  else {

    console.log(meyve);
  }
    
})


//* ======================================================
//*                       MAP METHOD
//!map yapılan değişikliği bir diziye atıp, bunu döndürebilir,  foreach gibi tüketmez.
//* ======================================================

//*-------------- ÖRNEK -------------------
//* names dizisinin içindeki her ismi büyük harf olarak yeni bir diziye saklayalım.

const names = ["ayca","kemal","mustafa","ayse","fatih","halil","umut","gökce","mehmet"];

const yeni = names.map((a)=>a.toUpperCase())
console.log(yeni); //(9) ['AYCA', 'KEMAL', 'MUSTAFA', 'AYSE', 'FATIH', 'HALIL', 'UMUT', 'GÖKCE', 'MEHMET'] büyütüp dizide saklamis map.
console.log(names); //(9) ['ayca', 'kemal', 'mustafa', 'ayse', 'fatih', 'halil', 'umut', 'gökce', 'mehmet'] diziyi kalici degistirmez.

//names.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a)); // her elemani tek tek yukardan asagi sirayla yazdiriyor. kaliciligi yok. 
//console.log(names); // hala kücük harfli eski halinde degisme yok.

//todo forEach (), ve map() sadece dizilerde calisir. forEach map ve filter orijinal diziyi biz istemedikce bozmaz.


//! Her elemanin sadece ilk harfini büyüttük.

const yeni2= names.map((a)=>a.slice(0,1).toUpperCase()+a.slice(1));
console.log(yeni2); //(9) ['Ayca', 'Kemal', 'Mustafa', 'Ayse', 'Fatih', 'Halil', 'Umut', 'Gökce', 'Mehmet']


//*örnek
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100,300,50,90]

fiyatlar.map((p,i,array)=>{

 if(p<250){

  array[i] = p*1.5

 }
 else{
  array [i] = p*1.2
 }

console.log(fiyatlar); //(4) [150, 360, 75, 135]
})


//?-------------- ÖRNEK -------------------
//? tlPrices dizisindeki rakamlarin Euro ve dolar karsiliklarini hesaplatarak yeni dizilere kaydediniz.
// toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametrei kadar virgülden sonra eleman bırakır.
//todo  toFixed()= kullandığımız sayıları string e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız).

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 27.5;
const euro = 29.5;

const dolarPrice= tlPrices.map((para)=>+(para/dolar).toFixed(2))
console.log(dolarPrice);

const euroPrices= tlPrices.map((para)=>Number((para/euro).toFixed(2)))
console.log(euroPrices);


//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices = [200,500,100,180];

const ucuzlar = prices.filter((a)=> a<200);

console.log(ucuzlar); //(2) [100, 180] dizide topluyor. 

prices.filter((a)=> a<200).forEach((b) => console.log(b)); // forEach tek tek yukardan asagiya yazdirir. Dizi gibi yazdirmaz.

console.log(prices); // kalici degisiklik yapmaz. Dizi oldugu gibi duruyor. Sadece islem yapilan satirda degisiyor.


prices.filter((a)=> a<200).map((a)=> a*2).forEach((a)=> console.log(a)); // a yazdigim yerlere farkli isimlerde verebilirim degistirmek zorunda degiliz. map((b)) ve forEach((c)) böyle de yazip devam edebilirim. Önemli olan fonksiyon icinde birbirini karsilamasi. 200,360


const text = "Clarusway Online Career IT TraininG School ThankS for time";

// ! yukarıdaki string i array e çevirip bütün kelimelerin harflerini büyüt.

text.split(" ").map((a)=> a.toUpperCase()).forEach((a)=>console.log(a));

 //!yukarıda array e döndürdüğümüz string cümledeki, sadece T ile başlayan kelimelerin ilk harfini küçült, diğer harflerini normal bırakarak yazdır.

 text.split(" ").filter((a)=>a.startsWith("T")).map((a)=>a.slice(0,1).toLowerCase()+ a.slice(1)).forEach((a)=>console.log(a));

 const names2 = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "erkan",
  "umut",
  "gökce",
  "mehmet",
  "rengin",
  ];

 const newName = names2.filter((a)=>a.endsWith("n")).map((a)=>a.split("").reverse().join(" ")) //  bu tarz cok kez method kullanmaya pipline denir.

 console.log(newName);


 //* ======================================================
//*                       PIPELINE
//* ======================================================

//!slide daki soru, pipeline olmazsa böyle uzun uzun if le çözeriz
//* Fiyatı 100 TL den fazla olanlara %10 zam, 100 tl ve 100 TL den az olanlara ise %15 zam yapılmak isteniyor. Ayrıca, zamlı olan yeni değerleri örnekteki gibi diziye saklamak istiyoruz.

 const fiyatlar2 = [100, 250, 50, 90];

//! 1.Yol map + if ile

 const yeniDizi = fiyatlar2.map((a)=>{

  if(a>100){
 
   return Math.ceil((a*1.1)); // 275
 
  }
  else{
  return ((a*1.15).toFixed(1)); // (4) ['115.0', 275, '57.5', '103.5']
  }
 
 
 });

 console.log(yeniDizi); //(4) ['115.0', 275, '57.5', '103.5']

 //! 2.Yol

 const zengin = fiyatlar2.filter((a)=>a>100).map((a)=>a*1.1);

 const fakir = fiyatlar2.filter((a)=> a<=100).map((a)=>Math.ceil((a*1.15)));

 console.log(zengin.concat(fakir)); //(4) [275, 115, 58, 104]


 //* ======================================================
//*                 REDUCE tek bir eleman döndürür
//*               reduce(accumulator, currentValue);
//* ======================================================

//* salaries dizisindeki maaşları toplayınız (reduce metodu kullanın).

const salaries = [3000, 5000, 4000, 6000, 7500];

// console.log( salaries.reduce((toplam,eleman)=>toplam + eleman,0))
// alttaki kodu yukarıdaki gibi görür ve toplam değişkenine 0 ı assign eder, yazmamıza gerek yok

console.log(salaries.reduce((toplam,eleman)=>toplam+eleman)); //25500

 //! forEach metodu dizilerde kullanılabilir, reduce tek bir eleman döndürdüğü için, burada forEach kullanamayız.

 console.log(salaries.reduce((acc,current)=> acc*current)); //2700000000000000000


//* Asagida 1 den 7 ye kadar olan sayilarin bulundugu bir dizi verilmis ancak bir eleman unutulmus, unutulan sayiyi bulunuz.

 const nummern = [5,1,4,7,2,3];

 let total = ((nummern.length+1) * (nummern.length+2)) / 2;

 const diziToplam = nummern.reduce((acc,curr)=> acc+curr);

 console.log(total-diziToplam); //6

