<template>
    <div>
        <div class="container cm-Layout">
            <div class="page-title-normal">
                <h2 class="page-title-h2 h2_success"><span>订单提交成功，请尽快付款！</span></h2>
            </div>
            <!-- 进度条 -->
            <div class="check-step">
                <ul>
                    <li class="cur"><span>确认</span> 收货地址</li>
                    <li class="cur"><span>核对</span> 订单信息</li>
                    <li class="cur"><span>支付</span> 方式</li>
                    <li class="cur"><span>成功提交</span> 订单</li>
                </ul>
            </div>

            <div class="order-create">
                <div class="order-create-pic"><img src="../../static/ok-2.png" alt=""></div>
                <div class="order-create-main">
                    <h3>恭喜! <br>订单提交成功，请尽快付款！</h3>
                    <p>
                        <span>订单号：{{order_number}}</span>
                    </p>
                    <div class="order-create-btn-wrap">
                        <div class="btn-l-wrap">
                            <router-link class="btn btn--m btn-oo" to="/cart">购物车列表</router-link>
                        </div>
                        <div class="btn-r-wrap">
                            <div style="cursor: pointer;" class="btn btn--m btn-oo" @click="toFukuan()">付款</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                orderId: '',
                orderTotal: 0,
                order_number: '',
                order_id: '',
            }
        },
        components: {},
        async mounted() {
            let _mainObj = window.sessionStorage.getItem("_mainObj");
            _mainObj = JSON.parse(_mainObj);
            let user_id = _mainObj.user_id;
            let obj = {
                user_id: user_id,
                "address_id": 1,
                "goods_id": 1
            }
            const res = await this.$ajax.post(`/orders/`, obj);
            // console.log(res)
            let data = res.data;
            this.order_number = data.order_number;
            this.order_id = data.order_id;
            // var orderId = this.$route.query.orderId;
            // console.log("orderId:" + orderId);
            // if (!orderId) {
            //     return;
            // }
            // axios.get("/users/orderDetail", {
            //     params: {
            //         orderId: orderId
            //     }
            // }).then((response) => {
            //     let res = response.data;
            //     if (res.status == '0') {
            //         this.orderId = orderId;
            //         this.orderTotal = res.result.orderTotal;
            //     }
            // });
        },
        methods: {
            async toFukuan() {
                console.log(1)
                var order_id = this.order_id;
                const res = await this.$ajax.get(`orders/${3}/payment/`);
                console.log(res)
                let ali_url = res.data.ali_url;
                location.href = ali_url;
            }
        }
    }
</script>

<style lang="less" scoped>
    .h2_success {
        
        padding: 40px 0 20px 0;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: .25em;
        font-weight: bold;
        text-align: left;
    }

    .btn-oo {
        width: 100%;
        min-width: 120px;
        display: inline-block;
        text-align: center;
        font-size: 14px;
        font-family: "moderat", sans-serif;
        font-weight: bold;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
        border: 1px solid #d1434a;
        color: #d1434a;
        text-transform: uppercase;
        letter-spacing: .25em;
        white-space: nowrap;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
    }

    .btn-oo:hover {
        background-color: #ffe5e6;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }
</style>