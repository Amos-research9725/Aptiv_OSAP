<template>
    <div class="container" ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, toRefs, shallowRef, computed } from "vue";
import * as echarts from "echarts";
import { useStore } from '@/store/index'
const store = useStore()
const status = computed(() => {
    return store.getters['getCollapse']
})

const props = defineProps({
    options: {
        type: Object,
        default: {},
        required: true,
    },
});
const { options } = toRefs(props);
const container = shallowRef();
const chart = shallowRef();
onMounted(() => {
    chart.value = echarts.init(container.value);
    chart.value.setOption(props.options);
    window.addEventListener("resize", (() => {
        setTimeout(() => { // 避免多图同时加载卡顿
            chart.value.resize();
        }, 200)

    }));
}
);
watch(
    options,
    (newOptions) => {
        chart.value.setOption(newOptions);
    },
    { deep: true },
);

watch(
    status,
    () => {
        setTimeout(() => {
            chart.value.resize()
        }, 200)

    },
)
</script>

<style scoped>
.container {
    width: 100%;
    height: 500px;
}
</style>