
import service from '@/service'
import qs from 'qs'
//登录
export function login(data) {
    console.log('login接口正在请求');
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

//学生列表查询
export function students(params) {
    return service({

        method: 'get',
        url: '/students',
        params
    })
}


//学生信息删除
export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`,
    })
}


//信息列表查询
export function infos(params) {
    return service({
        method: 'get',
        url: '/info',
        params
    })
}





//信息列表新增
export function infoAdd(data) {
    console.log('apidata',data);
    data = qs.stringify(data)
    console.log('qs_apidata',data);
    return service({
        method: 'post',
        url: '/info',
        data
    })
}


//信息列表修改
export function infoUpdate(data) {
    data = qs.stringify(data)
    return service({
        method: 'put',
        url: '/info',
        data
    })
}

//信息列表删除
export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`,
    })
}