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
import { getDataview } from '@/api'
export default {
    data() {
        return {

        }
    },
    
    methods: {
        drawCharts(legend, xAxis, series) {
            let chart1 = this.$echarts.init(document.getElementById('main2'))
            let option1 = {
                title: { text: '大标题2' },
                tooltip: {},
                legend: {data: legend},
                xAxis: {
                    type: 'category',
                    data: xAxis
                },
                yAxis: {
                    type: 'value',
                },
                series: series
            }
            chart1.setOption(option1)
        },
    },
    created() {
        getDataview().then(res => {
            //console.log('res', res.data.data);
            if (res.data.status === 200) {
                let { legend, xAxis, series } = res.data.data
                this.drawCharts(legend, xAxis, series)
            }
        }).catch(err => {
            throw err
        })
    },
    mounted() {
        let dataChart = this.$echarts.init(document.getElementById('main1'))
        dataChart.setOption({
            title:
                { text: '大标题1' },
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
        #main2 {
            height: 500px;
        }
    }
}
</style>