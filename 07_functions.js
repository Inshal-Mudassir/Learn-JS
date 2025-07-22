// 1. Function Basics

// What is a Function?

// A function is a block of code that performs a specific task.
// You write it once, and you can reuse it as many times as you want.

// Why Use Functions?

// Avoid repeating code (DRY: Don’t Repeat Yourself)
// Improve readability and maintainability
// Divide big problems into smaller reusable parts
// Make testing and debugging easier

// Function Syntax

// Declare A Function
function greet() {
  console.log("Hello, Inshal!");
}

// Calling a Function
greet(); // Output: Hello, Inshal!

// 2. FunctionParametersAndArguments

// What Are Parameters & Arguments?

// Parameters are placeholders you define in a function — like variables.
// Arguments are actual values you pass when calling the function.

function greetUser(name) {
  console.log(`Hello, ${name}! Welcome back`);
}

greetUser("Inshal"); // "Inshal" is the argument

// Function Expression

// A function expression is when you assign a function to a variable.

const greet = function() {
  console.log("Hello from a function expression!");
};

greet(); // Output: Hello from a function expression!

// Named vs Anonymous Functions

// Named Function

// A named function has an identifier after the function keyword.

function sayHello() {
  console.log("Hello!");
}
sayHello(); // Output: Hello!

// Anonymous Function

// An anonymous function has no name. It’s often used in function expressions or callbacks.

const greet = function() {
  console.log("Hi!");
};
greet(); // Output: Hi!

// The return Statement in JavaScript

// The return statement sends a value back from a function to wherever it was called. It ends the function's execution.

function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);  // 8

// Default Parameters in JavaScript

// Default parameters allow you to set a fallback value for a parameter when no argument is provided.

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet("Inshal");  // Hello, Inshal!
greet();          // Hello, Guest!




