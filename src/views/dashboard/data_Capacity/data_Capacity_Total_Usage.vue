<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    TotalUsage_data: {
        type: Object,
        default: {},
        required: true,
    },
});
const barChartOptions = {
    series: [{
        type: 'liquidFill',
        radius: '65%',
        data: props.TotalUsage_data.series_data,
        amplitude: 20,
        shape: 'circle',
        label: {
            color: '#000',
            insideColor: 'transparent',
            fontSize: 35,
            fontWeight: 'bold',
            formatter: function (param: any) {
                return param.name;
            },
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
                color: ['#f8b692'], // 0% 处的颜色
            }, {
                offset: 0,
                color: ['#f94d26'], // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        outline: {
            show: true,
            borderDistance: 0,
            itemStyle: {
                borderColor: '#d84a1b',
                borderWidth: 3
            }
        }
    }]
};

</script>
<style lang='scss' scoped>
</style>