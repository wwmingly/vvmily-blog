<template>
  <div class="login-box">
    <div class="login-cons">
      <div class="login-item">
        <el-input placeholder="请输入账号" v-model="input3">
          <template slot="prepend">账号：</template>
        </el-input>
      </div>
      <div class="login-item">
        <el-input placeholder="请输入密码" v-model="input3">
          <template slot="prepend">密码：</template>
        </el-input>
      </div>
      <div class="login-btn">
          <el-button type="primary">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {}
    },
    created() {},
    mounted() {},
    methods: {}
  }

</script>
<style scoped>
  .login-box {
    display: flex;
    height: calc(100vh);
    align-items: center;
    justify-content: center;
  }

  .login-cons {
    height: 200px;
    width: 300px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
    box-sizing: border-box;
    padding: 35px 20px 20px;
  }

  .login-item {
    margin-bottom: 20px;
  }
  .login-btn .el-button{
      width: 100%;
      background: #1f7994;
      border-color: #1f7994;
  }

</style>
