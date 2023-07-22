let fs = require('fs')

let a = fs.readFileSync('first.txt', 'utf-8')
console.log(a)

let b = fs.readFile('first.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err.stack)
    }
    else{
        console.log(data)
    }
})


let c = fs.writeFileSync('./great.txt', 'what the fuck is wrong with you')
fs.writeFileSync('./great.txt', ' I\'m sorry for what i Just said you son of a bitch', {flag: 'a'})
console.log(c)