let mypromise = new Promise((resolve, reject)=>{
    var i = 1+1;
    if(i==3){
        resolve(" success");
    }
    else{
        reject(" Failed");
    }
})
mypromise.then((message)=>{
    console.log("This is in catch"+message);
}).catch((message)=>{
    console.log("This is in catch"+message);
})