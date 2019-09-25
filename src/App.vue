<template>
    <div id="app">
        <!-- <div id="nav"> -->
        <!-- <router-link to="/">Home</router-link> | -->
        <!-- <router-link to="/about">About</router-link> -->
        <!-- </div> -->
        <router-view />
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }

    .el-header {
        background-color: #2e4d6f;

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
</style>