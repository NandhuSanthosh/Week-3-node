var fs = require('fs')

var data = ''
var ds = fs.createReadStream('first.txt')
ds.setEncoding('UTF8')

ds.on('data', function(chunk) {  
    console.log("on data =>", chunk)
   data += chunk;  
});  

ds.on('end', function(){
    console.log(data)
})

ds.on('error', function(err){
    console.log(err.stack)
})

console.log("program ended")
