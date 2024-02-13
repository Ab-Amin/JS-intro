// Kill the Koalas °-°


// spans = document.querySelectorAll('span')

// spans.forEach( function (span) {
//   span.addEventListener('click', function(e){
//     span.classList.add('cross')
//   })
// })


document.querySelector('.koalas').addEventListener('click', function(e){
  if(e.target.hasAttribute("title")){ // or (e.target.innerText == "🐨")
    e.target.classList.add('cross')
    console.log('dead');
  }
})



















