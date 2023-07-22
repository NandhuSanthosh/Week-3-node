let fs = require('fs/promises')

// let a = fs.readFile('./great.txt', 'utf-8')
// a.then( (data)=> {
//     console.log(data)
// })

// a.catch( (err)=>{
//     console.log(err)
// })

async function fileReader(){
    try{
        let a = await fs.readFile('./great.txt', 'utf-8')
        console.log(a)
    }
    catch(err){
        console.log(err.stack)
    }
}

fileReader();
