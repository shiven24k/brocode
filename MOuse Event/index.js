const myBox = document.getElementById("box");
const myBtn = document.getElementById("myButton");


myBtn.addEventListener("click",(event)=>{
    // myBox.style.backgroundColor="blue";
    myBox.style.backgroundColor = "blue";
    myBox.textContent = "you clicked here";
});
myBtn.addEventListener("mouseover",event =>{
    myBox.style.backgroundColor = "red";
    myBox.textContent = "Don't hover";
})

myBtn.addEventListener("mouseout",event =>{
    myBox.style.backgroundColor = "rgb(179, 255, 129)";
    myBox.textContent = "I am a box";
})