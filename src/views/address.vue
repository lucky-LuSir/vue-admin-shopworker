<template>
    <div>
        <div class="checkout-page cm-Layout">
            <div class="container">
                <div class="checkout-addr">
                    <div class="check-step">
                        <ul>
                            <li class="cur"><span>确认</span> 收货地址</li>
                            <li><span>核对</span> 订单信息</li>
                            <li><span>支付</span> 方式</li>
                            <li><span>成功提交</span> 订单</li>
                        </ul>
                    </div>
                    <div class="add-list-wrap">
                        <div class="addr-msg">
                            <h2 class="clearfix" style="padding: 20px 0; text-align: left; font-size: 18px;color: #605f5f;">
                                <span>收货人信息</span>
                                <p class="addr-create" @click="createAddDialog()">使用新地址</p>
                            </h2>
                        </div>
                        <ul class="consignee-list clearfix">
                            <li v-for="(item, index) in addressList" :key="index" class="addList-item defaultFirst" selected="selected">
                                <div @click="defaultAddr(index)" class="addLabel">
                                    <span>{{item.title}}</span>
                                    <b></b>
                                </div>
                                <div class="addr-detail">
                                    <span class="addr-name">{{item.receiver}}</span>
                                    <span class="addr-info">{{item.province}} {{item.city}} {{item.district}} {{item.place}}</span>
                                    <span class="addr-tel">{{item.mobile | companyFilter}}</span>
                                </div>
                                <div class="op-btns" consigneeid="959992403" isoldaddress="false">
                                    <a href="#none" class="ftx-05 setdefault-consignee">设为默认地址</a> <a href="#none" class="ftx-05 edit-consignee">编辑</a>
                                    <a href="#none" class="ftx-05 del-consignee hide">删除</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="next-btn-wrap">
                        <!-- <router-link class="btn btn--m btn--red" v-bind:to="{path:'orderConfirm',query:{'addressId':selectedAddrId}}">去结算</router-link> -->
                        <el-button class="configure" type="primary" @click="toOrders()">
                        <span style="font-family: Arvo">提交订单&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </el-button>
                    </div>
                </div>
            </div>
            <el-dialog class="addDialog" title="Create address" :visible.sync="addDialogVisible" width="680px">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="province" prop="province">
                        <el-input v-model="ruleForm.province"></el-input>
                    </el-form-item>
                    <el-form-item label="city" prop="city">
                        <el-input v-model="ruleForm.city"></el-input>
                    </el-form-item>
                    <el-form-item label="receiver" prop="receiver">
                        <el-input v-model="ruleForm.receiver"></el-input>
                    </el-form-item>
                    <el-form-item label="mobile" prop="mobile">
                        <el-input v-model="ruleForm.mobile"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="createAdd('ruleForm')">立即创建</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    // 过滤时间
    Vue.filter("companyFilter", function(value) {
        var newvalue = value.replace(value.slice(3, 7), "****");
        return newvalue;
    });
    export default {
        data() {
            return {
                limit: 3,
                checkIndex: 0,
                selectedAddrId: '',
                addressList: [],
                isMdShow_del: false,
                isMdShow_undel: false,
                addressId: '',
                addDialogVisible: false,
                rules: {
                    province: [{
                        required: true,
                        message: 'please select the province',
                        trigger: 'blur'
                    }, ],
                    city: [{
                        required: true,
                        message: 'please select the city',
                        trigger: 'blur'
                    }, ],
                    receiver: [{
                        required: true,
                        message: 'please select the receiver',
                        trigger: 'blur'
                    }, ],
                    mobile: [{
                        required: true,
                        message: 'please select the mobile',
                        trigger: 'blur'
                    }, ],

                },
                ruleForm: {
                    province: '',
                    city: '',
                    receiver: '',
                    mobile: '',
                },
                defaultIndex: 0,
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
            defaultAddr(index) {
                var list = document.querySelectorAll(".addList-item");
                for (var i = 0; i < list.length; i++) {
                    list[i].classList.remove("defaultIndex");
                    list[i].classList.remove("defaultFirst");
                }
                list[index].classList.add("defaultIndex");
            },
            toOrders() {
                // let 
                // // this.$router.push(
                // //     {
                // //         path: '/orderSuccess', 
                // //         query: {orderObj: }
                // //     }
                // // )
                // this.$router.push('/orderSuccess');
                this.$router.push('/orderConfirm');
            },
            async init() {
                let _mainObj = window.sessionStorage.getItem("_mainObj");
                _mainObj = JSON.parse(_mainObj);
                let user_id = _mainObj.user_id;
                const res = await this.$ajax.get(`/address/${user_id}/`);
                var data = res.data;
                data = JSON.parse(data);
                // console.log(data)
                this.addressList = data;


                // this.selectedAddrId = this.addressList[0].addressId;
            },
            createAddDialog() {
                this.addDialogVisible = true;
            },
            async createAdd() {
                let user_id = JSON.parse(window.sessionStorage.getItem("_mainObj")).user_id;
                console.log(user_id)
                let obj = {
                    "user_id": 2,
                    "city": "上海市",
                    "district": "浦东区",
                    "email": "1@qq.com",
                    "mobile": "13388888888",
                    "place": "龙华中路111号",
                    "province": "上海",
                    "receiver": "lusir",
                    "tel": "021-00000000",
                    "title": "上海接收处"
                }
                const res = await this.$ajax.post(`/address/`, obj);
                console.log(res)
                // {
                //     "user_id": "2",
                //     "title": "男",
                //     "first_name": "1",
                //     "last_name": "2",
                //     "zip_code": "430000",
                //     "mobile": "13333333333",
                //     "country": "德克萨斯",
                //     "state": "美国",
                //     "city": "纽约",
                //     "address_line": "国际大道222号"
                // }
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

    .add-list-wrap {
        background-color: #fff;
        padding: 0 20px 10px;
        border: 1px solid #f0f0f0;
    }

    .addr-msg {
        span {
            float: left;
        }

        .addr-create {
            float: right;
            font-size: 12px;
            color: #8781c5;
            cursor: pointer;
        }
    }

    .consignee-list {
        .addList-item {
            display: list-item;
            list-style: none;
            height: 30px;
            margin: 6px 0;
            float: left;
            width: 99.8%;
        }
        .addList-item:hover {
            background-color: #fff3f3;
        }
        span {
            font-size: 13px;
        }
        .addList-item.defaultFirst:nth-child(1) {
            .addLabel {
                border: 2px solid #e4393c;
                padding: 4px 10px;
            }
            b {
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
                width: 12px;
                height: 12px;
                overflow: hidden;
                background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/selected-icon.png) no-repeat;
            }
        }
        .defaultIndex {
            
            .addLabel {
                border: 2px solid #e4393c;
                padding: 4px 10px;
            }
            b {
                display: block;
                position: absolute;
                right: 0;
                bottom: 0;
                width: 12px;
                height: 12px;
                overflow: hidden;
                background: url(//misc.360buyimg.com/user/purchase/2.0.0/css/i/selected-icon.png) no-repeat;
            }
        }
            
        .addLabel:hover {
            border: 2px solid #e4393c;
            padding: 4px 10px;
        }
        .addLabel {
            
            float: left;
            list-style: none;
            position: relative;
            height: 18px;
            line-height: 18px;
            width: 120px;
            text-align: center;
            cursor: pointer;
            background-color: #fff;
            box-sizing: content-box;
            padding: 5px 10px;
            border: 1px solid #ddd;

            
        }

        .addr-detail {
            float: left;
            height: 30px;
            line-height: 30px;

            span {
                display: inline-block;
                margin-left: 10px;
            }
        }

        .addList-item:hover .op-btns {
            visibility: visible;
            float: right;
            text-align: right;
            height: 30px;
            line-height: 30px;

            a {
                margin-right: 10px;
            }
        }
        .op-btns {
            visibility: hidden;
            color: #005ea7;
            font-size: 12px;
        }

    }

    .addDialog {}

    .configure {
            width: 100px;
            display: inline-block;
            padding: 5px 20px 6px;
            min-width: 95px;
            font-family: Lato, Arial, sans-serif;
            font-size: 15px;
            line-height: 24px;
            font-weight: 700;
            text-align: center;
            border-radius: 5px;
            box-shadow: inset -0.11px -3px 0 0 rgba(0, 0, 0, 0.4);
            transition: all 150ms;
            background-color: #c9c6c9;
            border: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            // position: absolute;
            // right: 50px;
            // bottom: 0;
            span {
                text-align: center;
            }
        }
</style>