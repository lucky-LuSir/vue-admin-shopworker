<template>
    <div class="detail-container">
        <div class="cm-Layout clearfix">
            <div class="left">
                <div v-if="type == 1">
                    <el-carousel>
                        <el-carousel-item v-for="(item, index) in detailImg1" :key="index">
                            <a :href="item.linkHref">
                                <img :src="item.imgSrc" alt="">
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                    <h2>
                        {{ $t('public.BasswoodName') }}
                    </h2>
                    <p>
                        {{ $t('public.BasswoodDetail') }}
                    </p>
                </div>
                <div v-if="type == 2">
                    <el-carousel>
                        <el-carousel-item v-for="(item, index) in detailImg2" :key="index">
                            <a :href="item.linkHref">
                                <img :src="item.imgSrc" alt="">
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                    <h2>
                        {{ $t('public.PaulowniaName') }}
                    </h2>
                    <p>
                        {{ $t('public.PaulowniaDetail') }}
                    </p>
                </div>
                <div v-if="type == 3">
                    <el-carousel>
                        <el-carousel-item v-for="(item, index) in detailImg3" :key="index">
                            <a :href="item.linkHref">
                                <img :src="item.imgSrc" alt="">
                            </a>
                        </el-carousel-item>
                    </el-carousel>
                    <h2>
                        {{ $t('public.PVCName') }}
                    </h2>
                    <p>
                        {{ $t('public.PVCDetail') }}
                    </p>
                </div>
            </div>
            <div class="right">
                <h1>four-step design shutters</h1>
                <el-form :rules="rules" ref="form" :model="form" label-width="130px">
                    <el-collapse v-model="activeNames" @change="handleChange" accordion>
                        <el-collapse-item title="First-step" name="1">
                            <el-form-item label="length" prop="length">
                                <el-select v-model="form.length" placeholder="please select the length" size="mini">
                                    <el-option v-for="item in lengthList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="width" prop="width">
                                <el-select v-model="form.width" placeholder="please select the width">
                                    <el-option v-for="item in widthList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="windos_sash_type" prop="windos_sash_type">
                                <el-select v-model="form.windos_sash_type" placeholder="please select the windos_sash_type">
                                    <el-option v-for="item in windos_sash_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="installation_location" prop="installation_location">
                                <el-select v-model="form.installation_location" placeholder="please select the installation_location">
                                    <el-option v-for="item in installation_locationList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="size_type" prop="size_type">
                                <el-select v-model="form.size_type" placeholder="please select the size_type">
                                    <el-option v-for="item in size_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="midplane_postion" prop="midplane_postion">
                                <el-select v-model="form.midplane_postion" placeholder="please select the midplane_postion">
                                    <el-option v-for="item in midplane_postionList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Two-step" name="2">
                            <el-form-item label="ploduct_color" prop="ploduct_color">
                                <el-select v-model="form.ploduct_color" placeholder="please select the ploduct_color">
                                    <el-option v-for="item in ploduct_colorList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="frame_type" prop="frame_type">
                                <el-select v-model="form.frame_type" placeholder="please select the frame_type">
                                    <el-option v-for="item in frame_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="frame_number" prop="frame_number">
                                <el-select v-model="form.frame_number" placeholder="please select the frame_number">
                                    <el-option v-for="item in frame_numberList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                             <el-form-item label="opening_method" prop="opening_method">
                                <el-select v-model="form.opening_method" placeholder="please select the opening_method">
                                    <el-option v-for="item in opening_methodList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="tcolumn_type" prop="tcolumn_type">
                                <el-select v-model="form.tcolumn_type" placeholder="please select the tcolumn_type">
                                    <el-option v-for="item in tcolumn_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Three-step" name="3">
                            <el-form-item label="column_type" prop="column_type">
                                <el-select v-model="form.column_type" placeholder="please select the column_type">
                                    <el-option v-for="item in column_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="balde_type" prop="balde_type">
                                <el-select v-model="form.balde_type" placeholder="please select the balde_type">
                                    <el-option v-for="item in balde_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="poll_rod_type" prop="poll_rod_type">
                                <el-select v-model="form.poll_rod_type" placeholder="please select the poll_rod_type">
                                    <el-option v-for="item in poll_rod_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="ploo_rod_dis" prop="ploo_rod_dis">
                                <el-select v-model="form.ploo_rod_dis" placeholder="please select the ploo_rod_dis">
                                    <el-option v-for="item in ploo_rod_disList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="hardware_type" prop="hardware_type">
                                <el-select v-model="form.hardware_type" placeholder="please select the hardware_type">
                                    <el-option v-for="item in hardware_typeList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-collapse-item>
                        <el-collapse-item title="Four-step" name="4">
                            <el-form-item label="hardware_colour" prop="hardware_colour">
                                <el-select v-model="form.hardware_colour" placeholder="please select the hardware_colour">
                                    <el-option v-for="item in hardware_colourList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="blade_state" prop="blade_state">
                                <el-select v-model="form.blade_state" placeholder="please select the blade_state">
                                    <el-option v-for="item in blade_stateList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                             <el-form-item label="lower_palte_state" prop="lower_palte_state">
                                <el-select v-model="form.lower_palte_state" placeholder="please select the lower_palte_state">
                                    <el-option v-for="item in lower_palte_stateList" :key="item.value" :label="item.label" :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="lower_palte_state" prop="lower_palte_state">
                                <el-input-number v-model="form.number" @change="handleChange" :min="1" :max="10" label="number"></el-input-number>
                            </el-form-item>
                        </el-collapse-item>
                    </el-collapse>
                    <!-- <el-button size="mini" class="configure configure0" type="primary" @click="toCart('form')">生成图片</el-button> -->
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
        data() {
            return {
                type: 1,
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
                detailImg1: [
                    {
                        imgSrc: require("../img/BASS_DSC_0311.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0274.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0250.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0316.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0324.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0159.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/BASS_DSC_0125.jpg"),
                        linkHref: 'javascript:;'
                    }
                ],
                detailImg2: [
                    {
                        imgSrc: require("../img/PAU_DSC_0208.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0253.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0296.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0297.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0310.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0330.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PAU_DSC_0152.jpg"),
                        linkHref: 'javascript:;'
                    }
                ],
                detailImg3: [
                    {
                        imgSrc: require("../img/PVC_DSC_0113.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0110.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0167.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0189.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0379.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0110.jpg"),
                        linkHref: 'javascript:;'
                    }, {
                        imgSrc: require("../img/PVC_DSC_0130.jpg"),
                        linkHref: 'javascript:;'
                    }
                ],
                form: {
                    length: '', // 长度
                    width: '', // 宽度
                    windos_sash_type: '', // 窗扇类型
                    installation_location: '', // 安装位置
                    size_type: '', // 尺寸类型
                    midplane_postion: '', // 中板位置
                    ploduct_color: '', // 产品颜色
                    frame_type: '', // 框条类型
                    frame_number: '', // 框条边数
                    opening_method: '', // 开启方式
                    tcolumn_type: '', // T柱类型
                    column_type: '', // 立柱型号
                    balde_type: '', // 叶片型号
                    poll_rod_type: '', // 拉杆类型
                    ploo_rod_dis: '', // 拉杆断开
                    hardware_type: '', // 五金类型
                    hardware_colour: '', // 五金颜色
                    blade_state: '', // 叶片状态
                    lower_palte_state: '', // 下板状态
                    number: '', // 数量
                },
                rules: {
                    length: [{
                        required: true,
                        message: "please select the length",
                        trigger: "blur"
                    }],
                    width: [{
                        required: true,
                        message: "please select the width",
                        trigger: "blur"
                    }],
                    windos_sash_type: [{
                        required: true,
                        message: "please select the windos_sash_type",
                        trigger: "blur"
                    }],
                    installation_location: [{
                        required: true,
                        message: "please select the installation_location",
                        trigger: "blur"
                    }],

                },
                lengthList: [{
                        label: '50',
                        value: '50',
                    },
                    {
                        label: '60',
                        value: '60',
                    },
                ],
                widthList: [{
                        label: '50',
                        value: '50',
                    },
                    {
                        label: '60',
                        value: '60',
                    }
                ],
                windos_sash_typeList: [
                    {
                        label: '窗扇类型1',
                        value: '窗扇类型1',
                    },
                    {
                        label: '窗扇类型2',
                        value: '窗扇类型2',
                    }
                ],
                installation_locationList: [
                    {
                        label: '安装位置1',
                        value: '安装位置1',
                    },
                    {
                        label: '安装位置2',
                        value: '安装位置2',
                    },
                ],
                size_typeList: [
                    {
                        label: '尺寸类型1',
                        value: '尺寸类型1',
                    },
                    {
                        label: '尺寸类型2',
                        value: '尺寸类型2',
                    },
                ],
                midplane_postionList: [
                    {
                        label: '中板位置1',
                        value: '中板位置1',
                    },
                    {
                        label: '中板位置2',
                        value: '中板位置2',
                    },
                ],
                ploduct_colorList: [
                    {
                        label: '产品颜色1',
                        value: '产品颜色1',
                    },
                    {
                        label: '产品颜色2',
                        value: '产品颜色2',
                    },
                ],
                frame_typeList: [
                    {
                        label: '框条类型1',
                        value: '框条类型1',
                    },
                    {
                        label: '框条类型2',
                        value: '框条类型2',
                    },
                ],
                frame_numberList: [
                    {
                        label: '框条边数1',
                        value: '框条边数1',
                    },
                    {
                        label: '框条边数2',
                        value: '框条边数2',
                    },
                ],
                opening_methodList: [
                    {
                        label: '开启方式1',
                        value: '开启方式1',
                    },
                    {
                        label: '开启方式2',
                        value: '开启方式2',
                    },
                ],
                tcolumn_typeList: [
                    {
                        label: 'T柱类型1',
                        value: 'T柱类型1',
                    },
                    {
                        label: 'T柱类型2',
                        value: 'T柱类型2',
                    },
                ],
                column_typeList: [
                    {
                        label: '立柱型号1',
                        value: '立柱型号1',
                    },
                    {
                        label: '立柱型号2',
                        value: '立柱型号2',
                    },
                ],
                balde_typeList: [
                    {
                        label: '叶片型号1',
                        value: '叶片型号1',
                    },
                    {
                        label: '叶片型号2',
                        value: '叶片型号2',
                    },
                ],
                poll_rod_typeList: [
                    {
                        label: '拉杆类型1',
                        value: '拉杆类型1',
                    },
                    {
                        label: '拉杆类型2',
                        value: '拉杆类型2',
                    },
                ],
                ploo_rod_disList: [
                    {
                        label: '拉杆断开1',
                        value: '拉杆断开1',
                    },
                    {
                        label: '拉杆断开2',
                        value: '拉杆断开2',
                    },
                ],
                hardware_typeList: [
                    {
                        label: '五金类型1',
                        value: '五金类型1',
                    },
                    {
                        label: '五金类型2',
                        value: '五金类型2',
                    },
                ],
                hardware_colourList: [
                    {
                        label: '五金颜色1',
                        value: '五金颜色1',
                    },
                    {
                        label: '五金颜色2',
                        value: '五金颜色2',
                    },
                ],
                blade_stateList: [
                    {
                        label: '叶片状态1',
                        value: '叶片状态1',
                    },
                    {
                        label: '叶片状态2',
                        value: '叶片状态2',
                    },
                ],
                lower_palte_stateList: [
                    {
                        label: '下板状态1',
                        value: '下板状态1',
                    },
                    {
                        label: '下板状态2',
                        value: '下板状态2',
                    },
                ],
            }
        },
        created() {
            var type = window.sessionStorage.getItem('type');
            if (type == 1) {
                this.type = 1;
            } else if (type == 2) {
                this.type = 2;
            } else if (type == 3) {
                this.type = 3;
            }
            var token = window.sessionStorage.getItem("authentication");
            if (!token) {
                this.dialogFormVisible = true;
            } else {
            }
        },
        methods: {
            handleChange(val) {
            },
            loginSys(formName) {
                if (this.loginObj) {
                    this.$refs[formName].validate(async (valid) => {
                        if (valid) {
                            var loginObj = {
                                username: this.loginObj.keyword,
                                password: this.loginObj.password,
                            }
                            const res = await this.$ajax.post(`/authorizations/`, loginObj);
                            if (res.status === 200) {
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
                                location.reload();
                            }
                        }
                    });
                }
            },
            async toCart(form) {
                let material = window.sessionStorage.getItem("material");
                let user_id = JSON.parse(window.sessionStorage.getItem("_mainObj")).user_id;
                this.$refs[form].validate(async(valid) => {
                    if (valid) {
                        let cartObj = {
                            "material": material,
                            "user_id": user_id,
                            "length": this.form.length, // 长度
                            "width": this.form.width, // 宽度
                            "windos_sash_type": this.form.windos_sash_type, // 窗扇类型
                            "installation_location": this.form.installation_location, // 安装位置
                            // size_type: this.form.size_type, // 尺寸类型
                            // midplane_postion: this.form.midplane_postion, // 中板位置
                            // ploduct_color: this.form.ploduct_color, // 产品颜色
                            // frame_type: this.form.frame_type, // 框条类型
                            // frame_number: this.form.frame_number, // 框条边数
                            // opening_method: this.form.opening_method, // 开启方式
                            // tcolumn_type: this.form.tcolumn_type, // T柱类型
                            // column_type: this.form.column_type, // 立柱型号
                            // balde_type: this.form.balde_type, // 叶片型号
                            // poll_rod_type: this.form.poll_rod_type, // 拉杆类型
                            // ploo_rod_dis: this.form.ploo_rod_dis, // 拉杆断开
                            // hardware_type: this.form.hardware_type, // 五金类型
                            // hardware_colour: this.form.hardware_colour, // 五金颜色
                            // blade_state: this.form.blade_state, // 叶片状态
                            // lower_palte_state: this.form.lower_palte_state, // 下板状态
                            // number: 1, // 数量
                            "balde_type": "asdas",
                            "blade_state": "asda",
                            "column_type": "asda",
                            "frame_number": "asda",
                            "frame_type": "asd",
                            "hardware_colour": "asdad",
                            "hardware_type": "asdas",
                            "lower_palte_state": "asda",
                            "midplane_postion": "asda",
                            "number": 1,
                            "opening_method": "asda",
                            "ploduct_color": "asdas",
                            "ploo_rod_dis": "asda",
                            "poll_rod_type": "asda",
                            "size_type": "asda",
                            "tcolumn_type": "asda",
                        }
                        const res = await this.$ajax.post(`/cart/`, cartObj);
                        console.log(res)
                        if (res.status === 200) {
                            this.$router.push('/cart');
                        }
                    } else {
                        this.$message.error('请选择完必须项');
                    }
                })
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
        float: left;
        // height: 322px;

        img {
            margin-top: 15px;
            width: 520px;
            height: 322px;
        }

        h2 {
            font-size: 16px;
            color: #666;
            font-weight: 600;
            margin-top: 25px;
            margin-bottom: 15px;
        }

        p {
            font-size: 14px;
            line-height: 18px;
            height: 236px;
            overflow: hidden;
            text-align: left;
            text-indent: 2em;
            color: #666;
            width: 460px;
            margin: 0 auto;
            line-height: 24px;
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
            margin-left: 15px;
            margin-top: 15px;
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
        height: 322px;
    }

    .detail-container /deep/ .el-carousel__indicators--horizontal {
        left: 48%;
    }
</style>