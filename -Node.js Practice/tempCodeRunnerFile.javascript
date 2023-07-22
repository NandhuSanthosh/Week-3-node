let fs = require('fs')

let readStream = fs.createReadStream('./output2.txt')

function reader(){
    let n = 0;
    let str = ''
    readStream.on('data', (chunk)=>{
        console.log(n++)    
        str += chunk.toString();
    })
    readStream.on('end', ()=>{
        console.log(str)
        console.log("this sucks")
        return "what is this"
    })
    return "fuck you"
}

let a = reader();
console.log(a)