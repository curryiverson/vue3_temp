<template>
  <div class="login_backGround">
    <el-row>
      <el-col :span="12"></el-col>
      <el-col :span="12">
        <div class="formBox">
          <h1 class="logo-text">Hello</h1>
          <h2 class="logo-welcome">欢迎来到Ikun甄选</h2>
          <el-form
            :model="loginForm"
            class="loginForm"
            :rules="rules"
            ref="ruleFormRef"
          >
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" :prefix-icon="User" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                :prefix-icon="Lock"
                show-password
              />
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { useUserStore } from '@/store/modules/user.ts'
import { useRouter } from 'vue-router'
import { ElNotification, FormInstance, FormRules } from 'element-plus'
const userUser = useUserStore()
const $router = useRouter()
interface RuleForm {
  username: string
  password: string
}
const loginForm = reactive<RuleForm>({
  username: 'admin',
  password: '111111',
})
const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules<RuleForm>>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
const login = async (formEl: FormInstance | undefined) => {
  console.log('formEl', formEl)
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      userUser
        .userLogin(loginForm)
        .then((res) => {
          console.log(res)
          ElNotification({
            title: 'Success',
            message: res,
            type: 'success',
          })
          $router.push('/')
        })
        .catch((error) => {
          console.log('error', error)
          ElNotification({
            title: 'Error',
            message: error.message,
            type: 'error',
          })
        })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
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
    .el-form-item {
      margin-bottom: 25px;
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
