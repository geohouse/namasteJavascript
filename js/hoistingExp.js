// For tests with hoisting vars and functions and browser debugging to see how the memory
// creation phase of the execution context works.

let x = 7;

// Use web browser debugger to see the memory allocations before the script starts running, and the state of the Call stack during execution (especially for
// pushing/popping the execution context for the getName function in the stack above the global execution context)

// Only the getName function defined with the function keyword and not assigned to a variable is defined in the
// memory allocation phase of the execution context (the other 2 versions are valid function calls, but are allocated to
// memory as variables with an initial value of undefined)
console.log(getName);
//console.log(getName2);
//console.log(getName3);

function getName() {
  console.log("getName");
}

let getName2 = function () {
  console.log("getName2");
  // the variable `input` gets passed as a parameter WITH a value immediately upon function invocation (i.e. during the memory creation
  // phase when `x` is still undefined, `input` = "testInput" from the argument of its call.)
  function getNameNested(input) {
    let x = 6;
    console.log("getNameNested");
  }
  // When the getNameNested function runs, because it's nested, it's on the top of the call stack, with getName2 below it and the
  // the global execution context below that (see with debugging then looking at the call stack).
  getNameNested("testInput");
};

let getName3 = () => {
  console.log("getName3");
};

getName();
getName2();
getName3();
