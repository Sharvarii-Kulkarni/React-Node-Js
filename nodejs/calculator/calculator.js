// calculator.js

module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
      if (b === 0) {
        return 'Cannot divide by zero!';
      }
      return a / b;
    },
    modulo: (a, b) => a % b
  };
  