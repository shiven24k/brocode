
let min = 1;
let max = 100;
let randomNumber = Math.floor(Math.random()*(max-min+1))+max;
console.log(randomNumber);
let myButtton = document.getElementById("myButton");
let myInput = document.getElementById("myInput");
let myOutput = document.getElementById("myOutput");
// document.getElementById("num").textContent = randomNumber;

myButtton.onclick = function () {
    
    let v = myInput;;
    let val = v.value;
    if (val == randomNumber) {
        myOutput.textContent = `You guessed it right!`;
    } else if (val > randomNumber) {
        myOutput.textContent = `You guessed too high!`;
    } else if (val < randomNumber){
        myOutput.textContent = `You guessed too low!`;
    }
    else{
        document.getElementById("myOutput").textContent = `Please enter a valid number!`;
    }

//    //code to generate random number
//     let randomNumber = Math.floor(Math.random()*(max-min+1))+max;
//     console.log(randomNumber);
//     myOutput.textContent = randomNumber;
}
