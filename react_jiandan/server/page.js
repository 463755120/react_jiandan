const express = require('express')
const async = require('async');
const Router = express.Router()
const model = require('./model')
const pageShuff = model.getModel('pageShuff')
const pageCategory = model.getModel('pageCategory')
const pageClass = model.getModel('pageClass')


Router.get('/index',function(req, res){
    const asyncPageget = async function () {
        try{
            const [shuffData, categoryData,classData] = await Promise.all([pageShuff.find({}), pageCategory.find({}),pageClass.find({})]);
            return res.json({code:0,data:{shuffData,categoryData,classData}})
        } catch(err){
            console.log(err)
            return res.json({code:1,msg:"后端报错了"})
        }        
      };
    asyncPageget()
})


module.exports =  Router