

export function getRedirectPath({sValue}){
    // 根据用户信息是否完整 返回跳转地址
    let url = ''   
    if(!sValue){
        url ='info'
    }else{
        url = '/index'
    }
    return url
}