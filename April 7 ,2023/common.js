//const fs = require("fs");
import fs from "fs";

const value = fs.readFileSync("common.js","utf-8");
console.log(value);