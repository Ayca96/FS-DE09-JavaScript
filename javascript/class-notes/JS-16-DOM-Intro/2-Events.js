//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol
//?--------------------------------------------------------


//* example1 onmouseover, onmouseout

const js = document.querySelector("#js")  // birkac yerde kullanilacagi zaman const atamasi yapiyoruz. 
const badi = document.querySelector("#badi")

js.onmouseover=()=>{

  badi.style.background="pink"
  
}

js.onmouseout=()=>{

  badi.style.background="orange"
  
}

//* example2 onclick ondoubleclick(ondblclick olarak güncel suan)


const bir = document.querySelector(".bir")
const iki = document.querySelector(".iki")

bir.onclick=()=>{

bir.src="./img/logo2.png"
iki.src="./img/js_logo.png"

}

iki.onclick=()=>{

  bir.src= "./img/js_logo.png"
  iki.src= "./img/logo2.png"
}

iki.ondblclick=()=>{

iki.src="./img/iki.webp"

}

// iki.ondblclick = () => {
//   bir.src = "./img/js_logo.png";
//   iki.src = "./img/logo2.png";
// };
// iki.onclick = () => {
//   iki.src = "./img/iki.webp";
// };


// ayni etikete hem onclick hem ondoubleclick vermek mantikli olmayabiliyor. Istenmeyen sonuclar olabilir. Yorumdaki örnek gibi yazarsak sorun cikmaz.

//*example3

 const buton = document.querySelector("#btn")

 buton.onclick=()=>{  // buton.onclick=function(){}   funciton expression yazimi

  buton.textContent="TIKLANDI"
  badi.style.background="aqua"
  document.querySelector("#par").style.fontSize="40px"

 }


 //? METHOD-2 (Sadece Javascript te yazilir- addEventListener ())  2.YOL

 buton.addEventListener("click", ()=>{

  buton.textContent="TIKLANDI"
  badi.style.background="aqua"
  document.querySelector("#par").style.fontSize="40px"


 });


 //* EXAMPLE-4 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

//?METHOD-3 (HTML-INLINE)
//?--------------------------------------------------------

// kodlari html sayfasinda. oraya bak.