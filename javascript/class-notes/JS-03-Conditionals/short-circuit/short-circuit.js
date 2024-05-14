// Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

// Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir.



//Short Circuit

const x = 5;
const y = 8;

if (x>0 && y>0) {
  console.log("Her iki kosulda dogru");
} else{
  console.log("En az bir kosul yanlis");
}

//AND mükemmelliyetcidir.

console.log("12" && 5 && "Merhaba"); // Hepsi True o nedenle sonuncuyu yazar.

console.log("12" && false && "Merhaba"); //false

console.log("" && null && "Merhaba"); 

console.log(" " && "Ayca" && "Merhaba"/5); //Nan

// falsy degerler : 0, -0, false, null, undefined, "" , Nan

/* ******************** */

//OR, Mütevazidir. En az bir dogru yeterlidir.

// console.log("" || undefined || 1 || 0); // 1
// console.log("" || [2,3] || 1 || "ayca"); // [] bu true deger

// let ad = "Sebastian";
// let statu = "Admin";

// if (ad==="Sebastian" && "statu===Admin") {
//   console.log("Hos geldiniz.");
// } 
// else{
//   console.log("Bu sisteme giremezsiniz.");
// }


for (let i = 1; i <= 5; i++) {
  let satir = '';
  for (let j = 1; j <= i; j++) {
      satir += 'x';
  }
  console.log(satir);
}