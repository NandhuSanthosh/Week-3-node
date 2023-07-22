const express = require('express')

const app = express();


app.all('/hello', (req, res)=>{
    console.log(req.url)
    res.send("hello World")
})


app.listen(3000, ()=>{console.log("Port: 3000")})