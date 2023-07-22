const event = require('node:events')
const eventEmitter = new event()


eventEmitter.on("order-placed", ()=>{
    console.log("What the fk is wrong ")
})
eventEmitter.emit('order-placed')