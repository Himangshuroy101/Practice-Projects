const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

buttons.forEach( function (button) {
 console.log(button);
 button.addEventListener('click', function(event){
   if(event.target.id === 'grey'){
     body.style.backgroundColor = event.target.id;
     h1.style.color = 'white';
     h2.style.color = 'white'

   }if(event.target.id === 'white'){
     body.style.backgroundColor = event.target.id;
     h1.style.color = 'black';
     h2.style.color = 'black';
     
   }if(event.target.id === 'blue'){
     body.style.backgroundColor = event.target.id;
     h1.style.color = 'white';
     h2.style.color = 'white';

   }if(event.target.id === 'yellow'){
     body.style.backgroundColor = event.target.id;
     h1.style.color = 'black';
     h2.style.color = 'black';
   }
  })
} )