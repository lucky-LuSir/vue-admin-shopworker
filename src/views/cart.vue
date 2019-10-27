<template>
    <div class="root">
        <div class="cart cm-Layout">
            <div class="page-title-normal">
                <h2 class="page-title-h2"><span>Your Cart</span></h2>
            </div>
            <div class="item-list-wrap">
                <div class="cart-item">
                    <div class="cart-item-head">
                        <ul>
                            <li>选择</li>
                            <li>商品</li>
                            <li>详情</li>
                            <li>小计</li>
                            <li>操作</li>
                        </ul>
                    </div>
                    <ul class="cart-item-list">
                        <li v-for="(item, index) in cartList" :key="index">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check':item.checked=='1'}" @click="editCart('checked',item)">
                                        <i class="el-icon-diy-duigou"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <div>
                                    <ul>
                                        <li>{{item.material}}</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-tab-3">
                                <div>
                                    <ul>
                                        <li v-if="item.length">
                                            <span>length</span>
                                            <i>{{item.length}}</i>
                                        </li>
                                        <li v-if="item.width">
                                            <span>width</span>
                                            <i>{{item.width}}</i>
                                        </li>
                                        <li v-if="item.windos_sash_type">
                                            <span>windos_sash_type</span>
                                            <i>{{item.windos_sash_type}}</i>
                                        </li>
                                        <li v-if="item.installation_location">
                                            <span>installation_location</span>
                                            <i>{{item.installation_location}}</i>
                                        </li>
                                        <li v-if="item.size_type">
                                            <span>size_type</span>
                                            <i>{{item.size_type}}</i>
                                        </li>
                                        <li v-if="item.midplane_postion">
                                            <span>midplane_postion</span>
                                            <i>{{item.midplane_postion}}</i>
                                        </li>
                                        <li v-if="item.ploduct_color">
                                            <span>ploduct_color</span>
                                            <i>{{item.ploduct_color}}</i>
                                        </li>
                                        <li v-if="item.frame_type">
                                            <span>frame_type</span>
                                            <i>{{item.frame_type}}</i>
                                        </li>
                                        <li v-if="item.frame_number">
                                            <span>frame_number</span>
                                            <i>{{item.frame_number}}</i>
                                        </li>
                                        <li v-if="item.opening_method">
                                            <span>opening_method</span>
                                            <i>{{item.opening_method}}</i>
                                        </li>

                                        <li v-if="item.tcolumn_type">
                                            <span>tcolumn_type</span>
                                            <i>{{item.tcolumn_type}}</i>
                                        </li>
                                        <li v-if="item.balde_type">
                                            <span>balde_type</span>
                                            <i>{{item.balde_type}}</i>
                                        </li>
                                        <li v-if="item.poll_rod_type">
                                            <span>poll_rod_type</span>
                                            <i>{{item.poll_rod_type}}</i>
                                        </li>
                                        <li v-if="item.ploo_rod_dis">
                                            <span>ploo_rod_dis</span>
                                            <i>{{item.ploo_rod_dis}}</i>
                                        </li>
                                        <li v-if="item.hardware_type">
                                            <span>hardware_type</span>
                                            <i>{{item.hardware_type}}</i>
                                        </li>

                                        <li v-if="item.hardware_colour">
                                            <span>hardware_colour</span>
                                            <i>{{item.hardware_colour}}</i>
                                        </li>

                                        <li v-if="item.blade_state">
                                            <span>blade_state</span>
                                            <i>{{item.blade_state}}</i>
                                        </li>

                                        <li v-if="item.lower_palte_state">
                                            <span>lower_palte_state</span>
                                            <i>{{item.lower_palte_state}}</i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <!-- <div class="item-price-total">{{(item.productNum*item.salePrice)|currency('￥')}}</div> -->
                                <p>Quantity: {{item.number}}</p>
                                <div class="price">$262.50</div>
                            </div>
                            <div class="cart-tab-5">
                                <div class="cart-item-opration">
                                    <a href="javascript:;" class="item-edit-btn">
                                        <i class="el-icon-diy-trash" @click="delCartConfirm(item)"></i>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="cart-foot-wrap">
                <div class="cart-foot-inner">
                    <div class="cart-foot-l">
                        <div class="item-all-check">
                            <a href="javascipt:;" @click.prevent="toggleCheckAll()">
                                <span class="checkbox-btn item-check-btn quanxuan" v-bind:class="{'check':checkAllFlag}">
                                    <i class="el-icon-diy-duigou"></i>
                                </span>
                                <span>全选</span>
                            </a>
                        </div>
                    </div>
                    <div class="cart-foot-r">
                        <div class="item-total">
                            总价: <span class="total-price">{{totalPrice|currency('￥')}}</span>
                        </div>
                        <div class="btn-wrap" style="cursor: pointer;">
                            <a class="btn btn--red" v-bind:class="{'btn--dis':checkedCount==0}" @click="checkOut">去结算</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog class="delDialog" title="" :visible.sync="modalConfirm" width="45%">
            <div>
                <p>Are you sure you want to delete this data??</p>
                <a class="btn btn--m" href="javascript:;" @click="delCart()">确认</a>
                <a class="btn btn--m btn--red" href="javascript:;" @click="modalConfirm = false">关闭</a>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Modal from '../components/Modal'
    export default {
        data() {
            return {
                cartList: [],
                modalConfirm: false,
                sku_id: '', // 商品id
            }
        },
        components: {
            Modal,
        },
        created() {
            this.init();
        },
        computed: {
            checkAllFlag() {
                return this.checkedCount == this.cartList.length;
            },
            checkedCount() {
                var i = 0;
                this.cartList.forEach((item) => {
                    if (item.checked == '1') i++;
                })
                return i;
            },
            totalPrice() {
                var money = 0;
                this.cartList.forEach((item) => {
                    if (item.checked == '1') {
                        money += parseFloat(item.salePrice) * parseInt(item.productNum);
                    }
                })
                return money;
            }
        },
        methods: {
            async init() {
                let _mainObj = window.sessionStorage.getItem("_mainObj");
                _mainObj = JSON.parse(_mainObj);
                let user_id = _mainObj.user_id;
                const res = await this.$ajax.get(`/cart/${user_id}/`);
                let data = res.data;
                data = JSON.parse(data);
                this.cartList = data;
            },
            delCartConfirm(item) {
                console.log(item)
                // this.delItem = item;
                // this.sku_id = item.
                this.modalConfirm = true;
            },
            async delCart() {
                console.log(111)
                // const res = await axios.delete(`/cart/`, {});
                // sku_id
                // if (res.data.status === 200) {
                //     this.$message.success('删除成功');
                //     this.modalConfirm = false;
                //     var delCount = this.delItem.productNum;
                //     this.$store.commit("updateCartCount", -delCount);
                //     this.init();
                // }
            },
            async editCart(flag, item) {
                if (flag == 'add') {
                    item.productNum++;
                } else if (flag == 'minu') {
                    if (item.productNum <= 1) {
                        return;
                    }
                    item.productNum--;
                } else {
                    item.checked = item.checked == "1" ? '0' : '1';
                }
                const res = await axios.put(`/cartEdit/`, {
                    sku_id: item.productId,
                    count: item.productNum,
                    checked: item.checked
                })
                if (res.data.code === 200) {
                    this.$store.commit("updateCartCount", flag == "add" ? 1 : -1);
                }
            },
            async toggleCheckAll() {
                var flag = !this.checkAllFlag;
                this.cartList.forEach((item) => {
                    item.checked = flag ? '1' : '0';
                })
                const res = await axios.put(`/cartEdit/`, {
                    checkAll: flag
                })
                if (res.data.code === 200) {
                    console.log("update suc");
                }
            },
            checkOut() {
                // if (this.checkedCount > 0) {
                this.$router.push({
                    path: "/address"
                });
                // }
            }
        }
    }
</script>

<style scoped lang="less">
    .root {
        background-color: #f5f7fc;
    }

    .btn--red {
        cursor: pointer !important;
    }

    // 删除弹出框
    .delDialog {
        p {
            color: #999;
            margin-bottom: 60px;
        }

        /deep/ .el-dialog__close {
            color: #999;
            font-size: 24px;
            transition: all .5s;
        }

        /deep/ .el-dialog__close:hover {
            transform: rotate(-180deg);
            color: #999;
        }

        .btn {
            width: 195px;
            height: 40px;
        }

        .btn--m {
            background-color: #fff;
            color: #d1434a;
            margin-right: 10px;
        }

        .btn--red {
            background-color: #d1434a;
            color: #fff;
            margin-left: 10px;
        }
    }

    .quanxuan {
        line-height: 18px;
    }

    .el-icon-diy-duigou {
        color: #fff;
    }

    .cart-tab-1 {
        border-right: 1px solid #e9e9e9;
    }

    .cart-tab-2 {
        padding-top: 40px !important;
        border-right: 1px solid #e9e9e9;

        li {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }

    .cart-tab-3 {
        padding-top: 15px !important;
        padding-bottom: 10px !important;
        border-right: 1px solid #e9e9e9;

        li {
            display: flex;
            justify-content: space-around;
            margin-bottom: 10px;

            span {
                display: inline-block;
                width: 150px;
                text-align: left;
                white-space: nowrap;

            }

            i {
                display: inline-block;
                width: 60px;
                text-align: left;
                white-space: nowrap;
            }
        }
    }

    .cart-tab-4 {
        border-right: 1px solid #e9e9e9;

        .price {
            color: #fe5558;
            font-size: 20px;
            font-size: 1.53846rem;
            line-height: 24px;
            line-height: 1.84615rem;
            margin-top: 7px;
            font-weight: 700;
            display: inline-block;
        }
    }

    .btn-wrap {
        text-align: center;

        p {
            height: 20px;
        }

        .btn {
            // width: 45%;
            width: 195px;
            padding: 0 10px;

            min-width: 80px;
            margin: 0 2.5%;
        }
    }

    .input-sub,
    .input-add {
        min-width: 40px;
        height: 100%;
        border: 0;
        color: #605F5F;
        text-align: center;
        font-size: 16px;
        overflow: hidden;
        display: inline-block;
        background: #f0f0f0;
    }

    .item-quantity .select-self-area {
        background: none;
        border: 1px solid #f0f0f0;
    }

    .item-quantity .select-self-area .select-ipt {
        display: inline-block;
        padding: 0 3px;
        width: 30px;
        min-width: 30px;
        text-align: center;
    }

    .el-icon-diy-trash {
        color: #b2b2b2;
        font-size: 26px;
    }

    .btn.btn--dis,
    .btn[href].btn--dis {
        border-color: #ccc;
        background: transparent;
        color: #ccc;
        cursor: default;
    }

    .btn.btn--dis:hover {
        border-color: #ccc !important;
        background: transparent !important;
        color: #ccc !important;
    }

    .btn--red.btn--dis,
    .btn--red[href].btn--dis {
        border-color: #ccc;
        background-color: #ccc;
        color: #fff;
        cursor: default;
    }

    .btn--red.btn--dis:hover {
        border-color: #ccc !important;
        background: #ccc !important;
        color: #fff !important;
    }

    .btn {
        height: 55px;
        line-height: 54px;
        padding: 0 10px;
    }

    .btn,
    .btn[href] {
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
    }

    .btn:hover,
    .btn[href]:hover {
        background-color: #ffe5e6;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .btn--red,
    .btn--red[href] {
        background-color: #d1434a;
        border-color: #d1434a;
        color: #fff;
    }

    .btn--red:hover,
    .btn--red[href]:hover {
        background-color: #f16f75;
        border-color: #f16f75;
        color: #fff;
    }

    .btn--m {
        height: 40px;
        line-height: 40px;
    }

    .btn--s {
        height: 35px;
        line-height: 35px;
        font-size: 12px;
        letter-spacing: .1em;
    }

    .btn-line2 {
        white-space: normal;
        line-height: 1em;
        vertical-align: top;
    }

    .up-down-btn {
        color: #ee7a23;
    }

    .i-up-down {
        position: relative;
        display: inline-block;
        width: 14px;
        height: 6px;
        vertical-align: middle;
        z-index: 2;
        -webkit-transform: translateY(2px);
        -ms-transform: translateY(2px);
        transform: translateY(2px);
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    }

    .i-up-down i {
        position: absolute;
        top: 0;
        width: 8px;
        height: 1px;
        background: #ee7a23;
    }

    .i-up-down .i-up-down-l {
        left: 0;
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    }

    .i-up-down .i-up-down-r {
        right: 0;
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .select-self {
        position: relative;
        display: inline-block;
        cursor: pointer;
    }

    .select-self-area {
        width: auto;
        background: #f0f0f0;
        border-radius: 3px;
        min-width: 50px;
        max-width: 240px;
        height: 30px;
        line-height: 30px;
    }

    .select-self-area .select-ipt {
        display: block;
        min-width: 56px;
        height: 100%;
        padding: 0 25px 0 10px;
        border: 0;
        color: #605F5F;
        text-align: left;
        font-size: 16px;
        overflow: hidden;
    }

    .select-self-area .select-btn {
        position: absolute;
        right: 0;
        top: 0;
        width: 18px;
        height: 100%;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 3px;
        text-align: center;
    }

    .select-self-area .select-btn .i-up-down {
        width: 8px;
        top: 0;
        left: 0;
    }

    .select-self-area .select-btn .i-up-down i {
        width: 5px;
        height: 2px;
        background-color: #605F5F;
    }

    .select-self-open {
        border-radius: 3px 3px 0 0;
    }

    .select-self-open .select-options {
        display: block;
    }

    .select-self-open .i-up-down .i-up-down-l {
        left: 0;
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    }

    .select-self-open .i-up-down .i-up-down-r {
        right: 0;
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .select-self-open .select-options {
        z-index: 102;
    }

    .select-self-open.select-up .select-options {
        top: auto;
        bottom: 30px;
    }

    .up-down-btn.open {
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .up-down-btn.open .i-up-down-l {
        -webkit-transform: rotate(-40deg);
        -ms-transform: rotate(-40deg);
        transform: rotate(-40deg);
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .up-down-btn.open .i-up-down-r {
        -webkit-transform: rotate(40deg);
        -ms-transform: rotate(40deg);
        transform: rotate(40deg);
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    input[type="text"],
    input[type="number"],
    input[type="password"],
    textarea {
        padding: 1em;
        border: 1px solid #ccc;
        background: #fff;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    textarea {
        resize: none;
    }

    .checkbox-btn {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #fff;
        border: 1px solid #999;
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    .checkbox-btn .icon-ok {
        position: relative;
        display: none;
        width: 100%;
        height: 100%;
        fill: #fff;
        -webkit-transform: scale(0.6);
        -ms-transform: scale(0.6);
        transform: scale(0.6);
        vertical-align: top;
    }

    .checkbox-btn.checked {
        background-color: #ee7a23;
        border-color: #ee7a23;
    }

    .checkbox-btn.checked .icon-ok {
        display: inline-block;
    }

    .checkbox-btn.orange.checked {
        background-color: #ee7a23;
        border-color: #ee7a23;
    }

    /** header and footer **/
    html {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
    }


    .header {
        position: relative;
    }


    .footer {
        background-color: #f5f7fc;
        color: #333;
        position: relative;
    }

    .footer__wrap {
        max-width: 1280px;
        margin: 0 auto;
    }

    .footer__primary .footer__inner {
        height: 104px;
    }

    .footer__secondary {
        border-top: 1px solid rgba(51, 51, 51, 0.15);
    }

    .footer__secondary .footer__inner {
        height: 100px;
    }

    .footer__inner {
        max-width: 1280px;
        margin: 0 auto;
        position: relative;
    }

    .footer__region {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        left: 36px;
    }

    .footer__region span {
        color: #ada9a5;
    }

    .footer__secondary__nav {
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        right: 36px;
    }

    .footer__secondary__nav a,
    .footer__secondary__nav span {
        color: #ada9a5;
        margin-left: 3.3125em;
    }

    .footer__secondary__nav a:first-child,
    .footer__secondary__nav span:first-child {
        margin-left: 0;
    }

    .footer__region__flag {
        display: inline-block;
        position: relative;
        top: 7px;
        width: 38px;
    }

    @media screen and (max-width: 1440px) {
        .footer__nav a {
            margin-left: 2em;
        }

        .footer__secondary__nav a,
        .footer__secondary__nav span {
            margin-left: 1.5em;
        }
    }

    @media screen and (max-width: 991px) {
        .footer__nav a {
            font-size: 12px;
        }

        .footer__secondary__nav a,
        .footer__secondary__nav span {
            font-size: 12px;
        }
    }

    @media screen and (max-width: 767px) {
        .footer__primary .footer__inner {
            padding-top: 80px;
            padding-bottom: 80px;
            height: auto;
            text-align: center;
        }

        .footer__secondary .footer__inner {
            padding: 15px 0 20px;
            height: auto;
            text-align: center;
        }

        .footer__logo {
            position: static;
            top: 0;
            left: 0;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none;
            height: 42.73px;
            width: 164px;
            display: inline-block;
        }

        .footer__nav {
            position: static;
            top: 0;
            left: 0;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none;
            display: block;
            margin-top: 70px;
        }

        .footer__nav a {
            margin-top: 23px;
            margin-left: 0;
            display: block;
        }

        .footer__nav a:first-of-type {
            margin-top: 0;
        }

        .footer__region {
            position: static;
            top: 0;
            left: 0;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none;
        }

        .footer__secondary__nav {
            position: static;
            top: 0;
            left: 0;
            -webkit-transform: none;
            -ms-transform: none;
            transform: none;
            margin-top: 50px;
        }

        .footer__secondary__nav span,
        .footer__secondary__nav a {
            display: block;
            margin-left: 0;
        }

        .footer__secondary__nav a {
            margin-top: 1.6363636364em;
        }
    }

    /** header and footer end **/
    .md-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 535px;
        height: auto;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        visibility: hidden;
        z-index: 201;
    }

    .md-modal.md-modal-m {
        width: 620px;
    }

    .md-modal .md-close {
        position: absolute;
        top: 7px;
        right: 7px;
        width: 34px;
        height: 34px;
        -webkit-transform: scale(0.5);
        -ms-transform: scale(0.5);
        transform: scale(0.5);
        text-indent: -8000px;
    }

    .md-modal .md-close:before,
    .md-modal .md-close:after {
        position: absolute;
        top: 16px;
        left: -4px;
        content: "";
        width: 44px;
        height: 3px;
        background: #d7d8dd;
        -webkit-transition: -webkit-transform .5s ease-out;
        transition: -webkit-transform .5s ease-out;
        transition: transform .5s ease-out;
        transition: transform .5s ease-out, -webkit-transform .5s ease-out;
    }

    .md-modal .md-close:before {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .md-modal .md-close:after {
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .md-modal .md-close:hover:before,
    .md-modal .md-close:hover:after {
        -webkit-transition: -webkit-transform .3s ease-out;
        transition: -webkit-transform .3s ease-out;
        transition: transform .3s ease-out;
        transition: transform .3s ease-out, -webkit-transform .3s ease-out;
    }

    .md-modal .md-close:hover:before {
        -webkit-transform: rotate(-135deg);
        -ms-transform: rotate(-135deg);
        transform: rotate(-135deg);
    }

    .md-modal .md-close:hover:after {
        -webkit-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    .md-modal .md-tit {
        font-weight: 200;
        line-height: 1.8em;
        text-align: center;
    }

    .md-modal .md-modal-inner {
        padding: 60px 50px;
    }

    .md-modal .btn-wrap {
        margin-top: 20px;
        text-align: center;
        font-size: 0;
    }

    .md-modal .btn-wrap .btn {
        width: 45%;
        min-width: 80px;
        margin: 0 2.5%;
    }

    .md-modal .confirm-tips,
    .md-modal .alert-tips {
        font-size: 14px;
        font-weight: 200;
        text-align: center;
    }

    .md-modal .confirm-tips p,
    .md-modal .alert-tips p {
        line-height: 1.8em;
    }

    .md-modal .confirm-tips {
        min-height: 5.65em;
    }

    .md-modal .alert-tips {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        height: 10.25em;
        -ms-flex-align: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .md-modal .alert-tips p {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }

    .md-modal.modal-normal .content-tit {
        margin-bottom: 20px;
        line-height: 20px;
        font-size: 16px;
        color: #333;
    }

    .md-modal .icon-status-ok {
        width: 20px;
        height: 20px;
        fill: #ee7a23;
        vertical-align: middle;
        margin-right: 15px;
    }

    .md-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 200;
    }

    .md-modal-transition .md-modal-inner {
        background: #fff;
        -webkit-transform: translateY(20%);
        -ms-transform: translateY(20%);
        transform: translateY(20%);
        opacity: 0;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
    }

    .md-modal-transition.md-show {
        visibility: visible;
    }

    .md-modal-transition.md-show .md-modal-inner {
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
        -webkit-transition: all .5s ease-out;
        transition: all .5s ease-out;
    }

    @media only screen and (max-width: 767px) {
        .md-modal {
            width: 300px !important;
        }

        .md-modal.md-modal-fun .md-content {
            padding-top: 30px;
        }

        .md-modal .md-close {
            display: none;
        }

        .md-modal .md-tit {
            padding: 0 15px;
        }

        .md-modal .md-modal-inner {
            padding: 0 !important;
        }

        .md-modal .confirm-tips,
        .md-modal .alert-tips {
            padding: 30px 10px;
        }

        .md-modal .confirm-tips {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            min-height: 90px;
            -ms-flex-align: center;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
        }

        .md-modal .confirm-tips p {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
        }

        .md-modal .btn-wrap {
            display: -ms-flex;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            margin-top: 0;
        }

        .md-modal .btn-wrap .btn {
            -webkit-box-flex: 1;
            -webkit-flex: 1;
            -ms-flex: 1;
            flex: 1;
            width: 100%;
            margin: 0;
            font-size: 12px;
        }

        .md-modal .btn-wrap .btn:first-child {
            border-left: none;
            border-right: none;
        }

        .md-modal.modal-normal .content-tit {
            font-size: 12px;
        }
    }

    .page-title-h2 {
        padding: 40px 0 20px 0;
        font-size: 22px;
        text-transform: uppercase;
        /* letter-spacing: .25em; */
        font-weight: bold;
        text-align: left;
    }

    .lemall-error-top .error-close-btn {
        display: block;
        width: 100%;
        height: 100%;
        background: url(http://image4.lecloud.com/lemallus/20161104-32702ecd-f983-4942-a799-cf1e2bdd30c2.png) no-repeat 0 0;
        background-size: 100% auto;
        text-indent: -8000px;
    }

    @media only screen and (max-width: 767px) {
        .lemall-error-top {
            font-size: 1.2rem;
        }

        .lemall-error-top:before {
            left: 10px;
        }

        .lemall-error-top .error-text {
            padding: 0 35px;
        }
    }

    .check-step {
        padding: 30px 0 20px 0;
    }

    .check-step ul {
        display: -ms-flexbox;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
    }

    .check-step ul:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .check-step li {
        position: relative;
        float: left;
        -ms-flex: 1;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        width: 25%;
        line-height: 1.25em;
        padding: 0 1em 1.25em 1em;
        border-bottom: 2px solid #ccc;
        color: #999;
        text-align: center;
        font-weight: bold;
        text-transform: capitalize;
    }

    .check-step li em {
        color: #999;
        font-size: .8em;
        font-weight: normal;
    }

    .check-step li:after {
        position: absolute;
        bottom: -7px;
        left: 50%;
        margin-left: -7px;
        content: "";
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: #ccc;
    }

    .check-step li.cur {
        border-color: #d1434a;
        color: #d1434a;
    }

    .check-step li.cur:after {
        background: #d1434a;
    }

    @media only screen and (max-width: 991px) {
        .check-step {
            padding: 20px 0;
        }

        .check-step li {
            font-size: 1.4rem;
        }
    }

    @media only screen and (max-width: 767px) {
        .check-step {
            padding: 20px 0 0 0;
        }

        .check-step li {
            font-size: 1.2rem;
            padding-left: 5px;
            padding-right: 5px;
        }
    }

    .addr-list ul:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .addr-list li {
        position: relative;
        float: left;
        width: 23.8095%;
        height: 162px;
        margin: 0 1.587% 1.587% 0;
        padding: 20px 20px 40px 20px;
        background: #fff;
        border: 2px solid #e9e9e9;
        overflow: hidden;
        cursor: pointer;
        color: #333;
    }

    .addr-list li dt {
        line-height: 1em;
        padding: 0 25px 10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 16px;
    }

    .addr-list li dd {
        margin-bottom: 10px;
        line-height: 1.4285;
    }

    .addr-list li .address {
        height: 2.8517em;
        overflow: hidden;
    }

    .addr-list li .tel {
        color: #605F5F;
        line-height: 1.2142;
    }

    .addr-list li .addr-opration {
        position: absolute;
    }

    .addr-list li .addr-opration .icon {
        width: 100%;
        height: 100%;
        fill: #605F5F;
    }

    .addr-list li .addr-opration:hover .icon {
        fill: #ee7a23;
    }

    .addr-list li .addr-edit {
        top: 20px;
        right: 20px;
        width: 20px;
        height: 20px;
    }

    .addr-list li .addr-del {
        bottom: 17px;
        right: 20px;
        width: 20px;
        height: 20px;
    }

    .addr-list li .addr-set-default {
        display: none;
    }

    .addr-list li .addr-set-default,
    .addr-list li .addr-default {
        bottom: 18px;
        left: 20px;
        color: #ee7a23;
    }

    .addr-list li:nth-child(4n) {
        margin-right: 0;
    }

    .addr-list li:hover {
        border-color: #ee7a23;
    }

    .addr-list li.addr-new {
        color: #605F5F;
        text-align: center;
    }

    .addr-list li.addr-new .add-new-inner {
        padding-top: 20px;
    }

    .addr-list li.addr-new .add-new-inner .icon-add {
        display: inline-block;
        width: 50px;
        height: 50px;
    }

    .addr-list li.addr-new .add-new-inner .icon-add .icon-add {
        width: 50px;
        height: 50px;
        fill: #605F5F;
    }

    .addr-list li.addr-new .add-new-inner p {
        margin-top: 10px;
    }

    .addr-list li.check {
        border-color: #ee7a23;
        border-width: 2px;
    }

    .addr-list li.check .addr-opration {
        display: block;
    }

    .shipping-addr-more {
        text-align: center;
    }

    @media only screen and (max-width: 991px) {
        .addr-list li {
            width: 49%;
            margin-right: 2%;
            height: auto;
        }

        .addr-list li:nth-child(4n) {
            margin-right: 2%;
        }

        .addr-list li:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 767px) {
        .addr-list {
            padding: 0 10px;
        }

        .addr-list li {
            width: 100%;
            margin: 0 0 10px 0;
        }

        .addr-list li dt {
            font-size: 1.6rem;
        }

        .addr-list li .address {
            height: auto;
        }
    }

    .cart-item {
        display: table;
        width: 100%;
    }

    .cart-item-head {
        display: table-header-group;
        width: 100%;
    }

    .cart-item-head ul {
        display: table-row;
        width: 100%;
    }

    .cart-item-head li {
        display: table-cell;
        height: 40px;
        line-height: 40px;
        background: #605F5F;
        color: #fff;
        text-align: center;
        text-transform: uppercase;
        font-family: "moderat", sans-serif;
        letter-spacing: .25em;
    }

    .cart-item-head li:nth-child(2),
    .cart-item-head li:nth-child(3),
    .cart-item-head li:nth-child(4),
    .cart-item-head li:nth-child(5) {
        /*width: 11%;*/
        padding: 0 10px;
    }

    .cart-item-list {
        display: table-row-group;
    }

    .cart-item-list>li {
        position: relative;
        display: table-row;
        padding: 32px 0;
        background: #fff;
    }

    .cart-item-list>li>div {
        position: relative;
        display: table-cell;
        text-align: center;
        vertical-align: top;
        border-bottom: 1px solid #e9e9e9;
        height: 100%;
    }

    .cart-item-list>li.disabled {
        background: #e9e9e9;
    }

    .cart-item-list>li.disabled .item-check-btn {
        background: #ccc;
    }

    .cart-item-list>li.disabled>div:after {
        position: absolute;
        top: 0;
        left: 0;
        content: "";
        width: 100%;
        height: 100%;
        z-index: 5;
    }

    .cart-item-list>li.item-has-include .cart-item-title {
        display: block;
        min-height: 66px;
        padding-left: 160px;
    }

    .cart-item-list .cart-tab-1 {
        min-height: 72px;
        padding: 32px 0 32px 0;
        text-align: left;
        border-left: 1px solid #e9e9e9;
    }

    .cart-item-list .cart-tab-2 {
        padding-top: 64px;
    }

    .cart-item-list .cart-tab-3 {
        padding-top: 48px;
    }

    .cart-item-list .cart-tab-4 {
        padding-top: 64px;
    }

    .cart-item-list .cart-tab-5 {
        padding-top: 62px;
        border-right: 1px solid #e9e9e9;
    }

    .cart-item-list .cart-item-check {
        float: left;
        padding: 30px 0 0 20px;
    }

    .cart-item-list .cart-item-pic {
        float: left;
        width: 80px;
        height: 80px;
        margin-left: 20px;
        border: 1px solid #e9e9e9;
        overflow: hidden;
    }

    .cart-item-list .cart-item-pic img {
        width: 100%;
    }

    .cart-item-list .cart-item-title {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 76px;
        padding: 0 20px 0 20px;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }

    .cart-item-list .cart-item-title .item-name {
        width: 100%;
        line-height: 76px;
        color: #000;
        font-family: "moderat", sans-serif;
        font-weight: bold;
    }

    .cart-item-list .cart-item-title .item-count-down {
        margin-top: 10px;
        font-size: 12px;
    }

    .cart-item-list .cart-item-title .item-count-down .icon-clock {
        width: 1em;
        height: 1em;
        fill: #605F5F;
        vertical-align: top;
    }

    .cart-item-list .cart-item-title .item-count-down .item-count-down-time {
        padding: 1px 5px 0 5px;
        background: #f0f0f0;
        color: #605F5F;
    }

    .cart-item-list .cart-item-title .item-count-down .item-count-down-tips {
        margin-top: 5px;
        color: #ee7a23;
    }

    .cart-item-list .item-include {
        position: relative;
        width: 96%;
        padding-left: 160px;
    }

    .cart-item-list .item-include dl {
        padding-right: 60px;
    }

    .cart-item-list .item-include dl dt {
        float: left;
        width: 4.5em;
    }

    .cart-item-list .item-include dl dd {
        margin-bottom: 13px;
        padding-left: 4.5em;
        color: #999;
    }

    .cart-item-list .item-include dl dd:last-child {
        margin-bottom: 0;
    }

    .cart-item-list .item-include dl:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .cart-item-list .item-include .item-include-more {
        position: absolute;
        right: 10px;
        top: 0;
    }

    .cart-item-list .item-stock {
        margin-top: 5px;
        font-size: 12px;
        color: #999;
    }

    .cart-item-list .item-stock-no {
        color: #d1434a;
    }

    .cart-item-list .item-price {
        font-size: 16px;
        color: #333;
    }

    .cart-item-list .item-price-total {
        color: #d1434a;
        font-size: 16px;
    }

    .cart-item-list .item-edit-btn {
        position: relative;
        z-index: 6;
    }

    .cart-item-list .item-edit-btn:hover .icon {
        fill: #ee7a23;
    }

    .item-check-btn {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: #fff;
        border: 1px solid #999;
        border-radius: 50%;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
    }

    .item-check-btn .icon-ok {
        position: relative;
        display: none;
        width: 100%;
        height: 100%;
        fill: #fff;
        -webkit-transform: scale(0.6);
        -ms-transform: scale(0.6);
        transform: scale(0.6);
        vertical-align: top;
    }

    .item-check-btn.check {
        background-color: #ee7a23;
        border-color: #ee7a23;
    }

    .item-check-btn.check .icon-ok {
        display: inline-block;
    }

    .item-edit-btn {
        display: inline-block;
        width: 20px;
        height: 20px;
    }

    .item-edit-btn .icon-del {
        width: 100%;
        height: 100%;
        fill: #999;
    }

    .order-item .cart-item-head li:nth-child(2),
    .order-item .cart-item-head li:nth-child(3),
    .order-item .cart-item-head li:nth-child(4) {
        width: 16%;
        padding: 0 10px;
    }

    .order-item .select-self {
        cursor: default;
    }

    .order-item .select-self-area .select-ipt {
        padding: 0;
        text-align: center;
    }

    @media only screen and (max-width: 991px) {
        .cart-item {
            display: block;
        }

        .cart-item-head {
            display: none;
        }

        .cart-item-list {
            display: block;
        }

        .cart-item-list>li {
            position: relative;
            display: block;
            margin-bottom: 10px;
            padding: 0;
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
        }

        .cart-item-list>li>div {
            position: static;
            display: block;
            border: none;
        }

        .cart-item-list>li:last-child {
            margin-bottom: 0;
        }

        .cart-item-list>li:after {
            visibility: hidden;
            display: block;
            content: " ";
            clear: both;
        }

        .cart-item-list>li:after {
            visibility: visible;
        }

        .cart-item-list>li.item-has-include .cart-item-title {
            min-height: 76px;
            display: block;
            padding-left: 126px;
        }

        .cart-item-list .cart-tab-1 {
            padding: 18px 0 0 0;
            border: none;
        }

        .cart-item-list .cart-tab-2 {
            display: none;
        }

        .cart-item-list .cart-tab-3 {
            float: left;
            width: 50%;
            margin-top: 10px;
            padding: 8px 0 8px 10px;
            text-align: left;
            border-top: 1px solid #f0f0f0;
        }

        .cart-item-list .cart-tab-4 {
            float: right;
            width: 50%;
            margin-top: 10px;
            padding: 15px 10px 14px 0;
            text-align: right;
            border-top: 1px solid #f0f0f0;
        }

        .cart-item-list .cart-tab-5 {
            clear: both;
            padding: 0;
        }

        .cart-item-list .cart-item-check {
            padding-left: 8px;
        }

        .cart-item-list .cart-item-pic {
            margin-left: 8px;
            width: 75px;
            height: 75px;
        }

        .cart-item-list .cart-item-title {
            min-height: 76px;
            padding: 0 10px 0 15px;
        }

        .cart-item-list .cart-item-title .item-count-down {
            font-size: 1.2rem;
        }

        .cart-item-list .item-include {
            clear: both;
            width: 100%;
            margin-top: 6px;
            padding: 0 10px 0 36px;
            font-size: 12px;
        }

        .cart-item-list .item-quantity>div {
            display: inline-block;
            margin-right: 3px;
            vertical-align: middle;
        }

        .cart-item-list .item-stock {
            margin-top: 0;
            font-size: 1.2rem;
        }

        .cart-item-list .cart-item-opration {
            position: absolute;
            top: 60px;
            right: 10px;
        }

        .order-item .cart-item-list .item-include {
            padding-left: 10px;
        }
    }

    /** shipping method **/
    .shipping-method:after,
    .shipping-method-whiteglove:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .shipping-method li,
    .shipping-method-whiteglove li {
        float: left;
        width: 23.8095%;
        height: 162px;
        margin: 0 1.587% 1.587% 0;
        padding: 20px;
        background: #fff;
        border: 2px solid #e9e9e9;
        font-size: 16px;
        line-height: 1.625;
        cursor: pointer;
        color: #333;
    }

    .shipping-method li:nth-child(4n),
    .shipping-method-whiteglove li:nth-child(4n) {
        margin-right: 0;
    }

    .shipping-method li .price,
    .shipping-method-whiteglove li .price {
        height: 26px;
        font-weight: bold;
    }

    .shipping-method li .shipping-tips,
    .shipping-method-whiteglove li .shipping-tips {
        height: 44px;
        margin-top: 20px;
        font-weight: 200;
        font-size: 14px;
    }

    .shipping-method li .shipping-tips p,
    .shipping-method-whiteglove li .shipping-tips p {
        line-height: 1.2587;
        color: #999;
    }

    .shipping-method li .shipping-tips .details,
    .shipping-method-whiteglove li .shipping-tips .details {
        display: inline-block;
        margin-top: 10px;
        color: #ee7a23;
        line-height: 1.5714;
        font-weight: bold;
    }

    .shipping-method li .shipping-tips .details .icon-question,
    .shipping-method-whiteglove li .shipping-tips .details .icon-question {
        width: 15px;
        height: 15px;
        fill: #ee7a23;
        vertical-align: middle;
    }

    .shipping-method li .shipping-tips .details span,
    .shipping-method-whiteglove li .shipping-tips .details span {
        text-decoration: underline;
        margin-left: 5px;
    }

    .shipping-method li.check,
    .shipping-method li:hover,
    .shipping-method-whiteglove li.check,
    .shipping-method-whiteglove li:hover {
        border-color: #ee7a23;
    }

    @media only screen and (max-width: 991px) {

        .shipping-method li,
        .shipping-method-whiteglove li {
            width: 49%;
            margin-right: 2%;
        }

        .shipping-method li:nth-child(4n),
        .shipping-method-whiteglove li:nth-child(4n) {
            margin-right: 2%;
        }

        .shipping-method li:nth-child(2n),
        .shipping-method-whiteglove li:nth-child(2n) {
            margin-right: 0;
        }
    }

    @media only screen and (max-width: 767px) {

        .shipping-method,
        .shipping-method-whiteglove {
            padding: 0 10px;
        }

        .shipping-method li,
        .shipping-method-whiteglove li {
            width: 100%;
            margin: 0 0 10px 0;
            font-size: 1.6rem;
        }

        .shipping-method li .shipping-tips,
        .shipping-method-whiteglove li .shipping-tips {
            font-size: 1.4rem;
        }
    }

    /** apply promotion **/
    .apply-promotion {
        font-size: 0;
    }

    .apply-promotion:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .apply-promotion li {
        float: left;
        width: 24.25%;
        margin: .5% 1% .5% 0;
        height: 160px;
        padding-top: 25px;
        background: #fff;
        border: 2px solid #e9e9e9;
        vertical-align: top;
        text-align: center;
    }

    .apply-promotion li:nth-child(4n) {
        margin-right: 0;
    }

    .apply-promotion li p {
        margin-top: 12px;
        font-size: 16px;
        color: #333;
    }

    .apply-promotion .type i {
        display: inline-block;
        width: 70px;
        height: 70px;
        background: url(http://image3.lecloud.com/lemallus/20170206-bea3d222-1877-433d-9dec-325e35f92a77.png) no-repeat 0 0;
        background-size: 140px auto;
    }

    .apply-promotion .type.coupon-money i {
        background-position: 0 -70px;
    }

    .apply-promotion .type.coupon-off i {
        background-position: 0 -210px;
    }

    .apply-promotion .type.coupon-off-ladder i {
        background-position: 0 -140px;
    }

    .apply-promotion .type.coupon-gift i {
        background-position: 0 -350px;
    }

    .apply-promotion .type.coupon-gift-ladder i {
        background-position: 0 -280px;
    }

    @media only screen and (max-width: 767px) {
        .apply-promotion {
            padding: 0 10px;
        }

        .apply-promotion li {
            width: 49%;
            height: 100px;
            padding-top: 5px;
            border-width: 1px;
            margin-right: 2%;
            margin-bottom: 2%;
        }

        .apply-promotion li:nth-child(2n) {
            margin-right: 0;
        }

        .apply-promotion li .type i {
            -webkit-transform: scale(0.65);
            -ms-transform: scale(0.65);
            transform: scale(0.65);
        }

        .apply-promotion li p {
            margin-top: 0;
            font-size: 12px;
        }
    }

    .price-count ul {
        display: table;
        width: 100%;
    }

    .price-count li {
        display: table-row;
        font-size: 18px;
    }

    .price-count li span {
        display: table-cell;
        height: 36px;
        padding-right: 10px;
        vertical-align: top;
        text-align: right;
    }

    .price-count li span:first-child {
        color: #999;
    }

    .price-count li span:last-child {
        width: 20px;
        padding-left: 10px;
        white-space: nowrap;
    }

    .price-count .order-total-price span:last-child {
        color: #d1434a;
        font-size: 1.125em;
        font-weight: bold;
    }

    .tips_pop {
        position: relative;
    }

    .tips_pop .i_info {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: url(http://image3.lecloud.com/lemallus/20160904-732243ef-e62b-4642-acea-153967123d03.png) no-repeat 0 0;
        background-size: 100% auto;
        border-radius: 50%;
        vertical-align: top;
    }

    .tips_pop .tips_pop_box {
        position: absolute;
        bottom: 28px;
        left: -250px;
        display: none;
        width: 274px;
        padding: 20px 10px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .tips_pop .i_down {
        position: absolute;
        bottom: -6px;
        right: 10px;
        display: inline-block;
        width: 10px;
        height: 10px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        background: #fff;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .tips_pop:hover .tips_pop_box {
        display: block;
    }

    .tee_tips_pop {
        display: inline-block;
        margin-right: 44px;
        font-size: 14px;
        text-align: left;
    }

    .tee_tips_pop dt {
        margin-bottom: 10px;
        color: #333;
    }

    .tee_tips_pop .tee_pop_box em {
        display: inline-block;
        width: 190px;
        vertical-align: top;
    }

    .tee_tips_pop .tee_pop_box .price {
        width: 50px;
        text-align: right;
    }

    .tee_tips_pop .tee_pop_box .tee_total {
        margin-top: 13px;
        padding-top: 13px;
        border-top: 1px solid #f0f0f0;
    }

    .tee_tips_pop .tee_pop_box .tee_total em {
        color: #333;
    }

    .tee_tips_pop .tee_pop_box .price {
        color: #d1434a;
    }

    @media only screen and (max-width: 991px) {
        .price-count li {
            font-size: 1.4rem;
        }

        .price-count li span {
            height: 29px;
        }
    }

    /*  订单成功  */
    .order-create {
        padding: 80px 0 50px 0;
        text-align: center;
    }

    .order-create-pic {
        height: 130px;
        margin: 0 auto;
        margin-bottom: 60px;
    }

    .order-create-pic img {
        height: 100%;
    }

    .order-create-main {
        font-size: 18px;
        line-height: 1.3;
    }

    .order-create-main h3 {
        margin-bottom: 20px;
        font-size: 1.25em;
        font-weight: 200;
        color: #333;
    }

    .order-create-main p {
        margin-bottom: 40px;
        color: #999;
    }

    .order-create-main p span {
        margin: 0 10px;
    }

    .order-create-main .order-create-btn-wrap {
        max-width: 460px;
        margin: 0 auto;
        padding: 0 5px;
    }

    .order-create-main .order-create-btn-wrap>div {
        float: left;
        width: 50%;
        padding: 0 10px;
    }

    .order-create-main .order-create-btn-wrap .btn {
        width: 100%;
        min-width: 120px;
    }

    .order-create-main .order-create-btn-wrap:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .order-create-main .checkout-share-order {
        margin: 20px auto;
    }

    .order-create-main .checkout-share-order .checkout-share-tit {
        font-size: 1.44em;
        color: #e02614;
        font-weight: 200;
    }

    .order-create-main .checkout-share-main {
        text-align: center;
    }

    .order-create-main .checkout-share-main button {
        margin: 0 5%;
        padding: 20px 0;
        color: #e02614;
    }

    .order-create-main .checkout-share-main button:hover {
        opacity: .6;
    }

    .order-create-main .checkout-share-main .checkout-share-icon {
        width: 60px;
        height: 60px;
        margin: 10px auto;
    }

    .order-create-main .checkout-share-main .checkout-share-icon .icon {
        width: 100%;
        height: 100%;
        fill: #e02614;
    }

    .order-create-main .checkout-share-main .checkout-share-twitter {
        color: #ee7a23;
    }

    .order-create-main .checkout-share-main .checkout-share-twitter .icon {
        fill: #ee7a23;
    }

    .order-create-main .checkout-share-main .checkout-share-name {
        margin: 0;
        font-weight: 200;
        text-transform: uppercase;
        font-size: .6em;
        letter-spacing: .25em;
    }

    .order-create-main .get-lecode {
        margin-bottom: 40px;
        padding: 0 10px;
    }

    .order-create-main .get-lecode .lecode-main {
        max-width: 767px;
        margin: 0 auto 10px auto;
        padding: 37px 0;
        border: 1px dashed #ee7a23;
    }

    .order-create-main .get-lecode .lecode-main .lecode-num {
        margin-bottom: 20px;
        color: #ee7a23;
        font-size: 20px;
    }

    .order-create-main .get-lecode .get-lecode-tips {
        color: #999;
        line-height: 16px;
        line-height: 18px;
    }

    @media only screen and (max-width: 767px) {
        .order-create {
            padding: 60px 0 0 0;
        }

        .order-create-pic {
            height: 104px;
            margin-bottom: 40px;
        }

        .order-create-main {
            font-size: 1.4rem;
        }

        .order-create-main h3,
        .order-create-main p {
            line-height: 1.5;
        }

        .order-create-main h3 {
            margin-bottom: 20px;
        }

        .order-create-main p span {
            display: block;
        }

        .order-create-main .order-create-btn-wrap>div {
            padding: 0 5px;
        }

        .order-create-main .order-create-btn-wrap .btn {
            font-size: 1.2rem;
            letter-spacing: .1em;
        }

        .order-create-main .checkout-share-main {
            font-size: 1.2rem;
        }

        .order-create-main .checkout-share-main .checkout-share-icon {
            width: 40px;
            height: 40px;
        }

        .order-create-main .get-lecode .lecode-main {
            width: 100%;
        }
    }

    .footer {
        margin-top: 50px;
    }

    .checkout-page .btn,
    .checkout .btn {
        min-width: 200px;
    }

    .checkout-page .page-title-h2 {
        display: none;
    }

    .checkout-title h2 {
        padding: 20px 0;
        font-size: 16px;
        color: #605F5F;
    }

    /** 确认地址 **/
    .checkout-addr {
        padding: 10px 0 50px 0;
    }

    .checkout-addr .next-btn-wrap {
        margin-top: 20px;
        text-align: right;
    }

    /** cart **/
    .cart {
        padding-bottom: 50px;
    }

    .cart-foot-wrap {
        margin-top: 20px;
        background: #fff;
        border: 1px solid #e9e9e9;
        font-size: 16px;
    }

    .cart-foot-wrap.fixed {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        z-index: 101;
    }

    .cart-foot-wrap .cart-foot-inner:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .cart-foot-wrap .cart-foot-l {
        float: left;
        padding: 0 22px;
        line-height: 54px;
    }

    .cart-foot-wrap .item-all-check {
        float: left;
    }

    .cart-foot-wrap .item-all-check .item-check-btn {
        margin-right: 18px;
    }

    .cart-foot-wrap .item-all-check span {
        vertical-align: middle;
    }

    .cart-foot-wrap .item-all-del {
        float: left;
        margin-left: 22px;
    }

    .cart-foot-wrap .item-all-del .item-del-btn {
        vertical-align: middle;
    }

    .cart-foot-wrap .cart-foot-r {
        float: right;
    }

    .cart-foot-wrap .cart-foot-r:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .cart-foot-wrap .item-total {
        float: left;
        margin: 0px 30px 0 0;
        color: #999;
        font-size: 16px;
        text-align: right;
        line-height: 54px;
    }

    .cart-foot-wrap .item-total .total-price {
        margin-left: 6px;
        color: #d1434a;
        font-size: 1.125em;
        font-weight: bold;
        line-height: 1.2;
    }

    .cart-foot-wrap .cart-foot-checkout-promotions {
        margin-top: 2px;
        font-size: 12px;
    }

    .cart-foot-wrap .btn-wrap,
    .cart-foot-wrap .next-btn-wrap {
        float: right;
    }

    .cart-foot-wrap .next-btn-wrap .btn {
        height: 55px;
        line-height: 55px;
    }

    /** order confirm **/
    .checkout-order {
        padding: 10px 0 50px 0;
    }

    .checkout-order .item-list-wrap {
        margin-bottom: 40px;
    }

    .redeem-coupon-wrap {
        padding-bottom: 40px;
    }

    .redeem-coupon-wrap .text-redeem {
        width: 380px;
        height: 40px;
        line-height: 40px;
        margin-right: 16px;
        padding-top: 0;
        padding-bottom: 0;
        vertical-align: top;
    }

    .apply-promotion-wrap {
        margin-bottom: 60px;
    }

    .price-count-wrap {
        margin-bottom: 20px;
    }

    .order-foot-wrap .prev-btn-wrap {
        float: left;
    }

    .order-foot-wrap .next-btn-wrap {
        float: right;
    }

    .order-foot-wrap:after {
        visibility: hidden;
        display: block;
        content: " ";
        clear: both;
    }

    .md-white-glove {
        width: 620px;
    }

    .md-white-glove .md-modal-inner {
        padding: 54px 30px 28px 30px;
    }

    .md-white-glove .main-white-glove {
        padding-left: 15px;
        line-height: 1;
    }

    .md-white-glove .main-white-glove ul {
        margin: 40px 0;
    }

    .md-white-glove .main-white-glove li {
        margin: 15px 0;
        list-style-type: decimal;
        color: #999;
    }

    .md-white-glove .main-white-glove .link-faq {
        text-align: right;
        font-size: 16px;
        font-weight: bold;
    }

    /** cart blank **/
    .cart-blank-wrap {
        padding-bottom: 50px;
    }

    .cart-blank-wrap .page-title-normal {
        display: none;
    }

    .cart-blank {
        padding: 80px 0 0 0;
        text-align: center;
    }

    .cart-blank .cart-blank-pic {
        height: 107px;
        margin-bottom: 60px;
    }

    .cart-blank .cart-blank-pic img {
        height: 100%;
    }

    .cart-blank h3 {
        line-height: 1.35;
        margin-bottom: 40px;
        font-size: 20px;
        font-weight: 200;
    }

    @media only screen and (max-width: 1280px) {
        .container {
            width: 100%;
        }
    }

    @media only screen and (max-width: 991px) {
        .cart-foot-wrap .cart-foot-l {
            padding: 0 0 0 10px;
        }
    }

    @media only screen and (max-width: 767px) {
        .footer {
            margin-top: 0;
        }

        .md-white-glove .md-content {
            padding: 30px 10px 20px 10px;
        }

        .md-white-glove .main-white-glove {
            font-size: 12px;
            font-weight: 200;
        }

        .md-white-glove .main-white-glove ul {
            margin: 20px 0;
        }

        .md-white-glove .main-white-glove .link-faq {
            font-size: 12px;
        }

        .checkout-page,
        .checkout {
            padding-bottom: 50px;
        }

        .checkout-page .header,
        .checkout .header {
            border-bottom: 1px solid #e9e9e9;
        }

        .checkout-page .lemall-msg-info,
        .checkout .lemall-msg-info {
            margin-left: 10px;
            margin-right: 10px;
        }

        .cart-page {
            padding-bottom: 75px;
        }

        .cart-page {
            padding-bottom: 75px;
        }

        .checkout-page .page-title-h2 {
            display: block;
        }

        .cart {
            padding-bottom: 0;
        }

        .page-title-normal {
            border: none;
        }

        .checkout-title h2 {
            padding: 2.5rem 0 1.3rem;
            font-size: 1.4rem;
            border-bottom: none;
        }

        .check-step ul {
            margin-bottom: 0;
        }

        .next-btn-wrap {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 101;
        }

        .next-btn-wrap .btn {
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
        }

        .checkout-addr {
            padding: 0;
        }

        .checkout-addr .next-btn-wrap {
            margin: 0;
            border: none;
        }

        .checkout-order {
            padding: 0;
        }

        .checkout-order .item-list-wrap {
            margin-bottom: 0;
        }

        .cart-foot-wrap {
            border: none;
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            z-index: 101;
        }

        .cart-foot-wrap .cart-foot-l {
            font-size: 1.4rem;
            line-height: 48px;
        }

        .cart-foot-wrap .item-all-check {
            color: #605F5F;
        }

        .cart-foot-wrap .item-all-check .item-check-btn {
            margin-right: 5px;
        }

        .cart-foot-wrap .item-all-del {
            display: none;
        }

        .cart-foot-wrap .item-total {
            margin-top: 8px;
            margin-right: 10px;
            padding-left: 0;
            text-align: right;
            font-size: 1.2rem;
        }

        .cart-foot-wrap .item-total .total-price {
            display: block;
            margin: 0;
            font-size: 1.6rem;
            margin-top: 2px;
        }

        .cart-foot-wrap .cart-foot-checkout-promotions {
            position: absolute;
            bottom: 50px;
            left: 0;
            width: 100%;
            padding: 5px;
            background: #f0f0f0;
            border-top: 1px solid #e9e9e9;
            text-align: center;
            font-size: 1.2rem;
        }

        .cart-foot-wrap .btn {
            min-width: 116px;
            height: 50px;
            line-height: 50px;
            font-size: 13px;
        }

        .cart-foot-wrap .next-btn-wrap {
            position: relative;
            float: right;
            width: auto;
        }

        .cart-foot-wrap .next-btn-wrap .btn {
            width: 120px;
        }

        .confirm-item-list-wrap,
        .redeem-coupon-wrap,
        .apply-promotion-wrap {
            margin-bottom: 0;
        }

        .redeem-coupon-wrap {
            padding-bottom: 0;
        }

        .redeem-coupon-wrap .redeem-coupon {
            margin: 0 10px;
        }

        .redeem-coupon-wrap .text-redeem {
            width: 100%;
            margin-bottom: 8px;
            margin-right: 0;
        }

        .redeem-coupon-wrap .btn {
            width: 100%;
        }

        .price-count-wrap {
            margin: 0;
            padding: 25px 0 15px 0;
            border: none;
        }

        .tee_tips_pop {
            display: none;
        }

        .order-foot-wrap .prev-btn-wrap {
            display: none;
        }

        .cart-blank-wrap .page-title-normal {
            display: block;
        }

        .cart-blank {
            padding-top: 60px;
        }

        .cart-blank .cart-blank-pic {
            height: 96px;
            margin-bottom: 20px;
        }

        .cart-blank h3 {
            font-size: 18px;
        }

        .cart-blank .br {
            display: block;
        }

        .header__primary {
            display: none;
        }

        .header__secondary__user {
            right: 61px;
        }

        .header__secondary__cart {
            right: 22px;
        }

        .header__search-mobile,
        .header__search-wrapper {
            display: none;
        }
    }
</style>