// An expression is any valid unit of code that resolves to a value.

5 + 2         // ➝ 7
"Hi" + "!"    // ➝ "Hi!"
true && false // ➝ false
let x = 10    // Expression with assignment

// Types of Operators in JavaScript

// Arithmetic Operators

let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333
console.log(a % b); // 1
console.log(a ** b); // 1000

// Assignment Operators

let x = 5;

x += 3;  // x = x + 3 → 8
x *= 2;  // x = x * 2 → 16

// Comparison Operators

console.log(5 == "5");   // true   (loose comparison)
console.log(5 === "5");  // false  (strict comparison)
console.log(10 > 5);     // true
console.log(4 <= 2);     // false


// Logical Operators

true && false  // false
true || false  // true
!false         // true


// Ternary Operator

let age = 18;
let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // "Adult"


// typeof Operator

console.log(typeof 42);         // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof {});        // "object"


