/********************************* DÖNGÜLER************************/

/**************************LOOPS*****************************/


/**************************FOR*****************/

//? Ekrana 10 kere merhaba yazdirin.



// for(let i=1; i<=10; i++){
//    console.log(`Merhaba ${i}`);
//   console.error("yanlis");
// }

//? 1 den N e kadar sayilarin toplami?
// const N = +prompt ("Lütfen bir sayi giriniz.")
// let toplam=0;
// for (let number = 1; number<= N; number++ ){
   
//     toplam=toplam+number;
    
//   }

//   console.log(toplam);


//? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// let sayi = 53;    
// let primeNumber = true;     

// for (let i = 2; i<sayi ; i++){
//  if(sayi % i == 0){
//  primeNumber = false
//  } 
 
// }

// console.log(primeNumber ? "asaldir" : "asal degildir.");

//? 0-100 Arasinda 7 adet rastgele tam sayi üreten kodu for döngüsü ile yaziniz.

// for ( let i = 1; i<=7; i++){
//   let rastgele = Math.round(Math.random ()*100)
//   console.log(rastgele);
// }

//****************** */ WHİLE*************
//*ORNEK1: while için 1-100  arasında bir sayı giriniz. aksi durumlarda error msj ı verip, tekrar sayı isteyiniz.

// let number = prompt("Lütfen 1-100 arasinda bir sayi giriniz.");

// while (number<1 || number>100){
//   console.error("number 1-100 arasinda olmali");
//   number = prompt ("Lütfen 1-100 arasinda bir sayi giriniz.")
// }

// console.log("Tebrikler sayi 1-100 arasinda");


//****************** */ DO-WHİLE*************
//*ORNEK1: do-while için 1-100  arasında bir sayı giriniz. aksi durumlarda alert verip, tekrar sayı isteyiniz.

// let number1;
// do{
//    number1 = prompt ("Lütfen 1-100 arasinda bir sayi giriniz.");

// } while (number1 <1 || number1 >100);
// console.log("Tebrikler");

//! şarta bakmadan ilk etapta do nun içindeki istek yapılır, sonrasında while içi true old sürece do içindeki istek yapılmaya devam edilir.

//? ORNEK: Kullanicidan  Vize ve Final notlarini isteyen ve
//? vize'nin %40 + final'in %60 alarak gecme notunu hesaplayan programi
//? yaziniz. Program her hesaplamadan sonra tekrar başkası için hesaplama yapilmak
//? istenip istenmedigini soracak cevap 'e' veya 'E' ise yeniden not
//? isteyecek ve islemleri tekrar edecektir.


// let devamMi;
// do {
//   let vize = +prompt ("Vize notunuzu giriniz.");
//   let final = +prompt ("Final notunuzu giriniz.");

//   let gecmeNotu = vize * 0.4 + final * 0.6;

//   console.log(gecmeNotu > 50 ? "tebrikler, gectiniz." : "kaldiniz.");
  
//   devamMi = prompt ("Devam etmek istiyorsaniz e tusuna basin.")

// } while (devamMi.toLowerCase ()=== "e");

//? ORNEK3: klavyeden q karakteri girilene kadar sayı girişi isteyen bir programı döngü kullanarak yazınız.

// let sayi1;
// do{
//    sayi1 = prompt ("Lütfen klavyeden bir tusa basiniz");


// }while (sayi1 != "q")
//   console.log("Döngüden ciktik");


//!!GUESS NUMBER

//* Program 1*20 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer 5 hak içinde bildi ise "Tebrikler  bildiniz" yazacaktır.

// const rastgele = Math.ceil(Math.random() * 20);

// console.log(rastgele);

// let hak = 5;

// while (hak > 0) {
//   let guess = prompt("sayı tahmin edinizz");

//   if (rastgele == guess) {
//     console.log("tebrikler doğru tahmin ettiniz 👯‍♂️");

//     break;
//   } else if (rastgele > guess) {
//     console.log("ARTTIR 📈");
//     hak--;
//     //  hak=hak-1
//   } else {
//     console.log("AZALT 📉");
//     hak--;
  
//   }
// }

// if (hak == 0) {
//   console.log("5 hakkında da doğru tahmin edemedin");
// }




 
