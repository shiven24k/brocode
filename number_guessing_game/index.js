let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert('You must enter a number');
  }
  else if (guess < minNum || guess > maxNum) {
    window.alert('Your guess is out of range');
  }
  else{
    attempts++;
    if (guess < answer) {
      window.alert('Too low');
    }
    else if (guess > answer) {
      window.alert('Too high');
    }
    else {
      window.alert(`Correct! It took you ${attempts} attempts and the answer was ${answer}  `);
      running = false;
    }
  }
   

}