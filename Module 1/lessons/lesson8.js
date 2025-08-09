// Functions
greet(); // Calling the function before declaration is allowed due to hoisting
// Declarative Function
function greet() {
  console.log("Hello one");
}

// Anonymous Function
var greetTwo = function () {
  console.log("Hello two");
};

greetTwo(); // Calling the function after declaration is required for anonymous functions

// Arrow Function
const greetThree = () => {
  console.log("Hello three");
};

greetThree(); // Calling the function after declaration is required for arrow functions

// Function with parameters
function greetUser(name) {
  console.log(`Hello, ${name}`);
}

greetUser("Alice"); // Output: Hello, Alice

// Function with return value
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// Importing a function from another file
import { addNumbers } from "../helpers/printHelper.js";
console.log(addNumbers(10, 20)); // Output: 30

// Import everything from a module
import * as helpers from "../helpers/printHelper.js";
console.log(helpers.addNumbers(15, 25)); // Output: 40
