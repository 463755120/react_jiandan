const express = require('express')
const async = require('async');
const Router = express.Router()
const model = require('./model')
const pageShuff = model.getModel('pageShuff')
const pageCategory = model.getModel('pageCategory')
const pageClass = model.getModel('pageClass')


Router.get('/index',function(req, res){


    // pageShuff.find({},async function(err,doc){
    //     if(err){
    //         return res.json({code:1,msg:"后端报错了"})
    //     }
    //     const shuffdata = await doc
    //     console.log(shuffdata,"...")
    // })
    // let result = [-1, -1, -1,];
    // function isAllDone() {
    //     return result[0] != -1 && result[1] != -1 && result[2] != -1;
    // }
    // pageShuff.find({}, function(err,doc){
    //     if(err){
    //         result[0] = res.json({code:1, msg:"后端报错了"});
    //     } else {
    //         result[0] = res.json(doc);
    //     }
    //     if (isAllDone()) {
    //         return res.json({code:0, result});
    //     }
    // }) 
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