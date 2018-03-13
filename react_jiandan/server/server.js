const express = require('express')
const app = express()
const server = require('http').Server(app)
const userRouter = require("./user")

app.use('/user',userRouter)
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})