// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir. Sonsuz döngüye girer.

//!sayma sayılarının ilk 6 teriminin toplamını bulunuz.

// const add = (n) => {

// let toplam = 0;

// for ( let i = 1; i <= n ; i++){

// toplam = toplam + i

// }

// return toplam

// }

// console.log(add(6));

//* ayni soruyu recursive ile cözelim.

// const toplamlar = (n) => {

// if (n<1){
// return n

// }
// else 
// return toplamlar (n-1) + n


// }

// console.log(toplamlar(6)); 

//* Örnek Girilen n. terimdeki Fibonacci sayisini yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("**************** 5 RECURSION ********************");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu.

const fibo = (n) => {

if (n<=2){
return 1
}
else {
return fibo (n-1) + fibo (n-2)
}
 

}

console.log( fibo (10));