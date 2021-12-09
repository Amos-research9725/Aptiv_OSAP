<template>
    <Chart :options="barChartOptions" style="height: 160px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    Server: {
        type: Object,
        default: {},
        required: true,
    },
});
const barChartOptions = {
    title: {
        text: props.Server.title_text_data,
        left: "center",
        top: "center",
        textStyle: {
            fontSize: 25
        }
    },
    tooltip: {
        trigger: 'item'
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    color: ['#7585a2', '#e8e8e8'],
    series: [
        {
            type: 'pie',
            radius: ['65%', '75%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            data: props.Server.series_data
        }
    ]
};

</script>
<style lang='scss' scoped>
</style>