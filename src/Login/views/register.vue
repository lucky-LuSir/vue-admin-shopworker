<template>
    <div class="root">
        <el-container>
            <Header></Header>
            <el-main :class="isLogin ? 'isloginMain' : 'notLoginMain'">
                <el-form :model="loginObj" :rules="rules" ref="loginObj">
                    <div class="banner">
                        <div class="view-wrapper">
                            <div class="loginTitle clearfix">
                                <div class="title-content">
                                    LOGO
                                </div>
                            </div>
                            <div class="main-content">
                                <el-form-item class="item-username" prop="username">
                                    <el-input type="text" placeholder="请输入username" v-model="loginObj.username" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-firstName" prop="firstName">
                                    <el-input type="text" placeholder="请输入first name" v-model="loginObj.firstName" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-lastName" prop="lastName">
                                    <el-input type="text" placeholder="请输入last name" v-model="loginObj.lastName" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-email" prop="email">
                                    <el-input type="email" v-model="loginObj.email" class="input-text" placeholder="请输入邮件地址" clearable prefix-icon="el-icon-diy-youjian">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-iphone" prop="iphone">
                                    <el-input type="text" v-model="loginObj.iphone" class="input-text" @blur="hasIphone()" placeholder="请输入手机号码" clearable prefix-icon="el-icon-diy-shoujihao">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-password" prop="password">
                                    <el-input type="password" v-model="loginObj.password" class="input-text" autocomplete="new-password" placeholder="设置6至20位登录密码" clearable prefix-icon="el-icon-diy-mima">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-password2" prop="password2">
                                    <el-input type="password" v-model="loginObj.password2" class="input-text" placeholder="请再次输入登录密码" clearable prefix-icon="el-icon-diy-mima">
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
import Header from "../components/Header"


export default {
    data () {
        return {
            isLogin: false,
            dialogVisible: false,
            isSuccess: 1,
            message: '',
            secure: '',
            loginObj: {
                username: '',
                firstName: '',
                lastName: '',
                email: '',
                iphone: '',
                password: '',
                password2: '',
                gouxuanValue: false
            },
            activeName: 'first',
            rules: {
                username: [{
                    required: true,
                    message: "请输入username",
                    trigger: "blur"
                }],
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
                password2: [{
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
    created () {
        let _mainObj = window.sessionStorage.getItem("_mainObj");
        if (!_mainObj) {
            return;
        } else {
            _mainObj = JSON.parse(_mainObj);
        }
        if (!_mainObj.username) {
            this.isLogin = false;
        } else {
            this.isLogin = true;
            this.userName = _mainObj.username;
        }
    },
    components: {
        Header
    },
    methods: {
        async hasIphone () {
            let iphone = this.loginObj.iphone;
            console.log(iphone)
            const res = await this.$ajax.get(`/mobiles/${iphone}/count/`, {
                'mobiles': iphone
            });
            console.log(res)
            if (res.data.count === 1) {
                this.$message.info("当前手机号已注册");
                return;
            } else {
                this.$message.info("当前手机号可以注册");
                return;
            }
        },
        loginSys (loginObj) {
            this.$refs.loginObj.validate(async (valid) => {
                if (valid) {
                    if (this.loginObj.password != this.loginObj.password2) {
                        this.$message.info('两次密码不一致');
                        return;
                    }
                    if (!this.loginObj.gouxuanValue) {
                        this.$message.info('请勾选用户服务协议');
                        return;
                    }
                    console.log(this.loginObj)
                    var registerObj = {
                        password: this.loginObj.password,
                        password2: this.loginObj.password2,
                        username: this.loginObj.username,
                        email: this.loginObj.email,
                        first_name: this.loginObj.first_name,
                        last_name: this.loginObj.last_name,
                        mobile: this.loginObj.iphone,
                        gender: "222",
                        company: "夏数",
                        allow: "true"
                    }
                    const res = await this.$ajax.post(`/users/`, registerObj);
                    console.log(res)
                    if (!res.token) {
                        // this.$message.success(res.data.message);    
                        this.dialogVisible = true;
                        this.message = '注册成功';
                        this.isSuccess = 1;
                    } else {
                        this.dialogVisible = true;
                        this.message = '很遗憾注册失败';
                        this.isSuccess = 2;
                    }
                } else { }
            })
        },
        handleClick (tab, event) {
            console.log(tab, event);
        },
        backBtn () {
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
        toLogin () {
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

.el-main {
    position: absolute;
    width: 100%;
    margin-top: 60px;
    z-index: 999;
    @-webkit-keyframes masked-animation {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -100% 0;
        }
    }
}
.notLoginMain {
    height: auto;
    background: #70859c;
    padding-bottom: 20px;
}
.banner {
    width: 980px;
    margin: 0 auto;
}
.view-wrapper {
    // background-color: #fff;
    // width: 380px;
    // -webkit-box-sizing: border-box;
    // box-sizing: border-box;
    // text-align: center;
    // margin-top: 10vh;
    // margin-left: 60vw;
    float: right;
    margin-top: 13vh;
    background-color: #f0f8fa;
    width: 380px;
    // height: 400px;
    box-sizing: border-box;
    text-align: center;

    .loginTitle {
        position: relative;
        height: 50px;
        background-color: #2e4d6f;
        .title-content {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            background-color: #fff;
            color: #9da5a7;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            line-height: 80px;
            text-align: center;
        }
    }

    .main-content {
        width: 100%;
        padding: 0 35px;
        padding-top: 35px;
        box-sizing: border-box;
        z-index: 1000;

        .el-form-item {
            margin-bottom: 15px;
        }
        /deep/ .el-form-item:first-child {
            margin-top: 15px;
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
</style>