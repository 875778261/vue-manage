

// 获取表格数据
export function getData(url, currentrRoute, params) {
    currentrRoute.service.get(url, { params: params || {} }).then((res) => {
        if (res.data.status === 200) {
            currentrRoute.tableData = [...res.data.data]
            //console.log(currentrRoute.tableData);
            currentrRoute.total = res.data.total
            currentrRoute.tableData.forEach(item => {
                item.sex === '1' ? item.sex_text = '男' : item.sex_text = '女'
            })
        }
    }).catch(err => {
        throw err
    })
}

//新增、修改方法封装
import qs from 'qs'
export function changeInfo(method, url, currentrRoute, form, callback) {
    let data = qs.stringify(form)
    currentrRoute.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                callback(url, currentrRoute)
                currentrRoute.dialogFormVisible = false
                currentrRoute.$refs['form'].resetFields()
                currentrRoute.$message({ type: 'success', message: res.data.message })
            }
        }).catch(err => {
            throw err
        })
}

//删除方法的封装
export function delInfo(url, currentrRoute, row, callback) {

    currentrRoute.$confirm(`确定要删除ID为 ${row.id} 的 ${row.name} 的信息吗`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        showCancelButton: true,
        type: 'warning',
    }).then(() => {
        console.log(row.id);
        console.log(url + '/' + row.id);
        currentrRoute.service.delete(url + '/' + row.id)
            .then(res => {
                if (res.data.status === 200) {
                    currentrRoute.$message({ message: res.data.message, type: 'success' })
                    callback(url, currentrRoute)
                }
            })
    }).catch((err) => {
        currentrRoute.$message({ message: '取消删除', type: 'info' })
        throw err
    })
}

//作业列表获取表格数据
export function getTableData(url, currentrRoute, params,arr) {
    currentrRoute.service.get(url, { params: params || {} }).then(res => {
        if (res.data.status === 200) {
            //console.log(res.data.data);
            currentrRoute.tableData = [...res.data.data]
            currentrRoute.total = res.data.total
            //处理收到的数据
            currentrRoute.tableData.map((item)=>{
                arr.map(arrItem=>{
                    item[arrItem]?item[arrItem+'_text']='已完成':item[arrItem+'_text']='未完成'
                })
            })
            /* 
            currentrRoute.tableData.forEach((item)=>{
                arr.forEach(arrItem=>{
                    item[arrItem]?item[arrItem+'_text']='已完成':item[arrItem+'_text']='未完成'
                })
            })  
            */
            /* 
            currentrRoute.tableData.forEach(item=>{
                if (item.completed) {
                    item.completed_text='已完成'
                }else{
                    item.completed_text='未完成'
                }
            }) 
            */

           currentrRoute.loading=false
        }
    }).catch(err => {
        throw err
    })
}


