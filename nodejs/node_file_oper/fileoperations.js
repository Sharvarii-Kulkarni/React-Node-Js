const fs = require('fs');
const readline = require('readline');

// Setup for input/output from terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to display the menu
function showMenu() {
  console.log('\n--- FILE OPERATIONS MENU ---');
  console.log('1. Write to Sample.txt');
  console.log('2. Read from Sample.txt');
  console.log('3. Delete Sample.txt');
  console.log('4. Exit');
  rl.question('Enter your choice: ', handleMenu);
}

// Function to handle menu choices
function handleMenu(choice) {
  switch (choice) {
    case '1':
      rl.question('Enter content to write to Sample.txt: ', (content) => {
        fs.writeFile('Sample.txt', content, (err) => {
          if (err) {
            console.error('Error writing to file:', err);
          } else {
            console.log('File written successfully!');
            console.log('Written Content:');
            console.log(content);
          }
          showMenu();
        });
      });
      break;

    case '2':
      fs.readFile('Sample.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file (maybe it does not exist):', err.message);
        } else {
          console.log('File Content:');
          console.log(data);
        }
        showMenu();
      });
      break;

    case '3':
      fs.unlink('Sample.txt', (err) => {
        if (err) {
          console.error('Error deleting file (maybe it does not exist):', err.message);
        } else {
          console.log('🗑️ File deleted successfully.');
        }
        showMenu();
      });
      break;

    case '4':
      console.log('Exiting...');
      rl.close();
      break;

    default:
      console.log('Invalid choice. Please try again.');
      showMenu();
      break;
  }
}

// Start the menu
showMenu();
