<template>
    <div class="root">
        <el-container>
            <Header></Header>
            <el-main>
                <el-form :rules="rules" :model="loginObj" ref="loginObj">
                    <div class="view-wrapper">
                        <div class="loginTitle clearfix">
                            <div class="title-content">LOGO</div>
                        </div>
                        <div class="main-content">
                            <el-form-item class="item-keyword">
                                <h2>重置密码</h2>
                            </el-form-item>
                            <el-form-item class="item-password" prop="email">
                                <el-input v-model="loginObj.email" type="email" class="input-text" placeholder="请输入邮件地址" clearable prefix-icon="el-icon-diy-youjian"></el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <el-input type="password" v-model="loginObj.password" class="input-text" placeholder="设置6至20位登录密码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-confirmPassword" prop="confirmPassword">
                                <el-input type="password" v-model="loginObj.confirmPassword" class="input-text" placeholder="请再次输入登录密码" clearable prefix-icon="el-icon-diy-mima">
                                </el-input>
                            </el-form-item>
                            <el-form-item class="item-password" prop="password">
                                <div class="box">
                                    <div class="txt">滑块验证</div>
                                    <div class="btn">&gt;&gt;</div>
                                    <div class="bg"></div>
                                </div>
                            </el-form-item>
                            <el-button type="primary" @click="loginSys('loginObj')">提&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;交</el-button>
                        </div>
                    </div>
                </el-form>
            </el-main>
        </el-container>
        <el-dialog title="提示" class="loginDialog" :visible.sync="dialogVisible" width="50%">
            <img src="../../img/img1.png" alt="">
            <h2>{{message}}</h2>
            <p>请妥善保管您的账户信息</p>
            <el-button v-if="isSuccess == 1" @click="toLogin()" plain>重新登录</el-button>
            <el-button v-if="isSuccess == 2" @click="closeDialog()" plain>返回修改</el-button>
        </el-dialog>
    </div>
</template>

<script>
    import Header from "../../components/Header";
    export default {
        data() {
            return {
                dialogVisible: false,
                isSuccess: 1,
                message: '',
                secure: "",
                loginObj: {
                    keywork: "",
                    password: "",
                    confirmPassword: ""
                },
                activeName: "first",
                end: false,
                rules: {
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
            };
        },
        components: {
            Header
        },
        mounted() {
            var vm = this;
            window.onload = function() {
                var box = document.querySelector(".box"),
                    txt = document.querySelector(".txt"),
                    btn = document.querySelector(".btn"),
                    bg = document.querySelector(".bg");

                btn.onmousedown = function(e) {
                    e.preventDefault();
                    var e = e || window.event;
                    var point = e.clientX - box.offsetLeft;
                    btn.onmousemove = function(e) {
                        var moveW = e.clientX - box.offsetLeft - point;
                        btn.style.left = moveW + "px";
                        bg.style.width = moveW + "px";

                        if (btn.offsetLeft <= 0) {
                            btn.style.left = "0";
                        }

                        if (btn.offsetLeft >= box.clientWidth - btn.clientWidth) {
                            btn.style.left = box.clientWidth - btn.clientWidth;
                            txt.innerHTML = "验证完成";
                            btn.onmousemove = null;
                            btn.onmousedown = null;
                            vm.end = true;
                        }
                    };

                    btn.onmouseup = function() {
                        btn.onmousemove = null;
                        if (!vm.end) {
                            btn.style.left = "0";
                            bg.style.width = "0";
                        }
                    };
                };
            };
        },
        methods: {
            toLogin() {
                this.$router.push('/login');
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            backBtn() {
                this.$confirm("是否退出登陆?", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    })
                    .then(() => {
                        this.$message({
                            type: "success",
                            message: "退出成功!"
                        });
                    })
                    .catch(() => {
                        this.$message({
                            type: "info",
                            message: "已取消退出"
                        });
                    });
            },
            loginSys(loginObj) {
                this.$refs.loginObj.validate(async (valid) => {
                    if (valid) {
                        if (this.loginObj.password != this.loginObj.confirmPassword) {
                            this.$message.info('两次密码不一致');
                            return;
                        }
                        console.log(this.end)
                        if (!this.end) {
                            this.$message.info('滑动验证没通过');
                            return;
                        }
                        const res = await this.$ajax.post(`/api/editPassword`, this.loginObj);
                        if (res.data.code === 200) {
                            // this.$message.success("密码重置成功");
                            this.dialogVisible = true;
                            this.message = '密码重置成功';
                            this.isSuccess = 1;

                        } else {
                            this.dialogVisible = true;
                            this.message = '密码重置失败';
                            this.isSuccess = 2;
                        }
                    } else {}
                })
            },
            closeDialog() {
                this.dialogVisible = false;
            }
        }
    };
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
        height: 440px;
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
            top: 78px;
            z-index: 1000;

            h2 {
                color: #999999;
                font-size: 20px;
                line-height: 26px;
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
        position: absolute;
        width: 100%;
        margin-top: 60px;
        z-index: 999;
        height: calc(100vh - 60px);
    }

    * {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .box {
        position: relative;
        // width: 300px;
        height: 40px;
        // background-color: #ccc;
        border: 1px solid #DCDFE6;
        border-radius: 4px;
        font-size: 14px;
        line-height: 40px;
        box-sizing: border-box;
        z-index: 1;

        .txt {
            position: absolute;
            left: 50%;
            top: 0;
            transform: translateX(-50%);
            color: blue;
            z-index: 3;
        }

        .btn {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 40px;
            border: 1px solid #ccc;
            background-color: #fff;
            text-align: center;
            line-height: 40px;
            cursor: move;
            box-sizing: border-box;
            z-index: 4;
        }

        .bg {
            position: absolute;
            left: 0;
            top: 0;
            width: 0;
            height: 40px;
            background-color: #ccc;
            box-sizing: border-box;
            z-index: 2;
        }
    }
</style>