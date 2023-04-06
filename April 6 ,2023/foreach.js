const fruits = ["Mango", "papaya", "apple", "banana"];
const data = fruits.forEach(myData);
function myData(){
    console.log("There are fruits");
}


//Numeric Array FOR EACH
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    console.log(txt += value);
}

//Foreach in arrow function using async await
const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);

