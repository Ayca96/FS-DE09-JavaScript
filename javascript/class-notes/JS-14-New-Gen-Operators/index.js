console.log("********NEW GEN OPERATORS********");


//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================


const product = {

  id:"12345",
  brand:"Apple",
  type:"smart phone",
  price:3000,
}

const product1 = {

  id:"12346",
  brand:"Samsung",
  type:"Mobile phone",
  price:5000,
}





//? .notasyonu ile erisim mümkün

console.log(product.type);
let proPrice = product.price;
console.log(proPrice)
proPrice +=100;
console.log(proPrice);
console.log(product.price);
// product.price = proPrice;
// console.log(product.price);


//? square bracket
console.log(product["brand"]);



//? Destructuring yöntemi
//? Degisken isimleri objectteki keylerle ayni isimde olmalidir.

let { id , price , brand , Type} = product
console.log("ID:",id);
console.log("brand:", brand);
console.log("type:", Type); // type: undefined böyle verdi cünkü yukarda type kücük harfle basliyor tanimadi buyüzden.
console.log("price:", price); // 3000
price += 500;
console.log(price); // 3500
console.log(product.price); //3000
// product.price=price; 
// console.log(product.price); // 3500


//? Key'lerdeki isim degisiklikleri : ile yapilir.

const {id:pro1Id, price:pro1Price,type:pro1type,brand:pro1Brand} = product1

console.log(pro1Brand,pro1Id,pro1Price,pro1type);



//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
}

console.log(insanlar.kisi2.meslek);  //Sosyal Gelişim Uzmanı
console.log(insanlar["kisi2"]["meslek"]); //Sosyal Gelişim Uzmanı


//? level1 Destr.

// const {kisi1, kisi2} = insanlar
// console.log(kisi1);


//? Level2 Destr.

// const {adi,kimlikNo,soyadi,meslek,maas} = kisi1
// console.log(adi,kimlikNo,soyadi,meslek,maas);

//? Iki seviyeli Destr.

const {
  kisi1:{adi,soyadi},
  kisi2:{adi:kisi2Ad,soyadi:kisi2Soyad}

} = insanlar

console.log(kisi2Soyad); // Can


//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30, 
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("***********************");

team.forEach((person)=> {

const { name, surname, job, age} =person;

console.log("Name", name);
console.log("Surname", surname);
console.log("Job", job);
console.log("Age", age);
console.log("***********************");

})

console.log("***********************");
team.forEach((person)=> {

  const { name, surname, job, age} =person;
  
  console.log("Name2", name);
  console.log("Surname2", surname);
  console.log("Job2", job);
  console.log("Age2", age);
  console.log("***********************");
  
  })
  console.log("***********************");
  team.forEach((person)=> {

    const { name, surname, job, age} =person; // sol taraftaki degiskenleri yazarken siranin önemi yok. age en basa da yazilabilir mesela.
    
    console.log("Name3", name);
    console.log("Surname3", surname);
    console.log("Job3", job);
    console.log("Age3", age);
    console.log("***********************");
    
    })


    //! ---------- Functionlarda destructuring kullanimi -------------

    const objGoster = function () {
  
      return {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
      }
    }

    let {name, surname, job, age} = objGoster()

    console.log(name);
    console.log("Age", ++age); //41
    

    //! Fonksiyon Parametresi

    const data = {

      id:"123",
      desc:"This is top secret information",
      createdTime:"1980",

    }

    const printData = (data) => {

      console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);

    }
    printData(data)  //123 - This is top secret information - 1980


    //Asagidaki fonksiyon destructuring hali.

    const printDataDestr = (data) => {
      const {id,desc,createdTime}=data
      console.log(`${id} - ${desc} - ${createdTime}`);
      
    }
    printDataDestr(data) // 123 - This is top secret information - 1980



      const printDataAir = ({id,desc,createdTime}) => {

        console.log(`${id} - ${desc} - ${createdTime}`);

      }

   printDataAir(data) // 123 - This is top secret information - 1980



//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================


const people = ["Ali", "Veli", "Harvey", "Ashley"];

console.log(people[0]); // Ali
let ali = people[0];
console.log(ali); //Ali



const [kisi1, kisi2, kisi3, kisi4] = people // burda sira önemli.
//const [kisi1, kisi2, , kisi4] = people  kisi3' ü consolda  görmek istemiyorsam  , attim.
//console.log(kisi1,kisi2,kisi4); //Ali Veli Ashley

console.log(kisi1,kisi2,kisi3,kisi4); //Ali Veli Harvey Ashley 


//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini ayri dizi yada objelere kopyalanmasini saglayabilir.

//?ARRAY 

const araclar = ["Kamyon","Tir","Kamyonet","Motosiklet","Minibüs","Taxi"]

const [arac1,arac2,arac3, ...binekAraclar] =araclar
//const [arac1,arac2,arac3,, ...binekAraclar] =araclar
console.log(binekAraclar); //(2) ['Minibüs', 'Taxi'] 
console.log(arac3); //Kamyonet
console.log(binekAraclar); // (3) ['Motosiklet', 'Minibüs', 'Taxi'] geri kalanlari birden fazla eleman oldugu icin ... ayri bir dizide tanimladi.


//? Object

const person = {

  ad:"Hazel",
  soyad:"Nut",
  is:"team lead",
  yas:40,

}

const {ad, soyad, ... geriKalan} = person // objectlerde sira önemli degil ama arraylerde önemli.
console.log(geriKalan); //{is: 'team lead', yas: 40}

//! Bir fonksiyonun argümanlarini diziye cevirmek icin kullanilabilir.

// const topla = (a,b, ...kalan)=> a+b
// console.log(topla(1,5,7,9,3));

const topla = (a, b, ...kalan) => {
  // İlk iki parametreyi toplayın
  let toplam = a + b;
  
  // kalan parametreleri toplayın
  for (let sayi of kalan) {
    toplam += sayi;
  }
  
  return toplam;
}

console.log(topla(1, 5, 7, 9, 3)); // Tüm sayıları toplayarak sonucu yazdır.



const toplam = (...sayilar) => {
  return sayilar.reduce((a,b)=> a+b)
}
 console.log("TOPLAM", toplam(1,5,7,9,3));  //(5) [1, 5, 7, 9, 3]
 //? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmis olduk.



//* =============================================
//*  SPREAD (...) Kelime anlami yaymak.
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"];
const karaAracları = ["araba", "bisiklet", "marti"];

const tasitlar = [ucanAraclar,karaAracları]
console.log(tasitlar); //(2) [Array(4), Array(3)]

const flatTasitlar = [...ucanAraclar, ...karaAracları]
console.log(flatTasitlar); //(7) ['helicopter', 'drone', 'ucak', 'fuze', 'araba', 'bisiklet', 'marti']


//? Example

const cümle = "Uzun ince bir yoldayim";
const cümleDizisi = [...cümle];
console.log(cümleDizisi); //(22) ['U', 'z', 'u', 'n', ' ', 'i', 'n', 'c', 'e', ' ', 'b', 'i', 'r', ' ', 'y', 'o', 'l', 'd', 'a', 'y', 'i', 'm']

//?Example

const numbers = [1, 3, 4, 5];
console.log(Math.max(numbers)); //NaN (Not a Number). "Math.max()"  Number da calisir. Array de calismaz. Array methodu degildir. Sayi arar. Buyüzden NaN verdi. Diziyi "..." ile cikarttik ve sayilar görünür oldu.
console.log(Math.max(...numbers)); //5


//? nested (ic ice gecmis)
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "John",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
}

//? Javascriptte Objects default olarak iterable(icinde dönülemiyor) degildir. Ama for in ve for of döngüleri ile iterable hale gelirler.

//? Objectlerin key ve value larini okumak icin built-in metotlar vardir. Bu metotlar aslinda objelerin key ve/veya value lari bir dizi olarak döndürür.

//! FOR - IN

for(let s in sahislar){

console.log(s); // sahis1, sahis2...

console.log(sahislar[s]); // {name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …} objeleri döndü.

console.log(sahislar[s].salary);// index kullanarak icinde döndük.

}


//! Kullanışlı Object metotları Object i Array e ceviriyoruz. Objectlerin üzerinde dönüp iterable olmasi icin yapiliyor.


console.log(Object.keys(sahislar)) //? objenin key'leri array olarak doner
//?(3) ['sahis1', 'sahis2', 'sahis3']

console.log(Object.values(sahislar)) //? objenin value'larını array olarak doner. (3) [{…}, {…}, {…}]

console.log(Object.values(sahislar.sahis2)) //? objenin value'larını array olarak doner. (6) ['John', 'Sweet', '1990', 'tester', '110000', false]

console.log(Object.entries(sahislar)) //? objenin key-value ciftini array olarak doner

console.log(Object.entries(sahislar.sahis1)) //? objenin key-value ciftini array olarak doner.


//! FOR - OF Dizinin icinde dönmesi lazim.

// for(let x of iterable){

// code block to be executed

// }

// for(const key of sahislar){
//   console.log(sahislar); //sahislar is not iterable
// }

for(const key of Object.keys(sahislar)){
  console.log(sahislar[key].salary); // square ile elemani gördük direkt cünkü for of direkt elemani baz aliyor.
}

console.log("*******************");

for(let v of Object.values(sahislar)){
  console.log(v); //{name: 'Can', surname: 'Canan', dob: '1990', job: 'developer', salary: '140000', …}
  console.log(v.name); // Can, John, Steve
}