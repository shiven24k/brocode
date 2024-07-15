 //----------.firstElementChild-----------
//  const element =document.getElementById("fruits");
//  const firstChild = element.firstElementChild;
//  firstChild.style.backgroundColor = "red";

// const element =document.querySelectorAll("ul");
// element.forEach((el)=>{
//     const firstChild = el.firstElementChild;
//     firstChild.style.backgroundColor = "red";
// })



//-----------------lastElementChild----------------
// const element =document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "red";

// const element =document.querySelectorAll("ul");
// element.forEach((el)=>{
//     const lastChild = el.lastElementChild;
//     lastChild.style.backgroundColor = "red";
// });

// //----------------nextElementSibling----------------
// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "red";

// //----------------previousElementSibling----------------
// const element = document.getElementById("orange");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "red";

// //----------------parentElement----------------
// const element = document.getElementById("apple");
//  const parent = element.parentElement;
//  parent.style.backgroundColor = "red";

//-----------------children----------------
 const element = document.getElementById("fruits");
    const children = element.children;
    children[0].style.backgroundColor = "red"; 