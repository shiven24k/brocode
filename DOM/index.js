const username = ' Shiven';
const welcomeMsg = document.getElementById('welcome-msg');
const myHeading = document.getElementById('my-heading');
const fruits = document.getElementsByClassName('fruits');
const h4Element = document.getElementsByTagName('h4');
const liElement = document.getElementsByTagName('li');
const element = document.querySelector('li');
const foods = document.querySelectorAll('li');


// welcomeMsg.textContent += username ===" "?'Guest':username;
// myHeading.style.backgroundColor = 'lightblue'; 
// myHeading.style.textAlign = 'center';

// fruits[0].style.color = 'red';
// fruits[1].style.color = 'green';
// fruits[2].style.color = 'blue';
// // fruits.forEach();  //foreach won't work

// for(let i=0; i<fruits.length; i++){
//     fruits[i].style.fontSize = '25px';
// }
// Array.from(fruits).forEach(fruit => {
//     fruit.style.fontWeight = 'bold';
// });

// h4Element[0].style.color = 'purple';
// h4Element[0].style.textAlign = 'center';
// h4Element[0].style.fontSize = '30px';
// h4Element[0].style.fontWeight = 'bold';
// h4Element[0].style.backgroundColor = 'lightgreen';
// h4Element[1].style.color = 'orange';
// h4Element[1 ].style.textAlign = 'center';
// h4Element[1].style.fontSize = '30px';
// h4Element[1].style.fontWeight = 'bold';
// h4Element[1].style.backgroundColor = 'lightgreen';

// for(let h4 of h4Element){
//     h4.style.padding = '10px';
// }
// for(let li of liElement){
    
//     li.style.fontSize = '20px';
//     li.style.fontWeight = 'bold';
//     li.style.backgroundColor = 'lightyellow';
//     li.style.padding = '5px';
//     li.style.margin = '5px';
//     li.style.listStyle = 'none';
// }
// Array.from(liElement).forEach(liElement => {
//     liElement.style.color='red';
// })

// element.style.color = 'blue'; //set the property of first element

foods[5].style.backgroundColor = "yellow"; //won't work 