const http = require('http');
const staticServer = require('node-static');
const file = new staticServer.Server('.', {
  cache: 0,
});

function accept(request, response) {
  if (request.url === '/books.json') {
    setTimeout(() => {
      file.serve(request, response);
    }, 2000);
  } else {
    file.serve(request, response);
  }
}

http.createServer(accept).listen(8080);
console.log("Server running at http://localhost:8080");
