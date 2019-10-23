<template>
    <div class="home">
        <Header></Header>
        <el-main>
            <div class="menu">
                <div class="menuBox cm-Layout">
                    <el-menu router :default-active="$route.path ? $route.path : '/index'" class="header_menu" mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#6eaa21">
                        <el-menu-item index="/index">{{ $t('home.Home') }}</el-menu-item>
                        <el-menu-item index="/product">{{ $t('home.Product') }}</el-menu-item>
                        <el-menu-item index="/support">{{ $t('home.Support') }}</el-menu-item>
                        <el-menu-item index="/account">{{ $t('home.Account') }}</el-menu-item>
                        <el-menu-item index="/about">{{ $t('home.About') }}</el-menu-item>
                    </el-menu>
                </div>
            </div>
            <router-view></router-view>
        </el-main>
        <el-button @click="aaa()">发送</el-button>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"
import Lang from '@/views/Lang.vue'

import {
    LANGS
} from '../assets/languages/lang.js'

export default {
    name: 'home',
    components: {
        Header,
        Footer,
        Lang
    },
    data () {
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
        async aaa() {
            console.log(111)
            const res = await this.$ajax.post(`/address/`, {
                // 'id': 1
                "title": 'aaa',
                "receiver": 'sss',
                "province": '111',
                'city': 'sss'
            });
            console.log(res)
            // ${iphone}/count/
        },
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
        toCart () {
            this.$router.push('/cart');
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
    background-color: #ff4401 !important;
}

.el-menu {
    border-bottom: 0;
    background-color: #ff4401 !important;

    .el-menu-item {
        height: 45px;
        line-height: 45px;
        padding: 0 40px;
        background-color: #ff4401 !important;
        color: #fff !important;
        font-weight: 700;
    }

    /deep/ .el-menu-item:hover {
        // background-color: #65b200 !important;
        // color: #fff !important;
        border-bottom: 4px solid #ffdbc4 !important;
    }
    .el-menu-item.is-active {
        border-bottom: 4px solid #ffdbc4 !important;
    }
}

.el-main {
    overflow: initial;
}

.menu {
    border-bottom: 1px solid #ccc;
    background-color: #ff4401;
}
</style>