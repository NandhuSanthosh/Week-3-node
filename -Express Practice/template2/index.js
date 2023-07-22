const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use( '/static', express.static('public'))
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=>{
    res.render('index', {heading: "Hellow Fellas", titl: "homepage"})
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'about'})
})

app.get('/create-blog', (req, res)=>{
    res.render('create', {title: 'create-blog'})
})

app.get('/services', (req, res)=>{
    res.render('services', {services, title: 'services'})
})

app.all('*',  (req, res)=>{
    res.render('404Error', {title: "page not found"})
})

app.listen(3000, ()=>{
    console.log("Server up on port 3000")
})


const services = [
    // {title: "FrontEnd", description: "For the past 3 years I done simple to comples front end."},
    // {title: "BackEnd", description: "I am so passinate to create fast and reliable backend."},
    // {title: "Full Stack", description: "I am capable of creating and hosting a full website on my own."}
]