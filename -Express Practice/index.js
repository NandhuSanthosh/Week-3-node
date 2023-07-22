const express = require('express')
const app = express()


app.get('/:id', (req, res, next)=>{
    console.log('/:id')
    if(req.params.id == 'user'){
        next();
    }
    res.send(req.params.id)
})

// app.get('/', (req, res)=>{
//     res.send(req.query.id)
// })



const userRoutes = require('./routes/user')
app.use('/user', userRoutes)

app.listen(3000, ()=>{
    console.log("The server is up on port 3000")
})