// //Normal async without using async
// console.log('First');

// // Set timeout for 2 seconds
// setTimeout(() => console.log('Second'), 2000);

// console.log('Third'); //it will execute, doesn't wait for setTimeout() to execute

const fs = require("fs");

// Making asynchronous call to read the file
fs.readFile("./file.txt", "utf8", (error, data) => {
  if (error) return console.error(error); // if error occurred
  console.log(data); // showing the data
});