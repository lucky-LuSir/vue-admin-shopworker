<template>
    <div class="root">
        <div class="view-wrapper cm-Layout">
            <div class="header">
                <el-button>个人信息</el-button>
                <el-button>修改密码</el-button>
                <el-button>修改地址</el-button>
                <el-button>历史订单</el-button>
            </div>
            <div class="content">
                <el-form class="form" :rules="rules" :label-position="labelPosition" ref="form" :model="form" label-width="80px">
                    <el-form-item label="Title :" prop="title">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option label="一" value="shanghai"></el-option>
                            <el-option label="二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item class="line" label="First name :" prop="Firstname">
                        <el-input placeholder="First name" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item class="line" label="Last name :" prop="Lastname">
                        <el-input placeholder="Last name" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Company :" prop="Company">
                        <el-input placeholder="输入公司名称" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="E-mail :" prop="email">
                        <el-input placeholder="输入邮件地址" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="Phone number :" prop="Phone">
                        <el-input placeholder="输入手机号" v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="onSubmit">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                labelPosition: 'left',
                rules: {
                    title: [{
                        required: true,
                        trigger: "blur"
                    }, ],
                    Firstname: [{
                        required: true,
                        trigger: "blur"
                    }],
                    Lastname: [{
                        required: true,
                        trigger: "blur"
                    }],
                    Company: [{
                        required: true,
                        trigger: "blur"
                    }],
                    email: [{
                        required: true,
                        trigger: "blur"
                    }],
                    Phone: [{
                        required: true,
                        trigger: "blur"
                    }],
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped lang="less">
    .root {
        padding: 0 30px;
    }

    .view-wrapper {
        width: 1000px !important;
    }

    .header {
        padding-left: 30px;
        margin-top: 20px;
        margin-bottom: 30px;

        /deep/ .el-button {
            background-color: #e5edf0 !important;
            border-bottom: 2px solid #bfc7ca;
            width: 200px;
            height: 35px;
        }
    }

    .content {
        /deep/ .el-form-item__label {
            width: 160px !important;
            font-size: 16px;
        }

        /deep/ .el-form-item__content {
            margin-left: 160px !important;
            text-align: left;
        }

        /deep/ .el-button {
            background-color: #e5edf0 !important;
            border-bottom: 2px solid #bfc7ca;
            width: 200px;
            height: 35px;
        }
    }
</style>