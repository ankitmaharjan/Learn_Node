const mysql2 = require('mysql2');

let con = mysql2.createConnection({
  host: "localhost",
  //host: "127.0.0.1",
  user: "ankit",
  password: "root123",

 
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE wer", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});