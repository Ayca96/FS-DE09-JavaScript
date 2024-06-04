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

// ayni etikete hem onclick hem ondoubleclick vermek mantikli olmayabiliyor. Istenmeyen sonuclar olabilir.

//*example3

 const buton = document.querySelector("#btn")

 buton.onclick=()=>{

  buton.textContent="TIKLANDI"
  badi.style.background="aqua"
  document.querySelector("#par").style.fontSize="40px"

 }