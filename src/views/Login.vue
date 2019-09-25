<template>
    <div class="root">
        <el-container>
            <el-header>
                <div class="title">
                    <h1 class="title_h1">菏泽</h1>
                    <div class="backBtn" @click="backBtn()">
                        <span>Log In</span>
                        <i class="iconfont el-icon-diy-geren2"></i>
                    </div>
                </div>
            </el-header>
            <el-main>
                <el-form :model="loginObj" :rules="rules" ref="loginObj">
                    <div class="view-wrapper">
                        <div class="loginTitle clearfix">
                            <div class="title-content">
                                LOGO
                            </div>
                        </div>
                        <el-tabs class="view-tabs" v-model="activeName" type="card" @tab-click="handleClick">
                            <el-tab-pane label="个人登录" name="first">
                                <el-form-item class="item-keyword" prop="keyword">
                                    <el-input placeholder="请输入手机号" v-model="loginObj.keyword" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                                    </el-input>
                                </el-form-item>
                                <el-form-item class="item-password" prop="password">
                                    <el-input v-model="secure" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入密码" clearable prefix-icon="el-icon-diy-mima">
                                    </el-input>
                                </el-form-item>
                                <el-button type="primary" @click="loginSys('loginObj')">
                                    <span style="font-family: Arvo">登&nbsp;&nbsp;&nbsp;&nbsp;录</span>
                                </el-button>
                                <el-form-item class="item-tools clearfix" prop="password">
                                    <p class="zhuangtai"><input type="checkbox">记住登录状态</p>
                                    <div class="link">
                                        <a class="first" href="/Register">注册新用户</a>
                                        <a class="two" href="/editPassword">忘记密码</a>
                                    </div>
                                </el-form-item>
                                <el-form-item class="item-login" prop="password">
                                    <a style="margin-top: 5px;" href="#"><i class="iconfont el-icon-diy-weixin"></i></a>
                                    <a href="#">谷歌登录</a>
                                    <a href="#">facebook登录</a>
                                </el-form-item>
                            </el-tab-pane>
                            <el-tab-pane label="集团登录" name="second">集团登录</el-tab-pane>
                        </el-tabs>
                    </div>
                </el-form>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
        methods: {
            loginSys(loginObj) {

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

    .el-header {
        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding-right: 20px;
        }

        h1 {
            font-size: 28px;
            color: #fcddb4;
            padding: 20px;
            text-align: left;
            float: left;
        }

        .backBtn {
            background-color: #ffdbc4;
            width: 140px;
            height: 35px;
            float: right;
            display: flex;
            justify-content: space-around;
            align-items: center;
            cursor: pointer;

            span {
                font-size: 14px;
                margin-left: 20px;
            }

            i {
                font-size: 24px;
                margin-right: 20px;
            }
        }
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
                width: 60%;
                float: right;
                a {
                    color: #218bf9;
                    font-size: 13px;
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
        position: relative;
        height: 100%;

        @-webkit-keyframes masked-animation {
            0% {
                background-position: 0 0;
            }

            100% {
                background-position: -100% 0;
            }
        }

        // @media screen and (max-device-width: 1600px) {
        //     .view-wrapper {
        //         width: 310px !important;
        //         height: 300px !important;
        //         top: 55% !important;
        //     }

        //     .loginTitle {
        //         position: absolute !important;
        //         left: -25% !important;
        //         z-index: 9999 !important;
        //         top: -45% !important;
        //         font-size: 33px !important;
        //     }

        //     .welcome-title {
        //         font-size: inherit !important;
        //     }
        // }
    }


    
</style>