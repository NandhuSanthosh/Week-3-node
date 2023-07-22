var fs = require('fs')

const data = 'this is the new and updated data'

const writeStream = fs.createWriteStream('output.txt')
writeStream.write(data, "UTF8")

writeStream.end()

writeStream.on('finish', function(){
    console.log("The file is sucessfully written")
})

writeStream.on('error', function(err){
    console.log(err.stack)
})

console.log("program ended")