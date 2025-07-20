// Hoisting 

console.log(a);
console.log(b);
console.log(c);
var a = 1;
let b = 2;
const c = 3;

function testHoist() {
  console.log(a);    
  var a = 10;

  console.log(b); 
  let b = 20;

  sayHello();        
  sayHi();        
  function sayHello() {
    console.log("Hello!");
  }

  var sayHi = function() {
    console.log("Hi!");
  };
}
testHoist();