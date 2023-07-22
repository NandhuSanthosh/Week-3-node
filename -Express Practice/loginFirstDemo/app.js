const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const session = require('express-session')


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    secret: "Thisismysecret"
}))


const User = [];

app.get('/signup', (req, res)=>{
    if(req.session.name){
        res.redirect('/')
        return;
    }
    console.log(req.session)
    res.render('index')
})

app.post('/signup', (req, res)=>{
    console.log(req.body)
        req.session.name = req.body.name
        req.session.email = req.body.email
        User.push({
            name: req.body.name,
            email: req.body.email
        })
        console.log(User)
    res.redirect('/')
})

app.get('/', (req, res)=>{
    if(!req.session.name && !req.session.email){
        res.redirect('/login')
    }
    else{
        res.send("You are logged in sucessfully")
    }
})

app.get('/login', (req, res)=>{
    if(req.session.name && req.session.email){
        res.redirect('/')
    }
    res.send('login in page')
})
app.listen(3000, ()=>{ console.log("server up")})