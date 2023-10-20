// function Hoisting 
console.log(square(5)); // 25

function square(n) {
  return n * n;
}
// not hoisted
// console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
// const square = function (n) {
//   return n * n;
// };

const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
// clourse
function A(x) {
    function B(y) {
      function C(z) {
        console.log(x + y + z);
      }
      C(3);
    }
    B(2);
  }
  A(1); // Logs 6 (which is 1 + 2 + 3)
const arr=[1,2,3,4,5]
console.log(arr.pop());  
console.log(arr);
var x=null;
console.log(x!=x);
// Arrow Function
const arrowFunc = () => {
    console.log(arr);
}
arrowFunc();