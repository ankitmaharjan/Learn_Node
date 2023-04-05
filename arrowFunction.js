//finding the length of array using arrow function
const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // Expected output: Array [8, 6, 7, 9]

// using arrow functions
let greet = () => console.log('Hello');
greet(); // display Hello
let meet = x =>{ // passing one paramater/argument
    console.log(x);
}
meet("Hii");

let a = mul=(x, y) =>console.log(x * y); //multiple paramater
a(4,5); // or mul(4,5);

const x = {
  name: "Ankit",
  address: "Lazimpat",
  role: "Js Developer",
  show:  ()=>{
    console.log(`Hi! I'm ${this.name}.`);
  //results undefined in arrow function always because name property is  not defined on global object of window 
  }

  };
  console.log(x.show());
console.log(x.name,x.role);

//Arrow Function as an Expression
let age = 5;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome(); //display baby , object or  variable ma function pass garesi call garne


