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
                        <div class="view-tabs">
                            <el-form-item class="item-keyword" prop="keyword">
                                <el-input placeholder="请输入手机号" v-model="loginObj.keyword" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input v-model="loginObj.password" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入密码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-button type="primary" @click="loginSys('loginObj')">
                                <span style="font-family: Arvo">{{ $t('login.signin') }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </el-button>
                            <el-form-item class="item-tools clearfix">
                                <!-- <p class="zhuangtai"><input type="checkbox" value="1" v-model="redoaParam">{{ $t('login.status') }}</p> -->
                                <div class="link">
                                    <a class="first" @click="registerBtn()" href="javascript:;">{{ $t('login.register') }}</a>
                                    <a class="two" @click="editPassword()" href="javascript:;">{{ $t('login.forget') }}</a>
                                </div>
                            </el-form-item>
                            <el-form-item class="item-login">
                                <a style="margin-top: 5px;" href="#"><i class="iconfont el-icon-diy-weixin"></i></a>
                                <a href="#">谷歌登录</a>
                                <a href="#">facebook登录</a>
                            </el-form-item>
                        </div>
                    </div>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Header from "../components/Header"
    export default {
        data() {
            return {
                redoaParam: '1',
                secure: '',
                loginObj: {
                    keywork: '',
                    password: ''
                },
                activeName: 'first',
                rules: {
                    keyword: [{
                        required: true,
                        message: "请输入手机号",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "请输入密码",
                        trigger: "blur"
                    }]
                }
            }
        },
        components: {
            Header,
        },
        methods: {
            loginSys(formName) {
                // this.loginObj.password = this.$md5(this.secure);
                if (this.loginObj) {
                    this.$refs[formName].validate(async (valid) => {
                        if (valid) {
                            var loginObj = {
                                username: this.loginObj.keyword,
                                password: this.loginObj.password,
                            }
                            const res = await this.$ajax.post(`/authorizations/`, loginObj);
                            if (res.status === 200) {
                                this.$router.push('/index');
                                var _mainObj = {
                                    'user_id': res.data.user_id,
                                    'token': res.data.token,
                                    'username': res.data.username
                                }
                                let token = _mainObj.token;
                                _mainObj = JSON.stringify(_mainObj);
                                window.sessionStorage.setItem('_mainObj', _mainObj);
                                window.sessionStorage.setItem("authentication", JSON.stringify(token));
                                this.$cookieStore.addCookie(
                                    "gn_request_token",
                                    JSON.stringify(token),
                                    0
                                );
                            }
                        }
                    });
                }
            },
            handleClick(tab, event) {
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
            registerBtn() {
                this.$router.push('/register')
            },
            editPassword() {
                this.$router.push('/editPassword')
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
        background-color: #f0f8fa;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 380px;
        height: 400px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        margin: auto;

        .view-tabs {
            position: absolute;
            width: 100%;
            padding: 0 35px;
            padding-top: 35px;
            box-sizing: border-box;
            top: 75px;
            z-index: 1000;

            /deep/ .el-tabs__header {
                border: 0;
            }

            /deep/ .el-tabs__nav {
                border: 0;
                width: 100%;
            }

            /deep/ .el-tabs__item {
                border: 0;
                color: #4a5255;
                font-weight: 600;
                width: 50%;
                font-size: 16px;
            }

            /deep/ .el-tabs__item.is-active {
                border-bottom: 1px solid #218bf9;
                color: #218bf9;
            }

            /deep/ .el-button {
                width: 100%;
                margin-top: 6px;
            }

            /deep/ .el-input__icon {
                margin-top: 2px;
            }
        }

        .item-tools {
            margin-top: 6px;
            margin-bottom: 0;

            .zhuangtai {
                float: left;
                color: #adb5b8;

                input[type="checkbox"] {
                    margin-right: 5px;
                }
            }

            .link {
                // width: 60%;
                float: right;

                a {
                    color: #218bf9;
                    font-size: 13px;
                }
                .first {
                    margin-right: 20px;
                }
            }

            .two {
                float: right;
            }
        }

        .item-login {
            float: left;
            display: flex;
            align-items: center;
            width: 100%;

            .iconfont {
                font-size: 30px;
            }

            /deep/ .el-form-item__content {
                width: 100%;
                display: flex;
                align-items: center;
                white-space: nowrap;
            }

            a {
                font-size: 20px;
                vertical-align: middle;
                margin-right: 12.7%;
                color: #21292b;
            }

            a:last-child {
                margin-right: 0;
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