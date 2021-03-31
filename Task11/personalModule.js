// Task 2

const http = require("http");
const os = require("os");
const utf8 = require('utf8');

const dayAndNight = require("./script.js");

const userName = os.userInfo().username;
const date = new Date();

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

    response.end(
        `<p>Date of request: ${date}</p>
               <p>${dayAndNight()}: ${userName}</p>`
    );

}).listen(5000);

console.log('Server running at http://localhost:5000/');
