// function addition(argument1, argument2) {
//   return argument1 + argument2
// }

// console.log(addition(3, 5))


// #1| Créer une fonction qui affiche une salutation peronnalisée qui vient d'un input type text (avec un bouton d'envoi) qui envoie le prenom auquel on veut salué

let textName = document.querySelector('.textName')
let buttonName = document.querySelector('.buttonName')
let div = document.querySelector('.reponseName')

function yourName(name) {
  div.innerHTML = `hello ${name}`
}

function giveYourName(){
  if (textName.value != "") {
    yourName(textName.value)
    textName.value = ""
  } else {
    div.innerHTML = `don't you have a name ? ( ._. )`
  }
}

buttonName.addEventListener('click', function(){
  giveYourName()
})

textName.addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    giveYourName()
  }
})


// #2| Comparer deux nombres et afficher s le premierr est plus grand que le second (ou s'il est égal),  les nombres doivent etre envoyes par 2 champs input de type nombre et la fonction doit ese lancer au click sur un bouton de validation

let text1 = document.querySelector('.num1')
let text2 = document.querySelector('.num2')
let buttonNum = document.querySelector('.buttonNum')
let reponseNum = document.querySelector('.reponseNum')


function compareNbr(num1, num2){
  
  // if (num1 == ""){
  //   num1 = 0
  // } else if (num2 == ""){
  //   num2 = 0
  // }

  if (num1 > num2){
    reponseNum.innerHTML = `${num1} est plus grand que ${num2}`
    compareNbr(parseInt(text1.value), parseInt(text2.value))
  } else if (num1 < num2){
    reponseNum.innerHTML = `${num1} est plus petit que ${num2}`
    compareNbr(parseInt(text1.value), parseInt(text2.value))
  } else{
    reponseNum.innerHTML = `${num1} et ${num2} sont égaux`
    compareNbr(parseInt(text1.value), parseInt(text2.value))
  }

  text1.value = ""
  text2.value = ""

  
}

buttonNum.addEventListener('click', function(){
  compareNbr(parseInt(text1.value), parseInt(text2.value))
})

text2.addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    compareNbr()
  }
})


// #3| demander poids(kg) et taille(m) a user et calculer son IMC(kg / m²)

let weight = document.querySelector('.weight')
let height = document.querySelector('.height')
let buttonImc = document.querySelector('.buttonImc')
let reponseIMC = document.querySelector('.reponseIMC')

function compareNbr(weight, height){

  let IMC = weight / (height ** 2)

  let IMCrounded = IMC.toFixed(1)

  console.log(IMCrounded);

  if (IMCrounded <= 18.5){
    // Maigreur
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Maigreur`
  } else if (IMCrounded <= 24.9){
    // Normal
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Normal`
  } else if (IMCrounded <= 29.9){
    // Surpoids
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Surpoids`
  } else if (IMCrounded <= 35.9){
    // Obésité modéré
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Obésité modéré`
  } else if (IMCrounded <= 40){  
    // Obésité sévère
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Obésité sévère`
  } else if ( IMCrounded >= 40.1){
    // Obésité morbide
    reponseIMC.innerHTML = `${weight}kg / (${height}m)² = ${IMCrounded} => Obésité morbide`
  }




}

buttonImc.addEventListener('click', function(){
  compareNbr(parseFloat(weight.value), parseFloat(height.value))
  weight.value = ""
  height.value = ""
})