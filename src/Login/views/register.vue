<template>
    <div class="root">
        <el-container>
            <Header></Header>
            <el-main>
                <el-form :model="loginObj" :rules="rules" ref="loginObj">
                    <div class="view-wrapper">
                        <div class="loginTitle clearfix">
                            <div class="title-content">
                                LOGO
                            </div>
                        </div>
                        <div class="main-content">
                            <el-form-item class="item-firstName" prop="firstName">
                                <el-input type="text" placeholder="请输入first name" v-model="loginObj.firstName" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-lastName" prop="lastName">
                                <el-input type="text" placeholder="请输入last name" v-model="loginObj.lastName" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-email" prop="email">
                                <el-input type="email" v-model="loginObj.email" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入邮件地址" clearable prefix-icon="el-icon-diy-youjian">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-iphone" prop="iphone">
                                <el-input type="text" v-model="loginObj.iphone" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入手机号码" clearable prefix-icon="el-icon-diy-shoujihao">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input type="password" v-model="loginObj.password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="设置6至20位登录密码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-confirmPassword" prop="confirmPassword">
                                <el-input type="password" v-model="loginObj.confirmPassword" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请再次输入登录密码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-gouxuan" prop="radioGouxuan">
                                <input v-model="loginObj.gouxuanValue" type="checkbox">勾选用户《用户服务协议》
                            </el-form-item>
                            <el-button type="primary" @click="loginSys('loginObj')">
                                <span style="font-family: Arvo">注&nbsp;&nbsp;&nbsp;&nbsp;册</span>
                            </el-button>
                            <el-form-item class="item-tools clearfix" prop="password">
                                <a @click="toLogin()" href="javascript:;">已有账号 , 立即登录</a>
                            </el-form-item>
                        </div>

                    </div>
                </el-form>
            </el-main>
        </el-container>
        <el-dialog class="loginDialog" title="提示" :visible.sync="dialogVisible" width="50%">
            <img src="../../img/img1.png" alt="">
            <h2>{{message}}</h2>
            <p>请妥善保管您的账户信息</p>
            <el-button v-if="isSuccess == 1" @click="toLogin()" plain>重新登录</el-button>
            <el-button v-if="isSuccess == 2" @click="closeDialog()" plain>返回修改</el-button>
        </el-dialog>
    </div>
</template>

<script>
    import Header from "../../components/Header"

    export default {
        data() {
            return {
                dialogVisible: false,
                isSuccess: 1,
                message: '',
                secure: '',
                loginObj: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    iphone: '',
                    password: '',
                    confirmPassword: '',
                    gouxuanValue: false
                },
                activeName: 'first',
                rules: {
                    firstName: [{
                        required: true,
                        message: "请输入first name",
                        trigger: "blur"
                    }],
                    lastName: [{
                        required: true,
                        message: "请输入last name",
                        trigger: "blur"
                    }],
                    email: [{
                            required: true,
                            message: '请输入邮箱地址',
                            trigger: 'blur'
                        },
                        {
                            type: 'email',
                            message: '请输入正确的邮箱地址',
                            trigger: 'blur'
                        }
                    ],
                    iphone: [{
                            required: true,
                            message: "请输入last name",
                            trigger: "blur",
                        },
                        {
                            pattern: /^1[34578]\d{9}$/,
                            message: '请输入正确的手机号格式'
                        }
                    ],
                    password: [{
                            required: true,
                            message: "请输入last name",
                            trigger: "blur"
                        },
                        {
                            min: 6,
                            max: 20,
                            message: '长度在 6 到 20 个字符',
                            trigger: 'change'
                        }
                    ],
                    confirmPassword: [{
                            required: true,
                            message: "请输入last name",
                            trigger: "blur"
                        },
                        {
                            min: 6,
                            max: 20,
                            message: '长度在 6 到 20 个字符',
                            trigger: 'change'
                        }
                    ],
                }
            }
        },
        components: {
            Header
        },
        methods: {
            loginSys(loginObj) {
                this.$refs.loginObj.validate(async (valid) => {
                    if (valid) {
                        if (this.loginObj.password != this.loginObj.confirmPassword) {
                            this.$message.info('两次密码不一致');
                            return;
                        }
                        if (!this.loginObj.gouxuanValue) {
                            this.$message.info('请勾选用户服务协议');
                            return;
                        }
                        const res = await this.$ajax.post(`/api/register`, this.loginObj);
                        if (res.data.code === 200) {
                            // this.$message.success(res.data.message);    
                            this.dialogVisible = true;
                            this.message = '注册成功';
                            this.isSuccess = 1;                     
                        } else {
                            this.dialogVisible = true;
                            this.message = '很遗憾注册失败';
                            this.isSuccess = 2;
                        }
                    } else {
                    }
                })
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            backBtn() {
                this.$confirm('是否退出登陆?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '退出成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消退出'
                    });
                });
            },
            toLogin() {
                this.$router.push('/login');
            }
        }
    }
</script>

<style scoped lang="less">
    .root {
        background-color: #70859c;
        height: 100%;
        width: 100%;
        position: absolute;
    }

    .view-wrapper {
        position: absolute;
        right: 15%;
        top: 47%;
        background-color: #fff;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 380px;
        height: 560px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        margin: auto;

        .loginTitle {
            background-color: #2e4d6f;
            width: 100%;
            height: 50px;

            .title-content {
                width: 80px;
                height: 80px;
                background-color: #fff;
                font-size: 20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 999;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                color: #9da5a7;
                font-weight: 700;
            }
        }


        .main-content {
            position: absolute;
            width: 100%;
            padding: 0 35px;
            box-sizing: border-box;
            top: 88px;
            z-index: 1000;

            .el-form-item {
                margin-bottom: 15px;
            }

            .item-gouxuan {
                margin-top: -10px;
                margin-bottom: 5px;
            }

            .el-button {
                width: 100%;
            }
        }

    }

    .el-main {
        position: absolute;
        width: 100%;
        margin-top: 60px;
        z-index: 999;
        height: calc(100vh - 60px);

        @-webkit-keyframes masked-animation {
            0% {
                background-position: 0 0;
            }

            100% {
                background-position: -100% 0;
            }
        }

    }
</style>