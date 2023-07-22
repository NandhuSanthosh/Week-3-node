const express = require('express')
const router = express.Router()

router.use( (req, res, next)=>{
    console.log("no way")
    console.log(req.url)
    next();
})

router.get('/', (req, res)=>{
    console.log("no way")
    res.send("User list page")
})
router.get('/new-user', (req, res)=>{
    res.send("New user page")
})
router.get('/:id', (req, res)=>{
    res.send("(user data: " + req.params.id + ')')
})


module.exports = router

