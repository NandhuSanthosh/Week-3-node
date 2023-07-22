let http = require("http");

http.createServer( function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World')
}).listen(8081)

console.log("Server runs in localhost://127.0.0.1:8081/")

// console.log(http)
