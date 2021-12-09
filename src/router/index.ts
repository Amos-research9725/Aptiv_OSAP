import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// RouteRecordRaw定义了路由的一个模式
// createWebHistory 路由模式
import Login from '@/pages/login/index_login.vue'
import Layout from '@/pages/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: Login,
        redirect: "/login",
        children: [
            {
                path: "/login",
                component: () => import('@/pages/login/index_login.vue'),
                name: "login",
                meta: {
                    title: "login",
                    icon: "#icondashboard"
                }
            }
        ]
    },
    {
        path: "/home",
        component: Layout,
        children: [
            {
                path: "/home",
                component: () => import('@/views/home/home.vue'),
                name: "home",
                meta: {
                    title: "home",
                    icon: "el-icon-thumb"
                }
            }
        ]
    },
    {
        path: '/dashboard',
        component: Layout,
        name: 'dashboard',
        meta: {
            title: "dashboard",
            icon: 'el-icon-data-analysis',
            roles: ["dashboard:dashboard"],
            parentId: 0
        },
        children:
            [
                {
                    path: '/project',
                    component: () => import('@/views/dashboard/project/project.vue'),
                    name: 'project',
                    meta: {
                        title: 'project',
                        icon: 'el-icon-folder',
                        roles: ["dashboard:project"],
                        parentId: 17
                    },
                },
                {
                    path: '/data_Capacity',
                    component: () => import('@/views/dashboard/data_Capacity/data_Capacity.vue'),
                    name: 'data_Capacity',
                    meta: {
                        title: 'data_Capacity',
                        icon: 'el-icon-s-data',
                        roles: ["dashboard:data_Capacity"],
                        parentId: 17
                    },
                },
                {
                    path: '/mileage',
                    component: () => import('@/views/dashboard/mileage/mileage.vue'),
                    name: 'mileage',
                    meta: {
                        title: 'mileage',
                        icon: 'el-icon-map-location',
                        roles: ["dashboard:mileage"],
                        parentId: 17
                    },
                },
                {
                    path: '/category',
                    component: () => import('@/views/dashboard/category/category.vue'),
                    name: 'category',
                    meta: {
                        title: 'category',
                        icon: 'el-icon-search',
                        roles: ["dashboard:category"],
                        parentId: 17
                    },
                },
                {
                    path: '/performance',
                    component: () => import('@/views/dashboard/performance/performance.vue'),
                    name: 'performance',
                    meta: {
                        title: 'performance',
                        icon: 'el-icon-monitor',
                        roles: ["dashboard:performance"],
                        parentId: 17
                    },
                }
            ]
    },
    {
        path: "/analysis",
        component: Layout,
        name: 'analysis',
        meta: {
            title: "analysis",
            icon: 'el-icon-aim',
            roles: ["analysis:analysis"],
            parentId: 1
        },
        children:
            [
                {
                    path: '/map',
                    component: () => import('@/views/analysis/map/map.vue'),
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
                    component: () => import('@/views/analysis/dvtool/dvtool.vue'),
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router