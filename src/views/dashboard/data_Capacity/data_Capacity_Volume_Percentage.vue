<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    VolumePercentage: {
        type: Object,
        default: {},
        required: true,
    },
});
const barChartOptions = {

    title: {
        text: props.VolumePercentage.title_text_data,
        left: "center",
        top: "center",
        textStyle: {
            fontSize: 35
        },
    },
    tooltip: {
        trigger: 'item'
    },
    color: ['#7585a2', '#e8e8e8'],
    series: [
        {
            type: 'pie',
            radius: ['70%', '60%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            labelLine: {
                show: false
            },
            data: props.VolumePercentage.series_data
        }
    ]
};

</script>
<style lang='scss' scoped>
</style>