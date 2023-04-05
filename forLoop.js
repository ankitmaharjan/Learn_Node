//Normal FOR
for (let i = 0; i < 5; i++) {
    console.log("Ankit is JS developer")
  }

  const object = { a: 1, b: 2, c: 3 };

  //FOR IN
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
 console.log(text += person[x]);
}

//Array FOR EACH
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    console.log(txt += value);
}