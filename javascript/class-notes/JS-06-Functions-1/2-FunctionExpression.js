// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir.
// //! Aksi takdirde hata alırsiniz.
//* Örnek1:tek-çift kontrolü
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

// const isEvenOdd = function (sayi){

// return sayi % 2 == 0 ? "Cifttir" : "Tektir"

// }

//     const sonuc = isEvenOdd(5);
//     console.log(sonuc);

//* örnek2 verilen 3 sayidan en büyügünü bul. 



// const büyükBul = function (a,b,c){

// let enBüyük;

// if(a>b && a>c){
//   enBüyük =a
// } 
// else if (b>a && b>c){
//   enBüyük = b
// } else{
//   enBüyük = c
// } 
// // console.log(enBüyük);
// return enBüyük

// }

// alert ( büyükBul(3,4,5));
// alert ( büyükBul(29,800,76));

//*örnek3 argument keyword ü ile .

// const enBul = function (){
//   let biggest = arguments[0];
//   let smallest = arguments[0];

//   for (let i = 1; i<arguments.length; i++ ){
//     if(arguments[i] > biggest){
//       biggest = arguments[i]
//     }

//   if (arguments[i] < smallest){
//     smallest = arguments[i]
//   }

//   }

//   // console.log(biggest); //console.log yaz ya da return yazip disari at functionu cagir alert ile belirt.
//   return `${biggest} ${smallest}`
 
// }

//  alert ( enBul(34, 111, 777, 678, 56, 2, 5678, 34, 6)) ;


//*örnek4 bir fonksiyonun icinden baska bir fonksiyon cagirilabilir.

// const üsAl = function(a,b){
//   return a**b 
// }

// const cevreBul = function (a,b){
//   return (a+b) *2

// }

// const alanBul = function (a,b){
//   return a * b

// }

// a ve b ler farkli fonksiyonlar icinde oldugu icin farkli degerler alabilir sorun yok. 

// const hesapla = function(secim,s1,s2){

// if(secim == "üsAlirmisin"){
//   console.log(üsAl(s1,s2)); 
// }
// else if(secim == "cevreBulurmusun"){
//  console.log( cevreBul(s1,s2));
// }else if (secim == "alanBulurmusun"){
//  console.log(alanBul(s1,s2)); 
// }



// }

// hesapla("üsAlirmisin", 3,5);
// hesapla("cevreBulurmusun", 13,15);
// hesapla("alanBulurmusun", 2,4);


//*ornek5:-------------------------------------------------------------------------- 
//Bir ülkedeki ortalama yaşam ömrü 95 yıl olduğuna göre, 
// doğum yılı girilen kişinin yaşını hesaplattıran
// yaşına göre ortalama ... ömrünüz kaldı yazıp önerilerde bulunan program

// 0-10 : " Sen bu değerleri önemseme hayatın tadını çıkar"
// 10-20 : " Gezmek görmek istediğin yerler varsa yola çıkma zamanı.. "

/* -----------------------------------------------------------*/

const calculate = function(birth){
const ortÖmür = 95;
const kalanÖmür = ortÖmür - (2024-birth);

if(kalanÖmür >0 && kalanÖmür <=10){
  return "Sen bu değerleri önemseme hayatin tadini çikar"
}
else if (kalanÖmür > 10 && kalanÖmür <=20){
  return " Gezmek görmek istediğin yerler varsa yola çikma zamani.. "
}
else return`${kalanÖmür} yilin var sen daha calis ilerde gezersin.`






}

console.log(calculate(prompt ("Lütfen dogum yilinizi giriniz."))); 