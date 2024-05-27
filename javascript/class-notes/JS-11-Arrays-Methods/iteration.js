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


//* ======================================================
//*                       FILTER METHOD
//* ======================================================
//* prices array"inde fiyatı 200 TL den az olanlari ayri
//* bir diziye saklayalim.

const prices = [200,500,100,180];

const ucuzlar = prices.filter((a)=> a<200);

console.log(ucuzlar); //(2) [100, 180]

prices.filter((a)=> a<200).forEach((b) => console.log(b)); // forEach tek tek yukardan asagiya yazdirir. Dizi gibi yazdirmaz.

console.log(prices); // kalici degisiklik yapmaz. Dizi oldugu gibi duruyor. Sadece islem yapilan satirda degisiyor.


prices.filter((a)=> a<200).map((a)=> a*2).forEach((a)=> console.log(a)); // a yazdigim yerlere farkli isimlerde verebilirim degistirmek zorunda degiliz. map((b)) ve forEach((c)) böyle de yazip devam edebilirim. Önemli olan fonksiyon icinde birbirini karsilamasi.