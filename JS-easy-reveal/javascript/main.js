// Troisième exercice : Easy reveal
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://cepegra-labs.be/webdesign/fed2023/olivier/js/ez-reveal/
// À partir d'un fichier HTML sur lequel certains éléments ont une classe qui va les "cache" à la base, faire en sorte que, au scroll, quand on arrive à la moitié de la hauteur de l'élément en question, il "apparaisse" avec une transition en CSS et qu'il "monte" un peu comme sur l'exemple
// Vous devez donc placer la même classe sur un bon nombre d'éléments et faire en sorte que cette classe fonctionne, peu importe l'élément sur lequel cette classe est placée

let body = document.querySelector('body')
let easyReveals = document.querySelectorAll('.reveal')
let jeScroll = window.scrollY;
// let lastScrollPos = 0;  
// let currentScrollPos;

// easyReveal.classList.remove("reveal")


window.addEventListener('scroll', function () {
  
  jeScroll = window.scrollY;
  windowHeight = window.innerHeight

  easyReveals.forEach(function (easyReveal){

    //test avec offsetTop
    // easyReveal = (easyReveal.offsetTop + (easyReveal.offsetHeight / 2)) - window.innerHeight
    
    // if( jeScroll >= easyReveal){
    //   easyReveal.classList.remove("reveal")
    // }
    
    if( jeScroll >= windowHeight - (easyReveal.offsetHeight)){

      easyReveal.classList.remove("reveal")
    }
    console.log(easyReveal.offsetTop);
  })
  // console.log(( jeScroll / body.offsetHeight * 100 ) + "%" );
})













