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
    var sql = "ALTER TABLE customers ADD COLUMN email INT unique ";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table altered");
    });
  });
  