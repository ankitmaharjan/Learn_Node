import http from 'http';
import uc from "upper-case";
http.createServer(function (req, res) {
 // res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("cricket is life"));
  res.end();
}).listen(8080);