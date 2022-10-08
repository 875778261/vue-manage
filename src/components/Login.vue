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
                    <el-button type="primary" @click="loginBtn('form')">登录</el-button>
                </el-form-item>
            </el-form>

        </el-card>
    </div>
</template>

<script>
import { nameRule, passRule } from '@/utils/validate'
import { setToken, getToken, removeToken } from '@/utils/tokenDispose'
import { login } from '@/api'
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
            },
            rules: {
                username: [{ validator: nameRule, trigger: 'blur' }],
                password: [{ validator: passRule, trigger: 'blur' }],
            }

        }
    },
    methods: {
        loginBtn(form) {

            this.$refs[form].validate((valid => {
                console.log('开始验证enter form validate', this.form);
                if (valid) {
                    console.log('正在请求');
                    login(this.form).then(res => {
                        console.log('请求成功，收到res', '状态：' + res.status, res);
                        if (res.data.status === 200) {
                            console.log('登陆成功');
                            setToken('username', res.data.username)
                            setToken('token', res.data.token)
                            this.$message({ message: res.data.message, type: 'success' })
                            this.$router.push('/home')
                        }
                    }).catch(err => {
                        console.error(err);
                    })
                    /* 将登录进行封装
                    this.service.post('/login', this.form)
                        .then(res => {
                            console.log('请求成功，收到res', '状态：'+res.status,res);
                            if (res.status === 200) {
                                console.log('登陆成功');
                                setToken('username',res.data.username)
                                setToken('token',res.data.token)
                                this.$message({ message: res.data.message, type: 'success' })
                                this.$router.push('/home')
                            }
                        })
                        .catch(err => {
                            console.error('错误捕捉catch error', err);
                        })
                        */
                } else {
                    console.log('验证不通过', this.form);
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
    background: url('../assets/login.jpg') center no-repeat;
    background-size: auto 100%;

    .el-card {
        //background: #b3b3ba;
        background: #657685bb;
        // border: solid 0px;
        box-shadow: 5px 3px 50px 30px
    }

    .box-card {
        width: 450px;
        margin: 200px auto;

        .el-form .el-form-item__label {
            color: white;
            width: 100px;

        }

        .el-card__header {
            color: white;
            font-size: 35px;
        }

        .el-button {
            width: 100%;
        }
    }
}
</style>