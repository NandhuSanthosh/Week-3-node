const http = require('node:http')

http.createServer( (req, res)=>{
    if(req.url == '/')
    res.end("hell")
    if(req.url == '/hehe'){
        res.write("this is ")
        res.end("what ever")
    }
}).listen(3000, ()=>{console.log("server up")})e