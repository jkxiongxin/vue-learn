<template>
    <el-row>
        <el-col>
            <el-input placeholder="请输入内容" v-model="search">
                <el-button slot="append" icon="search" @click="searchData()"></el-button>
            </el-input>
            <el-button type="info">新增信息</el-button>
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
            <el-pagination
              @current-change="handleCurrentChange"
              :current-page.sync="pagination.pageIndex"
              :page-size="pagination.pageSize"
              layout="prev, pager, next, jumper"
              :total="pagination.total">
            </el-pagination>
        </el-col>
    </el-row>
</template>
<script>
export default {
  data () {
    return {
        search: '',
        pagination:{
            'pageSize': 10,
            'pageIndex': 1,
            'total': 100
        },
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
        console.log("修改的序号为" + index);
    },
    toDelete(index){
        console.log("删除的序号为" + index);
    },
    searchData(){
        console.log("进入搜索方法，搜索内容为" + this.search);
        var params = {
            pageSize: this.pagination.pageSize,
            pageIndex: this.pagination.pageIndex
        }
        this.$http.get("/mock/users",{
            params: params
        }).then(
            success => {
                this.tableData = success.body
            },
            error => {
                this.$message({
                    type: 'error',
                    message: '获取数据失败'
                })
            }
        );
    },
    handleCurrentChange(index){
        console.log("当前页码改变为" + index);
    }
  }
}
</script>