let fs = require('fs')

fs.readFile('great.txt', 'utf-8', printer)

function printer(err, data){
    console.log(data)
}