<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    TotalSpace: {
        type: Object,
        default: {},
        required: true,
    },
});
const barChartOptions = {
    series: [{
        type: 'liquidFill',
        radius: '65%',
        data: props.TotalSpace.series_data,
        shape: 'circle',
        label: {
            color: '#000',
            insideColor: 'transparent',
            fontSize: 35,
            fontWeight: 'bold',
        },
        backgroundStyle: {
            color: '#fff'
        },
        color: [{
            type: 'linear',
            x: 0,
            y: 1,
            x2: 0,
            y2: 0,
            colorStops: [{
                offset: 1,
                color: ['#f0f2f5'], // 0% 处的颜色
            }, {
                offset: 0,
                color: ['#7585a2'], // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
                borderColor: '#7585a2',
                borderWidth: 3
            }
        }
    }]
};

</script>
<style lang='scss' scoped>
</style>