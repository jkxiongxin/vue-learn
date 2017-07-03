<template>
    <el-row>
        <el-col>
            <h2>数据双向绑定</h2>
            <el-form>
                <el-form-item label="输入">
                    <el-input v-model="name"></el-input>
                </el-form-item>
            </el-form>
            当前输入为：{{name}}
        </el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
        name: ''
    }
  }
}
</script>