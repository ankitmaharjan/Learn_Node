let text1 = "A";
let text2 = "B";
if(text1<text2){
    console.log("A is lesser than B");
}
else{
    console.log("A is greater than B");
}

//Bitwise Operators AND, OR, NOT, XOR
let x = 5 & 1;
x&=2;
let y = 5 | 1;
console.log(x);
console.log(y);
//NOT
const a = 5;     
const b = -3;    
console.log(~a); 
console.log(~b); 
//XOR
const a1 = 5;      
const b1 = 3;      
console.log(a1 ^ b1); 

//Logical Operator like AND , OR, NOT
const a2 = 3;
const b2 = 2;
const c2 = -3;
console.log(a2 > 0 && b2 < 0);
console.log(b2 >0 || c2>0);
console.log(!(a2 > 0 || b2 > 0));
