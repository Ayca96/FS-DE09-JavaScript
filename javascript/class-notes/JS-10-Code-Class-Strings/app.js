let isimler = ["harvey", "ashley","tolga","fatih","gökce"];
let bos = [];

console.log(typeof(isimler[0]));  //string
console.log(isimler.length); //5
console.log(Boolean(bos.length)); //false

bos.length ? console.log("veri geliyor") : console.log("veri gelmiyor"); //veri gelmiyor


//todo for, while, do while, forEach

// for (let i = 0 ; i < isimler.length; i++){
//   console.log(isimler[i]);
// }


// let sayac = 0 ;

// while(sayac < isimler.length ){
//   console.log(isimler[sayac]);
//  sayac ++ 
 
// }


isimler.forEach(isim => console.log("ne geliyor",isim));  //ne geliyor harvey,ne geliyor harvey, ne geliyor tolga,ne geliyor fatih,ne geliyor gökce.


//! 1- Belirli bir string ifadenin icindeki sesli harfleri bulan fonksiyonu yaziniz.

// let hello = "aycakübra"

// function findVowels(str) {

//   let vowels = "aeiouöü"
//   let newStr = "";
 

//   for (let i = 0; i < str.length; i++){

//     if (vowels.includes(str[i])){
//       newStr += str[i]
//     }
    
//   }
//   return newStr

// }
// console.log(findVowels(hello))
// console.log(findVowels("merhaba"))


// let str = "Uzun zaman once uzak bir ulkede"
// let sesliHarfler = str.match(/[aeiouAEIOU]/g)
// console.log(sesliHarfler);


//! 2- Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız.

// let sayi = [1, 2, 9, 4, 15, 6];

// function enBuyukSayiyiBul(dizi) {
   
//     let enBuyuk = dizi[0];

    
//     for (let i = 1; i < dizi.length; i++) {
//         if (dizi[i] > enBuyuk) {
//             enBuyuk = dizi[i];
//         }
//     }

  
//     return enBuyuk;
// }

// console.log(enBuyukSayiyiBul(sayi)); 


//const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

//number.sort((a,b) => a - b); // kücükten büyüge siraliyor.
//console.log(number[number.length-1]); // [1, 3, 5, 10, 22, 35, 55, 77, 231]


// let sayi = [40,50,93];
// function sayibul (dizi){

//   let büyük = sayi[0];

//   for(let i = 0 ; i < sayi.length ; i++){
//     if(sayi[i] > büyük){
//       büyük = sayi[i]
//     }
//     return büyük
//   }


// }

// console.log(sayibul(büyük)); ??  kontrol et


//! 3- Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız.


// let numbers = [1,2,3,4,7];

// function toplam (sayi){

// let neu = 0;

// for (let i = 0 ; i< sayi.length ; i++){

//   neu += sayi[i]
// }
// return neu
// }

// console.log(toplam(numbers));


//! 4 - Bir dizideki sayilarin ortalamasini bulan fonksiyonu yaziniz.

// let numbers = [1,2,3,4,10];

// function toplam (sayi){

// let neu = 0;

// for (let i = 0 ; i< sayi.length ; i++){

//   neu += sayi[i]
// }
// return neu/sayi.length
// }

// console.log(toplam(numbers));


//! 5- Girilen bir cümledeki kelime sayisini bulan bir fonksiyon yaziniz.

// let cümle = "ayca kübra";

// function kelimesayisi (kelime){

// let sayac = 1;

// for(i = 1 ; i < kelime.length; i++){
// if(kelime[i] == " ")
// sayac++
// }

// return sayac

// }

// console.log( kelimesayisi(cümle));  

// let cumle ="Uzun zaman once uzak bir ulkede"

// function kelimeSayisi(cumle){

//     return cumle.split(' ').length;
        
        
//     }

// console.log(kelimeSayisi(cumle));


//! 6- Bir cümleyi alin ve kelimeleri ters sirayla birlestirerek yeni bir cümle olusturun.

// let sentence = "Javascript harika bir dil";

// let kelimeler = sentence.split(' ');

// let reverseSentence = kelimeler.reverse();

// let yeniCumle = reverseSentence.join(' ');

// console.log(yeniCumle); 


//! 7- Soru: Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.


// let names = []; 

// while (true) {
//     let name = prompt('Bir ad girin veya çikmak için "q" yazin:');

//     if (name === 'q') {
//         if (names.length > 0) {
        
//             let removedName = names.pop();
//             console.log("'" + removedName + "' listeden kaldirildi.");
//         } else {
//             console.log("Liste boş.");
//         }
//         break; 
//     }
  
//     names.push(name);
// }

// console.log("İsimlerin son listesi");
// console.log(names);


// let names = [];

// while(true){

//   let name = prompt ("Lütfen isim giriniz veya cikmak icin q yazin ")
//   if(name === "q"){
//     if(names.length > 0){
//       let removedName = names.pop();
//       console.log( removedName + " listeden kaldirildi");
//     }
//     else {
//       console.log("liste bos");
//     }
//     break;
//   }
//   names.push(name)

// }
// console.log("Isimlerin Listesi");
// console.log(names);

//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız.

// let ad = prompt ("adinizi giriniz");
// let tarih = prompt ("dogum yilinizi giriniz");

// function myAge (name, date) {
// let yas = new Date().getFullYear()
// let result = yas - date;

// return `${name} ${result} yasindadir`
// }

//  console.log(myAge(ad, tarih)); 

//! 9- Isimler1 dizisinin icerisindeeki her ismi kücük harf olarak yeni bir diziye saklayiniz.

// const isimler1 = [
//   'Ahmet',
//   'mehmet',
//   'ismet',
//   'SAFFET',
//   'Can',
//   'Canan',
//   'Cavidan',
// ];

// const newa = [];

// for (let i = 0; i< isimler1.length; i++){

// const element = isimler1[i].toLowerCase();
//  newa.push(element)

// }

// console.log(newa);

//! Bir sayinin faktöriyelini hesaplayan fonksiyonu yaziniz.

// function fak (sayi){

// if (sayi === 0 || sayi === 1){
//   return 1
// }
// else {
//   return `${sayi} * ${fak(sayi-1)}`
  
// }

// }
// console.log(fak(4)); 
 

//! 11- kayıp sayıyı bulun?

// const numbers = [5, 2, 6, 1, 3, 7];

// numbers.sort((a, b) => a - b);

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] !== i + 1) {
//         console.log("Eksik sayi:", i + 1);
//         break;
//     }
// }

const number = [5,2,6,1,3,7];

number.sort((a,b)=>a-b);

for (let i = 0; i < number.length; i++){
if(number[i] !== i+1) {
console.log( i+1);
break;
} 

}