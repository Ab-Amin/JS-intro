// 1. Créez 3 boutons (<button>)
// 2. Quand on clique sur un bouton, lui ajouter une classe "active"
// 3. Quand on re-clique sur le même bouton, lui enlever sa classe "active"
// 4. Quand on clique sur un autre bouton que celui qui a déjà la classe "active", enlever la classe "active" sur le bouton qui l'a déjà et l'ajouter sur le bouton en cours
// 5. Il ne peut donc n'y avoir qu'une seule classe active à chaque fois (et pas 2 ou 3)
// let buttons = document.querySelectorAll('button')


let buttons = document.querySelector('button')

// buttons.forEach(button => {
  
//   button.addEventListener('click', function(e) {
    
//     if (button.classList.contains('green')){
//       button.classList.remove('green')
//     } else{
//       button.classList.add('green')
//     }
  
//   });

// });


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let ImGreen = document.querySelectorAll('.green')


buttons.addEventListener('click', function() {

  if (buttons.classList.contains('green')) {
    buttons.classList.remove('green')
  } 

  if (buttons.closest('green')) {
    console.log('green');
  }
  
  
  buttons.classList.add('green')
});



















