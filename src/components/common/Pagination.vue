<template>
    <div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
            :page-sizes="pageSizes" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="total"
            :url="url">
        </el-pagination>
    </div>
</template>

<script>
import { getTableData, } from '@/utils/table'
export default {
    props: {
        'total': Number,
        'url': String,
    },
    created() {
        /* getTableData('/works', this, {}, ['completed']) */
        getTableData('/works', this.$parent, { page: 1, size: 10 }, ['completed'])
    },
    data() {
        return {
            currentPage: 1,
            pageSizes: [10, 20, 30, 40],
            pageSize: 10,
        }
    },
    computed: {
        getPageData() {
            let getPageData;
            getPageData = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
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
            getTableData('/works', this.$parent, { page: this.currentPage, size: val }, ['completed'])
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
            getTableData('/works', this.$parent, { page: val, size: this.pageSize }, ['completed'])
            console.log(`当前页: ${val}`);
            this.currentPage = val
            loading.close();


        }
    },
}
</script>

<style>

</style>