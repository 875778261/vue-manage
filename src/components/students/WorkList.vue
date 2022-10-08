<template>
    <div class="work-list">
        <h1>work列表</h1>
        <!--  /* 1:1-10,2:11-20 slice((当前页数-1)*每页条数,当前页数*当前条数) */ -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="pageSizes" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>


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
export default {
    data() {
        return {
            tableData: [],
            total: null,
            currentPage: 1,
            pageSizes: [10, 20, 30, 40],
            pageSize: 10,
            loading: true
        }
    },
    created() {
        /* getTableData('/works', this, {}, ['completed']) */
        getTableData('/works', this, { page: 1, size: 10 }, ['completed'])
    },
    computed: {
        getPageData() {
            let getPageData;
            getPageData = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)

            //如果tableData为空，数组的length为0，就无法使用，会报错想
            /* this.tableData==null?getPageData=this.tableData:getPageData = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize) */

            return getPageData

        }
    },
    methods: {
        handleSizeChange(val) {
            /* console.log(`每页 ${val} 条`);
            this.pageSize = val
            this.currentPage = 1
            console.log(`当前页: ${this.currentPage}`); */

            //后端分页

            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });


            this.pageSize = val
            this.currentPage = 1
            getTableData('/works', this, { page: this.currentPage, size: val }, ['completed'])
            console.log(`每页 ${val} 条`);
            console.log(`当前页: ${this.currentPage}`);

            loading.close();
        },
        handleCurrentChange(val) {
            /* console.log(`当前页: ${val}`);
            this.currentPage = val */

            //后端分页
            const loading = this.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
            });
            getTableData('/works', this, { page: val, size: this.pageSize }, ['completed'])
            console.log(`当前页: ${val}`);
            this.currentPage = val
            loading.close();


        }
    },

}
</script>

<style lang="scss" >
.work-list {
    .el-pagination {
        margin: 20px auto;
        text-align: left;
    }
}
</style>