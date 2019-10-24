<template>
    <div class="detail-container">
        <div class="cm-Layout clearfix">
            <div class="left">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(item, index) in detailImg" :key="index">
                        <a :href="item.linkHref">
                            <img :src="item.imgSrc" alt="">
                        </a>
                    </el-carousel-item>
                </el-carousel>
                <p>Basswood has become one of the most widely used materials for shutters in the global market. This is due to its resistance to warping, easy workability, durability, and its acceptance of a variety of colors and finishes. Basswood (tilia americana) is a member of the hardwood family, with all our Basswood being plantation grown. Basswood shutters are manufactured for indoors only, and are not recommended for wet areas.</p>
            </div>
            <div class="right">
                <h1>Tier on Tier </h1>
                <el-form :rules="rules" ref="form" :model="form" label-width="130px">
                    <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="First-step design shutters" name="1">
                            <el-form-item label="material" prop="caizhi">
                                <el-select size="mini" v-model="form.caizhi" placeholder="请材质">
                                    <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="windos_sash_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="窗扇类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Installation_location" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="安装位置">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="size_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="尺寸类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="length" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="长度">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Two-step design shutters" name="2">
                            <el-form-item label="width" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="宽度">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="midplane_postion" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="中板位置">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="ploduct_color" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="产品颜色">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="frame_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="框条类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="frame_number" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="框条边数">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Three-step design shutters" name="3">
                            <el-form-item label="opening_method" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="开启方式">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="tcolumn_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="T柱类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="column_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="立柱型号">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="balde_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="叶片型号">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="poll_rod_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="拉杆类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Four-step design shutters" name="4">
                            <el-form-item label="ploo_rod_dis" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="拉杆断开">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="hardware_type" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="五金类型">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="hardware_colour" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="五金颜色">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="blade_state" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="叶片状态">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="lower_palte_state" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="下板状态">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="number" prop="casement">
                                <el-select size="mini" v-model="form.casement" placeholder="数量">
                                    <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
                                        <span style="float: left">{{ item.label }}</span>
                                        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.price }}</span>
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                    </el-collapse>
                    <el-button size="mini" class="configure configure0" type="primary" @click="toCart('form')">生成图片</el-button>
                    <el-button size="mini" class="configure" type="primary" @click="toCart('form')">Configure and buy!</el-button>
                </el-form>
            </div>
        </div>
        <el-dialog width="390px" title="Sign in" :visible.sync="dialogFormVisible">
            <el-form :model="loginObj" :rules="rules1" ref="loginObj">
                <el-form-item class="item-keyword" prop="keyword">
                    <el-input placeholder="请输入手机号" v-model="loginObj.keyword" class="input-text" clearable prefix-icon="el-icon-diy-yonghuming">
                    </el-input>
                </el-form-item>
                <el-form-item class="item-password" prop="password">
                    <el-input v-model="loginObj.password" type="password" class="input-text" @keyup.enter.native="loginSys('loginObj')" placeholder="请输入密码" clearable prefix-icon="el-icon-diy-mima">
                    </el-input>
                </el-form-item>
                <el-button style="width: 100%;" type="primary" @click="loginSys('loginObj')">
                    <span style="font-family: Arvo">{{ $t('login.signin') }}&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginObj: {
                keywork: '',
                password: ''
            },
            activeNames: ['1'],
            dialogFormVisible: false,
            formLabelWidth: '120px',
            rules1: {
                keyword: [{
                    required: true,
                    message: "请输入手机号",
                    trigger: "blur"
                }],
                password: [{
                    required: true,
                    message: "请输入密码",
                    trigger: "blur"
                }]
            },
            detailImg: [
                //     {
                //     imgSrc: 'https://www.theshutterstore.com/images/2017/products/full-height/fullheight_style_product_3',
                //     linkHref: 'javascript:;'
                // }, {
                //     imgSrc: 'https://www.theshutterstore.com/images/2017/products/full-height/fullheight_style_product_4',
                //     linkHref: 'javascript:;'
                // }, {
                //     imgSrc: 'https://www.theshutterstore.com/images/2017/products/full-height/fullheight_style_product_5',
                //     linkHref: 'javascript:;'
                // },
                {
                    // imgSrc: require('../img/DSC_0125.JPG'),
                    // imgSrc: '//pics.lvjs.com.cn/uploads/pc/place2/2019-09-03/09165a41-be74-4618-ad72-96185ec8b6ad.jpg',
                    imgSrc: require("../img/DSC_0180.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    // imgSrc: '//pics.lvjs.com.cn/uploads/pc/place2/2019-09-03/09165a41-be74-4618-ad72-96185ec8b6ad.jpg',
                    imgSrc: require("../img/DSC_0233.jpg"),
                    linkHref: 'javascript:;'
                }, {
                    // imgSrc: '//pics.lvjs.com.cn/uploads/pc/place2/2019-09-20/40830622-d1ac-4e23-9b18-d9f66337057c.jpg',
                    imgSrc: require("../img/DSC_0238.jpg"),
                    linkHref: 'javascript:;'
                }
            ],
            form: {
                caizhi: '', // 材质
                casement: '', // 窗扇类型
                PullRod: '', // 拉杆
                PullRodDis: '', // 拉杆断开
                hardware: '', // 五金类型
                hardwareColor: '', // 五金颜色
                blade: '', // 叶片
                plate: '', // 下板
            },
            rules: {
                caizhi: [{
                    required: true,
                    message: "请选择材质",
                    trigger: "blur"
                }],
                casement: [{
                    required: true,
                    message: "请选择窗扇类型",
                    trigger: "blur"
                }]
            },
            options1: [{ // 材质
                label: 'BASSWOOD',
                value: 'BASSWOOD',
                price: '$30 ft2'
            }, {
                label: 'PAULOWNIA',
                value: 'PAULOWNIA',
                price: '$50 ft2'
            },
            {
                label: 'PVC',
                value: 'PVC',
                price: '$60 ft2'
            },
            {
                label: 'HYBRID',
                value: 'HYBRID',
                price: '$80 ft2'
            },
            ],
            options2: [{ //窗扇类型
                label: 'TIER ON TIER',
                value: 'TIER ON TIER',
                price: '$80 ft2'
            }, {
                label: 'FULL HEIGHT',
                value: 'FULL HEIGHT',
                price: '$60 ft2'
            },
            {
                label: '轨道折叠',
                value: '轨道折叠',
                price: '$60 ft2'
            },
            {
                label: 'SHAPED SHUTTER',
                value: 'SHAPED SHUTTER',
                price: '$70 ft2'
            },
            ],
            options3: [{ //拉杆类型
                label: 'ClearView',
                value: 'ClearView',
                price: '$70 ft2'
            }, {
                label: 'Centre',
                value: 'Centre',
                price: '$70 ft2'
            },
            {
                label: 'Off-set',
                value: 'Off-set',
                price: '$70 ft2'
            },
            {
                label: 'Concealed',
                value: 'Concealed',
                price: '$70 ft2'
            },
            ],
            options4: [{ //拉杆断开
                label: '居中断开',
                value: '居中断开',
                price: '$70 ft2'
            }, {
                label: '中板以上断开',
                value: '中板以上断开',
                price: '$70 ft2'
            },
            {
                label: '中板以下断开',
                value: '中板以下断开',
                price: '$70 ft2'
            },
            {
                label: '中板上下都断开',
                value: '中板上下都断开',
                price: '$70 ft2'
            },
            ],
            options5: [{ //五金类型
                label: '蝶形合页',
                value: '蝶形合页',
                price: '$70 ft2'
            }, {
                label: '偏心合页',
                value: '偏心合页',
                price: '$70 ft2'
            },
            {
                label: 'L型合页',
                value: 'L型合页',
                price: '$70 ft2'
            },
            {
                label: '外转角合页',
                value: '外转角合页',
                price: '$70 ft2'
            },
            {
                label: '内转角合页',
                value: '内转角合页',
                price: '$70 ft2'
            },
            {
                label: '转角(不锈钢/白色)',
                value: '转角(不锈钢/白色)',
                price: '$70 ft2'
            },
            ],
            options6: [{ //五金颜色
                label: 'Pure white',
                value: 'Pure white',
                price: '$70 ft2'
            }, {
                label: 'Snow white',
                value: 'Snow white',
                price: '$70 ft2'
            },
            {
                label: 'Swan',
                value: 'Swan',
                price: '$70 ft2'
            },
            {
                label: 'Bronze',
                value: 'Bronze',
                price: '$70 ft2'
            },
            {
                label: 'Brass',
                value: 'Brass',
                price: '$70 ft2'
            },
            {
                label: 'Stainless steel',
                value: 'Stainless steel',
                price: '$70 ft2'
            },
            ],
            options7: [{ //叶片状态
                label: '叶片闭合推拉',
                value: '叶片闭合推拉',
                price: '$70 ft2'
            }, {
                label: '叶片开启推拉',
                value: '叶片开启推拉',
                price: '$70 ft2'
            },],
            options8: [{ //下板状态
                label: '有下板',
                value: '有下板',
                price: '$70 ft2'
            }, {
                label: '无下板',
                value: '无下板',
                price: '$70 ft2'
            },
            {
                label: '定位片',
                value: '定位片',
                price: '$70 ft2'
            },
            ],
        }
    },
    created () {
        console.log(1)
        var token = window.sessionStorage.getItem("authentication");
        console.log(token)
        if (!token) {
            console.log(333);
            this.dialogFormVisible = true;
        } else {
            console.log(222)
        }
    },
    methods: {
        handleChange (val) {
            console.log(val);
        },
        loginSys (formName) {
            // this.loginObj.password = this.$md5(this.secure);
            if (this.loginObj) {
                this.$refs[formName].validate(async (valid) => {
                    if (valid) {
                        var loginObj = {
                            username: this.loginObj.keyword,
                            password: this.loginObj.password,
                        }
                        const res = await this.$ajax.post(`/authorizations/`, loginObj);
                        if (res.status === 200) {
                            this.$router.push('/index');
                            var _mainObj = {
                                'user_id': res.data.user_id,
                                'token': res.data.token,
                                'username': res.data.username
                            }
                            let token = _mainObj.token;
                            _mainObj = JSON.stringify(_mainObj);
                            window.sessionStorage.setItem('_mainObj', _mainObj);
                            window.sessionStorage.setItem("authentication", JSON.stringify(token));
                            this.$cookieStore.addCookie(
                                "gn_request_token",
                                JSON.stringify(token),
                                0
                            );
                        }
                    }
                });
            }
        },
        async toCart (form) {
            console.log(form)
            console.log(this.form)
            // this.$refs[form].validate(async(valid) => {
            //     if (valid) {
            //         console.log(111)
            //     }
            // })

            // const res = await this.$ajax.get('/goods_record/', {
            //     id: 28
            // });
            // console.log(res)

            this.$router.push('/cart');
        }
    }
}
</script>

<style scoped lang="less">
.detail-container {
    min-height: 700px;
    /deep/ .el-collapse-item__header {
        padding-left: 30px;
        font-weight: 700;
        color: #666;
        font-size: 16px;
        text-align: left;
    }
}

.left {
    width: 520px;
    height: 520px;
    float: left;

    img {
        width: 520px;
        height: 520px;
    }

    p {
        font-size: 14px;
        line-height: 18px;
        height: 236px;
        overflow: hidden;
        text-align: left;
        text-indent: 2em;
        color: #666;
    }
}

.right {
    width: 460px;
    float: left;
    padding-bottom: 50px;
    min-height: 520px;
    position: relative;

    h1 {
        font-size: 40px;
        color: #282323;
        margin-bottom: 30px;
    }

    .el-form-item {
        margin-left: 10px;
        // margin-right: 40px;
        margin-right: 20px;
    }

    .el-select {
        width: 230px;
    }

    .configure {
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
        position: absolute;
        right: 50px;
        bottom: 0;
    }

    .configure0 {
        position: absolute;
        right: 350px !important;
        bottom: 0;
    }

    .configure:hover {
        color: #fff;
        background-color: #9a9790;
    }
}

.detail-container /deep/ .el-carousel__container {
    height: 520px;
}
</style>