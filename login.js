
//const httpStatus = require("http-status");


((loginform)=>{
    loginform.sum=function(a,b){
        setTimeout(()=>{
            console.log("hello");
        },5000);
        return parseInt(a)+parseInt(b);
    }

loginform.login=async(req,res)=>{
    const isvalid=await loginform.loginvalidation(request);

    if(isvalid){
       res.send("right login")
    }
    else{
        res.send("wrong login")
    }
}
loginform.loginvalidation=(request)=>{
    if(request.username="ankit"){
        return true
    }
    return false
}
})(module.exports);