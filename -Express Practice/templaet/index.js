const express = require('express')

const app = express();

// register view engine
app.set('view engine', 'ejs')
app.set('views', 'myViews')

app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/about', (req, res)=>{
    res.render('about')
})

app.use((req, res)=>{
    res.render('404Error.ejs')
})

app.listen(3000)

