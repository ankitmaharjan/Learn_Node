//let variable
/*
Variables defined with let can not be redeclared.

Variables defined with let must be declared before use.

Variables defined with let have block scope. Limted scope
*/
let myVariable = 10;
myVariable = 14; 
console.log(myVariable); //results 14

//COnstant variable
// const myVariable2 = "Hari";
// myVariable2 ="Shyam";
// console.log(myVariable2); //  results error because of const making value constant

//Var 
var myVariable3 = true;
myVariable3 = false;
console.log(myVariable3);

//passing Array in variable 
let myVariable4 = [1,'Bob','Steve',10];
console.log(myVariable4);

//Object passing into variable
let myVariable5 = document.querySelector('h1');