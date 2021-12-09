<template>
    <el-icon @click="changeIcon" class="fa-icons">
        <component class="icons" :is="status ? CaretRight : CaretLeft" />
    </el-icon>
</template>
<script setup lang='ts'>
import { ref, computed } from 'vue'
import { CaretRight, CaretLeft } from '@element-plus/icons'
import { useStore } from '@/store/index'
const store = useStore()
const status = computed(() => {
    return store.getters['getCollapse']
})
const changeIcon = () => {
    store.commit('setCollapse', !status.value)
}
</script>
<style lang='scss' scoped>
.fa-icons {
    display: flex;
    align-items: center;
    font-size: 25px;
    margin-right: 15px;
    .icons {
        color: #f84018;
    }
}
</style>