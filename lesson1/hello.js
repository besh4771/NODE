var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world\n');
}).listen(8124);

console.log('server running at http://127.0.0.1:8124/');

