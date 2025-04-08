// app.js

const readline = require('readline');
const calc = require('./calculator');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log('\n--- CALCULATOR MENU ---');
  console.log('1. Addition');
  console.log('2. Subtraction');
  console.log('3. Multiplication');
  console.log('4. Division');
  console.log('5. Modulo');
  console.log('6. Exit');
  rl.question('Enter your choice: ', (choice) => handleMenu(choice.trim()));
}

function getTwoNumbers(callback) {
  rl.question('Enter first number: ', (num1) => {
    rl.question('Enter second number: ', (num2) => {
      callback(parseFloat(num1), parseFloat(num2));
    });
  });
}

function handleMenu(choice) {
  switch (choice) {
    case '1':
      getTwoNumbers((a, b) => {
        console.log(`Result: ${calc.add(a, b)}`);
        showMenu();
      });
      break;

    case '2':
      getTwoNumbers((a, b) => {
        console.log(`Result: ${calc.subtract(a, b)}`);
        showMenu();
      });
      break;

    case '3':
      getTwoNumbers((a, b) => {
        console.log(`Result: ${calc.multiply(a, b)}`);
        showMenu();
      });
      break;

    case '4':
      getTwoNumbers((a, b) => {
        console.log(`Result: ${calc.divide(a, b)}`);
        showMenu();
      });
      break;

    case '5':
      getTwoNumbers((a, b) => {
        console.log(`Result: ${calc.modulo(a, b)}`);
        showMenu();
      });
      break;

    case '6':
      console.log('Exiting Calculator...');
      rl.close();
      break;

    default:
      console.log('Invalid choice. Try again.');
      showMenu();
  }
}

// Start the calculator menu
showMenu();
