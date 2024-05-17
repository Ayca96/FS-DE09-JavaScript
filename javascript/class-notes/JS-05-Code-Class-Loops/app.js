// console.log(2 && 5);  //5

// console.log(Boolean(2 && 5)); //true

// console.log(0 && 7); //0

// console.log(('0' && 7)); // 7

// console.log(Boolean(0)); // false

// & object / Array  with &&

// console.log({} && "Hello"); //Hello
// console.log([] && "Hello"); //Hello

// console.log(Boolean([])) //true
// console.log(Boolean({})) //true 

// & Falsy string with &&

// console.log('' && 'World') // ilk değer boş string döner
// console.log("" && 'World') // hiclik
// console.log(`` && 'World') // hiclik

// & Falsy null with &&

// console.log(null && 'Hello World') // null
// console.log(NaN && 'Hello World') // NaN
// console.log(null && NaN) //null 

//  ^ OR operatörü ||

// & Truthy value with ||

// console.log(2 || 5) //2

// & Falsy value with ||

// console.log(0 || 7) //7

// console.log(0 || '') //boş string döner

// & object / Array  with ||

// console.log({} || "Hello"); // {}
// console.log([] || "Hello"); // []

// & Falsy null with ||

// console.log(null || 1) //1
// console.log(null || NaN) //NaN 


 // Soru 1 : 18 yaşından büyüklerin sigara kullanabileceği 18 yaşından küçüklerin sigara kullanamayacağını if else yapısı ile konsola yazdıran kodu yazınız. 

//  let i = 18;
//  if (i<18){
//   console.log("Daha cok kücüksün!");
//  } else
//   console.log("Sigara Kullanabilirsiniz.");
 

// let birthYear = 1998;
// let age = 2024 - birthYear;
// if (age > 18) {
//   console.log("Sigara kullanabilirsiniz");
// } else {
//   console.log("Sigara kullanamazsiniz");
// }

// let age = prompt ("Lütfen yasinizi giriniz");
// if(age > 18){
//   console.log("Sigara kullanabilirsiniz");
// } else if (age < 18){
//   console.log("Sigara kullanamazsiniz");
// } else console.log("Yanlis giris yapildi");

// let age = +prompt("Lütfen yasinizi giriniz");

// console.log(age >= 18 ? "Sigara kullanabilirsiniz" : "Sigara kullanamazsiniz");
// age >= 18
//   ? console.log("sigara kullanabilirsiniz")
//   : console.log("sigara kullanmazsiniz");

//   let response = (age >= 18) ? "sigara alabilir" : "sigara alamaz";
// console.log(response);


//!  isNaN()  Sayi degil dimi?

// let x = +prompt("Bir sayi giriniz :");
// console.log(isNaN(x));

// kullanıcının sayı girene kadar tekrar giriş yapmasını sağlayan while yapısını yazın.


// let sayi = +prompt("lütfen bir sayi giriniz");
// while (isNaN(sayi)) {
//   sayi = +prompt("lütfen yeni bir sayi giriniz");
// }
// console.log("girilen Sayi" + sayi);

// let sayi;
// do {
//   sayi = +prompt("Bir sayi giriniz");
// } while (isNaN(sayi));
// console.log("Girilen sayi", sayi);


//*örnek3 Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın.

// const user = "Ayca";
// const pass = 1234;
// let hak = 3;

//   while (hak > 0) {
//   let username = prompt("Kullanici adinizi girin:");
//   let password = +prompt("Parolanizi girin:");

//     if (username === user && password === pass) {
//       alert(`Hoş geldiniz, ${username}!`);
//       break;
//     } 
//     else {
//         hak--;
//         if (hak > 0) {
//           alert("Kullanici adi veya parola yanliş. Lütfen tekrar deneyin.");
//         } 
//         else {
//           alert("3 kez yanliş girdiniz.");
//         }
//     }
// }

// let username = "Ali";
// let password = 1234;
// let hak = 3;
// while (hak > 0) {
//   let usernameP = prompt("Kullanici adinizi giriniz:");
//   let passwordP = prompt("Parolanizi giriniz:");
//   if (usernameP == "Ali" && passwordP == 1234) {
//     console.log("Giriş başarili!");
//     break;
//   } else {
   
//     hak--;
//      alert(
//        "Kullanici adi veya parola yanliş. Kalan hakkiniz: " + hak 
//      );
//   }
// }
// if (hak == 0) {
//   console.log("Üç kez yanliş giriş yapildi. Lütfen daha sonra tekrar deneyin.");
// }


//piramid 
//*      #
//*     ###
//*    #####
//*   #######
//*  #########

// let toplamSatir = 5;
// for (let i = 1; i <= toplamSatir; i++) {
//     let herBirSatir = '';
//     for (let degiskenBir = 1; degiskenBir <= toplamSatir-i ; degiskenBir++) {
//         // console.log("burasi degiskenBir");
//         // console.log(degiskenBir);
//         herBirSatir += ' ';
//     }
//     for (let degiskenIki = 1; degiskenIki <= 2 * i - 1; degiskenIki++) {
//         //console.log("sura degiskenIki");
//         //console.log(degiskenIki);
//         herBirSatir += '#';
//     }
//     console.log(herBirSatir);  
// }
// for (let i = 1; i <= toplamSatir; i++) {
//   let herBirSatir = '';
//   for (let degiskenBir = 4; degiskenBir >= toplamSatir-i ; degiskenBir--) {
//       // console.log("burasi degiskenBir");
//       // console.log(degiskenBir);
//       herBirSatir += ' ';
//   }
//   for (let degiskenIki = 7; degiskenIki >= 2 * i - 1; degiskenIki--) {
//       //console.log("sura degiskenIki");
//       //console.log(degiskenIki);
//       herBirSatir += '#';
//   }
//   console.log(herBirSatir);  
// }







//**örnek */
//     * 
//     * *  
//     * * * 
//     * * * *  
//     * * * * *

// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = '';

//      for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     for (let b = 1; b <= rows - i; b++) {
//         row += ' ';
//     }
   
//     console.log(row);
// }


// let rows = 5;
// for (let i = 1; i <= rows; i++) {
//     let row = '';

//      for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '* ';
//     }
//     for (let b = 1; b <= rows - i; b++) {
//         row += ' ';
//     }
   
//     console.log(row);
// }


//*örnek5 kullanıcıdan alınan 5 adet sayının ortalamasını konsola yazdırınız ?

// let toplam = 0;
// let sayi = 5;
// for (let i = 1 ; i <= sayi; i++){
//     let input = +prompt("Lütfen bir sayi girin");
//     toplam = toplam + input;
// }
// let ortalama = toplam / sayi;
// console.log("Girilen sayilarin ortalamasi:", ortalama);


//*örnek6 1000 ile 2000 arasındaki hem 3 hem 5 e bölünebilen sayıların adedini konsola yazdıran çözüm.


// let toplam=0;
// for(i=1000; i>=1000 && i<=2000; i++){
//  if( i % 15 === 0){
//   toplam++
//  }
  
// }console.log(`toplam` , 67 );


//while

// let sayi = 1000
// let sayacc=0
// while (sayi <= 2000) {
//     if(sayi % 3 == 0 && sayi % 5 == 0) {
//         console.log(sayi);
//     sayacc++;

//     }
//     sayi++
// } 

// console.log(sayacc);


 //*Armstrong number while solution
//!  verilen sayının tüm basamaklarının sayı değerlerinin basamak adedi kadar kuvvetinin toplamı kendisine eşitse bu bir armstrong sayıdır.

// let num = +prompt("Enter a number:");
// let originalNumber = num;
// let sayac = 0;
// let sum = 0;



// while (originalNumber != 0) {
//   originalNumber = Math.floor(originalNumber / 10);
//   console.log(originalNumber);
//   sayac++;
// }

// originalNumber = num;

// while (originalNumber > 0) {
//   let sayi = originalNumber % 10;
//   sum += sayi ** sayac;
//   originalNumber = Math.floor(originalNumber / 10);
// }

// sum == num
//   ? console.log(num + " is an Armstrong number.")
//   : console.log(num + " is not an Armstrong number.");

