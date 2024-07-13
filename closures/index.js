function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(count);
  }
  function getCount() {
    return count;
  }
    return {increment,getCount};
}
const counter1 = createCounter();
counter1.increment();

// createCounter().increment();

console.log(`The count is ${counter1.getCount()}`);