// Function Statement (aka Function Declaration). This IS hoisted, so can call
//a() before definition and it will still work correctly
a();
function a() {
  console.log("a called");
}

// Function Expression. This IS NOT hoisted,
// so get a TypeError if call b() before defining it
var b = function () {
  console.log("b called");
};

// Anonymous Function. Cannot be called independently as a function statement. Instead,
// Used in places where functions are used as values (including function expressions)
// function (){

// }

// Named function expression
var b = function xyz() {
  console.log("xyz called");
};
// Cannot call xyz() directly, because it's only defined inside
// of function b
b();

// Difference between parameters and arguments

// First class functions

// Arrow functions
