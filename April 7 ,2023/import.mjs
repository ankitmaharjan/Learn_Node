// import fs from "fs";

// const value = fs.readFileSync("import.mjs","utf-8");
// console.log(value);

import * as myModule from "./export.mjs";

console.log(myModule.add(2,7));

// import { myValue } from "./export.mjs";
// import * as myModule from "./export.mjs";

// console.log(myValue); // 1
// console.log(myModule.myValue); // 1
// setTimeout(() => {
//   console.log(myValue); // 2; my-module has updated its value
//   console.log(myModule.myValue); // 2
// }, 1000);
// console.log("hello world");

// import square from "./export.mjs";
// console.log(square);

