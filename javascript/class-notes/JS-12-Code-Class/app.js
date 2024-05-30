// Dizi metodları
// pop(): dizinin son elemanını siler
// shift(): dizinin başındaki elamanı siler 
// push(): diziniz sonuna eleman ekler
// unshift() : dizinin başına eleman ekler 
// reverse() : diziyi tersine çevirir 
// splice():(başlangıç indexi, kaç eleman alınacak(silinecek), eklenecek eleman (item1, item2...))
// sort(): sıralama yapar(stringlerde ifadelerde ascii kodlara göre alfabetik sıralama ) 
// sort((a,b)=> a-b )
// includes(deger): içeriyomu (trıe - false)
// indexOf(deger): değerin kaçıncı indexte olduğunu 
// join(" "): bir dizideki elemanları birleştirerek stringe çevirir 
// slice(): diziden bir parçayı almamaızı sağlar 
// concat(): iki diziyi birleştirir
// every: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır.ve call fonksiyondaki şartı sağlıyosa true değer çevirir


// const numbers = [45,16,34,23]
// numbers.every((num)=>num > 18) //false

// some: dizi içiindeki her elemean için bir callback fonksiyon çalıştırır. ve  fonksiyondaki en az bir şartı sağlıyosa true değer çevirir

// const numbers = [45,16,34,23]
// numbers.some((num)=>num > 18) //true

/*-----------------------------------------*/

// map: bir dizi için bir callback fonksiton çalıştırır. vd her eleman için o fonksiyondan çıkan sonucu bir diziye aktarır.
// forEach: bir dizi için bir callback fonksiton çalıştırır. Geriye bir değer döndürmez
// filter: bir dizi için bir callback fonksiton çalıştırır. Verilen koşulu sağlayan bir değer döndürür
// reduce: dizidekii elemanları toplayarak tek bir değere döndürür

/*-----------------------------------------*/

//! 1- Bir dizideki elemanlarin ortalamasini bulan fonksiyon.

// const number = [34,56,56,87,90];

// const toplam = number.reduce((acc,curr)=> acc+curr);
// const sonuc = toplam / number.length;
// console.log(sonuc); //64.6

// let toplam = 0

// const ortalama = () => {


//   for(let i = 0 ; i < number.length; i++){

//     toplam += number[i]
//   }
//   return toplam
// }

// console.log(ortalama()/number.length); //64.6


//2- Girilen bir cümledeki kelime sayısını bulan fonksiyon
const sentence="Merhaba Cohort DE-09";

 const sayi = sentence.split(" ").length;

//birden fazl bosluk iceriyorsa,
//const sumLetter = sentence.split(/\s+/).length
//console.log(sumLetter);
console.log(sayi);

//! 2- Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

function findClarusway(sentence) {
  if (sentence.includes("Clarusway")) {
      return `I found Clarusway at ${sentence.split(" ").indexOf("Clarusway")+1}`
  } else {
      return "I can't find Clarusway :("
  }
}

const sentence1 = "I like Clarusway"

console.log(findClarusway(sentence1));



//! 3- Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan programi yaziniz.
// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

const array = [1,0,1,0,1];


function entfernenDuplikate (array) {
    let neuArray = [];

    for (let i of array) {
        if (!neuArray.includes(i)) {
            neuArray.push(i);
        }
    }

    return neuArray;
}

console.log(entfernenDuplikate(array)); //(2) [1, 0]
console.log(entfernenDuplikate(["the","small","cat","the","cat"])); //(3) ['the', 'small', 'cat']


//! 4- Bir dizide ilk harfi A ile başlayan elemanları yeni bir diziye alan fonksiyon 


const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot","Ananas"];

function ilkHarfA(arr) {
    
    let result = [];

    for (let word of arr) {
        
        if (word[0] === 'A' || word[0] === 'a') {
            result.push(word);
        }
    }

    return result;
}

console.log(ilkHarfA(words));  // (4) ['Apple', 'Avocado', 'Apricot', 'Ananas']


// const neu = words.filter((words)=>words.startsWith("A")).forEach((words)=>console.log(words))

//! 5- Bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak
// a- Kaç kişi zam olsa bile 20000 altında kalıyor
let salaries=[18000,13000,17000,24000,18500,21000,19300];


const zam = salaries.map((a)=>Math.ceil(a*1.1)).filter((a)=>a<20000).length;
console.log(zam);

// b- Maaşı zamlı halde 20000in altında kalanlara patronumuz belki bir güzellik yapar. 20000 altında kalanları 20000'e tamamlayabilir ama ne kadar bütçe ayırmalı.

const zam1 = salaries.map((a)=>Math.ceil(a*1.1)).filter((a)=>a<20000);

const yeni = zam1.map((a)=>20000-a).reduce((acc,curr)=> acc+curr);
console.log(yeni);






































/*const numbers = [45,16,34,23];
numbers.every((num)=>num>18); false, buna callback fonksiyonu deniyor.*/

/*

Eleman Ekleme ve Kaldırma
push()

Dizinin sonuna bir veya daha fazla eleman ekler ve dizinin yeni uzunluğunu döner.
Örnek: arr.push(1, 2, 3);
pop()

Dizinin son elemanını kaldırır ve bu elemanı döner.
Örnek: let lastElement = arr.pop();
shift()

Dizinin ilk elemanını kaldırır ve bu elemanı döner.
Örnek: let firstElement = arr.shift();
unshift()

Dizinin başına bir veya daha fazla eleman ekler ve dizinin yeni uzunluğunu döner.
Örnek: arr.unshift(0); 



Dizi Elemanlarına Erişim ve Değişiklik
concat()

İki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.
Örnek: let newArr = arr1.concat(arr2);
slice()

Belirtilen başlangıç ve bitiş indeksine göre (bitiş dahil değil) dizinin bir kısmını yeni bir dizi olarak döner.
Örnek: let subArray = arr.slice(1, 3);
splice()

Belirli bir konumdan itibaren elemanları kaldırır ve/veya ekler.
Örnek: arr.splice(1, 2, 'newElement');

join()

Dizinin tüm elemanlarını birleştirerek bir string oluşturur. Ayrıştırıcı (separator) olarak belirtilen bir string kullanılır (varsayılan olarak virgül).
Örnek: let str = arr.join(', ');
Açıklama: Bu metod, bir dizideki elemanları birleştirip bir string elde etmenizi sağlar. Örneğin, let arr = [1, 2, 3]; let str = arr.join('-'); işlemi sonucunda str değeri "1-2-3" olur.





Eleman Bulma ve Kontrol
indexOf()

Belirtilen elemanın dizideki ilk indeksini döner, bulunamazsa -1 döner.
Örnek: let index = arr.indexOf('element');
lastIndexOf()

Belirtilen elemanın dizideki son indeksini döner, bulunamazsa -1 döner.
Örnek: let index = arr.lastIndexOf('element');
includes()

Dizide belirtilen elemanın olup olmadığını kontrol eder ve true veya false döner.
Örnek: let exists = arr.includes('element');
find()

Belirli bir koşulu sağlayan ilk elemanı döner.
Örnek: let found = arr.find(element => element > 10);
findIndex()

Belirli bir koşulu sağlayan ilk elemanın indeksini döner.
Örnek: let index = arr.findIndex(element => element > 10);




Diziyi Dönüştürme ve İşleme
forEach()

Dizideki her eleman için belirtilen fonksiyonu çağırır.
Örnek: arr.forEach(element => console.log(element));
map()

Her eleman için belirtilen fonksiyonu çağırır ve sonuçları içeren yeni bir dizi döner.
Örnek: let newArr = arr.map(element => element * 2);
filter()

Belirli bir koşulu sağlayan elemanları içeren yeni bir dizi döner.
Örnek: let filteredArr = arr.filter(element => element > 10);
reduce()

Diziyi tek bir değere indirger.
Örnek: let sum = arr.reduce((acc, element) => acc + element, 0);
reduceRight()

Diziyi sağdan sola doğru tek bir değere indirger.
Örnek: let sum = arr.reduceRight((acc, element) => acc + element, 0);




Sıralama ve Ters Çevirme
sort()

Diziyi belirli bir sıraya göre sıralar.
Örnek: arr.sort((a, b) => a - b);
reverse()

Diziyi ters çevirir.
Örnek: arr.reverse();




Dizi Bilgisi
length
Dizinin uzunluğunu (eleman sayısını) döner.
Örnek: let length = arr.length; */