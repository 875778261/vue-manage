<template>
    <div class="login">

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>用户登录</span>
            </div>
            <div style="margin: 20px;"></div>
            <el-form label-width="80px" :model="form" ref="form" :rules="rules">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        const validateName = (rule, value, callback) => {
            //输入4-10位名称
            let unReg = /(^[a-zA-Z0-9]{4,10}$)/
            if (value === '') {
                callback(new Error('先输入昵称'))
            } else if (!unReg.test(value)) {
                callback(new Error('请输入4-10位用户名'))
            } else {
                callback()
            }
        }
        const validatePass = (rule, value, callback) => {
            //输入4-10位名称
            let unReg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
            if (value === '') {
                callback(new Error('先输入密码'))
            } else if (!unReg.test(value)) {
                callback(new Error('请输入6-12位密码，并且包含大、小写字母、数字、特殊字符'))
            } else {
                callback()
            }
        }
        return {
            form: {
                username: '',
                password: '',
                success: '登陆成功'
            },
            rules: {
                username: [{ validator: validateName, trigger: 'blur' }],
                password: [{ validator: validatePass, trigger: 'blur' }],
            }

        }
    },
    methods: {
        login(form) {

            this.$refs[form].validate((valid => {
                console.log('enter form validate', this.form);
                if (valid) {
                    console.log('正在请求');
                    this.axios.post('http://jsonplaceholder.typicode.com/users', this.form)
                        .then(res => {
                            console.log(res);
                            if (res.status == 201) {
                                localStorage.setItem('username', res.data.username)
                                this.$message({ message: res.data.success, type: 'success' })
                                this.$router.push('/home')
                                console.log('登陆成功');
                            }
                        })
                        .catch(err => {
                            console.error('catch error', err);
                        })
                } else {
                    console.log('not validate', this.form);
                }
            }))
        }
    }
}
</script>

<style lang="scss">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;

    .box-card {
        width: 450px;
        margin: 200px auto;

        .el-card__header {
            font-size: 45px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>