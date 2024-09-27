import { createRouter, createWebHistory } from "vue-router";

// 引入Vue组件
import Home from "@/components/Home.vue";
import About from '@/components/About.vue';
// 定义路由
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component : About
    }
];

// 创建router实例
const router = createRouter({
    history:createWebHistory(),
    routes,
});

export default router;