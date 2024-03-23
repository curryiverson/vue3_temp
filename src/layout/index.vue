<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          :collapse="LayOutSettingStore.fold ? true : false"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar">顶部</div>
    <!-- 内容展示区域 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import { useUserStore } from '@/store/modules/user'

import { useRoute } from 'vue-router'

import useLayOutSettingStore from '@/store/modules/setting'
let LayOutSettingStore = useLayOutSettingStore()

let $route = useRoute()
console.log('$route', $route.path)

let userStore = useUserStore()
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background-color;
    .scrollbar {
      width: 100%;
      height: calc(100vh - 50px);

      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-hegiht;
    position: fixed;
    top: 0;
    left: $base-menu-width;
    background-color: $base-tabbar-background-color;
  }
  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-hegiht);
    position: fixed;
    top: $base-tabbar-hegiht;
    left: $base-menu-width;
    background-color: $base-contain-background-color;
    padding: 20px;
    overflow: auto;
  }
}
</style>
