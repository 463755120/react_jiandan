import axios from 'axios'
import { getRedirectPath } from '../util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const LOGOUT = 'LOGOUT'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const MSG_CLEAR = 'MSG_CLEAR'
const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    phone: ''
}
//reducer
export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), ...action.payload }
        case LOAD_DATA:
            return { ...state, ...action.payload }
        case ERROR_MSG:
            return { ...state, msg: action.msg }
        case MSG_CLEAR:
            return { ...state, msg: '',redirectTo:''}
        case LOGOUT:
            return { ...initState, redirectTo: '/login' }
        default:
            return state
    }
}
export function regisger({ user, pwd, repeatpwd, phone }) {
    if (!user || !pwd || !phone) {
        return errorMsg("请完善信息")
    }
    if (pwd !== repeatpwd) {
        return errorMsg("密码和确认密码不同")
    }
    return async dispatch => {
        const res = await axios.post('/user/register', { user, pwd, phone })
        if (res.status === 200 && res.data.code === 0) {
            dispatch(authSuccess(({ user, phone })))
        } else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}
export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg("请完善信息")
    }
    return async dispatch => {
        const res = await axios.post('/user/login', { user, pwd })
        if (res.status === 200 && res.data.code === 0) {
            res.data.data.pwd = ""
            dispatch(authSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}
export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo }
}
export function msgClear(userinfo) {
    return { type: MSG_CLEAR, payload: userinfo }
}
export function update(userState) {
    if (userState.sValue.length !== 0) {
        userState.sValue = userState.sValue.join('')
    }
    return async dispatch => {
        const res = await axios.post('/user/update', userState)
        if (res.status === 200 && res.data.code === 0) {
            
            dispatch(authSuccess(res.data.data))
        } else {
            dispatch(errorMsg(res.data.msg))
        }
    }
}
export function logoutSubmit() {
    return { type: LOGOUT }
}
function authSuccess(obj) {
    const { pwd, ...data } = obj
    return { type: AUTH_SUCCESS, payload: data }
}
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}