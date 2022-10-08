<template>
    <div>
        <h1>数据概览</h1>

        <div class="data-view">

            <el-card>
                <div id="main1"></div>
            </el-card>
            <el-card>
                <div id="main2"></div>
            </el-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        drawCharts(legend, xAxis, series) {
            let chart1 = this.$echarts.init(document.getElementById('main2'))
            let option = {
                title:
                    { text: '大标题哦' },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: legend
                },
                xAxis: {
                    data: xAxis
                },
                yAxis: {

                },
                series: series

            }
        }
    },
    mounted() {
        let dataChart = this.$echarts.init(document.getElementById('main1'))
        dataChart.setOption({
            title:
                { text: '大标题哦' },
            tooltip: {

            },
            xAxis: {
                data: ['一组', '二组', '三组', '四组',]
            },
            yAxis: {
                //data: ['一组', '二组', '三组', '四组',]
            },
            series: [
                {
                    name: '销量',
                    //type: 'bar',//柱状
                    type: 'line',//折线
                    data: [5, 20, 80, 10, 10, 20]
                }
            ]

        })
    }
}
</script>

<style lang="scss" >
.data-view {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 50%;

        #main1,
        #main1 {
            height: 500px;
        }
    }
}
</style>