// Use debug at the console.log line to be able to see the lexical environments for functions a, c, and the global execution context.

function a() {
  let b = 10;
  function c() {
    console.log(b);
  }
  c();
}

a();
