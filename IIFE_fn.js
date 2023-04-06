//https://github.com/nisipshrestha
//anonymous IIFEs
const greeting = "Hello world";

(function myGreeting() {
    console.log(greeting);
})();

//Using IIFEs with closures
const friendlyFunction = (function () {
    let greetCount = 0;
    return function () {
        console.log(`Hello ${greetCount}x`);
        return greetCount++;
    }
})();
friendlyFunction();
friendlyFunction();
// friendlyFunction();

// IIFE with function.
const someFn = (function (param1) {
    return (param1);
})(123);
console.log(someFn);

// IIFE with arrow function.
const someAnotherFn = ((param) => {
    return param;
})("some param");
console.log(someAnotherFn);

// IIFE as an annonymous function.
const value = (()=>{
    const {result} = require('./utilityFn');
    console.log(result);

})();
