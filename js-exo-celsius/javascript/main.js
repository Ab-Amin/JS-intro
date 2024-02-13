// Savoir quelle est la formule pour passer des degrés celsius à des degrés fahrenheit
// Un bouton en html pour “effectuer” le calcul de conversion (événement)
// Input type text, input type submit
// Pouvoir injecter une température à convertir (et la récupérer en javascript) VALEUR
// Un réceptacle pour le résultat qui va concaténer la température qu’on a demandée et la conversion en degrés fahrenheit

// object.value => va cheché la valeur dans l'objet (ex dans input type text)
// objet.value = "" => vidé le champ

// Fahrenheit (°F) = (Celsius (°C) * 9/5) + 32.

let celsius = document.querySelector('#txt')
let submit = document.querySelector('#submit')


function convertir() {
  if(celsius.value == ""){
  
    document.querySelector('.fahrenheit').innerHTML = `Error 404`
  
  } else {
    console.log(celsius.value + "°C"); // Aller rechercher la valeur d'un champ

    fahrenheit = (celsius.value * 9 / 5) + 32
    
    console.log(fahrenheit + "°F");
    
    document.querySelector('.fahrenheit').innerHTML =  
    `${celsius.value} Degré Celsius (°C) = ${fahrenheit} Degré Fahrenheit (°F)`
    
    celsius.value = "" // Reset d'un champ de formulaire pour le "vider"
  } 
  
}


submit.addEventListener('click', function() {
  convertir()
})

object.addEventListener('keypress', function(e) {
  if (e.key === 'Enter'){
    convertir()  
  }
})









