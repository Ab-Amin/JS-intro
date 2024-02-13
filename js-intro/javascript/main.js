// console.log('hello!')

//crée variable : let 'variable name' = ....
// crée constante : const 'variable name' = ....

// const monPrenom = "Amin"
// let monAge = 22
// const nextBirthday = "13 décembre 2023"

// // console.log('Mon prénom est ' + monPrenom + 'et j\ai ' + monAge + ' ans!')
// console.log(`Mon prénom est ${monPrenom}, j'ai ${monAge} ans!`)

// monAge++

// console.log(`J'aurais ${monAge} ans le ${birthday}`)


// -------------------------------------
// tableau js

let mesEpices = ["Paprika", "Currry", "Poivre", "Sel", "Estragon"]
console.log(mesEpices)

// affiche l'element à la place 0; ici "Paprika"
console.log(mesEpices[0]) 

// affiche le nombre d'element dans le tableau; ici 5 
console.log(mesEpices.length)

// affiche le dernier element du tableau
console.log(mesEpices[mesEpices.length-1]) 

// .push rajoute un element a la fin du tableau 
mesEpices.push("Basilic")
console.log(mesEpices);

// .pop supprime dernier element
mesEpices.pop()
console.log(mesEpices);



// Exercice JS Array(tableau) ----------------------------------------
console.log("---Exercice JS Array(tableau)----");

let fruits = ["Pomme", "Banane", "Mangue"]
console.log(fruits);

fruits.push("Orange")
console.log(fruits);

// .unshift rajoute un elem au debut du tableau
fruits.unshift("Citron")
console.log(fruits)

// .splice suprrime un element (num à supprimer, combient il suprimera aprés)
fruits.splice(2, 1)
console.log(fruits);

console.log(fruits[1]);

console.log(fruits[fruits.length-1]);

// .sort arange en ordre alphabetique; .reverse same à l'envers
fruits.sort()
console.log(fruits);

// cherche l'elemlent, si trouvé il envoie ca place, ici 1 (2eme place)
console.log(fruits.indexOf("Mangue"))



// Objet JS -----------------------------------------
// let Variable = {"propriété" : "valeur"}

let maMaison = {
  "superficie" : "220m²",
  "materiaux" : "Bois",
  "adresse" :  {
    "rue" : "Rue Jule Cockx",
    "numero" : "6",
  },
  "jardin" : true,
}
console.log(maMaison)
console.log(maMaison.superficie)
console.log(maMaison.adresse.numero)


let titre = document.querySelector("h1")
// ou let VariableName = document.querySelector("#IdName"), pour visé que l'ID
titre.innerHTML += " ; JS introducion #2"
// ici += raajoute le text aprés le <h1> de base
console.log(titre)




