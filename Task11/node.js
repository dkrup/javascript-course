// Task 1

const http = require("http");
const os = require("os");
const path = require("path");

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    const osWorkTime = (os.uptime() / 60).toFixed(2);

    response.end(
        '<h1>System information\n</h1>' +
        `<p>Current user name: ${os.userInfo().username}</p>
        <p>OS type: ${os.type()}</p>
        <p>System work time: ${osWorkTime} minutes</p>
        <p>Current work directory: ${process.cwd()}</p>
        <p>Server file name: ${path.basename(__filename)}</p>`
    );

}).listen(5000);

console.log('Server running at http://localhost:5000/');
