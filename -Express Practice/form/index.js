const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const session = require('express-session')


app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(cookieParser());

app.use(session({
    secret: "Shh, its a secret!"
}));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});

app.use(express.urlencoded({extended: true}))


app.use((req, res, next)=>{
    console.log("session = ",req.session)
    next()
})

app.get('/', (req, res)=>{
    if(req.session.page_view){
        console.log(req.session.page_view++)
    }
    else{
        req.session.page_view = 1
        console.log("first time huh ")
    }
    res.render('index')
})

app.post('/', (req, res)=>{

    console.log(req.body.name)
    res.cookie('fullName', req.body.name, {expire: 10000 + Date.now()})
    res.clearCookie('name')
    res.redirect('/home')

})
app.get('/home', (req, res)=>{
    res.render('home')
})
app.listen(4000, ()=> {console.log("server up 3000")})