let utilisateurs = [
  { nom: 'Oliver', age: 41, profession: 'Ingénieur' },
  { nom: 'Olivier', age: 38, profession: 'Médecin' },
  { nom: 'Nour', age: 33, profession: 'Enseignant' },
  { nom: 'Laura', age: 32, profession: 'Designer' },
  { nom: 'Ilayda', age: 59, profession: 'Architecte' },
  { nom: 'Valérie', age: 36, profession: 'Développeur' },
  { nom: 'Alexandra', age: 52, profession: 'Journaliste' },
  { nom: 'Sam', age: 20, profession: 'Photographe' },
  { nom: 'Amin', age: 31, profession: 'Chef' },
  { nom: 'Hemza', age: 50, profession: 'Musicien' },
  { nom: 'Louis', age: 21, profession: 'Avocat' },
  { nom: 'Diego', age: 49, profession: 'Scientifique' },
  { nom: 'Lucas', age: 51, profession: 'Artiste' },
  { nom: 'Seb', age: 40, profession: 'Écrivain' },
  { nom: 'Cédric', age: 24, profession: 'Pilote' }
]

// console.log(`Je m'appelle ${utilisateurs[8].nom}, j'ai ${utilisateurs[8].age} ans et je suis ${utilisateurs[8].profession}`);

let h1 = document.querySelector('h1')

// Boucle
for (let i = 0; i < utilisateurs.length; i++){ 
  // creation de variable i = 0; 
  // condition de sortie : tant que i est plus petit que la taille du tableau 'utilisateurs' on continue la boucle;
  // rajoute 1 à i et recommence la boucle 
  
  // console.log(` ${i}) Je m'appelle ${utilisateurs[i].nom}, j'ai ${utilisateurs[i].age} ans et je suis ${utilisateurs[i].profession}`);


  document.querySelector('body').innerHTML += // += rajoute en plus de ce qui est deja dans le 'body' sinon il
  `
  <h1 title="${utilisateurs[i].age} ans"> ${utilisateurs[i].nom} : <span style="font-weight: normal; font-size: 18px;"> ${utilisateurs[i].profession}. </span></h1>
  `
}


// Exo : Faire la somme des nombres de 1 à 100. 1+2+3+4+5+...+100
let total = 0;
for (let i = 0; i <= 100; i++) {
  // total = total + i
  total += i 
  // total commence a 0 et rajoute i tant que i est plus petit ou égale à 100 sans écraser la valeur d'avant
}
// console.log(total);

// Exo : Faire table de multi de 5 (max *10) et montré calcul
let multi = 5;
for (let i = 1; i <= 10; i++) {
  // multi = i * 5
  // console.log(`5*${i} = ${multi}`);

  // console.log(`5 * ${i} = ${5*i}`);
}

// Exo : affficher nombre pair entre 1 et 100
for (let i = 0; i <= 100; i++) {
  if ( i % 2 == 0){
    // console.log(i);
  }
}


// Exo : afficher chaque carractéres d'une chene donée.

let Word = `anticonstitutionnellement`
for (let i = 0; i < Word.length; i++){
  console.log(Word[i]);

}
console.log(`Le mot "${Word}" contient ${Word.length} lettres °o° !`);







