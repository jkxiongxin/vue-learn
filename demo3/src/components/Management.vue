<template>
    <el-row>
        <el-col>
            <h2>数据双向绑定</h2>
            <el-form>
                <el-form-item label="输入">
                    <el-input v-model="time"></el-input>
                </el-form-item>
                <el-button @click="onSubmit">我这么可爱不点一下再走吗</el-button>
            </el-form>
            当前时间为：{{time}}
        </el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
        time: ''
    }
  },methods: {
  onSubmit(){
      this.$message({
          'type': 'info',
          'message': '触发表单提交事件，当前时间为' + this.time
      });
  }
}
}
</script>