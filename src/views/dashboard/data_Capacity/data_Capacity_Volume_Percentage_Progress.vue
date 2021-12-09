<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    VolumePercentageProgress: {
        type: Object,
        default: {},
        required: true,
    },
});
const barChartOptions = {
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: props.VolumePercentageProgress.xAxis_data
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            data: props.VolumePercentageProgress.series_data,
            type: 'line',
            symbol: 'none',
            areaStyle: {
                color: '#7585a2'
            }
        }
    ]
};

</script>
<style lang='scss' scoped>
</style>