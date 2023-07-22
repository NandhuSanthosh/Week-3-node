let http = require('http')
let fs = require('fs/promises')

const server = http.createServer( (req, res)=>{
    let obj = {
        'name' : {
            'first' : 'Nandhu',
            'second' : 'Santhosh'
        },
        'age' : 22,
        'address' : {
            'house number' : 808,
            'street' : "Seethathodu"
        },
        'email' : 'nandhusanthosh@gmail.com'
    }

    res.writeHead(200, {'Content-type': 'text/html'})
    switch(req.url){
        case "/products":
            fs.readFile('products.html', 'utf-8')
            .then( (data)=>{
                res.end(data)
            })
            .catch(err =>{
                res.end(err)            
            })
            break;

        case "/about":
            fs.readFile('index.html', 'utf-8')
            .then( (data)=>{
                data = data.replace('{{name}}', obj.name.first)
                data = data.replace('{{email}}', obj.email)
                res.end(data)
            })
            break;
            
        default : 
            res.end("Page not found")
    }
    
    
}).listen(3000, ()=> {
    console.log('server up on port 3000');
})

