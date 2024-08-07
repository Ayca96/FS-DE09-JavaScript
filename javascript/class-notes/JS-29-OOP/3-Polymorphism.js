//* ======================================================
//*     OOP - Inheritance and Polymorphism(ES6)
//*         (kalıtım,miras)ve(çok biçimlilik)=============================================

//? Extends keyword ü, parent class ın işlevselliğini child class a genişletmek (extend) için kullanılır..(INHERITANCE)

//* Polymorphism  object-oriented programming concept li bir programlama kavramıdır,bir variable ın, nesnenin, yada fonksiyonun,birden çok form alma özelliğini ifade eder

//* In the OOP, Polymorphism genellikle  Overloading and Overriding le gerçekleştirilir (overriding=aynı ada sahip iki fonksiyon tanımlarsanız, tanımlanan sonuncusu önceden tanımlanmış sürümü geçersiz kılar ve fonsiyona her çağrı yapıldığında, son tanımlanan fonksiyon yürütülür.)(overloading=overloading demektir, javascriptte böyle denmez, aynı adlarla fonksiyonu işlemek denir ve js  direk overloading i desteklemez, manuel uğraşmak gerekir ).

// let counter = 0;
// counter = 5; // üzerine yazma aslinda overriding

class Book {
  constructor(a, b, c) {
    this.title = a;
    this.author = b;
    this.year = c;
    this.ozetFunction = function () {
      return `${this.title} kitabini ${this.year} yilinda ${this.yazar} yazmistir.`;
    };
  }

  yilhesapla() {
    return 2024 - this.year;
  }
}

//! Overriding

class Dergi extends Book {
  
  constructor(author, title,year,d){

    super(author,title,year)
    this.mounth = d

    this.ozetFunction=function () {
      return `${this.author} wrote the book ${this.title} in ${this.year}`
    }

}
}

//! overriding


const dergi1 = new Dergi ("kasagi", "ömer seyfettin", 1901);
console.log(dergi1.ozetFunction());


//!Overloading

// Diğer programlama dillerinden farklı olarak JavaScript , Function Overloading'i desteklemez . 
// İşte JavaScript'in Function Overloading i desteklemediğini gösteren küçük bir kod. 

function arg(arg1){
  alert(arg1)
}
function arg(arg1,arg2,arg3){
   console.log(arg1,arg2,arg3);
}

arg("naber")
arg("naber", "nasilsin", "iyimisin")