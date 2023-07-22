const http  = require('http')

http.createServer( (req, res)=>{
    res.end('Hi')
})
.listen(4000, "server is up on 4000")