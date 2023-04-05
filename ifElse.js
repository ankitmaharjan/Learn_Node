//if else condition
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
  console.log(greeting);
} else if (time < 20) {
  greeting = "Good day";
  console.log(greeting);
} else {
  greeting = "Good evening";
  console.log(greeting);
}

function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));
