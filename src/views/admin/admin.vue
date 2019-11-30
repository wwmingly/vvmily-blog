<template>
  <el-container>
    <el-aside width="200px">
      <div class="admin-login"></div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect"
        background-color="#1f7994" text-color="#fff">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">文档管理</el-menu-item>
          <el-menu-item index="2-2">文档编辑</el-menu-item>
          <el-menu-item index="2-3"></el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header class="admin-header">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>vvmily</span>
      </el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'Admin',
    data() {
      return {
        activeIndex: ''
      }
    },
    created() {},
    mounted() {},
    methods: {
      handleSelect() {}
    }
  }

</script>
<style scoped>
  .el-aside {
    height: calc(100vh);
  }

  .admin-login {
    height: 60px;
  }

  .el-menu {
    border-right: none;
  }

  .el-main {
    background: #fff;
  }

  .el-header {
    width: 100%;
    background: #1f7e94d1;
    text-align: right;
    font-size: 14px;
    color: #fff;
    line-height: 60px;
  }

  .el-header i {
    color: #fff;
  }

</style>
