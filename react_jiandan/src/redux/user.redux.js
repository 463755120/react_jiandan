import axios from 'axios'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initState={
	msg:'',
	user:'',
	phone:''
} 
//reducer
export function user(state=initState,action){
    switch(action.type){
        case AUTH_SUCCESS:
			return {...state, msg:'',...action.payload}
		case LOAD_DATA:
			return {...state, ...action.payload}
		case ERROR_MSG:
            return {...state, msg:action.msg}
        case LOGOUT:
			return {...initState,redirectTo:'/login'}    
		default:
			return state
	}
}
export function regisger({user,pwd,repeatpwd,phone}){
    if(!user||!pwd||!phone){
        return errorMsg("请完善信息")
    }
    if(pwd !== repeatpwd ){
        return errorMsg("密码和确认密码不同")
    }
    return async dispatch =>{
        const res = await  axios.post('/user/register',{user,pwd,phone})
        if(res.status === 200 && res.data.code ===0){
            dispatch(authSuccess(({user,pwd,phone}))) 
         }else {
             dispatch(errorMsg(res.data.msg))
         }
    }
} 
function authSuccess(obj){
    const {pwd,...data} = obj
    return {type:AUTH_SUCCESS,payload:data}
}
function errorMsg(msg){
    return {msg,type:ERROR_MSG}
}