// const a = "Ankit";
// for(i=0; i<10; i++){
//     console.log(a);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.pop();
// console.log(fruit);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let b = fruits.push("Kiwi");
// console.log(fruits);
const express = require("express");
const bodyParser= require('body-parser');
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req,res)=>{
    res.send("Hello World");    
})
// app.post("/post",(req,res)=>{
//     const a = Number(req.body.a);
//     const b = Number(req.body.b);
//     const result = mul(parseInt(a),parseInt(b));
//     console.log("Result is"+result);
//     res.status(201).send("Multiply Demo");

// })
app.post("/add", function(req, res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
      
    var result = num1 + num2 ;
      
    res.send("Addition - " + result);
  });
app.listen(port,()=>{
    console.log('Server running on 5000');
})
