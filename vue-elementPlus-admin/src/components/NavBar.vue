<template>
    <nav class="navBar">
        <div class="logo">MyApp</div>
        <button @click="toggleMenu" class="menu-button">
            {{ isMenuVisible ? 'Close' : 'Menu' }}
        </button>
        <ul v-if="isMenuVisible" class="menu">
            <li v-for="item in menuItems" :key="item.name" @click="changePage(item)"
                :class="{ active: currentPage === item.name }">
                {{ item.name }}
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts" name="NavBar">
import { ref } from 'vue';
const menuItems = ref([
    { name: 'Home' },
    { name: 'About' },
    { name: 'Services' },
    { name: 'Contact' },
]);
const currentPage = ref('Home');
const isMenuVisible = ref(false);

const toggleMenu = () => {
    isMenuVisible.value = !isMenuVisible.value;
};
const changePage = (item) => {
    currentPage.value = item.name;
    isMenuVisible.value = false; // Close menu after navigating
};
</script>
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    padding: 1rem;
    color: white;
}

.menu-button {
    display: none;
}

.menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.active {
    font-weight: bold;
    border-bottom: 2px solid #fff;
}

/* 响应式设置 */
@media (max-width: 768px) {
    .menu {
        flex-direction: column;
        position: absolute;
        background-color: #333;
        width: 100%;
        left: 0;
        top: 60px;
        display: none;
        /* 隐藏菜单默认状态 */
    }

    .menu-button {
        display: inline-block;
    }

    .menu[style*="display: block"] {
        display: block;
        /* 显示菜单 */
    }
}
</style>