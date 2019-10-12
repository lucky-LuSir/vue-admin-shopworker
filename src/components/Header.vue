<template>
    <el-header>
        <div v-if="!isLogin" class="title">
            <h1 class="title_h1">菏泽</h1>
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
        </div>
        <div v-if="isLogin" class="title">
            <h1 class="title_h1">菏泽</h1>
            <div class="btnBox">
                <keep-alive>
                    <span>{{userName}}</span>
                </keep-alive>
                <i class="iconfont el-icon-diy-geren2"></i>
            </div>
        </div>
    </el-header>
</template>

<script>
    export default {
        data() {
            return {
                isLogin: false,
                userName: '',
            }
        },
        created() {
            let _mainObj = window.sessionStorage.getItem("mainObj");
            console.log(_mainObj)
            _mainObj = JSON.parse(_mainObj);
            if (_mainObj) {
                if (!_mainObj.userName) {
                    console.log(1)
                    this.isLogin = false;
                } else {
                    console.log(2)
                    this.isLogin = true;
                    this.userName = _mainObj.userName;
                }
            }

        },
        methods: {
            loginBtn() {
                this.$router.push('/login');
            },
            registerBtn() {
                this.$router.push('/register');

            }
        }
    }
</script>

<style scoped lang="less">
    .el-header {
        width: 100%;
        background-color: #2e4d6f;

        .title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;
            padding-right: 20px;
            width: 1200px;
            margin: 0 auto;
        }

        h1 {
            font-size: 28px;
            color: #fcddb4;
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

    @media all and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
        .title_h1 {
            float: left;
            z-index: 9999;
            font-size: 40px;
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
        }
    }

    @-webkit-keyframes masked-animation {
        0% {
            background-position: 0 0;
        }

        100% {
            background-position: -100% 0;
        }
    }
</style>