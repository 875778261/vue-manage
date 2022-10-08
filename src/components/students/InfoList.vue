<template>
    <div class="infoList">
        <!-- 新增 -->
        <el-form class="demo-form-inline">

            <el-form-item>
                <el-button type="primary" @click="addInfo">新增</el-button>
                <el-dialog :title="state?'新增信息':'修改信息'" :visible.sync="dialogFormVisible" width="500px">
                    <el-form ref="form" :model="form" :rules="rules">
                        <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
                            <el-input v-model="form.name" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="age" label="年龄" :label-width="formLabelWidth">
                            <el-input v-model="form.age" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="sex" label="性别" :label-width="formLabelWidth">
                            <el-radio v-model="form.sex" label="1">男</el-radio>
                            <el-radio v-model="form.sex" label="2">女</el-radio>
                        </el-form-item>

                        <el-form-item prop="father" label="父亲" :label-width="formLabelWidth">
                            <el-input v-model="form.father" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="mather" label="母亲" :label-width="formLabelWidth">
                            <el-input v-model="form.mather" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="address" label="家庭地址" :label-width="formLabelWidth">
                            <el-input v-model="form.address" autocomplete="off"></el-input>
                        </el-form-item>

                        <el-form-item prop="time" label="入校时间" :label-width="formLabelWidth">
                            <el-date-picker v-model="form.time" type="date" format="yyyy 年 MM 月 dd 日"
                                value-format="yyyy-MM-dd" placeholder="选择日期">
                            </el-date-picker>
                        </el-form-item>

                        <el-form-item prop="phone" label="手机号码" :label-width="formLabelWidth">
                            <el-input v-model="form.phone" autocomplete="off"></el-input>
                        </el-form-item>

                    </el-form>

                    <div slot="footer" class="dialog-footer">
                        <el-button @click="closeDialog('form')">取 消</el-button>
                        <el-button type="primary" @click="sure('form')">确 定</el-button>


                    </div>
                </el-dialog>
            </el-form-item>
        </el-form>




        <!-- 表格 -->
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="id" align="center">
            </el-table-column>
            <el-table-column prop="name" label="姓名" align="center">
            </el-table-column>
            <el-table-column prop="age" label="年龄" align="center">
            </el-table-column>
            <el-table-column prop="sex_text" label="性别" align="center">
            </el-table-column>
            <el-table-column prop="father" label="父亲" align="center">
            </el-table-column>
            <el-table-column prop="mather" label="母亲" align="center">
            </el-table-column>
            <el-table-column prop="time" label="入校时间" align="center">
            </el-table-column>
            <el-table-column prop="address" label="家庭地址" align="center">
            </el-table-column>
            <el-table-column prop="phone" label="手机号码" align="center">
            </el-table-column>
            <!-- 操作区域 -->
            <el-table-column label="操作" align="center">

                <!-- 修改按钮 -->
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" icon="el-icon-edit" @click="btn_edit(scope.row)">修改
                    </el-button>
                    <el-button type="danger" size="mini" icon="el-icon-delete" @click="btn_del(scope.row)">删除
                    </el-button>
                </template>

            </el-table-column>
        </el-table>


    </div>
</template>

<script>
import { infos, infoAdd, infoUpdate, infoDel } from '@/api'
export default {
    created() {
        console.log(this.tableData);
        this.getData()
    },
    data() {
        return {
            tableData: [],
            dialogFormVisible: false,
            form: {
                name: '',
                sex: '1',
                age: '',
                father: '',
                mather: '',
                address: '',
                time: '',
                phone: '',
            },
            formLabelWidth: '80px',
            rules: {
                name: [{ required: true, message: '输入姓名' }],
                age: [{ required: true, message: '输入年龄' }],
                sex: [{ required: true }],
                time: [{ required: true, message: '选择时间' }],
                phone: [{ required: true, message: '输入手机号' }],
            },
            state: true,
        }
    },
    methods: {
        getData() {
            infos()
                .then(res => {
                    if (res.data.status === 200) {
                        //console.log(res);
                        this.tableData = [...res.data.data]
                        this.total = res.data.total
                        this.tableData.forEach(item => {
                            item.sex === '1'? item.sex_text = '男' : item.sex_text = '女'
                        })
                    }
                })
        },
        addInfo() {
            console.log(' this.form', this.form);
            this.state = true
            this.form = {
                name: '',
                sex: '1',
                age: '',
                father: '',
                mather: '',
                address: '',
                time: '',
                phone: '',
            }
            this.dialogFormVisible = true

        },
        btn_edit(row) {


            console.log(' this.form', this.form);
            this.state = false
            this.dialogFormVisible = true
            this.$nextTick(() => {
                //nextTick将赋值操作延迟到mounted之后，解决resetFields()不生效问题
                //将表单中的数据新创建一个对象返回
                this.form = { ...row }
            })
        },
        btn_del(row) {
            console.log('scope.row.id:', row.id);
            this.$confirm(`确定要删除ID为 ${row.id} 的 ${row.name} 的信息吗`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showCancelButton: true,
                type: 'warning',
            }).then(() => {
                infoDel(row.id).then(res => {
                    console.log(res);
                    if (res.data.status === 200) {
                        this.$message({ message: res.data.message, type: 'success' })
                        this.getData()
                    }
                })
            }).catch(()=>{
                this.$message({ message: '取消删除', type: 'info' })
            })


        },

        sure(form) {
            this.$refs[form].validate(valid => {
                if (valid) {
                    if (this.state) {
                        infoAdd(this.form).then(res => {
                            if (res.data.status === 200) {
                                this.$message({ type: 'success', message: res.data.message })


                                this.dialogFormVisible = false
                            }
                        })
                    } else {
                        infoUpdate(this.form)
                            .then(res => {
                                if (res.data.status === 200) {


                                    this.dialogFormVisible = false
                                    this.$message({ type: 'success', message: res.data.message })
                                }
                            })
                    }

                }
            })
            this.$refs[form].resetFields()
            this.getData()
        },
        closeDialog(form) {
            this.$refs[form].resetFields()
            this.dialogFormVisible = false
        },
    },
}
</script>

<style lang="scss" scoped>
.infoList {

    .demo-form-inline,
    .el-form-item {
        text-align: left;
        margin-top: 20px;
    }
}
</style>