const express = require('express')
const app = express()
const router = require("./router")

app.use(router)


app.listen(7000,()=>{console.log('Server running...')})