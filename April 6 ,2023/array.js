
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

//Sorting Array
const months1 = ['March', 'Jan', 'Feb', 'Dec'];
months1.sort();
console.log(months1);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array4 = [1, 30, 4, 21, 100000];
array4.sort();
console.log(array4);
// Expected output: Array [1, 100000, 21, 30, 4]

//Array to String
const array6 = [1, 2, 'a', '1a'];

console.log(array6.toString());
// Expected output: "1,2,a,1a"

//Array Reverse
const array7 = ['one', 'two', 'three'];
console.log('array1:', array7);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array7.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

//Array Find
const array8 = [5, 12, 8, 130, 44];

const found = array8.find(element => element > 10);

console.log(found);
// Expected output: 12





