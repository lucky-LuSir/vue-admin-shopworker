<template>
    <el-header :class="isLogin ? 'islogin' : 'notLogin'">
        <div v-if="!isLogin" class="title">
            <h1 class="title_h1" @click="toHome()">
                BW shutters and blinds
            </h1>
            <div class="btnBoxs">
                <div class="btnBox">
                    <keep-alive>
                        <span @click="loginBtn()">Log In</span>
                    </keep-alive>
                    &nbsp;&nbsp;/&nbsp;&nbsp;
                    <keep-alive>
                        <span @click="registerBtn()">Register</span>
                    </keep-alive>
                    <i class="iconfont el-icon-diy-geren2"></i>
                </div>
                <el-dropdown @command="handleSetLang" trigger="click">
                    <div class="lang-active">
                        <div class="langbox" v-for="(lang, i) in langs" :key="`LangActive${i}`" v-show="lang.key === activeLang">
                            {{ lang.value }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :command="lang.key">
                            <span class="text">{{ lang.value }}</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div v-if="isLogin" class="title">
            <h1 class="title_h1" @click="toHome()">
                BW shutters and blinds
            </h1>
            <div class="btnBoxs">
                <el-dropdown class="btnBox">
                    <keep-alive>
                        <span>{{userName}}</span>
                    </keep-alive>
                    <i class="iconfont el-icon-diy-geren2"></i>

                    <el-dropdown-menu class="dropdownMenu dropUser" slot="dropdown">
                        <el-dropdown-item class="changepswParent">
                            <el-button class="changepsw logoutBtn" @click="toUser()" type="text">
                                个人中心
                            </el-button>
                        </el-dropdown-item>
                        <el-dropdown-item class="logoutParent">
                            <el-button class="logout logoutBtn" @click="logout()" type="text">退出</el-button>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <div class="cart">
                    treasure
                    <div class="icons" @click="toCart()">
                        <i style="color: #e2231a; font-size: 24px;" class="el-icon-diy-icon-test"></i>
                    </div>
                </div>
                <el-dropdown @command="handleSetLang" trigger="click">
                    <div class="lang-active">
                        <div  class="langbox" v-for="(lang, i) in langs" :key="`LangActive${i}`" v-show="lang.key === activeLang">
                            {{ lang.value }}
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </div>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :command="lang.key">
                            <span class="text">{{ lang.value }}</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </div>
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="50%" center>
            <el-form :model="mainObj.updatePwd" ref="updatePwd" :rules="rules" label-width="100px">
                <el-row :gutter="20">
                    <el-col :span="20">
                        <div class="grid-content">
                            <el-form-item label="原密码：" prop="oldPwd">
                                <el-input v-model="mainObj.updatePwd.oldPwd" type="password" clearable></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <div class="grid-content">
                            <el-form-item label="新密码：" prop="newPwd">
                                <el-input v-model="mainObj.updatePwd.newPwd" type="password" clearable></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="20">
                        <div class="grid-content">
                            <el-form-item label="确认密码：" prop="confirmPwd">
                                <el-input v-model="mainObj.updatePwd.confirmPwd" type="password" clearable></el-input>
                            </el-form-item>
                        </div>
                    </el-col>
                </el-row>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetForm('updatePwd')">取 消</el-button>
                <el-button type="primary" @click="submitForm('updatePwd')">确 定</el-button>
            </span>
        </el-dialog>
    </el-header>
</template>

<script>
    import {
        mapGetters,
        mapMutations
    } from 'vuex';
    export default {
        data() {
            // 校验两次密码输入是否一致
            let newPwd = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else {
                    if (this.mainObj.updatePwd.newPwd !== "") {
                        this.$refs.updatePwd.validateField("confirmPwd");
                    }
                    callback();
                }
            };
            let confirmPwd = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请再次输入密码"));
                } else if (value !== this.mainObj.updatePwd.newPwd) {
                    callback(new Error("两次输入密码不一致!"));
                } else {
                    callback();
                }
            };
            return {
                langs: [{
                        key: 'zh-CN',
                        value: '中文'
                    },
                    {
                        key: 'en-US',
                        value: 'EngLish'
                    },
                ],
                isLogin: false,
                userName: '',
                dialogFormVisible: false,
                mainObj: {
                    // 修改密码
                    updatePwd: {
                        oldPwd: "",
                        newPwd: "",
                        confirmPwd: ""
                    },
                },
                rules: {
                    oldPwd: [{
                        required: true,
                        message: "请输入原密码",
                        trigger: "blur"
                    }],
                    newPwd: [{
                            required: true,
                            message: "请输入新密码",
                            trigger: "blur"
                        },
                        {
                            validator: newPwd,
                            trigger: "blur"
                        }
                    ],
                    confirmPwd: [{
                            required: true,
                            message: "请确认新密码",
                            trigger: "blur"
                        },
                        {
                            validator: confirmPwd,
                            trigger: "blur"
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapGetters({
                activeLang: 'language'
            })
        },
        created() {
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
        methods: {
            toUser() {
                this.$router.push('/user');
            },
            toHome() {
                this.$router.push('/home');
            },
            ...mapMutations(['setLanguage']),
            handleSetLang(lang) {
                // 设置i18n.locale 组件库会按照上面的配置使用对应的文案文件
                this.$i18n.locale = lang
                // 提交mutations 
                this.setLanguage(lang)
            },
            submitForm() {},
            resetForm() {},
            editPassword() {
                this.dialogFormVisible = true;
            },
            logout() {
                var _mainObj = window.sessionStorage.getItem('_mainObj');
                if (_mainObj) {
                    this.$confirm("是否退出登陆？", "提示", {
                        confirmButtonText: "确定",
                        cancelButtonText: "取消",
                        type: "warning"
                    }).then(() => {
                        window.sessionStorage.removeItem('_mainObj');
                        window.sessionStorage.removeItem('authentication');
                        this.$router.push('/login');
                    });
                }

            },
            loginBtn() {
                this.$router.push('/login');
            },
            registerBtn() {
                this.$router.push('/register');
            }
        }
    }
</script>
<style>
    /* .el-dropdown-menu__item {
        padding: 0;
    } */
</style>

<style scoped lang="less">
    .dropUser /deep/ .el-dropdown-menu__item {
        padding: 0;
    }
    .btnBoxs {
        display: flex;
        align-items: center;

        .btnBox {
            margin-right: 30px;
        }

        .cart {
            margin-right: 30px;
            align-items: center;
            display: flex;
            background-color: #ffdbc4;
            padding-left: 15px;
            padding-right: 15px;
            height: 35px;
            border-radius: 5px;
            box-shadow: inset -0.11px -3px 0 0 rgba(0, 0, 0, 0.4);
            -webkit-transition: all 150ms;
            transition: all 150ms;
            background-color: #c9c6c9;
            border: none;
            cursor: pointer;
        }
    }

    .logoutBtn {
        color: #409eff;
        background: 0 0;
        padding-left: 0;
        padding-right: 0;
        width: 100%;
        padding: 0 20px;
        text-align: left;
        height: 36px;
    }

    .langbox {
         width: 75px;
         color: #999;
         cursor: pointer;
    }
    .islogin {
        background-color: #fff;
    }

    .notLogin {
        @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
            .title_h1 {
                float: left;
                z-index: 9999;
                font-size: 30px;
                background-image: -webkit-linear-gradient(left,
                        #ff9300,
                        #e6d205 25%,
                        #147b96 50%,
                        #e6d205 75%,
                        #ffdbc4);
                -webkit-text-fill-color: transparent;
                -webkit-background-clip: text;
                -webkit-background-size: 200% 100%;
                -webkit-animation: masked-animation 4s infinite linear;
                color: #000 !important;
            }
        }
    }

    .el-header {
        width: 100%;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding-right: 20px;
            width: 980px;
            margin: 0 auto;
        }

        h1 {
            font-size: 30px;
            color: #000 !important;
            padding: 20px;
            text-align: left;
            float: left;
            cursor: pointer;
        }

        .btnBox {
            background-color: #ffdbc4;
            height: 35px;
            float: right;
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding-left: 15px;
            padding-right: 15px;
            border-radius: 5px;
            box-shadow: inset -0.11px -3px 0 0 rgba(0, 0, 0, 0.4);
            -webkit-transition: all 150ms;
            transition: all 150ms;

            span {
                font-size: 14px;
                color: #999;
                cursor: pointer;
            }

            span:nth-child(2) {
                color: #f10215;
            }

            .iconfont {
                font-size: 20px;
                color: #000000;
                margin-left: 10px;
            }
        }
    }

    // @-webkit-keyframes masked-animation {
    //     0% {
    //         background-position: 0 0;
    //     }
    //     100% {
    //         background-position: -100% 0;
    //     }
    // }
</style>