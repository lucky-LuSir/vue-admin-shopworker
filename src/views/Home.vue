<template>
    <div class="home">
        <div>
        </div>
        <Header></Header>
        <el-main>
            <div class="menu">
                <div class="menuBox cm-Layout">
                    <el-menu router :default-active="$route.path ? $route.path : '/index'" class="header_menu" mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#6eaa21">
                        <el-menu-item index="/index">Home</el-menu-item>
                        <el-menu-item index="/product">Product</el-menu-item>
                        <el-menu-item index="/support">Support</el-menu-item>
                        <el-menu-item index="/account">Account</el-menu-item>
                        <el-menu-item index="/about">About</el-menu-item>
                    </el-menu>
                    <div class="icons" @click="toCart()">
                        <i style="color: #e2231a; font-size: 24px;" class="el-icon-diy-icon-test"></i>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </el-main>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header"
    import Footer from "../components/Footer"
    import {
        LANGS
    } from '../assets/languages/lang.js'

    export default {
        name: 'home',
        components: {
            Header,
            Footer
        },
        data() {
            return {
                form: {
                    name: '首页'
                },
                // locale: 'zh-CN',
                // langs: LANGS,
                // skins: [{
                //     name: 'default',
                //     label: this.$t('default')
                // }, {
                //     name: 'purple',
                //     label: this.$t('purple')
                // }],
            }
        },
        methods: {
            // handleCommand(command) {
            //     this.locale = command;
            //     Vue.config.lang = this.locale;
            // },
            // changeLanguage(language) {
            //     // console.log(111)
            //     console.log(this.$i18n.locale)
            //     let lang = this.$i18n.locale === 'zh' ? 'en' : 'zh';
            //     this.$i18n.locale = lang;
            // },
            toCart() {
                this.$router.push('/cart');
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

<style lang="less" scoped>
    .backBtn {
        cursor: pointer;
    }

    .menuBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-menu {
        border-bottom: 0;

        .el-menu-item {
            height: 45px;
            line-height: 45px;
            padding: 0 40px;
        }

        /deep/ .el-menu-item:hover {
            background-color: #65b200 !important;
            color: #fff !important;
        }

    }

    .el-main {
        overflow: initial;
    }

    .menu {
        border-bottom: 1px solid #ccc;
    }
</style>