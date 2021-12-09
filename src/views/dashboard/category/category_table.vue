<template>
    <el-table
        stripe
        v-loading="loading"
        :data="tableData?.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
        style="width: 100%"
    >
        <el-table-column label="No." type="index" :index="1" />
        <el-table-column prop="file_name" label="Log_Name" width="400" />
        <el-table-column prop="file_size" label="Size" />
        <el-table-column prop="vehicle_model" label="vehicle_model" />
        <el-table-column prop="vehicle_number" label="vehicle_number" />
        <el-table-column prop="test_software_v" label="SW version" />
    </el-table>
    <br />
    <el-pagination
        align="center"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 50, 100, 200]"
        :page-size="pageSize"
        :pager-count="13"
        layout="sizes,prev,pager,next,jumper,total"
        :total="tableData?.length"
    ></el-pagination>
</template>
<script setup lang='ts'>
import { defineComponent, ref } from 'vue'

const props = defineProps({
    tableData: Array,
    loading: Boolean
})

const currentPage = ref(1) // 当前页码
const pageSize = ref(5) // 每页的数据条数

//每页条数改变时触发 选择一页显示多少行
const handleSizeChange = (val: number) => {
    console.log(`每页 ${val} 条`);
    currentPage.value = 1;
    pageSize.value = val;
}

//当前页改变时触发 跳转其他页
const handleCurrentChange = (val: number) => {
    console.log(`当前页: ${val}`);
    currentPage.value = val;
}
</script>
<style lang='scss' scoped>
</style>