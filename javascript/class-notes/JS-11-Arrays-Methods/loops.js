//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================
//*ÖRNEK: dizi1 arrayindeki pozitif sayılarla negatif sayıları 2 ayrı array de toplayan function yazınız.

const dizi1 = [-5, 15, -78,-45, 34, 27, 4, -9, 7];

const negatifler1 = [];
const pozitifler1 = [];

const dizilereAyir1 = () => {

  for(let i = 0; i< dizi1.length; i++){
    if(dizi1[i] <0){
       negatifler1.push(dizi1[i]);

    }
    else{
      pozitifler1.push(dizi1[i])
    }

  }

  console.log(pozitifler1); //(5) [15, 34, 27, 4, 7]
  console.log(negatifler1); //(4) [-5, -78, -45, -9]
}

dizilereAyir1()


//**************** For in () ***************/


const dizi2 = [-5, 15, -78,-45, 34, 27, 4, -9, 7];

const negatifler2 = [];
const pozitifler2 = [];

//!1.Yol

const dizilereAyir2 = () => {

    for(let i in dizi2){

      if(dizi1[i] <0){
        negatifler2.push(dizi2[i]);
 
     }
     else{
       pozitifler2.push(dizi2[i])
     }

    }

    console.log(negatifler2); //(4) [-5, -78, -45, -9]
    console.log(pozitifler2); //(5) [15, 34, 27, 4, 7]

}

   //dizilereAyir2()


   //********* for of() *********/
   //! 2.Yol

   const dizilereAyir3 = () => {

      for (let i of dizi2) {
         // console.log(i);


         if (i <0){
          negatifler2.push(i)
         }
         else {
          pozitifler2.push(i)
         }
      }
       console.log(pozitifler2); //(5) [15, 34, 27, 4, 7]
       console.log(negatifler2); //(4) [-5, -78, -45, -9]

   }

   dizilereAyir3()


   //* ======================================================
//*                   FOR IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
//* bir dizide saklandığını varsayalım.Bu hayvanları türüne
//* göre aramamızı sağlayacak ve o türden kaç adet bulunduğunu
//*  ana programa döndürecek fonksiyonu yazınız.
//*--------------------------------------------------------

// const animal = [
//   "fil",
//   "aslan",
//   "deve",
//   "fil",
//   "kaplan",
//   "fil",
//   "deve",
//   "aslan",
//   "aslan",
//   "aslan",
// ];

// const userAnimal = prompt("Lütfen istediginiz hayvan ismini giriniz.");
// const findAnimal = () => {

//   let sayac = 0 ; 
//   for(let i in animal)

//     if(animal[i] == userAnimal){
//       sayac++
//     }

//     return `${userAnimal} hayvanindan ${sayac} adet bulunmaktadir.`
// }

//  console.log(findAnimal());  //aslan hayvanindan 2 adet bulunmaktadir.



 //* ======================================================
//*                   FOR OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icindeki veriye erisirken indisleme kullanmaya gerek yoktur.

//* ORNEK: alttaki dizinin elemanlarını yanyana string olarak yazdır (for of döngüsü kullanın)

const arabalar = ["bmw", "mercedes","audi","volvo"];

//!1.Yol

console.log(arabalar.join("")); //bmwmercedesaudivolvo

//! 2.Yol

let araba  ="";
for (let i of arabalar){

  araba+=i
}
 console.log(araba); //bmwmercedesaudivolvo

 //! for loop=> Bir dizi üzerinde iteration yapmanın orjinal yollarından biridir.	
//? forEach=> Bir dizi üzerinde iteration yapmak için daha az kod içeren daha yeni bir yoldur.
//! for loop=>Performansta daha hızlıdır.	
//? forEach=> Performansta geleneksel döngüden daha yavaştır.
//! for loop=> Break ifadesi döngüden çıkmak için kullanılabilir.	
//? forEach=> Break ifadesi, geri arama işlevi nedeniyle kullanılamaz.


