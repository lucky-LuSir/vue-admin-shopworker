<template>
    <div class="mailInforma">
        <div class="top cm-Layout">
            <div class="box">
                Address <span>
                    <i>+</i>
                </span>
            </div>
        </div>
        <div class="content cm-Layout">
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
        <el-steps :space="200" :active="1" finish-status="success" align-center>
            <el-step title="确认订单"></el-step>
            <el-step title="邮寄信息"></el-step>
            <el-step title="支付"></el-step>
            <el-step title="出货"></el-step>
        </el-steps>
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
    .mailInforma {
        padding-top: 20px;
    }

    .top {
        padding-left: 20px;
        margin-bottom: 20px;

        .box {
            width: 130px;
            height: 35px;
            display: flex;
            background-color: #f0f8fa;
            align-items: center;
            justify-content: space-around;

            span {
                width: 45px;
                height: 20px;
                background-color: #36c1aa;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            i {
                background-color: #f0f8fa;
                width: 20px;
                height: 20px;
                display: inline-block;
                border-radius: 50%;
                text-align: center;
                line-height: 20px;
            }
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
    .el-steps {
        justify-content: center;
    }
</style>