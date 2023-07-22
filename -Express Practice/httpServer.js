const http  = require('http')

http.createServer( (req, res)=>{
    if(req.url === '/what')
    res.end('nothing')
    else
    res.end(req.url)
})
.listen(8000,()=>{ console.log("server is up on 4000")})