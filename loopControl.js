//Loop control using break statement
var x = 1;
         console.log("Entering the loop ");
         
         while (x < 20) {
            if (x == 5) {
               break;   // breaks out of loop completely
            }
            x = x + 1;
            console.log( x );
         }         
         console.log("Exiting the loop! ");

//Loop control using continue statement 
var x1 = 1;
console.log("Entering the loop");
         
        while (x1 < 10) {
               x1 += 1;
               
               if (x1 == 5) {
                  continue;   // skip 5 and execute rest of the loop body
               }
               console.log( x1 );
            }         
            console.log("Exiting the loop! ");   