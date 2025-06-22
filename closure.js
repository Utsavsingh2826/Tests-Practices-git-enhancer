// closures.js

function outer() {
  const name = "Utsav";
  function inner() {
    console.log("Hello from inner:", name);
  }
  return inner;
}

const greet = outer();
greet(); // Hello from inner: Utsav
