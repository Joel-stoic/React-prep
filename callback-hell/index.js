function greetUser(name, callback) {
  console.log(`Hello, ${name}!`);
  callback(); // call the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greetUser("Alice", sayGoodbye);
