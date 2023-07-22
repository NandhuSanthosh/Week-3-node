const event = require('events')

let a = new event();

a.on('msg', (data)=>{
    console.log("wtf", data)
})

a.emit('msg', 'you moreon')