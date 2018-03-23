const express = require('express')
const bodyParser = require("body-parser")
const cookieParser=require("cookie-parser")
const app = express()
const server = require('http').Server(app)
const userRouter = require("./user")

const pageRouter = require('./page')

app.use(cookieParser())
app.use(bodyParser())
app.use('/user',userRouter)
app.use('/page',pageRouter)
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})