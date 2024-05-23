// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");


//!1-Klasik yöntemle tanımlanan String ilkel (primitive) dir
const str1="clarusway"
const str2="hello"
const str3="all the world"

console.log(str2+str3, typeof(str2+str3) );

//!2- constructor ile tanımlanan String non-primitive (ilkel olmayan)

const str4= new String ("yeni bir String")
console.log(typeof str4);


//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods


/******************************** concat() immutable   yani degismez.************************************/


const s1 = "clarusway";
const s2 = "hello"
console.log(s1.concat(s2));

const s3 = s1.concat(s2)
console.log(s3);


//! orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz


// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================


const myName = "Ipek Bilir";
console.log(myName.toLowerCase()); // ipek bilir seklinde tüm harfleri kücültüyor.

console.log(myName.toUpperCase());
console.log(myName.toLocaleUpperCase("tr"));

const esitMi = (a,b) => a==b.toLocaleUpperCase("tr") ? "esittir" : "esit degildir"

  console.log( esitMi ("İSMET", "ismet"));

  //! toLocaleUpperCase("tr")= Türkçe büyüt demek  boş bırakınca  eng (ingilizce) karakterlere uygun büyütebiliriz.

  const s4 = "primitive \nveri tiplerinin \nproperty ya da \nmethodu olmaz."
  console.log(s4);
  console.log(`
  primitive
  veri tiplerinin 
  property ya da
  methodu olmaz.`);

  console.log(s4.charAt(8)); // e
  console.log(s4.charAt(5));  // t
  console.log(s4.charAt(s4.length-1)); // .  son karakteri gösterir.

// *=========================================================
// *   includes()- case sensitive (büyük küçük harfe duyarlı)
// *=========================================================

const kelime = "to be or not to be, that is The questions.";
const kelime2 = "to be or4 not to be, that is The questions.";

console.log(kelime.includes("to be")); // TRUE
console.log(kelime.includes("TO BE")); //FALSE
console.log(kelime.toUpperCase().includes("TO BE")); //true
console.log(kelime2.includes(4) ? "evet rakam var" : "rakam yok"); //true
console.log(kelime.includes("to be", 14)); // false 14. siradan sonra to be olup olmadigini sorguluyoruz.

// *=========================================================
// *   search()  (REGEX)
// *=========================================================

const kelime3 = "to, be or not to be, 5 that is The questions.";
console.log(kelime3.search(/[A-Z]/)); // sirasini döndürür 31. siradaymis.
console.log(kelime3.search(/[a-z]/)); // ilk harf kücük t oldugu icin onun sirasi olan 0 i döndürüyor. Ilk buldugunu döndürüyor.
console.log(kelime3.search(/[0-9]/)); //21
console.log(kelime3.search(/[0-9 a-z A-Z]/)); // ilk buldugu kücük o yüzden 0 döndürdü.

console.log(kelime3.search(/[^0-9 a-z A-Z]/)); //2 (, ü döndürür.)

console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLowerCase()); //t

//* ----------------------------------------------------------
//* startsWith(), endsWith() -- case sensitive
//* ----------------------------------------------------------


const cumle = "Salina salina  sinsice olurum sana!";
console.log(cumle.startsWith("sa")); //false
console.log(cumle.startsWith("Sa")); //true
console.log(cumle.endsWith("!")); //true
console.log(cumle.startsWith("sa", 7)); //true  7 index itibariyle sa ile baslar.
console.log(cumle.endsWith("salina",13)); // 13 e kadar olan yerde salina kelimesi var mi?  13 dahil değil 13. index e kadar olan kısım salına ile bitiyor.

//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith) --immutable (değiştirmez)
//* ----------------------------------------------------------

let oku = "Oku Johny gibi saf olma saf olma saf olma";

console.log(oku.replace("saf olma", "akilli ol")); // kalici degil tekrar console da yazdirinca eski hali gelir.
console.log(oku);

// oku = oku.replace("saf olma", "akilli ol");
// console.log(oku);

//? replaceAll

console.log(oku.replaceAll("saf olma", "zeki ol")); // kalici degistirmiyor bu da.

//* 2.Yol

console.log(oku.replace(/saf olma/gi,"zengin ol")); //gi=> g=globaldeki tüm saf olma kelimelerini al ve i = in case sensitive ol.

console.log(oku.replace(/SAF/i, "fakir")); // i tek basina bir tane saf kelimesini buldu ve onu degistirdi.
console.log(oku.replace(/saf/g, "fakir")); // g= globaldeki tüm denk gelenleri degistirir. //g=global. tüm denk gelenleri değiştir
// /SAF/i;  (i=incase sensitive) yazımı büyük küçük harfe duyarsız ara demek
//kalicilik istersen degiskene ataman lazim. hepsi gecici.


//* ----------------------------------------------------------
//*  slice(beginIndex, endIndex)
//*  substring(beginIndex, endIndex)
//* ----------------------------------------------------------
//! slice= dilimlemek,kesmek demek
const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE";
console.log(veysel.slice(10)); // BİR YOLDAYIM YÜRÜYORUM GUNDUZ GECE
console.log(veysel.slice(10,21)); //BİR YOLDAYI
console.log(veysel.substring(10,21)); // BİR YOLDAYI
console.log(veysel.slice(-10)); // - ile yazinca cümlenin sonunda baslayarak ve 1 den sayarak baslicaz normalde 0 dan baslayarak yaziyoruz. "UNDUZ GECE"

console.log(veysel.slice(-10,-6)); // UNDU

//! substring de  - index calismaz buyüzden slice tercih ediliyor daha cok.

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
// //* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

//! split = bölmek ayirmak demek.
const tarkan = "Gel gündüzle gece olalim";

console.log(tarkan.split()); // tek elemanli bir diziye dönüstürür. uzunlugu (length = 1)
console.log(tarkan.split(" ")); // bosluklardan ayirip virgül atar. length = 4

console.log(tarkan.split("e")); // e leri sil e lerden ayirarak dizi yap. 
console.log(tarkan.split("")); // hicliklerden ayirarak tüm harfleri ayri eleman yapti.

console.log(tarkan.split("e",3)); //oluşan dizinin ilk 3 elemanını getir.

//* ----------------------------------------------------------
//*  trim();
//* ----------------------------------------------------------

//! trim = düzeltmek, budamak demek // buldugu sagli sollu bosluklari trasliyor düzeltiyor. Aradaki bosluklar zaten normal , onlarin disindaki bosluklari düzeltiyor.

const ramazan = "     Hos geldin ya Sehr i Ramazan      ";

console.log(ramazan);
console.log(ramazan.trim());
console.log(ramazan.trim().endsWith("n"));

// chaning

let abc = "           Clarusway Full Stack";
abc = abc.trim().slice(0,9).toUpperCase();
console.log(abc);