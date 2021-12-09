<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
import { watch } from "vue";
console.log("p_bar")
const props = defineProps({
    ProjectBar_data: {
        type: Object,
        default: {},
        required: true,
    },
});

const barChartOptions = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}"
    },
    xAxis: {
        type: 'category',
        data: props.ProjectBar_data.xAxis_data,
        axisTick: {
            show: false//不显示坐标轴刻度线
        },
        axisLine: {
            show: true,//不显示坐标轴线
        },
    },
    yAxis: {
        type: 'value',
        show: true,
        axisLine: {
            show: true,
            lineStyle: {
                type: "solid"
            }
        },
        splitLine: {
            show: false//不显示网格线
        },
    },
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
    },
    series: [
        {
            data: props.ProjectBar_data.series_data,
            type: 'bar',
            barCategoryGap: '80%',//同一系列的柱间距离，默认为类目间距的20%，可设固定值
            color: '#7585a2',
            label: {
                show: true, //开启显示
                formatter: '{c} TB',
                position: 'top', //在上方显示
                //数值样式
                color: 'black',
                fontSize: 16

            }
        }
    ]
};
</script>
<style lang='scss' scoped>
</style>