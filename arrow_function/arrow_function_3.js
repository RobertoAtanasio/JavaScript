const sum = (a, b, c) => a + b + c;
const subtract = (a, b) => a - b;
const calculator = (fn) => (a, b, c) => fn(a, b, c);
console.log(calculator(sum)(2, 2, 4));
console.log(calculator(subtract)(2, 2));
