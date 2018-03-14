

export function getRedirectPath({avatar}){
    // 根据用户信息是否完整 返回跳转地址
    let url = ''   
    if(!avatar){
        url+='info'
    }
    return url
}