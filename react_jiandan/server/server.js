const express = require('express')
const app = express()
const server = require('http').Server(app)
const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
server.listen(9093,function(){
	console.log('Node app start at port 9093')
})