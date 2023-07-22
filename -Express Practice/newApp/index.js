const express = require('express')
const app = express();

app.get('/', (req, res, next)=>{
    res.send("Home page")
    // req.url = '/user'
    console.log("every thing good")
    next();
})

app.use( '/user', (req, res, next)=>{
    console.log("This is working")
    res.send("This is awsome")
    // next()
})

const userRoutes = require('./routes/users')

app.use('/user', userRoutes)

app.listen(3000, ()=>{
    console.log("Server is up on port : 3000")
})