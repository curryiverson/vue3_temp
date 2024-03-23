<template>
  <div>
    <!-- {{menuList}} -->
    <el-menu :router="true">
      <template v-for="item in menuList" :key="item.path">
        <el-menu-item v-if="!item.children && !item.meta.hidden" :index="item.path">
          <template #title>
            <el-icon :size="20">
              <component :is="item.meta.icon"></component> 
            </el-icon>
            <span>{{ item?.meta?.desc }}</span>
          </template>
        </el-menu-item>
        <el-menu-item
          v-if="item.children?.length == 1 && !item.children[0].meta.hidden"
          :index="item.children[0].path"
        >
          <template #title>
            <el-icon :size="20">
              <!-- <HomeFilled /> -->
              <component :is="item.children[0].meta.icon"></component> 
            </el-icon>
            <span>{{ item.children[0]?.meta?.desc }}</span>
          </template>
        </el-menu-item>
        <el-sub-menu v-if="item.children?.length > 2" :index="item.path">
          <template #title>
            <el-icon :size="20">
              <component :is="item.meta.icon"></component> 
            </el-icon>
            <span>{{ item?.meta?.desc }}</span>
          </template>
          <Menu :menuList="item.children"></Menu>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
defineProps(['menuList'])
</script>
<script lang="ts">
export default {
  name: 'Menu',
}
</script>
<style scoped></style>
