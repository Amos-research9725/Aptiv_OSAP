<template>
    <div class="logo">
        <MenuLogo></MenuLogo>
    </div>
    <div class="icon">
        <i class="el-icon-switch-button" @click="$router.push({ path: '/' })"></i>
    </div>
</template>
<script setup lang="ts">
import MenuLogo from '../menu/MenuLogo.vue'

</script>
<style lang="scss" scoped>
.logo {
    width: 220px;
    float: left;
    align-items: center;
}
.icon {
    height: 100%;
    align-items: center;
    font-size: 40px;
    float: right;
    color: #f84018;
}
</style>