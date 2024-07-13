
//spread
let number = [1,2,3,4];
console.log(...number); // 1 2 3 4
console.log(number); // [1,2,3,4]
console.log(Math.max(...number)); // 4
console.log(Math.min(...number)); // 1

//rest


function sum(...args) {
    let sum = 0;
    for(let i of args) {
        sum += i;
    }
    return sum;
}
console.log(sum(1,2,3,4,5)); // 15