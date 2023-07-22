const express = require('express')
const routes = express.Router()

routes.get('/', (req, res)=>{
    res.send("This is the user list")
})

routes.get('/new-user', (req, res)=>{
    res.send("This is the new user form")
})

module.exports = routes