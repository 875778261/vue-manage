import axios from "axios";
import { getToken } from "@/utils/tokenDispose";
import { Message } from 'element-ui'
import { Promise } from "core-js";
const service = axios.create({
    //配置baseUrl基础路径，就需要配置对应的代理
    //vue.config.js中配置代理

    baseURL: '/api',
    //baseURL会自动加载请求地址上，提高开发效率

    //baseURL: './index.html',
    //baseURL:'http://1.116.64.64:5004/api2/',
    //baseURL: 'CODE_Space/vue-learn/v2p/p_1/dist',
    timeout: 5000//超时停止
})



//添加请求拦截器
service.interceptors.request.use((config) => {
    //在发送请求之前要做的事情（获取并设置token）
    config.headers['token'] = getToken('token')
    //config.url = 'http://1.116.64.64:5004/api2' + config.url


    return config
}, (error) => {
    return Promise.reject('出错了', error)
})


//添加响应拦截器
service.interceptors.response.use((response) => {
    //对响应的数据做出相应的提示
    let { status, message } = response.data
    if (status !== 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response//返回这个对象，不然发起请求后会收不到res
}, (error) => {
    return Promise.reject(error)
})
export default service