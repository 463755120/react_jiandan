const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.post('/register',function(req,res){
    const {user,pwd,phone} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:"用户名重复"})
        } 
        User.create({user,pwd,phone},function(err,doc){
            if(err){
                return res.json({code:1,msg:"后端报错"})
            } 
            return res.json({code:0})
        })
    })
})

Router.get('/list',function(req,res){
    const {type} = req.query 
    console.log(req.query,req.body)
    User.find({type},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.get('/info',function(req,res){
    return res.json({code:1})
})

module.exports =  Router