// convertir chiffre string en chiffre 'nrml' => parsInt
// closest to button 'Ajouter' pour prix
// slice pour enlever les € ??
// setAttributes ?
//className.previousElementSibling / className.nextElementSibling

let addButtons = document.querySelectorAll('.add')
let panierCount = document.querySelector('.count')
let prices = document.querySelectorAll('.price')
let h3 = document.querySelector('h3')
let totalPrice = 0



addButtons.forEach(function (addButton) {
  
  // +1 dans panier .count au clic du bouton 'Ajouter'
  addButton.addEventListener('click', function(){
    
    panierCount.innerHTML++
    // console.log(panierCount);
    
    let price = addButton.previousElementSibling.innerText
    
    price = parseInt(price.slice(0, -1))
    console.log(price);
    
    totalPrice += price
    
    // element.setAttribut("name", "value")
    h3.setAttribute("title", `${totalPrice}€`)
    
    // --------------- test to add item name + item prices dans panier ---------------
    
    // let hidden = document.querySelector('.hidden')
    // let h2 = document.querySelector('h2')

    // itemInfo = addButton.parentElement
    // itemName = itemInfo.firstChild


    // let div = document.querySelector('.item')


    // console.log(itemName.innerHTML);

    // hidden.innerHTML = 
    // `
    // <p style="margin-bottom: 8px;">Prix total : ${totalPrice}€</p>
    // `

    // hidden.innerHTML +=
    // `
    // <p>${itemName} : ${price}€</p>
    // `



  })
})



