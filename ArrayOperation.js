
 const fruits = [];
 fruits.push("banana", "apple", "peach");
 console.log(fruits.length); // results 3

 const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
 let fruit = fruits1.pop();
 console.log(fruit);


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs

//Concatenation
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

//filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 9);

console.log(result);
// Expected output: Array ["destruction"]

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

//Splice Operaration
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

