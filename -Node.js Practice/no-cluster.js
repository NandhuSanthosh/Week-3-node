const http = require('http')

http.createServer( (req, res)=>{
    console.log(req.url)
    if(req.url == '/'){
        res.end('Fast page')
    }
    else{
        let a = 0;
        for(let i = 0; i<4000000000; i++){
                a++;
        }
        res.end('Slow page' )
    }
})
.listen(3000 , ()=>{
    console.log("server is up on port 3000")
})