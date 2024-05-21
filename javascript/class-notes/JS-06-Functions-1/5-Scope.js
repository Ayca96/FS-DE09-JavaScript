// ? ==========================================================
// ?                   FONKSİYONLAR-SCOPE
// ? ==========================================================
console.log("************ 4- SCOPE *************");

//! Global scope gökteki yildizlar gibidir herkes görebilir.

let first = 5;
let second = 12;
let third = 456;

console.log(first, second, third);

const scopeFunction = () => {

  first = 8

  //let sayesinde yeni bir degisken olusturuldu ve disardan erisilemez.
  let second = 1234
  console.log(second);

  let fourth = second + first  // 1234 + 8 = 1242

  return fourth
}

console.log(scopeFunction ()); //1242

console.log(first); //8
console.log(second); //12
// console.log(fourth);  süslü icinde kaldigi icin göremiyoruz sadece funcitona tanimladi.


//*********************************** */

//! global degisken

let number = 11;

const fonk = () => {

let number = 44; //! function scope
number++
// console.log(number); //45 i görür.

return number
}

 console.log( fonk ()); //45 i görür.

 console.log(number); // 11 i görür suan.   (Bu örnek senin icin önemli tekrar et. )

  //zorlamayla içerideki number ı fonk return ü sayesinde, globaldeki number değişkenine assign ettik.

 number=fonk() // global scope taki number i function scope taki number a esit hale getirdik.

 console.log(number); 

 //const number = 7 //! Identifier 'number' has already been declared.(Tanımlayıcı 'numara' zaten bildirildi.)


// Block Scope

 {

  number ++ 
  let x = 5
  let y = x+15;
  console.log(y); //! block-scope
 }

 
console.log(number);


//? var


number2 = 100

var number2; //! hoisted (number2 ye sonrada type atadim ve hep var gibi oldu. Kaldirma deniyor.)

var result = "Hallo";

if (number2 == 100){

let result = "Hi!" //! block-scope
console.log(result);

//var result = "naber" if ve for süslüleri icin var güvensizdir, her yerden erisilebilir.

}
else {
  result = "Salut"; //! global-scope
  console.log(result);
}

console.log(result);

