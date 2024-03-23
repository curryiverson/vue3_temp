<template>
  <div class="logo" v-if="!setting.hogoHidden">
    <img :src="setting.logo" alt="">
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang='ts' setup>
import setting from '@/setting.ts'
</script>
<style scoped lang="scss">
.logo{
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 16px;
  img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  p{
    font-size: 20px;
  }
}
</style>