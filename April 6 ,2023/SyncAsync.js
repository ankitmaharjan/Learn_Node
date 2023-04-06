
const data1 = () => {
    console.log("Second one");
}

const data2 = ()=>{
    setTimeout( ()=>{
        console.log("Hello world");
    },3000)
}
const data = ()=> {
    console.log("First one");
    data2();
    data1();
    
    console.log("Third one");
}
data2();
data();