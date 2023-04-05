function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }
  const value = multiply(5,7);
  console.log(value);

 //Function Hoisting
console.log(myFunction(5));

function myFunction(x) {
  return x * x;
}

//Self Invoking function
(function () {
    //console.log(x); //causes error, should be declared after initialization, limited scope within function only
    let x = "Hello!!";  // invoke itself
    console.log(x);
  })();
  
  //Invoking a Function with a Function Constructor
  // This is a function constructor:
function myFunction1(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }
  // This creates a new object
  const myObj = new myFunction1("John", "Doe");
   // This will return "John"
  console.log(myObj.firstName);
