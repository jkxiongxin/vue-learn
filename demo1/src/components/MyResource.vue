<template>
    <el-row>
        <el-col>
            <el-table
            :data="tableData"
            border
            style="width: 100%">
                <el-table-column
                  prop="name"
                  label="姓名"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="age"
                  label="年龄"
                  width="180">
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="200">
                    <template scope="scope">
                        <el-button type="info" @click="openUpdateDialog(scope.$index)">修改</el-button>
                        <el-button type="danger" @click="toDelete(scope.$index)">删除</el-button>
                    </template>
                </el-table-column>
          </el-table>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
        tableData:[
            {
                'name': 'xx',
                'age': 15
            },
            {
                'name': 'xx1',
                'age': 16
            }
        ]
    }
  }, methods: {
    openUpdateDialog(index){
        console.log(index);
    },
    toDelete(index){
        console.log(index);
    }
  }
}
</script>