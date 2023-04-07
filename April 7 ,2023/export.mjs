import {add,subtract} from './export1.mjs';
function square(num){
    const result = num * num;
    return result;
}

// //module.exports = {square}; //this is Es5 version, creates error i.e module not found
export {add,subtract,square};

// export let myValue = 1;
// setTimeout(() => {
//   myValue = 2;
// }, 500);

