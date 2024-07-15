// console.log("hello");// ` `  or ""
// window.alert(`Hello, World!`);
//basics
// document.getElementById("myH1").textContent = `Hello, World!`;
// document.getElementById("myP").textContent = `This is a paragraph.`;

//variables
//  let userName = "Shiven Kashyap";
//  let age = 23;
//  let isMale = true;

// document.getElementById("p1").textContent = userName;
// document.getElementById("p2").textContent = age;
// document.getElementById("p3").textContent = isMale;

//submit button for input 
// let username;
// document.getElementById("mySubmit").onclick = function () {
//     username = document.getElementById("myText").value;
//     document.getElementById("myOutput").textContent = `Welcome ${username}`
// }

// const PI = 3.14;
// let radius;

// document.getElementById("myButton").onclick = function () {
//     radius = document.getElementById("myInput").value;
//     radius = Number(radius);
//     let area = PI * radius * radius;
//     document.getElementById("myOutput").textContent = `The area of the circle is ${area}`;
// }


// let num =3.44;
// let value = Math.round(num);

// document.getElementById("math").textContent = value;
// console.log(Math.round(num));

hello(goodbye)

function hello(callback) {
    setTimeout(() => {
        console.log("Hello, World!");
        callback();
    }, 2000)
}
function goodbye() {
    console.log("Goodbye, World!");
    
}   

