<template >
    <div class="login_bg">
        <br />
        <br />
        <el-row>
            <el-col :span="2" :offset="3">
                <div>
                    <img
                        src="../../assets/Aptiv_logo.png"
                        style=" width: auto;height: auto;max-width: 100%;max-height: 100%;"
                    />
                </div>
            </el-col>
        </el-row>
        <br />
        <br />
        <el-row>
            <el-col :span="24">
                <br />
                <br />
                <br />
                <br />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8" :offset="3">
                <h1 style="color:white">APTIV Intelligence System</h1>
                <h3 style="color:white">This is an advanced system.</h3>
            </el-col>
        </el-row>
    </div>
    <div class="info">
        <el-form class="rule-form">
            <span>账号登录</span>
            <el-divider style="color: blue;"></el-divider>
            <el-form-item>
                <el-input
                    placeholder="请输入用户名"
                    prefix-icon="el-icon-user"
                    type="text"
                    v-model="username"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-input
                    type="password"
                    placeholder="请输入密码"
                    prefix-icon="el-icon-key/"
                    v-model="password"
                ></el-input>
            </el-form-item>
            <el-form-item>
                <el-button
                    style="background: black;width:70%;"
                    @click="$router.push({ path: '/home' })"
                >登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup lang="ts">
const username = "测试中"
const password = 0

</script>
<style lang="scss" scoped>
.login_bg {
    width: 100%;
    height: 100%;
    background: url("../../assets/login_background.png") no-repeat center;
    background-size: cover;
    position: absolute;
}
.info {
    width: 24vw;
    height: 50vh;
    background-color: white;
    background-size: cover;
    position: absolute;
    border-radius: 20px;
    right: 218px;
    top: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 750px) {
        width: 88vw;
        right: 25px;
        top: 22vh;
    }
    .rule-form {
        width: 70%;
        text-align: center;
        .el-button:focus {
            color: #f84018;
            border-color: #f84018;
            background-color: #f84018;
        }
        .el-button:hover {
            color: #f84018;
            border-color: #f84018;
            background-color: #f84018;
        }
    }
}
</style>