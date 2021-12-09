<template>
    <el-menu
        :default-active="activeIndex"
        router
        class="el-menu-vertical"
        active-text-color="#f84018"
        background-color="black"
        text-color="#fff"
        :collapse="isCollapse"
    >
        <MenuItem :menuList="menuList" />
    </el-menu>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { useStore } from '@/store/index'



const route = useRoute()
const store = useStore()
const activeIndex = computed(() => {
    const { path } = route;
    return path
})
const isCollapse = computed(() => {
    return store.getters['getCollapse']
})
//菜单数据
let menuList = reactive([
    {
        path: '/home',
        component: 'Layout',
        meta: {
            title: 'home',
            icon: 'el-icon-s-home',
            roles: ["sys:home"]
        },
        children: []
    },
    {
        path: '/layout_index',
        component: 'Layout',
        alwaysShow: true,
        name: 'DashBoard',
        meta: {
            title: 'DashBoard',
            icon: 'el-icon-data-analysis',
            roles: ["DashBoard:DashBoard"],
            parentId: 0
        },
        children: [
            {
                path: '/project',
                component: '@/views/dashboard/project/project.vue',
                alwaysShow: false,
                name: 'project',
                meta: {
                    title: 'project',
                    icon: 'el-icon-folder',
                    roles: ["dashBoard:project"],
                    parentId: 17
                },
            },
            {
                path: '/data_Capacity',
                component: '@/views/dashboard/data_Capacity/data_Capacity.vue',
                name: 'data_Capacity',
                meta: {
                    title: 'data_Capacity',
                    icon: 'el-icon-s-data',
                    roles: ["dashBoard:data_Capacity"],
                    parentId: 17
                },
            },
            {
                path: '/mileage',
                component: '@/views/dashboard/mileage/mileage.vue',
                name: 'mileage',
                meta: {
                    title: 'mileage',
                    icon: 'el-icon-map-location',
                    roles: ["dashBoard:mileage"],
                    parentId: 17
                },
            },
            {
                path: '/category',
                component: '@/views/dashboard/category/category.vue',
                name: 'category',
                meta: {
                    title: 'category',
                    icon: 'el-icon-search',
                    roles: ["dashBoard:category"],
                    parentId: 17
                },
            },
            {
                path: '/performance',
                component: '@/views/dashboard/performance/performance.vue',
                name: 'performance',
                meta: {
                    title: 'performance',
                    icon: 'el-icon-monitor',
                    roles: ["dsashBoard:performance"],
                    parentId: 17
                },
            },
        ]
    },
    {
        path: '/analysis',
        component: 'Layout',
        alwaysShow: true,
        name: 'analysis',
        meta: {
            title: 'analysis',
            icon: 'el-icon-aim',
            roles: ["analysis:analysis"],
            parentId: 1
        },
        children: [
            {
                path: '/map',
                component: '@/views/analysis/map/map.vue',
                alwaysShow: false,
                name: 'map',
                meta: {
                    title: 'map',
                    icon: 'el-icon-location-information',
                    roles: ["analysis:map"],
                    parentId: 17
                },
            },
            {
                path: '/devtool',
                component: '@/views/analysis/dvtool/dvtool.vue',
                alwaysShow: false,
                name: 'devtool',
                meta: {
                    title: 'devtool',
                    icon: 'el-icon-monitor',
                    roles: ["analysis:devtool"],
                    parentId: 17
                },
            },
        ]
    },
])

</script>
<style scoped>
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    border-right: 0px;
}
</style>
