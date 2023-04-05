//Sorting Array
const months1 = ['March', 'Jan', 'Feb', 'Dec'];
months1.sort();
console.log(months1);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array4 = [1, 30, 4, 21, 100000];
array4.sort();
console.log(array4);
// Expected output: Array [1, 100000, 21, 30, 4]

//Mapping Array
const array5 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array5.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

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
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12