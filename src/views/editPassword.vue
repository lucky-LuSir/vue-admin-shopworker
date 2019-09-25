<template>
    <div class="root">
        <el-container>
            <el-header>
                <div class="title">
                    <h1>菏泽</h1>
                    <div class="backBtn" @click="backBtn()">
                        <span>Back</span>
                        <i class="iconfont icon-geren2"></i>
                    </div>
                </div>
            </el-header>
            <el-main>
                <el-form :model="loginObj" ref="loginObj">
                    <div class="view-wrapper">
                        <div class="loginTitle clearfix">
                            <div class="title-content">
                                LOGO
                            </div>

                        </div>
                        <div class="main-content">
                            <el-form-item class="item-keyword" prop="keyword">
                                <h2>重置密码</h2>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input v-model="secure" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入邮件地址" clearable prefix-icon="el-icon-diy-youjian">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input v-model="secure" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="滑动滑块" clearable>
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input v-model="secure" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入邮件验证码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-button type="primary" @click="loginSys('loginObj')">下一步</el-button>
                        </div>
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
        h1 {
            font-size: 28px;
            color: #fcddb4;
            padding: 20px;
            text-align: left;
        }
    }

    .view-wrapper {
        position: absolute;
        right: 15%;
        top: 47%;
        background-color: #fff;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        width: 380px;
        height: 380px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        margin: auto;

        .loginTitle {
            background-color: #2e4d6f;
            width: 100%;
            height: 40px;

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
            top: 78px;
            z-index: 1000;

            h2 {
                color: #999999;
                font-size: 20px;
            }

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

            /deep/ .el-input__icon {
                margin-top: 2px;
            }
        }

    }

    .el-main {
        position: relative;
        height: 100%;
    }
</style>