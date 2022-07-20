// What is a Callback function in JS?

// setTimeout(function () {
//   console.log("timer");
// }, 5000);

// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

// JS is a synchronous and single-threaded language

// Blocking the main thread

// Power of callbacks

// Deep dive into event listeners

// Closures demo with event listeners
//   Make a closure over the count variable to allow incrementing the count number
//   without needing a global count variable
function attachEventListener() {
  let count = 0;
  document.querySelector("#clickMe").addEventListener("click", function xyz() {
    console.log("Button Clicked!", ++count);
  });
}

attachEventListener();

// Scope demos with event listeners

// Garbage collection and removeEventListeners
