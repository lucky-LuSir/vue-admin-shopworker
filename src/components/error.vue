<template>
    <div class="root">
        <el-main>
            <div class="view-wrapper cm-Layout">
                <div class="message">
                    <span><i class="iconfont el-icon-diy-icon_wrong"></i></span>
                    Your order has failed
                </div>
                <div class="btn-box">
                    <el-button>Try again</el-button>
                </div>
                <el-steps :space="200" :active="3" process-status="error" finish-status="success" align-center>
                    <el-step title="确认订单1"></el-step>
                    <el-step title="邮寄信息"></el-step>
                    <el-step title="支付"></el-step>
                    <el-step title="出货"></el-step>
                </el-steps>
            </div>
        </el-main>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="less">
    .root {
        width: 100%;
        height: calc(100vh - 160px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .el-main {
        overflow: hidden;
    }

    .cm-Layout {
        width: 1200px;
        min-width: 1200px;
        margin: 0 auto;
        height: 100%;
    }

    .message {
        font-weight: 700;
        font-size: 26px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
            width: 36px;
            height: 36px;
            background-color: #d9001b;
            border-radius: 50%;
            position: relative;
            margin-right: 15px;

            .iconfont {
                margin-right: 30px;
                color: #fff;
                font-size: 22px;
                font-weight: 900;
                margin-right: 30px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    .btn-box {
        text-align: center;
        margin-top: 100px;
        margin-bottom: 70px;

        .el-button {
            width: 250px;
            height: 40px;
            background-color: #1abc9c;
            color: #fff;
        }
    }

    .el-steps {
        justify-content: center;
    }
</style>