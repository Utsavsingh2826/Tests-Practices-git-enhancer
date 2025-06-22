// array-methods.js

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
console.log("Doubled:", doubled);
console.log("Evens:", evens);
