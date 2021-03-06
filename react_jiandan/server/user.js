const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const utils = require('utility')
const _filter = {'pwd':0,'__v':0}

Router.post('/register',function(req,res){
    const {user,pwd,phone} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:"用户名重复"})
        } 
        const userModel = new User ({user,phone,pwd:md5Pwd(pwd)})
        userModel.save(function(err,doc){
            if(err){
                return res.json({code:1,msg:"后端报错"})
            } 
            const {user, phone, _id} = doc
			res.cookie('userid', _id)
			return res.json({code:0,data:{user, phone, _id}})
        })
        
    })
})
Router.post('/login',function(req,res){
    const {user,pwd} = req.body
    User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
        if(!doc){
            return res.json({code:1,msg:"用户名或者密码错误"})
        } 
        res.cookie('userid',doc._id)
        return res.json({code:0,data:doc})
    })
})

Router.get('/list',function(req,res){
    const {phone} = req.query 
    console.log(req.query,req.body)
    User.find({phone},function(err,doc){
        return res.json({code:0,data:doc})
    })
})
Router.get('/info',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    User.findOne({_id:userid},function(err,doc){
        if(err){
            return res.json({code:1,msg:"后端报错了"})
           }
        if(doc){
        return res.json({code:0,data:doc}) 
        } 
    })
   
})
Router.post('/update',function(req,res){
    const {userid} = req.cookies
    if(!userid){
        return res.json({code:1})
    }
    const body = req.body
    User.findByIdAndUpdate(userid,body,function(err,doc){
        if(err){
            return res.json({code:1})
        } else{
            const data = Object.assign({},{
                user:doc.user,
                phone:doc.phone
            },body)
            return res.json({code:0,data})
        }
    })
})
function md5Pwd(pwd){
    const salt = "wangzhigangLOVErourou1314////****///"
    return utils.md5(utils.md5(pwd+salt))
}

module.exports =  Router