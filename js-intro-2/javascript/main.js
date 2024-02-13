
// scrollY : se qui est deja parcouru sur fenetre en Y
let dejaScroll = window.scrollY;
let myNav = document.querySelector('nav')
let lastScrollPosition = 0;  
let currentScrollPosition;

//afficher valeur dejaScroll qui change en fonction du scroll vertical
window.addEventListener('scroll', function(){
  dejaScroll = window.scrollY;
  windowHeight = window.innerHeight
   
  if( dejaScroll >= windowHeight - myNav.offsetHeight){
    // console.log(`Scroll à dépassé les ${dejaScroll}px`);
    myNav.classList.add('sticky')

    if( dejaScroll >= windowHeight + 80){
      currentScrollPosition = window.scrollY;
      
      if (currentScrollPosition  > lastScrollPosition){
        myNav.classList.add('translateUp');
      } else{             
        myNav.classList.remove("translateUp");
      }

      lastScrollPosition = currentScrollPosition;
    }
  } else{
    myNav.classList.remove('sticky')
  }


  if( dejaScroll >= windowHeight){
    myNav.classList.add('resize')
  } else{
    myNav.classList.remove('resize')
  }

})


// Exo : translate Up nav when scroll down and bring back nav when scrolling up

// 1. Créer un événement de type "scroll" sur la fenêtre
// 2. Avoir accès à la navigation pour pouvoir interagir avec elle (création devariable)
// 3. Connaître où on se situe au niveau du scroll vertical (création devariable)
// 4. Créer, en CSS, une classe qui va s'ajouter/s'enlever en fonction dequelque chose
// 5. Connaître la position du "dernier scroll" pour pouvoir la comparer avecmon scroll actuel
// 6. Créer une condition pour vérifier le point

// window.addEventListener('scroll', function(){
//   let lastScrollPosition = 0;  
//   let currentScrollPosition; 

//   if (currentScrollPosition  > lastScrollPosition){
//     myNav.classList.add('translateUp');         
//   } else{             
//     myNav.classList.remove("translateUp");         
//   }

//   lastScrollPosition = currentScrollPosition;
// })


// Exo : progressive reading

// 1. Créer un élément HTML / CSS qui permet de "recevoir" la largeur variable et le positionner correctement. L'initialiser avec une largeur de 0px.
// 2. Capturer dans une variable la hauteur totale de la page en cours (création de variable)
// 3. Capturer dans une variable l'élément HTML sur lequel on va ré-injecter la largeur (création de variable)
// 4. Définir la "distance" à scroll au total (càd la hauteur totale de ma page moins la hauteur du premier écran)
// 5. Créer un événement de type scroll sur ma fenêtre
// 6. Dans cet événément, créer une variable qui capture le scroll en cours
// 7. Faire un calcul de proportion de la distance totale à parcourir par rapport au scroll en cours
// 8. Assigner le résultat du calcul à notre élément HTML (en largeur avec .style.width)

let body = document.querySelector('body');
let progRead = document.querySelector('.prog-read');
let totalScroll = body.offsetHeight - window.innerHeight;

window.addEventListener('scroll', function(){
  dejaScroll = window.scrollY;

  // progRead.style.width = (dejaScroll / totalScroll * 100) + "%"
  
  if (dejaScroll / totalScroll * 100 >= 100) {
    progRead.style.width = 100 + "%"
  } else {
    progRead.style.width = (dejaScroll / totalScroll * 100) + "%"
  }

  console.log(progRead);


})














// traduction de la fonction ^ :
// A chaque fois que je scroll dans ma fenetre(){ 
// Changer la valeur de dejaScroll 
// Renvoyer la valeur dans la console
// Crée variable nav qui se lie a balise <nav>
// Si (le scroll dépasse les 900px) {rajoute class 'sticky' à nav qui stick nav to top}
// Sinon {enlever class 'sticky' de nav}
// ((toggle fonctione pas pcqu'il enleve et remet la class ))

// Crée variable qui prend la hauteur de la fenetre grace à window.innerHeight
// Changer condition du 'Si (le scroll dépasse les 900px){...}' à 
// 'Si (le scroll dépasse la hauteur de la fenétre - hauteur de la nav){...}' 
// => Donnera un resultat qui fonctionne dans n'importe quel taille de fenetre

// Resize de la nav aprés 100px du header
// ...

// !! Melange les 3 fonction !!

// => variable crée dans la fonction ne fonctionera pas en dehors si on recrée pas la variable en dehors





