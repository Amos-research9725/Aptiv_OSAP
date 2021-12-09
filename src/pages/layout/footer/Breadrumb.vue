<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabs">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup lang='ts'>
import { watch, ref, Ref } from 'vue'
import { useRoute, RouteLocationMatched } from 'vue-router'
const route = useRoute();
//定义面包屑导航数据
const tabs: Ref<RouteLocationMatched[]> = ref([])
const getBreadrumb = () => {
    let mached = route.matched.filter(item => item.meta && item.meta.title);
    //判断是否是首页，如果不是，构造一个
    const first = mached[0];
    if (first.path !== '/home') {
        mached = [{ path: "/home", meta: { title: 'home' } } as any].concat(mached)
    }
    tabs.value = mached;
}
getBreadrumb();

watch(() => route.path, () => getBreadrumb())
</script>
<style lang='scss' scoped>
</style>