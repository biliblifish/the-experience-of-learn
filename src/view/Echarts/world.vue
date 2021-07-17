<template>
    <div id="echartsMy" style="width: 100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    data() {
        return {
            regionData: [
                { name: '', value: 100 },
                { name: '', value: 50 },
                { name: '', value: 45 },
                { name: '', value: 99 }
            ]
        }
    },
    mounted() {},
    methods: {
        initWorld() {
            let echartsObj = echarts.init(document.getElementById('echartsMy'))
            const option = {
                title: {
                    show: true,
                    text: '世界地图数据'
                },
                tooltip: {},
                series: []
            }
        }
    }
}
</script>

<style></style>
