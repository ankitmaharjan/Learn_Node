//Creating http server module
//var http = require('http');
import http from 'http';
http.createServer(function (req, res) {
  //res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
  console.log("Ankit JS Developer");
}).listen(8080);