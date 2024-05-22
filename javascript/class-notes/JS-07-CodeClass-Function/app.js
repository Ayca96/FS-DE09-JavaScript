//! Decleration
// islem(10,13,);      // console.log(islem(10,13,4)) bu sekilde yaparsan normal sekilde   islemi yapar. console.log(islem(10,13,)) bu sekilde olursa NaN gösterir 3. argumenti karsilayan bir parametre olmadigi icin.

// function islem (par1,par2,par3){
//     console.log(par1);
//     console.log(par2);
//     //console.log(par3);  undefıned

// return par1+par2+par3

// }

// let add= islem(3,4,5)
// console.log(add);

//! Expression

// const topla1 = function (a,b){
// return a + b

// }
// console.log(topla1(3,5));


//! Arrow 

// const topla2 =  (a,b) => 
//  a + b

// console.log(topla2(3,5));


// let isim = "ayca kübra" ;
// console.log(isim [5]);
// console.log(isim .length);

//! 1- Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız? (Celsius × 9/5) + 32 = Fahrenheit.

// const toFah = function (cel) {

// return (cel * 9/5) + 32

// }

// console.log(toFah(40));


//! 2- Belirli bir string ifadenin tersini bulan fonksiyonu yazınız?

// const string = "hello world";

// function reverseString (str) {

// let newStr = " ";

// for (let i = str.length - 1; i>=0 ; i--) {

//   newStr += str[i];

// }
// return newStr

// }

// console.log(reverseString(string));


// const string = "kavak";

// function reverseString (str) {

// let newStr = " ";

// for (let i = str.length - 1; i>=0 ; i--) {

//   newStr += str[i];

// }
// return newStr
// }
// console.log(reverseString(string));


// if (string == reverseString(string)){
//   console.log("Bu bir palindrom ifadedir");
//   }
//   else {
//     console.log("Bu bir palindrom degildir.");
//   }


//  const string = "kavak";

// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }

// console.log(reverseString(string));

// if (string === reverseString(string)) {
//     console.log("Bu bir palindrom ifadedir");
// } else {
//     console.log("Bu bir palindrom degildir.");
// }


// const string1="ey edip adanada pide ye"

// function isPalindrome(str){
//   let ters = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     ters += str[i];
//   }

// //   return ters==str ? "palindromdur" : "palindrom değildir"
// return ters==str
  
// }
// console.log(isPalindrome(string1));

//! 4- Bir sayiyi tersine cevirecek fonksiyon yazin.

// function tersCevirSayi(sayi) {
//   let sayiStr = sayi.toString();
  
//   let tersStr = " ";
//   for (let i = sayiStr.length - 1; i >= 0; i--) {
//       tersStr += sayiStr[i];
//   }
  
//   return parseInt(tersStr);
// }

// let sayi1 = 12345;
// let sayi2 = 7896;

// console.log(tersCevirSayi(sayi1));  
// console.log(tersCevirSayi(sayi2));

//! 4- Belirli bir sayının pozitif tam bölenlerinin toplamını bulan fonksiyonu yazınız?

// function tamBölenlerinToplami (n) {

// let toplam = 0;  // for döngüsünün disina aciyoruz cünkü for un icine acarsak her dönüste toplami 0 yapar. Ama biz üzerine eklemesini istiyoruz.

// for(let i = 1; i<=n; i++){

//   if(n % i == 0){
//     toplam += i
//   }
    
// }
// return toplam

// }
//   let sayi = 12
//   console.log(tamBölenlerinToplami(sayi)); 

//! 5- İlk 2 parametreyi çarpıp 3. parametreyi üs olarak alan fonksiyonu yazınız?

// function kombin (x,y,z) {
// return (x*y)**z

// }

// console.log( kombin(1,2,3)); 

//! 6-  100-1000 e kadar olan sayılardan polindrom olanlarını belirten/yazan program.

// const reverseNumber = (num) => {
//   let numStr = num.toString();

//   let reverse = "";

//   for (let i = numStr.length - 1; i >= 0; i--) {
//     reverse += numStr[i];
//   }

//   return    parseInt(reverse)==num ? `${num} sayisi polindromdur`:`${num} sayisi polindrom değildir`;
// };

// for(let i = 100; i<1000; i++){

//    console.log( reverseNumber(i));
// }

//! 7-Yarıçapı verilen bir dairenin alan ve çevresini bulan program? (alan=pi*r**2  cevre=2*pi*r)

// function circleFunction (r) {

//  let alan = Math.PI * r * r;
//  let cevre = 2 * Math.PI * r;

//  console.log(`Bu dairenin alani ${alan.toFixed(2)} ve cevresi ${cevre.toFixed(2)}`);


// }

// circleFunction(12)


//? 8- tellFortune adlı bir fonksiyon yazın:
  //? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
  //? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"


// function tellFortune(job, location, partner, kids) {

//   let result = `Gelecekteki mesleğiniz ${job}'dir. ${location}'da yaşayacaksiniz. ${partner} ile evlenecek ve ${kids} çocuk sahibi olacaksiniz.`

//     console.log(result);
// }

// tellFortune("avukat", "Amasya", "Ömer", 2);


//! 9- Write a function to calculate compound interest based on the principle amount
  // Function `compoundInt()` returns a final amount based on the compound interest formula provided principal amount, rate of interest per year, time on a yearly basis, and n as the number of times that interest is compounded per unit time.

  function compoundInt(anaPara, faiz, sure, n) {
    let r = faiz / 100; // Faiz oranını yüzde cinsinden alır

    let a = anaPara * Math.pow((1 + r), (sure * n)); // Bileşik faiz formülü

    return a;
}

console.log(compoundInt(10, 5, 2, 4)); // Çıktı: 122.71368


//! 10- Mükemmel sayıyı bulan fonksiyonu yazınız.
  
  //? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
  //? 6   = 1, 2, 3, 6 = 12  = 6*2
  //? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;


//   function mukemmelSayiBul(sayi) {
//     let toplam = 0;

//     for (let i = 1; i <= sayi; i++) {
//         if (sayi % i === 0) {
//             toplam += i;
//         }
//     }

//     let sonuc = toplam == sayi * 2 ? "Mükemmel sayidir." : "Mükemmel sayi degildir."
//     console.log(sonuc);
// }

//  mukemmelSayiBul (6) // mükemmel sayidir
//  mukemmelSayiBul (7) // mükemmel sayi degildir.

//? Diger cözüm

 function mukemmelSayiBul(sayi) {
  let toplam = 0;

  for (let i = 1; i <sayi; i++) {
      if (sayi % i === 0) {
          toplam += i;
      }
  }

  let sonuc = toplam == sayi ? "Mükemmel sayidir." : "Mükemmel sayi degildir."
  console.log(sonuc);
}

mukemmelSayiBul (28) // mükemmel sayidir
mukemmelSayiBul (27) // mükemmel sayi degildir.







