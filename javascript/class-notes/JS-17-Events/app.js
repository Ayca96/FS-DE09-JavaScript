let buton1 = document.getElementById("mybutton")
let sonuc = document.getElementById("result")

// console.log(buton1);
// console.log(sonuc);


//! Callback Yazim Cesitleri

//? 1.Yol 

// buton1.addEventListener("click", function konsol() {

// console.log("buton1 clicked");

// }) 

//? 2. Yol (Fonksiyon ismi opsiyonel)

// buton1.addEventListener("click", function konsol() {
//  console.log("buton1 clicked");
//  sonuc.innerText += " Button 1 clicked" 

// }) 

// buton1.addEventListener("dblclick", function konsol() {
//  sonuc.innerText += " Button 1 double clicked" 
//  console.log("buton1 double clicked");
// }) 
  
//? 3. Yol Disardan arrow / expression Fonksiyon cagirma
//buton1.addEventListener("click",clicked2) // arrow function da yukarda yazinca fonksiyonu tanimiyor.calistirmiyor.

//const clicked2 = ()=> {sonuc.textContent= "Button 1 clicked"}
//buton1.addEventListener("click",clicked2) // cagirma parantezleri olmadan yazilacak.

//buton1.addEventListener("click",clicked2)() cagirma parantezi su soldaki parantez yani.


//? 4. Yol disardan fonsiyon cagirma

//buton1.addEventListener("click",clicked)
// function clicked (){
//   sonuc.textContent += "Button 1 clicked function called from outside"
// }
// buton1.addEventListener("click",clicked)

// function decleration da fonksiyonu yukarda da cagirsak asagidada cagirsak calisir.


//? mouseover mouseout eventleri

// let myImg = document.getElementById("myImage")
// console.log(myImg);

// myImg.addEventListener("mouseover", ()=>{

// myImg.style.width="300px"
// console.log("image 300px oldu");

// })

//myImg.addEventListener("mouseout", ()=>{
//myImg.style.width="100px"
//myImg.style.display="none"
//console.log("image 100px oldu.");
//})


// buton1.addEventListener("click",()=>{
//   myImg.style.display="block"
// })


//? Drop down menü (asagiya dogru acilan menü) ---- change 

// let secim = document.getElementById("colors")

// secim.addEventListener("change",()=>{
//   //console.log("degisti");
//   let selectedColor = secim.value;
//   //console.log(selectedColor); // degisen rengi consolda görüyoruz.

//   document.getElementById("selectedColorP").textContent=`Secilen Renk : ${selectedColor}`
//   document.body.style.backgroundColor=selectedColor
// })


//? Random BackgroundColor

//random renk
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

const buton2 = document.getElementById("colorButton")

const colors= [];
const colorL = document.getElementById("colorList")

buton2.addEventListener("click",()=>{
const renk = getRandomColor()
//console.log(renk);
const colorObject = {color:renk}
colors.push(colorObject)
console.log(colors);
document.body.style.backgroundColor =renk

//Yeni rengi ekrana listeleme

const listItem = document.createElement("li")
listItem.style.backgroundColor = renk
listItem.textContent = renk
listItem.addEventListener("click", ()=>{
  document.body.style.backgroundColor=renk;
})
//colorL.appendChild(listItem) // append = eklemek, katmak demek
colorL.prepend(listItem) //  prepend = basina eklemek demek

})


// //! Telefon Örnegi 

// let resim = document.querySelector(".resim")
// let ses1 = document.querySelector(".ses1")
// let ses2 = document.querySelector(".ses2")
// let ara = document.querySelector(".ara")
// let baglat = document.querySelector(".baglat")
// let konus = document.querySelector(".konus")
// let kapat = document.querySelector(".kapat")
// // degisken adiyla class adlarinin ayni olmasi gerekmiyor burda hangisi ile alakali oldugunu belirtmek icin ayni yazdik. Yoksa kural falan degil.

// // Ara Butonu

// ara.addEventListener("click",()=>{

//   ses2.play();
//   ses2.volume = 0.1;
// })

// baglat.addEventListener("click",() => {
//  ses2.pause();
//  ses1.play();
//  ses1.volume = 0.1;
//  resim.src ="./helpers/connect.jpg"

// })

// konus.addEventListener("click",() => {
//  ses1.pause();
//  resim.src ="./helpers/call.jpg"

// })

// konus.addEventListener("click",() => {
//  ses1.pause();
//  ses2.pause();
//  resim.src ="./helpers/images.jpg"

// })

 //! Telefon örneği // hocadan aldim yukardaki benimki hatani bul.

// let resim = document.querySelector(".resim")
// let ses1 = document.querySelector(".ses1")
// let ses2 = document.querySelector(".ses2")
// let ara = document.querySelector(".ara")
// let baglat = document.querySelector(".baglat")
// let konus = document.querySelector(".konus")
// let kapat = document.querySelector(".kapat")


// //Ara Butonu

// ara.addEventListener("click", ()=>{
//     ses2.play();
//     ses2.volume = 0.1;
// })

// baglat.addEventListener("click", ()=>{
//     ses2.pause();
//     ses1.play()
//     ses1.volume = 0.1;
//     resim.src = "./helpers/connect.jpg"
// })
// konus.addEventListener("click", ()=>{
//     ses1.pause();
//     resim.src = "./helpers/call.jpg"
// })

// kapat.addEventListener("click", ()=>{
//     ses1.pause();
//     ses2.pause();
//     resim.src = "./helpers/images.jpg"
// })
 

//! Input Örnegi

// let alan = document.getElementById("username")
// let buton3 = document.getElementById("login")
// let user = document.getElementById("displayUsername")

// alan.addEventListener("input", () =>{

// let username = alan.value
// user.textContent=`Girdiginiz kullanici adi: ${username}`

// })

// let usr = "Mark"

// buton3.addEventListener("click", ()=>{

// let username = alan.value
// if (username == usr) {
//   user.textContent = `Girdiginiz kullanici adi: ${username}`
//   alan.value=""
// }
// else {
//   user.textContent = `Girdiginiz kullanici adi yanlis lütfen tekrar deneyin.`
// }
// })


const numbers = document.querySelectorAll(".number") // Array benzeri NodeList döndürür.
//console.log(numbers);

numbers.forEach((number,index)=>{

  number.addEventListener("click",()=>{
    if (number.textContent === "X") {
      number.textContent = index + 1
    }
    else{
      number.textContent = "X"
    }
  })
})