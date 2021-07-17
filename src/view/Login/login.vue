<template>
  <div class="login">
      <el-card class="login-card">
          <div slot="header">Login</div>
          <el-form ref="Loginform" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" @click="handleLogin">SIGN IN</el-button>
              <el-button>SIGN OUT</el-button>
          </el-form-item>
      </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [{ required: true, message:'请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message:'请输入密码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        handleLogin () {
            this.$refs.Loginform.validate(valid => {
                if (valid) {
                    // 向后台提交登录信息
                    localStorage.setItem('token', '后台拿到的token令牌')
                    localStorage.setItem('loginTime', new Date().getTime())
                    localStorage.setItem('expiresIn', '后台拿到的令牌过期时间')
                    localStorage.setItem('role', '当前账号的权限码')
                    localStorage.setItem('userInfo', this.form.username)
                    this.$store.state.role = 'admin'
                    this.$router.push('/home')
                    this.$message.success('登录成功')
                }
            })
        }
    }
}
</script>

<style scoped>
.login{
    display: flex;
    width: 100%;
    height: 100%;
    background: url() cover no-repeat;
    justify-content: center;
}
.login-card{
    height: 300px;
    width: 500px;
    margin-top: 200px;
}
</style>