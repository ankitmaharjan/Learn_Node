
var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "ankit",
  password: "root123",
  database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM product", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });