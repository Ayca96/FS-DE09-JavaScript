// * =======================================================
// *                 CONDITIONALS-- KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!----------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
console.log("-------------------------------------");
console.log("==IF-ELSE IF== 4 Islem Hesap Makinesi");
console.log("-------------------------------------");


//!propmt a girilen değerler string olarak algılanır. sayı olsun istiyorsak önüne ya Number yazmalıyız ya da + koymalıyız:

// prompt un basina "+" ekledik ki, toplama esnasinda yan yana getirmesin rakamlari, toplasin diye.

// const sayi1 = +prompt ("1. sayiyi giriniz");   
// const islem = prompt ("+,-,*,/ islemlerinden birini giriniz");
// const sayi2 = +prompt ("2. sayiyi giriniz");

// let sonuc;

// if (islem == "+"){
//  sonuc = sayi1 + sayi2
// }else if (islem == "-"){
//  sonuc = sayi1 - sayi2
// }else if (islem == "*"){
//  sonuc = sayi1 * sayi2
// }else if (islem == "/"){

//   if (sayi2 != 0)
//     {sonuc = sayi1 / sayi2}
//   else{
//     alert ("payda 0 olamaz")
//   }

 
// } else {
//   alert("yanlis islem girdiniz")
// }

// console.log(sonuc);

//********************* */

// if (sonuc != 0){   // sonuc 0 disinda herhangir bir degerken.
//   console.log("Tebrikler bir deger elde ettiniz");
// }

// //? 1.Kisayol 

// if (sonuc){
//   console.log("Tebrikler bir deger elde ettiniz");
// }

//? 2.Kisayol (Short Circuit)

// sonuc && console.log("Tebrikler bir deger elde ettiniz");

//* Ornek

// const age = 12;
// const gender = "erkek";
// const health = true;

// if(age >= 20 && gender == "erkek" && health == true){

//   console.log("askerlik yapabilir");
// }else {
//   console.log("askerlik yapamaz");
// }
