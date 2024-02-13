// Deuxième exercice : For the Miamer's
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://cepegra-labs.be/webdesign/fed2023/olivier/js/14%20-%20%5BMiam%20list%5D
// Créez 3 champs de formulaire (1 select avec les prénoms de tous les fêtards, 1 select avec des numéro de 1 à 10 pour la quantité, un input text pour indiquer de quoi il s'agit) et un bouton de validation
// Quand vous "Ajoutez" un élément, ça vient se loger dans une boite qui affiche le résultat (présentation libre) en indiquant de cette façon : [Olivier] 2 x Bellini
// Il doit y avoir la possibilité de supprimer un élément de la liste
// Quand vous "Ajoutez" un élément, je vous demande de l'inscrire dans un tableau d'objets qui contiendra au minimum le nom de la personne, la quantité et ce qu'elle amène
// C'est dans ce tableau d'objets que vous allez puiser pour afficher la liste des choses


let selectNames = document.querySelector('.names')
let selectNbr = document.querySelector('.howMuch')
let text = document.querySelector('input')
let addButtons = document.querySelector('button')

let divList = document.querySelector('.miniWrapper') 
let msgVide = document.querySelector('.vide')

let errorMsg = document.querySelector('.errorMsg')

let nameNbrItems = []

function addItem(name, nbr, item) {
  if (item != ""){
    errorMsg.innerText = ""
    nameNbrItems.push(item)
    
    // enleve message 'liste de course vide' si nameNbrItems a au moins 1 item
    if (nameNbrItems.length >= 0){
      msgVide.classList.add("remove")
    }
    
    divList.innerHTML += 
    `
    <div class="items">
    <div class="name">${name}</div>
    <div class="nbr">x${nbr}</div>
    <div class="foodName">${item}</div>
    <button class="delete" title="delete?">X</button>
    </div>
    ` 
    
    // Supprime liste si click sur X
    let deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(function (button) {
      
      // fonction qui enlevera le parent d'ou le 'X' se situe (du coup toute la ligne)
      button.addEventListener('click', function(){
  
        button.parentElement.remove()
        
        // delete un item random de l'Array, comme ca on sais quand la liste est vide et doit ramener le message 'liste de course vide' dans liste
        nameNbrItems.splice(0, 1)
        
        // ramene message 'liste de course vide' si nameNbrItems est vide
        if (nameNbrItems.length == 0){
          console.log(`list is empty! ${nameNbrItems.length}`);
          document.querySelector('.vide').classList.remove("remove")
          
          // le remove .remove fonctionne pas ?????
        }

        console.log(nameNbrItems);
      })
    })

  } else{
    // message d'erreur
    errorMsg.innerText = `Please add something in food`
  }

  console.log("+ " + name, nbr, item);
  console.log(nameNbrItems);

}

addButtons.addEventListener('click', function(){
  addItem(selectNames.value, selectNbr.value, text.value)
  text.value = ""
})










