import http from 'http';
import url from 'url';
// import assert from 'assert';
// assert(50 > 70, "My message goes here");

//URL module

// var adr = 'http://localhost:8080/default.html?year=2017&month=february';
// var q = url.parse(adr, true);
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var q = url.parse(req.url, true);
  res.write(q.href);
  res.end();
}).listen(8080);
