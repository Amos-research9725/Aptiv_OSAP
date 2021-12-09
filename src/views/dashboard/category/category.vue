<template>
    <el-card shadow="hover">
        <el-form :model="form" :rules="rules" ref="form_ref" status-icon label-width="100px">
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="layer1" prop="layer.value_layer1">
                        <el-select
                            v-model="form.layer.value_layer1"
                            placeholder="道路类型"
                            style="width: 100%;"
                            clearable
                        >
                            <el-option
                                v-for="item in select_data.value_layer1_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="layer2">
                        <el-select
                            v-model="form.layer.value_layer2"
                            multiple
                            collapse-tags
                            placeholder="交通标识"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.value_layer2_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item label="layer3">
                        <el-select
                            v-model="form.layer.value_layer3"
                            multiple
                            collapse-tags
                            placeholder="道路临时设施"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.value_layer3_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="layer4" prop="layer.value_layer4">
                        <el-select
                            v-model="form.layer.value_layer4"
                            multiple
                            collapse-tags
                            placeholder="目标类型"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.value_layer4_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="layer5">
                        <el-select
                            v-model="form.layer.value_layer5"
                            multiple
                            collapse-tags
                            placeholder="天气"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.value_layer5_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="layer6">
                        <el-select
                            v-model="form.layer.value_layer6"
                            multiple
                            collapse-tags
                            placeholder="V2X信息"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.value_layer6_option"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="Period" prop="log.period">
                        <el-date-picker
                            v-model="form.log.period"
                            value-format="YYYY-MM-DD"
                            type="daterange"
                            range-separator="To"
                            start-placeholder="Start date"
                            end-placeholder="End date"
                            style="width: 100%;"
                        ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Customer" prop="log.customer">
                        <el-select
                            v-model="form.log.customer"
                            clearable
                            placeholder="客户选择"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.customer"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Project" prop="log.project">
                        <el-select
                            v-model="form.log.project"
                            clearable
                            placeholder="项目选择"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.project"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="8">
                    <el-form-item label="SW version">
                        <el-select
                            v-model="form.log.sw_version"
                            multiple
                            collapse-tags
                            placeholder="软件版本"
                            style="width: 100%;"
                        >
                            <el-option
                                v-for="item in select_data.sw_version"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Architecture">
                        <el-checkbox-group v-model="form.log.architecture">
                            <el-checkbox label="1V" name="architecture"></el-checkbox>
                            <el-checkbox label="1R" name="architecture"></el-checkbox>
                            <el-checkbox label="3R" name="architecture"></el-checkbox>
                            <el-checkbox label="5R" name="architecture"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item>
                        <el-button style="background-color: black;" @click="submitForm">查询</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </el-card>

    <el-card shadow="hover" v-show="show">
        <el-row>
            <el-col :span="24">
                <div class="grid-content-foundlog">
                    <h3>
                        <i class="el-icon-info" style="margin-right:20px;"></i>
                        Found {{ tableData?.length }} logs
                    </h3>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <category_table :tableData="tableData" :loading="loading"></category_table>
            </el-col>
        </el-row>
    </el-card>
</template>
<script setup lang='ts'>
import { defineComponent, ref, reactive, unref } from 'vue'
import axios from 'axios'
import category_table from '../category/category_table.vue'
import { ElMessage } from 'element-plus'
//存放后台传值的容器
const form = reactive({
    layer: {
        value_layer1: [],
        value_layer2: [],
        value_layer3: [],
        value_layer4: [],
        value_layer5: [],
        value_layer6: []
    },
    log: {
        customer: '',
        project: '',
        sw_version: [],
        architecture: [],
        period: ''
    }

})

//校验rules
const rules = {
    layer: {},
    log: {
        customer: [
            {
                required: true,
                message: 'check the customer',
                trigger: 'change'
            }
        ],
        project: [
            {
                required: true,
                message: 'check the project',
                trigger: 'change'
            }
        ],
        period: [
            {
                required: true,
                message: 'check the date',
                trigger: 'change'
            }
        ]
    }
}

//渲染页面搜索栏使用
const select_data = ref({
    value_layer1_option: [
        {
            value: '1',
            label: '高速公路',
        },
        {
            value: '2',
            label: '都市快速路',
        },
        {
            value: '3',
            label: '国道',
        },
        {
            value: '4',
            label: '省道',
        },
        {
            value: '5',
            label: '县道',
        },
        {
            value: '6',
            label: '城市内部主要交通干道乡村村道',
        },
        {
            value: '7',
            label: '匝道',
        },
        {
            value: '8',
            label: '隧道',
        }
    ],
    value_layer2_option: [
        {
            value: '0',
            label: '其他',
        },
    ],
    value_layer3_option: [
        {
            value: '0',
            label: '其他',
        },
    ],
    value_layer4_option: [
        {
            value: '1',
            label: '汽车',
        },
        {
            value: '2',
            label: '卡车',
        },
        {
            value: '3',
            label: '摩托车',
        },
        {
            value: '4',
            label: '自行车',
        },
        {
            value: '5',
            label: '行人',
        },
        {
            value: '6',
            label: 'general object',
        },
        {
            value: '7',
            label: '动物',
        },
        {
            value: '8',
            label: '未知车辆',
        }
    ],
    value_layer5_option: [
        {
            value: '0',
            label: '其他',
        },
    ],
    value_layer6_option: [
        {
            value: '0',
            label: '其他',
        },
    ],
    customer: [
        {
            value: 'GWM',
            label: 'GWM',
        }
    ],
    project: [
        {
            value: 'IFV410',
            label: 'IFV410',
        }
    ],
    sw_version:
        [
            {
                value: '0',
                label: '其他',
            },
        ],

})

//搜索概览Logs显示的判断条件
const show = ref<boolean>(false)
const loading = ref<boolean>()

//category_table props使用
const tableData = ref<Array<{}>>()

//form表单ref
const form_ref = ref<any>(null)
const submitForm = async () => {
    await form_ref.value.validate((valid: boolean) => {
        if (valid) {
            show.value = true
            loading.value = true
            axios.post('http://10.245.69.109:5000/get_data_vue', {
                data: JSON.stringify(form)
            })
                .then(res => {
                    tableData.value = res.data.data
                    loading.value = false
                })
                .catch(err => {
                    console.log(err);
                })
        } else {
            show.value = false
            ElMessage({
                dangerouslyUseHTMLString: true,

                message: '<h3>customer/project/period is null</h3>',
                showClose: true,
                center: true,
                type: 'warning',
            })
        }

    })


}
//重置表单数据
const resetForm = () => {
    form_ref.value.resetFields()
    show.value = false
}
</script>

<style lang='scss' >
:root {
    --el-color-primary: #f84018;
}
.grid-content-foundlog {
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 30px;
    text-align: left;
    padding-left: 2%;
    background-color: #ffe3dc;
    border: 2px solid #f84018;
}
.el-row {
    margin-bottom: 10px; 
    &:last-child {
        margin-bottom: 0;
    }
}
</style>