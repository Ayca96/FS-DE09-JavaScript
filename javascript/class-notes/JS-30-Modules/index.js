console.log("index js'den selamlar ");

//? named export yapilmis degiskenleri import yaparken "as" alias (takma ad) ile isim degistirerek import edebiliriz. Artik degismeden önceki isim kullanilamaz hale gelir. 

//? default exportlarda istedigimiz isimle import edebiliriz.

import ugurla, {
  topla, 
  calismaSaati,
  increase as inc,
  decrease,
  myName,
} from "./myModules.js";

//import ugurla from "./myModules.js";  {} curly bracket in icine almadan yapiyoruz.

console.log(topla(3,5));
console.log(calismaSaati);

//console.log(increase(2));
console.log(inc(2));
console.log(decrease(2));
console.log(myName);

// ugurla();
ugurla();