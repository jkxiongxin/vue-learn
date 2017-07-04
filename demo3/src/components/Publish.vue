<template>
    <el-row class="tac1">
    <el-col>
      <el-menu default-active="/" class="el-menu-demo" :router="true" mode="horizontal" theme="blue">
        <el-menu-item index="/Note">竞赛通知</el-menu-item>
        <el-menu-item index="/Result">竞赛成果</el-menu-item>
        <el-menu-item index="/Test">点开有惊喜</el-menu-item>
      </el-menu>
    </el-col>
    <el-col>
      <router-view></router-view>
    </el-col>
</el-row>
</template>