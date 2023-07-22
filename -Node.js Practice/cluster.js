const cluster = require('node:cluster')
const http = require('http')

if(cluster.isMaster){
    console.log(`Master process ${process.pid} is running`)
    cluster.fork();
    cluster.fork();
}
else{
    console.log(`Worker process ${process.pid} is running`)

    let server = http.createServer( (req, res)=>{
        // console.log(req.url)
        if(req.url === '/'){
            console.log(process.pid, 'fast page')
            res.end('Fast page')
        }
        else if(req.url === '/slow-page'){
            console.log(process.pid, 'slow page')
            setTimeout(() => {
                res.end("heavy work completed")
            }, 5000);
        }
    })
    
    server.listen(3000 , ()=>{
        console.log("server is up on port 3000")
    })
}