<template>
<el-row class="tac">
    <el-col>
      <el-menu default-active="/" class="el-menu-demo" :router="true" mode="horizontal" theme="dark">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/Publish">信息发布</el-menu-item>
        <el-menu-item index="/Management">信息发布管理</el-menu-item>
      </el-menu>
    </el-col>
    <el-col>
      <router-view></router-view>
    </el-col>
</el-row>
</template>


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
