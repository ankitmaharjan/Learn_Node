//Computed property names
const bar = {
    foo0: function () {
      return 0;
    },
    foo1: function() {
      return 1;
    },
    ["foo" + 2]() {
      return 2;
    },
  };
  
  console.log(bar.foo0()); // 0
  console.log(bar.foo1()); // 1
  console.log(bar.foo2()); // 2

  //Shorthand regular functions
  let multiply = function (firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
console.log(multiply(3, 5)) // 15 is seen in the console.

//Shorthand arrow function
let multiply1 = (firstNumber, secondNumber) => firstNumber * secondNumber;
multiply1(4, 5) // 20

//Shorthand class objects 
class Person {
    constructor(name){
        this.name = name;
    }
    sayName() {
        return `My name is ${this.name}`;
    }
}

const person = new Person('Ankit');
person.sayName('Ankit'); // Ankit