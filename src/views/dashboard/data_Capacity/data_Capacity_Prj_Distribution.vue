<template>
    <Chart :options="barChartOptions" style="height: 350px;"></Chart>
</template>
<script setup lang="ts">
import Chart from '@/views/Charts.vue'
const props = defineProps({
    PrjDistribution_data: {
        type: Object,
        default: {},
        required: true,
    },
});

const barChartOptions = {
    color: ['#f8b692', '#e87040', '#7c3118', '#d84a1b', '#f1a079'],
    tooltip: {
        trigger: 'item',
        formatter: "{b}: {c} TB"
    },
    series: [
        {
            name: 'Prj Distribution',
            type: 'pie',
            radius: '65%',
            data: props.PrjDistribution_data.series_data,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            label: {
                formatter: '{d}%',
                fontWeight: 'normal',
                fontSize: 15
            },
        }
    ]
};

</script>
<style lang='scss' scoped>
</style>