<template>
  <div class="login_backGround">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <div class="formBox">
          <h1 class="logo-text">Hello</h1>
          <h2 class="logo-welcome">欢迎来到Ikun甄选</h2>
          <el-form :model="loginForm" class="loginForm">
            <el-form-item>
              <el-input v-model="loginForm.userName" :prefix-icon="User" />
            </el-form-item>
            <el-form-item>
              <el-input
                v-model="loginForm.password"
                :prefix-icon="Lock"
                show-password
              />
            </el-form-item>
          </el-form>
          <el-button type="primary">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
const loginForm = reactive({
  userName: 'admin',
  password: '111111',
})
</script>
<style scoped lang="scss">
.login_backGround {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .el-col {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .formBox {
    height: 400px;
    width: 400px;
    padding: 40px;
    box-shadow: 2px 3px 7px #0003;
    background: url('@/assets/images/login_form.png');
    border-radius: 20px;
    .el-input {
      margin-bottom: 20px;
    }
    .logo-text {
      font-size: 42px;
      color: #fff;
      margin-bottom: 12px;
    }
    .logo-welcome {
      font-size: 26px;
      color: #fff;
      margin-bottom: 40px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>
