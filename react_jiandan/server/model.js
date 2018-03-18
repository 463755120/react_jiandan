const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/jian-dan'
mongoose.connect(DB_URL)

const models = {
    user:{
        'user':{type:String,'require':true},
		'pwd':{type:String,'require':true},
		'phone':{type:String,'require':true},
		//年纪
		'sValue':{type:String},
		//学校
		'school':{type:String},
		//弱科
		'subject':{type:String},
    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}