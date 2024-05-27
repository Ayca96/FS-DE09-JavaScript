// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//todo 1. Yöntem (Array Literal) tercih edilen yöntem.

const yaslar = [30,29,45,27,12];
console.log(yaslar);
console.log(yaslar[1]);
// yaslar= [1,2,3,]; // Assignment to constant variable. Degistiremiyoruz const ile atadigimiz icin.

//todo(turuncu renk yapiyor) 2. Yöntem (Array Constructor)

const cars = new Array ("BMW", "Mercedes", "Volvo");
console.log(cars);

const birth = 1979;

const isimler = ["erkan", "ayca", "mustafa", 2024 - birth, "kemal", true, yaslar];
console.log(isimler); // (7) ['erkan', 'ayca', 'mustafa', 45, 'kemal', true, Array(5)] Arrays = yaslar

console.log(isimler[2]); //mustafa

console.log(isimler[6] [1]); // Array icindeki yaslar Arrayinee bu sekilde ulasilir. "29"

console.log(--isimler [6] [1]); // kalici olarak eksilttik 29-1 = 28
console.log(isimler [6]); //(5) [30, 28, 45, 27, 12]  29 du 28 oldu.
console.log(isimler [6] [1]); // 28

isimler[5] = false;
console.log(isimler[5]);
console.log(isimler); // ['erkan', 'ayca', 'mustafa', 45, 'kemal', false, Array(5)]  true idi simdi false olarak kalici degistirdik.


// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//*pop() dizinin son elemanını siler, console da yazdırırsak sildiği elemanı döndürür.

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

 console.log(meyveler); // (5) ['Elma', 'Erik', 'Armut', 'Muz', 'Kivi']

console.log(meyveler.pop()); // kivi silindi

console.log(meyveler.pop()); // muz silindi.

//* shift() dizinin ilk elemanini siler, console da yazdirirsak sildigi elemani döndürür.

console.log(meyveler.shift());
console.log(meyveler); // (2) ['Erik', 'Armut']

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür.

meyveler.push ("cilek","Kavun", "karpuz"); // bu 3 meyve eklendi.
console.log(meyveler); // (5) ['Erik', 'Armut', 'cilek', 'Kavun', 'karpuz']


//*unshift() dizinin başına eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür.

meyveler.unshift("Ayva");
console.log(meyveler); //(6) ['Ayva', 'Erik', 'Armut', 'cilek', 'Kavun', 'karpuz']

//*reverse() dizinin tamamını ters çevirir.

//! reverse = tersine cevirmek

meyveler.reverse()
console.log(meyveler); // ['karpuz', 'Kavun', 'cilek', 'Armut', 'Erik', 'Ayva']

console.log(meyveler[3].split("").reverse()); // ['t', 'u', 'm', 'r', 'A']

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık itilen elemanin yerinde yeni yazdığım olsun.
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz.

//! splice = birlestirmek, birbirine eklemek, eklemek

meyveler.splice(2,1,"Ananas");  // 1 yazarsa degistiriyor.
console.log(meyveler); //  ['karpuz', 'Kavun', 'Ananas', 'Armut', 'Erik', 'Ayva'] cilek silindi yerine ananas eklendi.

meyveler.splice(4,0,"Ananas"); // 0 yazinca ittirip yeni eleman ekliyor.
console.log(meyveler); // ['karpuz', 'Kavun', 'Ananas', 'Armut', 'Ananas', 'Erik', 'Ayva'] Erik ittirildi ve erik`in eski yerine Ananas geldi.

meyveler.splice(3,0, "çilek");
console.log(meyveler); // ['karpuz', 'Kavun', 'Ananas', 'çilek', 'Armut', 'Ananas', 'Erik', 'Ayva']

meyveler.splice(4,1); // 3 indexli eleman olan cilek kalici silindi.
console.log(meyveler); 


//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçekleştirir.

//! sort = siralamak, siniflandirmak, düzenlemek

meyveler.sort()  //  ASCII tablosuna göre büyük harfler kücük harflere göre daha öncelikli geliyor.
console.log(meyveler); //['Ananas', 'Ananas', 'Ayva', 'Erik', 'Kavun', 'karpuz', 'çilek'] "ç" bu harf ingilizcede olmadigi icin sona atiyor tanimiyor.


const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

// number.sort()
// console.log(number); //[1, 10, 22, 231, 3, 35, 5, 55, 77]

// number.sort((a,b) => a - b); // kücükten büyüge siraliyor.
// console.log(number); // [1, 3, 5, 10, 22, 35, 55, 77, 231]

number.sort((a,b) => b - a); // büyükten kücüge siraliyor.
console.log(number); // [231, 77, 55, 35, 22, 10, 5, 3, 1]

//? ===========================================================
//?  DİZİ ERİŞİM METOTLARI (diziyi değiştirmezler)
//? ===========================================================

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

console.log(sayilar1.includes("5")); // false
console.log(sayilar1.includes(5)); //true


//indexOf() lastindexOf()

console.log(sayilar1.indexOf("uc")); //4
console.log(sayilar1.indexOf(5)); //1
console.log(sayilar1.lastIndexOf(5)); //7
console.log(sayilar1.indexOf(5,2)); //7

//********** */ Örnek
//* kullanıcıdan sayı isteyin. girilen sayının hem string hem number hali sayılar dizisinde var mı araştır, varsa index ini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

// const sayiString=prompt("lütfen bir sayı giriniz")

// const sayiNumber=Number(sayiString)


// if(sayilar1.includes(sayiString)){
//     console.log("aradığınız sayının string hali dizide var", sayilar1.indexOf(sayiString));

// }else{
//     console.log("aradığınız sayının string hali yok");
// }


// if (sayilar1.includes(sayiNumber)) {
//   console.log(
//     "aradığınız sayının number hali dizide var",
//     sayilar1.indexOf(sayiNumber)
//   );
// } else {
//   console.log("aradığınız sayının number hali yok");
// }


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez.

console.log(sayilar1.join(" ")); //3 5 2 2 uc 2 bes 5 6
console.log(sayilar1.join("")); //3522uc2bes56
console.log(sayilar1.join("A")); //3A5A2A2AucA2AbesA5A6

const meyveler1 = ["Elma", "Erik", "Armut", "Muz", "Kivi"];
console.log(meyveler1[3].split("").reverse().join("")); //zuM

//toString()
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

//************** slice()**************/

const araba = ["bmw","mercedes","audi","ferrari","lamborgini"];

console.log(araba.slice(3)); // (2) ['ferrari', 'lamborgini']
console.log(araba.slice(1,3)); //(2) ['mercedes', 'audi'] 3.indexi almiyor.

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6];
console.log(kisiler.concat(rakamlar)); //(11) ['özlem', 'esra', 'nihal', 'fatih', 'hüseyin', 1, 2, 3, 4, 5, 6]

const birlesik = kisiler.concat(rakamlar,true,"ayse","gökce", ["fatih","kemal"],3, [["ayca","ömer"]]) 

console.log(birlesik); //(18)  ['özlem', 'esra', 'nihal', 'fatih', 'hüseyin', 1, 2, 3, 4, 5, 6, true, 'ayse', 'gökce', 'fatih', 'kemal', 3, Array(2)]

//************ every() *****/

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,34,45,56,89,15]
console.log(yas.every((a)=> a>= 18)); //false uymayan 15 var herkes uymadigi icin false döndürdü.
console.log(yas.every((a)=> a<90)); //true

/*******some() */
//? Aldigi callback fonksiyonuna (bizim yazdigimiz fonksiyon) göre test gerceklestirir.
//?En az bir eleman icin bile test basarili ise true aksi takdirde false döndürür.

console.log(yas.some((osman) => osman >70)); //true
console.log(yas.some((osman) => osman >90)); //false
