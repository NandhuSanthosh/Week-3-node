var fs = require('fs')

var readStream = fs.createReadStream('output.txt');
var writeStream = fs.createWriteStream('output2.txt')

readStream.pipe(writeStream)
console.log("program ended")