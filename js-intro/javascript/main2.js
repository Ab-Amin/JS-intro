// Evenement JS --------------------------------------
// Click - buger menu

let MenuNav = document.querySelector("nav")
    MenuBurger = document.querySelector(".burger")

console.log(MenuNav, MenuBurger);

MenuBurger.addEventListener('click', function(){
  MenuNav.classList.toggle("active")
  console.log('click'); // to test if click works in console
  MenuBurger.classList.toggle("rotate")
})






