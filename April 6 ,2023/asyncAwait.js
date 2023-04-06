// console.log("message 1");
// console.log("message 2");

// setTimeout(() => {
//     console.log("message 3");
// }, 2000);

// console.log("message 4");
async function a(){
    let mypromise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("done!!!",5000);
        });
       
    });
    let result = await mypromise;
    console.log(result);
    }
  
    function b(){
            console.log("Hello");
    }
    a();
    b();

