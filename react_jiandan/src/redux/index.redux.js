import axios from 'axios'

const INDEX_SUCCES = 'INDEX_SUCCES'
const INDEX_ERR = 'INDEX_ERR'

const initState = {
    msg: '',
}

export function index(state =initState, action) {
    switch (action.type) {
        case INDEX_SUCCES:
            return { ...state,msg: '',...action.payload }
        case INDEX_ERR:
            return { ...state,msg: action.msg}
        default:
            return state
    }
}
export function homePage(){
    return async dispatch => {
        const res = await axios.get('/page/index')
        if (res.status === 200 && res.data.code === 0) {
            
            dispatch(axiosSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}
export function courselist({classSubject}){
    if(classSubject === "undefind"){
        return
    }
    return async dispatch => {
        const res = await axios.post('/page/courselist',{classSubject})
        if (res.status === 200 && res.data.code === 0) {           
            dispatch(axiosSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}

function axiosSuccess(obj) {
    const { ...data } = obj
    return { type: INDEX_SUCCES, payload: data }
}
function errorMsg(msg) {
    return { msg, type: INDEX_ERR }
}