const span = document.getElementById('span')
const button = document.getElementById('button')
// console.log(span);
// console.log(button);
// function counter() {
//     let count = 0
//   function add() {
//    span.textContent = count++
//    console.log( count++);
// }
// return add
// }
// const count = counter()
function createCounter() {
  let count = 0; // Variable declared inside the closure function

  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }

  return increment;
}

// Usage example:
const counter = createCounter();

// counter(); // Output: Current count: 1
// counter(); // Output: Current count: 2
// counter(); // Output: Current count: 3

button.addEventListener('click', counter)
