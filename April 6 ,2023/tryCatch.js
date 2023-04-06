//Simple Demo of try catch

try {
    alertsad("Hello world")
} catch (error) {
    console.log("Exception found");
}

//Exception Handling for numeric value 
function check(n) {
    if (!(n >= -500 && n <= 500)) {
      throw new RangeError("The argument must be between -500 and 500.");
    }
  }
  
  try {
    check(2000);
  } catch (error) {
    if (error instanceof RangeError) {
      // Handle the error
    }
  }

//   //Internal error due to too much recursion
//   function loop(x) {
//     if (x >= 1000000000000)
//      return;
  
//     // do stuff
//     loop(x + 1);
//   }
//   loop(0);
//   // InternalError: too much recursion

  //Reference error
  try{
    console.log(a);
  }catch(error){
    console.log("Reference Exception caught");
  }