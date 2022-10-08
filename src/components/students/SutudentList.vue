<template>
    <div class="sutudentList">
        <h1>学生列表</h1>

        <!-- 查询，重置 -->
        <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
            <el-form-item label="姓名查询">
                <el-input v-model="formInline.name" placeholder=" 输入查询姓名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="find">查询</el-button>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="reset">重置</el-button>
            </el-form-item>
        </el-form>

        <!-- 表格 -->
        <el-table :data="computeData" border style="width: 100%">
            <el-table-column prop="id" label="id" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="age" label="年龄" align="center">
            </el-table-column>
            <el-table-column prop="sex_text" label="性别" align="center">
            </el-table-column>
            <el-table-column prop="number" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="class" label="学号" align="center">
            </el-table-column>
            <el-table-column prop="state_text" label="状态" align="center">
            </el-table-column>
            <el-table-column prop="address" label="地址" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="手机号码" align="center">
            </el-table-column>
            <el-table-column  label="操作" align="center">

                <!-- 删除按钮 -->
                <template slot-scope="scope">
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="btn_del(scope.row.id)">
                    </el-button>
                </template>

            </el-table-column>
        </el-table>

        <!-- 分页页码 -->
        <div>
            <span class="demonstration">完整功能</span>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="[5, 10, 20, 30]" :page-size='pageSize'
                layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>

        </div>
    </div>
</template>

<script>
import { students, studentDel } from '@/api';
export default {
    created() {
        console.log('StudentList');
        this.getDate()
    },
    data() {
        return {
            tableData: [],
            currentPage: 1,//当前页数
            pageSize: 10,//每页显示条数
            total: null,//总条数
            formInline: {
                name:null
            }
        }
    },
    computed: {
        //分页计算
        computeData() {
            /* 1:1-10,2:11-20 slice((当前页数-1)*每页条数,当前页数*当前条数) */
            return this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        }
    },
    methods: {
        getDate(params) {
            students(params)
                .then(res => {
                    //console.log('students  res', res);
                    if (res.data.status === 200) {
                        this.tableData = [...res.data.data]
                        this.total = res.data.total
                        this.tableData.forEach(item => {
                            //避免修改原数据，新建字段解决
                            //' 性别，1：男；2：女'
                            item.sex === 1 ? item.sex_text = '男' : item.sex_text = '女'
                            //'状态state，’1’：’已入学’；’2’：未入学,’3’:’休学中’'
                            item.state === '1'
                                ? (item.state_text = '已入学')
                                : item.state === '2'
                                    ? (item.state_text = '未入学')
                                    : (item.state_text = '休学中')

                        })
                    }
                })
        },
        handleSizeChange(val) {
            //改变每页条数
            this.pageSize = val
            this.currentPage = 1
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            //改变页码
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },
        btn_del(id) {
            console.log('scope.row.id传来的值', id);
            studentDel(id).then(res => {
                console.log(res);
                if (res.data.status === 200) {
                    this.$message({ message: '删除数据成功', type: 'success' })
                    this.getDate()
                }
            })
        },
        find() {
            console.log('submit!',this.formInline.name);
            this.getDate(this.formInline)
        },
        reset() {
            console.log('reset!');
            this.formInline={}
            this.getDate()
        },
    }
}
</script>

<style lang="scss">
.sutudentList {
    .el-pagination {
        text-align: left;
        margin-top: 20px;
    }

    .el-form {
        text-align: left;
    }
}
</style>