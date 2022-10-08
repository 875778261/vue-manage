<template>
    <div class="work-manage">
        <h1>work管理</h1>
        <!--  /* 1:1-10,2:11-20 slice((当前页数-1)*每页条数,当前页数*当前条数) */ -->
        <Pagination :total="total" :url="url"/>

        <!-- 表格 -->
        <el-table :data="tableData" v-loading="loading" border style="width: 100%">
            <el-table-column prop="id" label="用户ID" align="center">
            </el-table-column>
            <el-table-column prop="userId" label="所属班级" align="center">
            </el-table-column>
            <el-table-column prop="title" label="作业名称" align="center">
            </el-table-column>
            <el-table-column prop="completed_text" label="完成情况" align="center">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { getTableData } from '@/utils/table'
import Pagination from '@/components/common/Pagination.vue'
export default {
    created(){
        
    },
    components: {
        Pagination
    },
    data() {
        return {
            tableData: [],
            total: null,
            loading: true,
            url: '/works'
        }
    },


}
</script>

<style lang="scss" >
.work-manage {
    .el-pagination {
        margin: 20px auto;
        text-align: left;
    }
}
</style>