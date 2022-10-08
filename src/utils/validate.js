//用户名匹配
export function nameRule(rule, value, callback) {
    let unReg = /(^[a-zA-Z0-9]{4,10}$)/
    if (value === '') {
        callback(new Error('先输入昵称'))
    } else if (!unReg.test(value)) {
        callback(new Error('请输入4-10位用户名'))
    } else {
        callback()
    }
}
//密码名匹配
export function passRule(rule, value, callback) {
    let unReg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('先输入密码'))
    } else if (!unReg.test(value)) {
        callback(new Error('请输入6-12位密码，并且包含大、小写字母、数字、特殊字符'))
    } else {
        callback()
    }
}