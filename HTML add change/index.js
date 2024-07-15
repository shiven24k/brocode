//step 1 create the element
const newH1 = document.createElement("h1");
const newItem = document.createElement("li");



//step 2 add the attributes/properties
newH1.textContent = "I like pizza";
newH1.id="myH1"
newH1.style.color = "red";
newH1.style.textAlign = "center"
newItem.textContent = "Mango";

//step 3 Append element to DOM
//document.body.append(newH1);
// document.body.prepend(newH1);
 document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

//in between
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2)

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[2]);
// console.log(boxes[2]);
const banana = document.getElementById("banana");
document.getElementById("fruits").insertBefore(newItem,banana);

document.getElementById("fruits").nextElementSibling(newItem);

//Remove HTML element
// document.body.removeChild(newH1);

document.getElementById("box1").removeChild(newH1)
