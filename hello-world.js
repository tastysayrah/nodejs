//console.log("HELLO WORLD");

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello Node!!!!</h1>\n');
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

const fs = require('fs');

// // Write to a file
// fs.writeFile('welcome.txt', 'Hello Node', (err) => {
//     if (err) throw err;
//     console.log('File created: welcome.txt');
// });

// // Read from a file
// fs.readFile('welcome.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

const generator = require('generate-password');

const password = generator.generate({
    length: 10,
    numbers: true
});

console.log('Generated Password:', password);
