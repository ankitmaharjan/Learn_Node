var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "ankit",
  password: "root123",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  //var sql = "INSERT INTO product (p_ID, p_name, description, price) VALUES (100,'apple', 'Apple is sweet', 12000)";
  var sql = "INSERT INTO product (p_name, description, price) VALUES ('mango', 'Mango is sweet', 12000)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});