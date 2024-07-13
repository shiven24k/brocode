let count = document.getElementById("myCounter");
let increase = document.getElementById("myCountButton");
let decrease = document.getElementById("myDecreaseButton");
let reset =  document.getElementById("myResetButton");
let val = 0;


increase.onclick = function(){
    val++;
    
    count.textContent = val;
}

decrease.onclick = function(){
    val--;
    
    count.textContent = val;
}
reset.onclick = function(){
    val=0;
    
    count.textContent = val;
}
