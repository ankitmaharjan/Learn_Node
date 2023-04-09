
var mysql2 = require('mysql2');

var con = mysql2.createConnection({
  host: "localhost",
  user: "ankit",
  password: "root123",
  database: "mydb"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE customerID = '100'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records deleted: " + result.affectedRows);
    });
  });