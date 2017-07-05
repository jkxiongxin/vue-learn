<template>
  <el-row class="tac">
    <el-col>
      <el-menu default-active="/" :router="true" class="el-menu-demo" mode="horizontal" theme="dark">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="data">双向绑定</el-menu-item>
        <el-menu-item index="resource">resource</el-menu-item>
      </el-menu>
    </el-col>
    <el-col>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
