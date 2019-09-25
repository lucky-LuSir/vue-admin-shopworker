<template>
    <div class="home">
        <el-header class="header">
            <div class="title">
                <h1 class="title_h1">菏泽</h1>
                <div class="backBtn" @click="backBtn()">
                    <span>Back</span>
                    <i class="iconfont el-icon-diy-geren2"></i>
                </div>
            </div>
        </el-header>
        <el-main>
            <div class="menu">
                <div class="menuBox cm-Layout">
                    <el-menu router :default-active="$route.path ? $route.path : '/index'" class="header_menu" mode="horizontal" background-color="#fff" text-color="#000" active-text-color="#6eaa21">
                        <el-menu-item index="/index">Home</el-menu-item>
                        <el-menu-item index="/Product">Product</el-menu-item>
                        <el-menu-item index="/Support">Support</el-menu-item>
                        <el-menu-item index="/Account">Account</el-menu-item>
                        <el-menu-item index="/About">About</el-menu-item>
                    </el-menu>
                    <div class="icons">
                        <i style="color: #e2231a; font-size: 24px;" class="el-icon-diy-icon-test"></i>
                    </div>
                </div>
            </div>
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
    export default {
        name: 'home',
        components: {},
        data() {
            return {}
        },
        methods: {
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