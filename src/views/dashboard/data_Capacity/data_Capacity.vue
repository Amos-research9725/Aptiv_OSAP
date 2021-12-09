<template>
    <div class="bk">
        <el-card shadow="always" class="card">
            <template #header>
                <div class="card-header">
                    <span>Project Bar</span>
                </div>
            </template>
            <ProjectBar
                :ProjectBar_data="Chart_datas.ProjectBar_data"
                v-if="Chart_datas.ProjectBar_data.xAxis_data.length"
            ></ProjectBar>
        </el-card>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Total Usage</span>
                        </div>
                    </template>
                    <TotalUsage
                        :TotalUsage_data="Chart_datas.TotalUsage_data"
                        v-if="Chart_datas.TotalUsage_data.series_data.length"
                    />
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Prj Distribution</span>
                        </div>
                    </template>
                    <PrjDistribution
                        :PrjDistribution_data="Chart_datas.PrjDistribution_data"
                        v-if="Chart_datas.PrjDistribution_data.series_data.length"
                    />
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Prj Distribution Ingress Progress</span>
                        </div>
                    </template>
                    <PrjLine
                        :PrjLine_data="Chart_datas.PrjLine_data"
                        v-if="Chart_datas.PrjLine_data.series_data.length"
                    />
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Total Space</span>
                        </div>
                    </template>
                    <TotalSpace
                        :TotalSpace="Chart_datas.TotalSpace_data"
                        v-if="Chart_datas.TotalSpace_data.series_data.length"
                    />
                </el-card>
            </el-col>
            <el-col :span="8">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Volume Percentage</span>
                        </div>
                    </template>
                    <VolumePercentage
                        :VolumePercentage="Chart_datas.VolumePercentage_data"
                        v-if="Chart_datas.VolumePercentage_data.series_data.length"
                    />
                </el-card>
            </el-col>
            <el-col :span="10">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>Volume Percentage Progress</span>
                        </div>
                    </template>
                    <VolumePercentageProgress
                        :VolumePercentageProgress="Chart_datas.VolumePercentageProgress_data"
                        v-if="Chart_datas.VolumePercentageProgress_data.series_data.length"
                    />
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="4" v-for="server in Chart_datas.servers_data">
                <el-card shadow="always" class="card">
                    <template #header>
                        <div class="card-header">
                            <span>{{ server.name }}</span>
                        </div>
                    </template>
                    <Server :Server="server" v-if="Chart_datas.servers_data.length" />
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, toRefs, shallowRef, onBeforeMount } from "vue";
import axios from 'axios'
import ProjectBar from './data_Capacity_Project_Bar.vue'
import TotalUsage from './data_Capacity_Total_Usage.vue'
import PrjDistribution from './data_Capacity_Prj_Distribution.vue'
import PrjLine from './data_Catrgory_Prj_Distribution _Ingress_Progress.vue'
import TotalSpace from './data_Capacity_Total_Space.vue'
import VolumePercentage from './data_Capacity_Volume_Percentage.vue'
import VolumePercentageProgress from './data_Capacity_Volume_Percentage_Progress.vue'
import Server from './data_Capacity_Server.vue'

const Chart_datas = ref({
    ProjectBar_data: {
        'xAxis_data': [],
        'series_data': []
    },
    TotalUsage_data: {
        series_data: []
    },
    PrjDistribution_data: {
        series_data: [

        ]
    },
    PrjLine_data: {
        legend_data: [],
        xAxis_data: [],
        series_data: []
    },
    TotalSpace_data: {
        series_data: []
    },
    VolumePercentage_data: {
        series_data: [],
        title_text_data: ""
    },
    VolumePercentageProgress_data: {
        xAxis_data: [],
        series_data: []
    },
    servers_data: ref([
        {
            name: "ser1",
            series_data:
                [
                    { value: 70, name: 'UnUse' },
                    { value: 70, name: 'Use' },
                ],
            title_text_data: "30%"
        }
    ])

})



axios.post('http://10.245.69.109:5000/get_Data_Capacity_vue')
    .then(res => {
        Chart_datas.value = res.data
    })
    .catch(err => {
        console.log(err);
    })





</script>
<style lang='scss' scoped>
.bk {
    .card {
        margin-bottom: 20px;
    }
}
</style>