// Créez une application qui permet à un étudiant d'entrer une liste de mots et leur traduction.

// Ensuite, quand il le veut, l'étudiant peut "lancer" le "jeu" qui va lui demander au hasard un mot issu de la liste des mots qu'il a rentrés.

// - Dès qu'il y a au moins un mot dans la liste, le bouton pour "lancer le jeu" apparaît, s'il n'y en a pas, il disparait/n'apparaît pas
// - Affichez quelque part le nombre de mots inscrits dans la liste
// - À tout moment, l'étudiant peut "quitter" le "jeu" pour aller ajouter des mots à sa liste.
// - La liste est stockée dans un tableau d'objets qui contient : le mot original et le mot traduit
// - L'étudiant peut aussi remettre la liste à 0 sur l'écran où il peut insérer des mots
// - Si la case du mot et de la traduction ne sont pas remplis => on n'envoie pas le mot dans la liste
// - La casse (majuscule ou minuscule) ne doit pas avoir d'importance dans la partie jeu (càd que peu importe si l'étudiant met une majuscule ou pas aux lettres ça n'aura pas d'impact sur le fait qu'il ait "bon" ou pas)
// - Quand l'étudiant lance le jeu, un panneau de jeu spécial apparaît et lui propose directement un mot à traduire (qui est un random à chaque fois)
// - On affiche un message de félicitations s'il a réussi à bien traduire le mot sinon un message d'erreur


// Des bonus chouettes pourraient être de : 

// 🍒 Permettre de stocker plusieurs listes (une par langue du student par ex : néerlandais, anglais et latin) et lui permettre de tester la langue qu'il souhaite entraîner

// 🍒 Plutôt que de faire un random pur à chaque fois et être confronté au même mot potentiellement, faire un random intelligent qui "enlève" le mot (s'il a été bien traduit par l'étudiant)

// 🍒 On peut compter les points et les afficher quelque part sur cette interface
// ----------------------------------------

// localStorage.setItem(key : string, value : string) |add item name and value
// localStorage.getItem(key) | get item '-'
// localStorage.clear | tout remove
// localStorage.removeItem(key) | remove specific item


// Inputs
let originalWord = document.querySelector('.original')
    traduction = document.querySelector('.traduction')
    testTrad = document.querySelector('.traduction-test')

// Buttons
let sendWord = document.querySelector('.send')
    clearList = document.querySelector('.clear-all')
    goToTest = document.querySelector('.test-button')

// Others
let wordCount = document.querySelector('.word-count')
    testWindow = document.querySelector('.test-window')
    closingTestWindow = document.querySelector('.close')



// =-=-=> Liste dans un tableau d'obj (dans localStorage) avec mots original + traduction du mot :


// =-=-=> boutton TEST apparait s'il y a deja des mots dans localStorage sinon il n'apparait pas :
function startTest() {
  if (localStorage.length >= 1) {
    goToTest.classList.remove('hidden')
  } else{
    goToTest.classList.add('hidden')
  }
  
}

// =-=-=> Clear button pour tout suprimé de la liste et recommancé à 0 :
clearList.addEventListener('click', function () {
  localStorage.clear()
  console.log('Local Storage has been cleared sir, o7');
  console.log(localStorage);

  startTest()
})

// =-=-=> fenétre de Test apparait + boutton x pour fermer la fenétre de test a tout moment :
goToTest.addEventListener('click', function(){
  testWindow.classList.add('move')
})

closingTestWindow.addEventListener('click', function () {
  testWindow.classList.remove('move')
})


// =-=-=> mot random dans la fenétre de test, si == a la traduction ✔️ sinon ✖️ :




// =-=-=> maj ou min doesn't matter (tout translate en minuscule, jsp cmt '-') :



// =-=-=>

let obj = {}

sendWord.addEventListener('click', function () {
  console.log("*click*");
  if (originalWord.value != "" && traduction.value != "")  {
    console.log('new word added to the list!');

    obj = {'originalWord' : `${originalWord.value}`, 'translatedWord': `${traduction.value}`};

    localStorage.setItem('originalWord', JSON.stringify(obj))


    // for (let i = 0; i < (localStorage.length + 1); i++) {
       
    //   obj[i] = {originalWord : `${originalWord.value}`, translatedWord: `${traduction.value}`};
    //   localStorage.setItem(`obj`, JSON.stringify(obj[i]))

    // }


    console.log(localStorage);
    


    // localStorage.setItem(`translatedWord`, `${traduction.value}`)

    // console.log();

    originalWord.value = ""
    traduction.value = ""
    startTest()
  }
})


startTest()
console.log(localStorage);









