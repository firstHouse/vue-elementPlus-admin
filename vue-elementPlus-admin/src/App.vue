<script setup lang="ts">
import Header from './components/Header.vue';
import Aside from './components/Aside.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-container>
          <el-main>
            <Main />
          </el-main>
          <el-footer>
            <Footer />
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  height: 100vh;
  width: 100vw;
}

.el-header {
  padding: 0px;
  height: 10vh;
}

.el-aside {
  height: 90vh;
}

.el-main {
  padding: 0px;
}

.el-footer {
  padding: 0px;
}


.header {
  background-color: #1fab89;
  height: 100%;
}

.aside {
  background-color: #62d2a2;
  height: 100%;
}

.main {
  height: 100%;
  background-color: #d7fbe8;
}

.footer {
  background-color: #9df3c4;
  height: 100%;
}
</style>
