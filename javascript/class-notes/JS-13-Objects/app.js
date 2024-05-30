//* ======================================================
//*                 NESNELER (OBJECTS)
//* ======================================================

//? Diziler (Arrays) sıralı bellek yapısıdır. Böylece, onlara indeksleyerek erişebiliriz.
//? Object leri daha karmaşık (yapılandırılmamış) bellek ihtiyaçları için kullanabiliriz

//?  herhangi bir veriye erişmek için Key-value (property-value) kullanılır

//! 3 farkli yontem ile Object olusturulabilir
//* ---------------------------------------------------------
//* 1-   Object (new) örneği oluşturalım
//* ---------------------------------------------------------

const car1 = new Object ({ name :"BMW",engine : 1.6,model: 2000});
const car2 = new Object ({name:"volvo", engine:2.0, model:2008});

console.log(car1); //
console.log(car1.name); //BMW
console.log(car1.engine); //1.6 bu daha cok tercih ediliyor.
console.log(car1["engine"]); //1.6

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.

const car3 = ({});
car3.name="mercedes";
car3.motor= 1.8;
console.log(car3); //{name: 'mercedes', motor: 1.8}

//* ---------------------------------------------------------
//* 2-   Object Constructor (OOP ile ayrıntılı göreceğiz)
//* ---------------------------------------------------------

function Calisanlar (a,b,c){

  this.calisanId=a
  this.calisanName=b
  this.calisanMaas=c
}

//! eğer object constructor kullanacaksak this gerekli, arrow function da this kullanımı sağlıklı olmadığından burada decleration functionu kullandık

//! this keyword'u icinde bulundugu scope'daki objeyi refere eder.

const kisi1= new Calisanlar(101,"mehmet",8000);
const kisi2= new Calisanlar(102,"ayca",200000);

console.log(kisi1);
console.log(kisi2);
console.log(kisi2.calisanName); //ayca

//* ---------------------------------------------------------
//* 3-   Object Literal (en çok kullanılan yol)
//* ---------------------------------------------------------

const person = {
 name:"Johny",
 surname:"Deep",
 birth:1970,
 job:"actor",
 hasDriverLicense:true,
 languages:["english","deutsch","java","next.js"],
 children:{first:"Sarah", second:"Lucy"},
}
console.log(person);
console.log(person.name); //Johny
console.log(person.languages[1]); // Deutsch
console.log(person.children.first); // Sarah

//?Rewrite

person.birth+=5
console.log(person.birth); //1975 kalici degismis oluyor.

//? Yeni Property eklemek

person.location="America" 
console.log(person);

// map, filter,forEach sadece dizilerde calisir.

//*örnek

person.languages.map((a)=>a.toUpperCase()).forEach((a)=>console.log(a)) // ENGLISH,DEUTSCH,JAVA,NEXT.JS

//* ---------------------------------------------------------
//*    Objects teki Yöntemler
//* ---------------------------------------------------------

const mensch = {
  name:"Johny",
  surname:"Deep",
  birth:1970,
  job:"actor",
  hasDriverLicense:true,
  yasHesapla:function() {
  return `${this.name} oyuncusu ${2024-this.birth} yasindadir`
  }, 

  selamla:() => "merhaba"
};

//! Objenin icindeki degerleri kullanarak bir fonksiyon yazcaksak this keywordü kullanilmali, arrow function this i desteklemedigi icin ilk fonksiyonda decleration yöntemini tercih ettik.

console.log(mensch);
console.log(mensch.yasHesapla()); //Johny oyuncusu 54 yasindadir
console.log(mensch.selamla()); //merhaba

//********************/

console.log(Object.values(mensch)); //(7) ['Johny', 'Deep', 1970, 'actor', true, ƒ, ƒ]
console.log(Object.keys(mensch)); //(7) ['name', 'surname', 'birth', 'job', 'hasDriverLicense', 'yasHesapla', 'selamla']

// * ======================================================
// *                  OBJECT ITERATION
// * ======================================================
// key lerin belirli bir sırası (index) olmadığı için, diziye alırsak object araması daha tutarlı bir arama performansına sahip olacaktır. Ayrıca diziler arasında döngü yapmak, keys arasında döngü yapmaktan daha hızlıdır, bu nedenle tüm öğeler üzerinde işlem yapmayı planlıyorsanız, bunları bir diziye koymak akıllıca olabilir.

const people = [
  {
    name: "Mustafa",
    surname: "Gertrud",
    job: "developer",
    age: 30,
  },
  {
    name: "Rengin",
    surname: "Müller",
    job: "tester",
    age: 35,
  },
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Kemal",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Halil",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  }]

  console.log(people);

  //*Örnek1 people dizisindeki joblar gösterin.

  console.log(people[0].job); // developer

  people.forEach((a)=>console.log(a.job));

  //*Örnek2 yaslari 1 er arttir ve sonucu yeni bir diziye aktar.

  
 const yaslar = people.map((kisi)=> kisi.age+1); //kalici degistirmedi sadece o satirda 1 yas fazlasi ne olurdu onu gördük. 
 console.log(yaslar); //(5) [31, 36, 41, 27, 25]

 //const yaslar = people.map((kisi)=> `${kisi.name} ${kisi.age+1}`);

 console.log(people[0].age); //30 degismedigini gördük.

 //* Ornek3 yasları 1 er arttır, sonucu dizide kalıcı değiştir.

 console.log( people.map((insan,i,array)=>array[i].age=insan.age+1)); //(5) [31, 36, 41, 27, 25]

console.log(people[0].age); //31 kalici degisti.

console.log(people.map((insan)=>insan.age+=1)); //(5) [32, 37, 42, 28, 26]
console.log(people[0].age); //32

//* örnek4 people (object li ) dizisinden yaşları değişmiş olarak joblari olmadan,yeni bir object li dizi oluşturalım, keyleri farkli olsun.

const yeniPeople= people.map((human)=>({

isim:human.name,
soyad:human.surname,
yas:human.age+1,


}))

console.log(yeniPeople);
console.log(people);// eski dizi degismedi ayni kaldi.

 //* örnek5 her elemanın name ini büyük harfli yaz, yaslarını 2 kat yap, job larının önüne senior kelimesi ekleyelim ve bunları yeni bir diziye atalım.

 const yeniPeople2 = people.map((person)=>({
 
  name:person.name.toUpperCase(),
  surname:person.surname, // degisiklik yapilmayan veriyi de oldugu gibi yazmamiz lazim yoksa yeni dizide göremeyiz.
  age:person.age*2,
  job:"senior "+person.job,

 }))

 console.log(yeniPeople2);
 console.log(people);// kalici degismedigini görüyoruz.

 //* ornek6 people dizisine yeni object veri ekleyelim.

 people.push ({name:"ipek",surname:"bilir", job:"developer", age: 44});
 console.log(people);

 //* ornek7: Developer olanların adlarını ve yaşlarını yeni bir object olarak saklayın.(keylerini de degistir.)

 const yeni = people.filter((kisi)=>kisi.job=="developer").map((a)=>({
 ad:a.name,
 yas:a.age,

 }))
console.log(yeni);

//*örnek8 ortalama yasi hesaplayiniz.

 console.log(people.reduce((toplam,eleman)=>toplam+eleman.age,0)/people.length); //34.833333333333336 burda 0 yazmazsak sonuc vermiyor, normalde 0 yazmiyorduk ama burda istedi. Buraya forEach yapamazdik. Reduce sonuc döndürüyor. forEach dizi de calisir.

 
//?    nested objects

const menschen = {
  person1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  person2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  person3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};
//! nested objectlerde FOR - IN kullanılabilir, index sonuçta. Ama for of kullanılamaz , dizilerde verileri almak için itere eden for of object te çalışmaz.
//!!!!JavaScript'te, iterable protokolü uygulamadıkça Objects iterable değildir. Bu nedenle, bir object in özellikleri üzerinde iterate yapmak için for…of (forEach, map, filter da) kullanamazsınız. sadece klasik for döngüsü ve for in kullanılabilir
//! for in // dizide index i getirir. 0 1 2 gibi. Index odakli calistigi icin index arar gibi [] kullanarak yazmamiz lazim asagida örnekte var.

for(let i in menschen){
console.log(i); //person1,person2,person3
console.log(menschen[i]); // person1 {name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …} digerleri de person2...
console.log(menschen[i].name); // Can, John, Steve

}

//!for of // her seyi toplayip geliyor buyüzden burda calismiyor. Ama zorla calistirdik asagidaki yöntemle. Sadece for of ile calismiyor.

//!FOR OF

// for (let i of menschen) {
//   console.log(i);  //menschen is not iterable

 
// }
for (let i of Object.keys(menschen)) {
  console.log(i);  //person1,person2...

 console.log(menschen[i]);
}

 console.log(Object.values(menschen));//bütün süslüleri diziye attı

for (let i of Object.values(menschen)) {
  console.log(i);//bütün süslüleri getirdi


}
//örnek people dizisindeki joblari gösterin.
people.forEach((a)=>console.log(a.job))

//* Ornek yası 33 ün üstünde olan kişilerin name lerini listele.

people.filter((a)=>a.age>33).forEach((a)=>console.log(a.name))