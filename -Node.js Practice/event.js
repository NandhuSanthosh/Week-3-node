const events = require('events')

let emitter = new events()

emitter.on("happened", ()=>{
    console.log("what the fuck is going on?")
})
emitter.on("happened", ()=>{
    console.log("second event listner")
})


emitter.emit('happened')