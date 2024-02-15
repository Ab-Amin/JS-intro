// 1. Créez 3 boutons (<button>)
// 2. Quand on clique sur un bouton, lui ajouter une classe "active"
// 3. Quand on re-clique sur le même bouton, lui enlever sa classe "active"
// 4. Quand on clique sur un autre bouton que celui qui a déjà la classe "active", enlever la classe "active" sur le bouton qui l'a déjà et l'ajouter sur le bouton en cours
// 5. Il ne peut donc n'y avoir qu'une seule classe active à chaque fois (et pas 2 ou 3)

let wrapper  = document.querySelector('.wrapper')
let buttons = document.querySelector('button')

wrapper.addEventListener('click', function(e) {

  if (e.target.classList.contains('btn')) {

    // enleve class 'green' si contient deja 'green'
    if (e.target.classList.contains('green')) {
      e.target.classList.remove('green')

    } else {
      // si wrapper a un enfant avec la class 'green'
      if ( wrapper.querySelector('.green')){        
        // enleve class 'green' aux enfants
        wrapper.querySelector('.green').classList.remove('green')
        
      }
      
      e.target.classList.add('green')
    } 
  }
});
  
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=







