<template>
    <div>
        <div class="checkout-page cm-Layout">
            <div class="container">
                <div class="checkout-addr">
                    <div class="page-title-normal">
                        <h2 class="page-title-h2"><span>check out</span></h2>
                    </div>
                    <!-- process step -->
                    <div class="check-step">
                        <ul>
                            <li class="cur"><span>确认</span> 收货地址</li>
                            <li><span>核对</span> 订单信息</li>
                            <li><span>支付</span> 方式</li>
                            <li><span>成功提交</span> 订单</li>
                        </ul>
                    </div>

                    <!-- address list -->
                    <div class="page-title-normal checkout-title">
                        <h2 style="padding: 20px 0; text-align: left; font-size: 18px;color: #605f5f;"><span>收货人信息</span></h2>
                    </div>
                    <div class="addr-list-wrap">
                        <div class="addr-list">
                            <ul>
                                <li v-for="(item,index) in addressListFilter" v-bind:class="{'check':checkIndex==index}" @click="checkIndex=index;selectedAddrId=item.addressId" :key="index">
                                    <dl>
                                        <dt>{{item.userName}}</dt>
                                        <dd class="address">{{item.streetName}}</dd>
                                        <dd class="tel">{{item.tel}}</dd>
                                    </dl>
                                    <div class="addr-opration addr-del">
                                        <a href="javascript:;" class="addr-del-btn" @click="delAddressConfirm(item.addressId)">
                                            <svg class="icon icon-del">
                                                <use xlink:href="#icon-del"></use>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="addr-opration addr-set-default">
                                        <a href="javascript:;" class="addr-set-default-btn" v-if="!item.isDefault" @click="setDefault(item.addressId)"><i>设为默认地址</i></a>
                                    </div>
                                    <div class="addr-opration addr-default" v-if="item.isDefault">默认地址</div>
                                </li>
                                <li class="addr-new">
                                    <div class="add-new-inner">
                                        <i class="icon-add">
                                            <svg class="icon icon-add">
                                                <use xlink:href="#icon-add"></use>
                                            </svg>
                                        </i>
                                        <p>新增收货地址</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="shipping-addr-more">
                            <a style="color: #ee7a23;" class="addr-more-btn up-down-btn" href="javascript:;" @click="expand" v-bind:class="{'open':limit>3}">
                                更多地址
                                <i class="el-icon-arrow-down"></i>
                            </a>
                        </div>
                    </div>

                    <!-- shipping method-->
                    <div class="page-title-normal checkout-title">
                        <h2 style="padding: 20px 0; text-align: left; font-size: 18px;color: #605f5f;"><span>货运方式</span></h2>
                    </div>
                    <div class="shipping-method-wrap">
                        <div class="shipping-method">
                            <ul>
                                <li class="check">
                                    <div class="name">京东快递</div>
                                    <div class="price">包邮</div>
                                    <div class="shipping-tips">
                                        <p>自签收后7天内退货，15天内换货，可享1次上门取件服务</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="next-btn-wrap">
                        <router-link class="btn btn--m btn--red" v-bind:to="{path:'orderConfirm',query:{'addressId':selectedAddrId}}">去结算</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from "axios";
    axios.defaults.baseURL = "http://localhost:8080"; //设置全局URL
    axios.defaults.headers.post["Content-Type"] = "application/json";
    export default {
        data() {
            return {
                limit: 3,
                checkIndex: 0,
                selectedAddrId: '',
                addressList: [],
                isMdShow_del: false,
                isMdShow_undel: false,
                addressId: ''
            }
        },
        mounted() {
            this.init();
        },
        computed: {
            addressListFilter() {
                return this.addressList.slice(0, this.limit);
            }
        },
        components: {},
        methods: {
            async init() {
                const res = await axios.get(`/addressList/`, {});
                console.log(res)
                this.addressList = res.data.data.result;
                this.selectedAddrId = this.addressList[0].addressId;
            },
            expand() {
                if (this.limit == 3) {
                    this.limit = this.addressList.length;
                } else {
                    this.limit = 3;
                }
            },
            setDefault(addressId) {
                axios.post("/users/setDefault", {
                    addressId: addressId
                }).then((response) => {
                    let res = response.data;
                    if (res.status == '0') {
                        console.log("set default");
                        this.init();
                    }
                })
            },
            closeModal() {
                this.isMdShow_del = false;
                this.isMdShow_undel = false;
            },
            delAddressConfirm(addressId) {
                if (this.addressList.length > 1) {
                    this.isMdShow_del = true;
                    this.addressId = addressId;
                } else {
                    this.isMdShow_undel = true;
                }
            },
            delAddress() {
                axios.post("/users/delAddress", {
                    addressId: this.addressId
                }).then((response) => {
                    let res = response.data;
                    if (res.status == "0") {
                        console.log("del suc");
                        this.isMdShow_del = false;
                        this.init();
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .addr-set-default-btn {
        color: #ee7a23;
        font-size: 14px;
    }
</style>
