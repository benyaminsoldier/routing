const express = require('express')
const router = express.Router()
const homePAge = (req,res,next)=>{
    
    console.log('Home Page')
    res.send('Home Page')
    //next()
}
const login = (req,res,next)=>{
    console.log('Login Page')
    res.send('Login Page')
    next()
}
const register = (req,res,next)=>{
    console.log('Register Page')
    res.send('Register Page')
}
const error = (req,res,next)=>{   
    console.log('Error 404')
    res.status(404).send('404 - Not Found'); 
}


router.use('/login', login)
router.use('/register', register)
router.use('/', homePAge)
router.use('/*',error)




module.exports = router