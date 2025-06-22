// cli-calculator.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter two numbers (e.g., 4 5): ", input => {
  const [a, b] = input.split(" ").map(Number);
  console.log(`Sum: ${a + b}`);
  rl.close();
});
