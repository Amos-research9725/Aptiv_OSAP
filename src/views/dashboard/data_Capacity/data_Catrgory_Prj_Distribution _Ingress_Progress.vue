<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    PrjLine_data: {
        type: Object,
        default: {},
        required: true,
    },
});

const barChartOptions = {
    color: ['#f8b692', '#e87040', '#7c3118', '#d84a1b', '#f1a079'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: props.PrjLine_data.legend_data
    },
    grid: {
        left: '3%',
        right: '7%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: props.PrjLine_data.xAxis_data
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: props.PrjLine_data.series_data
};

</script>
<style lang='scss' scoped>
</style>