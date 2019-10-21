<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="less" scoped>
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

.loginDialog {
    background-color: #fff;
    h2 {
        font-size: 24px;
        font-weight: 700;
        color: #666666;
        margin-top: 3px;
    }

    p {
        color: #999999;
        margin-bottom: 40px;
        margin-top: 20px;
    }

    .el-button {
        width: 150px;
        color: blue;
    }
}
</style>