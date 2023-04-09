const mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "ankit",
  password: "root123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE product (p_ID int auto_increment, p_name VARCHAR(255), description VARCHAR(255), price int, PRIMARY KEY(p_ID), check(price>=10000));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});