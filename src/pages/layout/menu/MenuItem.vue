<template>
    <template v-for="menu in menuList" :key="menu.path">
        <el-sub-menu v-if="menu.children && menu.children.length > 0" :index="menu.path">
            <template #title>
                <i :class="menu.meta.icon"></i>
                <span>{{ menu.meta.title }}</span>
            </template>
            <MenuItem :menuList="menu.children"></MenuItem>
        </el-sub-menu>
        <el-menu-item v-else :index="menu.path">
            <i :class="menu.meta.icon"></i>
            <template #title>{{ menu.meta.title }}</template>
        </el-menu-item>
    </template>
</template>
<script setup lang="ts">
defineProps(['menuList'])
</script>