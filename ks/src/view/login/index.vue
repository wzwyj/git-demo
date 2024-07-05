<template>
    <div>
        <!-- -->
        <Site>
            <div class="top">
                <div class="top-left">
                    <a href="" class="img"></a>
                    <!-- <div class="img"><a href=""></a></div> -->
                    <div class="zi">
                        <div><a href="">混合现实编程</a></div>
                        <div><a href="">开发博客</a></div>
                    </div>
                </div>
                <div class="top-right">
                    <el-button>平台注册/登录</el-button>
                </div>
            </div>

            <div class="head">
                <div class="head-b">
                    <div class="module-head font-text">
                        <h1 class="module-welcome">欢迎!</h1>
                        <h4>准备好出发了么？</h4>
                        <br />
                        <el-form ref="ruleFormRef"
                            style="margin-left:15px; max-width: 320px;border: 1px solid rgb(144, 136, 136);padding: 10px;box-shadow: 2px 1px 2px 1px rgba(117, 117, 123, 0.2)"
                            :model="ruleForm" :rules="rules" label-width="auto" class="demo-ruleForm">
                            <div class="an">
                                <button><a href="">账户密码登录</a></button>
                                <div></div>
                            </div>
                            <h2>登录账号</h2>
                            <el-form-item label="用户名" prop="username" style="position: relative;">
                                <el-input v-model.number="ruleForm.username" :suffix-icon="Avatar" />
                            </el-form-item>
                            <el-form-item label="密码" prop="password">
                                <el-input v-model="ruleForm.password" type="password" :suffix-icon="Lock" />
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm(ruleFormRef)"
                                    style="width: 260px;margin-left: 60px;">
                                    登录平台
                                </el-button>
                            </el-form-item>
                        </el-form>
                        <el-button size="large" style="width: 340px;margin-top: 10px;">进入后台管理系统</el-button>
                    </div>
                </div>
            </div>
        </Site>
        <LoginEnd></LoginEnd>
    </div>
</template>

<script setup>

    import Site from '../../components/Site.vue'
    import LoginEnd from './components/LoginEnd.vue'
    import { reactive, ref, getCurrentInstance } from 'vue'
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router'
    // 一个用户图像+密码锁图标
    import { Avatar, Lock } from "@element-plus/icons-vue";

    const store = useStore();
    const ruleFormRef = ref();

    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入用户名称'))
        } else {
            if (ruleForm.username !== '') {
                if (!ruleFormRef.value) return
                ruleFormRef.value.validateField('checkPass')
            }
            callback()
        }
    }
    const validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码 '))
        } else if (value !== ruleForm.password) {
            callback(new Error("Two inputs don't match!"))
        } else {
            callback()
        }
    }
    const ruleForm = reactive({
        username: '',
        password: '',
    })

    const rules = reactive({
        username: [{ validator: validatePass, trigger: 'blur' }],
        password: [{ validator: validatePass2, trigger: 'blur' }],
    })

    //首先在setup中定义
    const router = useRouter()
    const submitForm = (formEl) => {
        if (!formEl) return
        formEl.validate((valid) => {
            if (valid) {
                store.dispatch("login/logins", ruleForm).then(res => {
                    router.push({ path: '/home' })
                })
            } else {
                console.log('error submit!')
            }
        })
    }

    const resetForm = (formEl) => {
        if (!formEl) return
        formEl.resetFields()
    }

</script>
<style scoped>
    .module-head h2{
        margin-top: 20px;
        font-size: 28px;
        margin-bottom: 30px;
    }
    .module-head h4{
        margin-top: 20px;
        font-size: 20px;
        margin-left: 15px;
    }
    .module-welcome{
        margin-top: 20px;
        font-size: 30px;
        margin-left: 15px;
    }
    .img {
        width: 15px;
        height: 15px;
    }

    .an {
        width: 100%;
        position: relative;
    }

    .an div {
        border: 1px solid rgb(194, 188, 188);
        width: 60%;
        height: 30px;
        position: absolute;
        right: -10px;
        top: -10px;
    }

    .an button {
        background-color: #fff;
        border: none;
        width: 40%;
    }

    .an button a {
        color: #409EFF;
    }

    .head-b {
        width: 400px;
        height: 500px;
        background-color: #fff;
        border-radius: 5px;
        padding-left: 10px;
        color: #666;
    }

    .module-head {
        width: 380px;
        height: 450px;
        background-color: #fff;
        border-radius: 8px;
        padding-left: 10px;
        color: #666;
        border: 1px solid rgb(183, 173, 173);
        margin-top: 20px;
    }

    .head {
        width: 100%;
        height: 815px;
        background: url('../../assets/02.jpg') center no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .zi {
        display: flex;
        width: 270px;
        justify-content: space-between;
        margin-left: 5px;

    }

    .zi a {
        color: #909399;
    }

    .top {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        line-height: 70px;
        /* border: 1px solid red; */
    }

    .top-left {
        width: 360px;
        display: flex;
        /* border: 1px solid black; */
        align-items: center;
    }

    .top-right {
        margin-right: 12px;
    }

    .img {
        width: 30px;
        height: 30px;
        background-image: url('../../assets/logo.gif');
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 20px;
    }
</style>