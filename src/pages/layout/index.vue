<template>
    <el-container class="layout">
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-container>
            <el-aside class="aside">
                <MenuBar></MenuBar>
            </el-aside>
            <el-container>
                <el-footer class="footer">
                    <Footer></Footer>
                </el-footer>
                <el-main class="main">
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Header from './header/Header.vue'
import MenuBar from './menu/MenuBar.vue'
import Footer from './footer/footer.vue'
</script>
<style lang="scss" scoped>
.layout {
    height: 100%;
    .aside {
        background-color: rgb(0, 0, 0);
        width: auto;
    }
    .header {
        background-color: #ffffff;
        border-bottom: 1px solid #dbdbdb;
    }
    .main {
        background-color: #dbdbdb;
    }
    .footer {
        background-color: rgb(255, 255, 255);
        display: flex;
        align-items: center;
        height: 35px;
    }
}
</style>