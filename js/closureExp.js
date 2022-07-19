// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function makeAdder(x) {
//   console.log("In adder");
//   console.log(x);
//   return function (y) {
//     return x + y;
//   };
// }

// // A closure with x=5 in the lexical environment
// const add5 = makeAdder(5);
// console.log(add5);
// // A closure with x=10 in the lexical environment
// const add10 = makeAdder(10);
// console.log(add10);

// console.log(add5(2));
// console.log(add10(2));

// Using var in the for loop sets the i var in the function scope,
// which is the lexical environment for the setTimeout() function,
// so is part of its closure. When each setTimeout runs (with its delay)
// the for loop has already finished running, so i = 6.
// The variable i in the closure points to the reference of i (not a snapshot of its
// state), and so it prints 6 every time it's called.
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// using let in the for loop fixes this because it has a block scope and therefore
// the reference to the value is different for each iteration of the for loop
// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// x();

// This is how to fix without using let. Need to create a
// separate closure to encapsulate each iteration of var i,
// and then provide THAT i (through the closure) to the setTimeout
// function. Note - although there is a variable also named i in the
// function scope, the setTimeout function climbs up the lexical scope
// to find the first lexical context where i is present (which is in the closure
// we built for it), so it stops there and doesn't look for the value of
// i from the function.
function x() {
  for (var i = 1; i <= 5; i++) {
    function makeClosure(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    makeClosure(i);
  }
}
x();
