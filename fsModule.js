import http from 'http';
import fs from 'fs';

// //Read File
// http.createServer(function (req, res) {
//   fs.readFile('demofile.txt', function(err, data) {
//     //res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// //const data = fs.readFileSync("demo.txt");
// //console.log("Message after read file");
// }).listen(8080);

// //Create File
// //appendfile
// fs.appendFile('demo.txt', 'Hello Ankitt!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// //Open file
// fs.open('mynewfile.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   //writefile
// fs.writeFile('mynewfile.txt', 'Hello Rcb Fans!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// //Update file
// //append file add the information in that created file
// fs.appendFile('demo.txt', ' This is my life.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// //write file replaces the file content
// fs.writeFile('mynewfile.txt', 'Hello Rcbians', function (err) {
//     if (err) throw err;
//     console.log('Replaced!');
//   });

// //Delete file
// fs.unlink('mynewfile.txt', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
//   });

//rename file
fs.rename('demo.txt', 'newDemo.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });
