//Slicing operation
const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals1.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
