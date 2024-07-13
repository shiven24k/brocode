const fruits = [ { name: 'apple', color: 'red' ,calories: 100},
                 { name: 'banana', color: 'yellow' , calories: 150}, 
                 { name: 'grape', color: 'purple' , calories:90 } ];
console.log(fruits[2].calories);

// fruits.push({name: 'orange', color: 'orange', calories: 80});

// console.log(fruits);
// fruits.pop(); //removes the last element
// console.log(fruits);
// fruits.shift(); //removes the first element
// console.log(fruits);
// fruits.unshift({name: 'orange', color: 'orange', calories: 80}); //adds the element at the start
// console.log(fruits);
// fruits.splice(1,1); //removes the element at the index 1
// console.log(fruits);
// fruits.forEach(fruit => console.log(fruit.name));

// //------------------map-------------------
// const fruitNames = fruits.map(fruit => fruit.name);
// console.log(fruitNames);
// //------------------filter-------------------
// const redFruits = fruits.filter(fruit => fruit.color === 'red');
// console.log(redFruits);
// //------------------find-------------------
// const yellowFruit = fruits.find(fruit => fruit.color === 'yellow');
// console.log(yellowFruit);
//------------------reduce-------------------


const maxFruit = fruits.reduce((max, fruit) => 
                              fruit.calories > max.calories ?
                              fruit : max);
console.log(maxFruit);


const date1 = new Date("2021-01-31");
const date2 = new Date("2021-01-30");
if(date2 > date1){
    console.log("Date2 is greater");
}else{
    console.log("Date1 is greater");
}