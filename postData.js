const express=require('express');
const app=express();
const port = 4000;
const bodyParser=require('body-parser');
const logins=require("./login");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());
// function sum(a,b){
//     return (a+b)
//}

// app.post('/sum',(req,res)=>{
//     // let a=req.body.a
//     // let b=req.body.b
//     // const resu=sum(parseInt(a),parseInt(b));
//     // console.log("sum is:"+resu)
//     // res.status(201).send(`sum is=${resu}`);
//     let sum1=sum(2,3);
//     console.log(sum1);
//     //console.log(a,b)


// });
const ab={
    'username':"ankit",
    'address':"lazimpat"
}
app.post('/login',(req,res)=>{
    //const username = req.body.username;
    comnsole.log(req.params);
    logins.login(ab);


});
app.listen(port, () => {
    
    console.log(`port running at port number : ${port}`)
})