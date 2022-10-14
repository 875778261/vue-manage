<template>
    <div class="map-view">
        <h1>地图概览</h1>
        <div id="main"></div>
    </div>
</template>

<script>
import geoJson from '@/assets/mapData.json'
export default {
    data() {
        return {

        }
    },
    created() {


    },
    mounted() {
        let myChart = this.$echarts.init(document.getElementById('main'))
        this.$echarts.registerMap('china', geoJson)
        console.log(geoJson);
        let option = {
            backgroundColor:'rgb(121,145,209)',
            geo: {
                map: 'china',
                aspectScale: 0.75,//地图长宽比
                zoom: 1.1,
                regions: [{
                    name: '南海诸岛'
                }]
            },
            series: [{
                //配置地图相关参数,绘制地图，关于地图图标的相关设置
                type: 'map',
                zoom: 1.1,
                map: 'china'
            }]
        }

        myChart.setOption(option)

    }
}
</script>

<style lang="scss">
.map-view {
    width: 100%;

    #main {
        width: 100%;
        height: 600px;
    }
}
</style>