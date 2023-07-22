let fs = require('fs')

let readStream = fs.createReadStream('./great.txt', 'utf-8')
let writeAbleStream = fs.createWriteStream('./newFile.txt')

readStream.on('data', (data)=>{
    console.log("what")
    writeAbleStream.write(data)
})

console.log("this is it")