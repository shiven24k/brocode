function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = []; //store the numbers
    const images = []; //store the images

    for(let i = 0; i < numOfDice; i++){
        let value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="src/dice${value}.svg "alt="Dice ${value}">`);
    }
    console.log(values);

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');


}    