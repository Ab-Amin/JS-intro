//  | Guessing game
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://cepegra-labs.be/webdesign/fed2023/olivier/js/13%20-%20%7BRandom%20Number%5D
// Créez un champ input et un bouton de validation, ce champ servira à l'utilisateur pour entrer le nombre qu'il cherche
// Tirez un nombre au hasard  (entre 0 (inclus) et 100 (inclus))  (avec Math)
// Comparez le nombre entré par l'utilisateur au nombre aléatoire qui aura été choisi par votre script
// Indiquez à l'utilisateur s'il est au-dessus ou en dessous du nombre à trouver (ce message doit disparaître après un certain temps (genre 3 secondes)) (voir setTimeout pour y parvenir)
// Décomptez les chances qu'il a pour y arriver (maximum 5 essais)
// Prévoyez quelque chose s'il n'est pas parvenu à trouver le nombre après 5 essais
// Prévoyez quelque chose s'il a réussi à trouver le nombre en 5 essais

// Math.floor(Math.random() * 101);
// random number between 0 - 100

let wrapper = document.querySelector('.wrapper')
let p = document.querySelector('p')
let text = document.querySelector('.text')
let button = document.querySelector('.button')
let div = document.querySelector('.reponse')
let tries = document.querySelector('.tries')

let click = 4 // fonctionnais pas avec 5 du coup 4 ¯\_(ツ)_/¯

let randomNbr = Math.floor(Math.random() * 101);
console.log(`number to guess is ${randomNbr}`);

function higerNbr() {
  div.innerHTML = ``
  wrapper.classList.remove('red')
}
function lowerNbr() {
  div.innerHTML = ``
  wrapper.classList.remove('red')
}


function guessNbr(nbr) {
  function higerLowerEqual() {
    if (nbr < randomNbr){
      wrapper.classList.add('red')
      div.innerHTML = `Higher than ${nbr}!`
      setTimeout(higerNbr, 1000)  
    
    } else if (nbr > randomNbr){
      wrapper.classList.add('red')
      div.innerHTML = `Lower than ${nbr}!`
      setTimeout(lowerNbr, 1000)
      
    } else{
      wrapper.classList.add('green')
      div.innerHTML= `Got It! it was ${randomNbr}!`
    }
  }

  if (1 < click){
    higerLowerEqual()
    tries.innerHTML--

  } else if (click == 1){
    higerLowerEqual()
    div.innerHTML = `Last Try!`
    tries.innerHTML--
    
  } else if (click == 0){
    wrapper.classList.add('youLost')
    p.innerHTML = `☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ ☠ `
    div.innerHTML = `. . .`
  }
}

button.addEventListener('click', function(){
  guessNbr(text.value)
  text.value = ""
  click--
  console.log(`${click} left!`);
})
console.log(tries.innerHTML);



// window.location.reload(false) // f5




