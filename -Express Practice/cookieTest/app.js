const express = require('express')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
app.get('/' , (req, res)=>{
    if(req.cookies.number){
        console.log(req.cookies.number++)
        res.cookie('number', req.cookies.number)
        res.send(""+req.cookies.number)
    }
    else{
        res.cookie('number', 1)
        res.send("First time huh")
    }
})
app.listen(3000, ()=>{console.log("Server started")})