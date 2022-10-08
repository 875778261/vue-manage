//设置TOKEN
export function setToken(tokenKey,token) {
    return localStorage.setItem(tokenKey,token)
}

//取TOKEN，
export function getToken(tokenKey) {
    return localStorage.getItem(tokenKey)
}

//移除TOKEN
export function removeToken(tokenKey) {
    return localStorage.removeItem(tokenKey,token)
}