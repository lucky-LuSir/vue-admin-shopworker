<template>
    <div class="index">
        <div class="zero cm-Layout">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in imgArr0" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- <div class="first cm-Layout">
            <el-carousel :interval="4000" type="card">
                <el-carousel-item v-for="(item, index) in imgArr1" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div> -->
        <!-- <div class="second cm-Layout">
            <el-carousel class="vertical" height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="(item, index) in imgArr2" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
            <el-carousel class="vertical" height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="(item, index) in imgArr2" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
            <el-carousel class="vertical" height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="(item, index) in imgArr2" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
            <el-carousel class="vertical" height="200px" direction="vertical" :autoplay="false">
                <el-carousel-item v-for="(item, index) in imgArr2" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt="">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div> -->
        <!-- <div class="four cm-Layout">
            <el-tabs tab-position="left">
                <el-tab-pane label="tab1">
                    <a href="#" target="_blank">
                        <img width="885" height="250" alt="" src="http://pic.lvmama.com/uploads/pc/place2/2017-04-21/c0ab9fa7-0a75-4df0-8540-564296addca7.jpg">
                    </a>
                </el-tab-pane>
                <el-tab-pane label="tab2">
                    <a href="#">
                        <img width="885" height="250" alt="" src="http://pic.lvmama.com/uploads/pc/place2/2017-04-14/3d59edcb-fafa-4709-acd4-fbe304d6d0e7.jpg">
                    </a>
                </el-tab-pane>
                <el-tab-pane label="tab3">
                    <a href="#">
                        <img width="885" height="250" alt="" src="http://pic.lvmama.com/uploads/pc/place2/2017-02-06/ef207053-92ed-4551-b17e-95409c696594.jpg">
                    </a>
                </el-tab-pane>
                <el-tab-pane label="tab4">
                    <a href="#">
                        <img width="885" height="250" alt="" src="http://pic.lvmama.com/uploads/pc/place2/2018-04-26/72467d8e-1c77-47de-96bd-0b8332ac1d98.jpg">
                    </a>
                </el-tab-pane>
            </el-tabs>
        </div> -->
        <div class="two cm-Layout clearfix">
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toCart()">
                    <div class="style-image">
                        <a href="javascript:;" alt="">
                            <img style="height: 200px;" src="../img/DSC_0180.jpg" alt=""></a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading"><a href="javascript:;" class="icon--arrow" tabindex="0">Tier on Tier <i class="el-icon-diy-youjiantou"></i></a></h4>
                        <p>
                            These louvered shutters cover just the lower half of your window, letting light in while maintaining privacy at the bottom half of your window.</p>
                    </div>
                </div>
            </div>
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style">
                    <div class="style-image">
                        <a href="javascript:;" alt="">
                            <img style="height: 200px;" src="../img/DSC_0233.jpg" alt=""></a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading"><a href="javascript:;" class="icon--arrow" tabindex="0">Full Solid Raised <i class="el-icon-diy-youjiantou"></i></a></h4>
                        <p>
                            These solid shutters provide complete window coverage and have a lovely, traditional feel to them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="three cm-Layout clearfix">
            <div class="lunbo">
                <ul>
                    <li><a href="#"><img src="//img30.360buyimg.com/mobilecms/s150x150_jfs/t2974/96/1802531561/76680/78b522f0/57907469N4606eb75.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img13.360buyimg.com/mobilecms/s150x150_jfs/t19351/270/2218804636/107637/5990df9f/5aebcd1bN4397a219.png.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img12.360buyimg.com/mobilecms/s150x150_jfs/t19075/170/353403504/22771/507844ec/5a701a3bNc4b2da12.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img14.360buyimg.com/mobilecms/s150x150_jfs/t23821/150/1383390870/44273/e2ece9db/5b5ae2f6N6b00abe4.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t7132/178/1374552914/147347/13ebb5af/598ac825Nfb21aa9a.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t9058/32/1425324216/82939/1780753c/59b9d9b2Nbec847a8.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img10.360buyimg.com/mobilecms/s150x150_jfs/t1/21826/12/11535/26975/5c90436eE23255ab7/3ec3905dd7014690.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img14.360buyimg.com/mobilecms/s150x150_jfs/t6955/354/2437854130/24982/df79b865/598bf21eN0cc8561d.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img30.360buyimg.com/mobilecms/s150x150_jfs/t6757/289/934005318/361057/e1d45eea/5947c46bN32013c68.jpg!q70.jpg.webp" alt=""></a></li>
                    <li><a href="#"><img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t1894/31/88096034/321096/8980fded/55ed2e24N7f04c71b.jpg!q70.jpg.webp" alt=""></a></li>
                </ul>
            </div>
        </div>
        <!-- <img src="../img/img1.png" alt=""> -->
        <!-- <img src="../img/DSC_0180.jpg" alt=""> -->
        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                imgArr0: [{
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
                }],
                imgArr1: [{
                    imgSrc: 'https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: 'https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: 'https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: '//img.alicdn.com/tfs/TB1EmdmghD1gK0jSZFKXXcJrVXa-520-280.jpg_q90_.webp',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: '//img.alicdn.com/tfs/TB1VALdgrY1gK0jSZTEXXXDQVXa-520-280.jpg_q90_.webp',
                    linkHref: 'javascript:;'
                }],
                imgArr2: [{
                    imgSrc: '//img.alicdn.com/bao/uploaded/i2/98964646/O1CN01DO9bMm1kBufqKZUQo_!!0-saturn_solar.jpg_200x200q90.jpg_.webp',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: '//img.alicdn.com/bao/uploaded/i6/TB1GZZVnpGWBuNjy0FbYXH4sXXa_M2.SS2_200x200q90.jpg_.webp',
                    linkHref: 'javascript:;'
                }, {
                    imgSrc: '//img.alicdn.com/bao/uploaded/i4/105888541/TB24Bslw29TBuNjy0FcXXbeiFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp',
                    linkHref: 'javascript:;'
                }]
            }
        },
        methods: {
            toCart() {
                this.$router.push('/detail');
            }
        }
    }
</script>

<style scoped lang="less">
    .carousel__slide {
        float: left;
        margin-right: 20px;
        width: 275px !important;

        .promo-style {
            border: 1px solid rgba(0, 0, 0, .16);
            box-shadow: 4px 4px 0 0 rgba(50, 50, 50, .07);
        }

        .promo-style .style-image {
            width: 100%;
        }

        h4 {
            color: #282323;
            font-size: 16px;
            font-family: Lato, Arial, sans-serif;
            font-weight: 700;
            margin-bottom: 7px;
            line-height: normal;

            a {
                color: inherit;
            }
        }

        p {
            font-size: 13px;
            height: 126px;
            line-height: 18px;
        }

        img {
            width: 100%;
            height: auto;
        }

        .promo-style .content {
            padding: 15px;
            min-height: 150px;
        }
    }

    /deep/ .el-carousel__indicators--outside {
        bottom: 26px;
        text-align: center;
        position: static;
        -webkit-transform: none;
        transform: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 999;

        .el-carousel__button {
            width: 20px;
            // width: 100%;
            height: 5px;
            background-color: #fff;
        }

        /deep/ .el-carousel__indicator.is-active .el-carousel__button {
            width: 30px;
        }

    }

    .two {
        margin-top: 20px;
    }

    .el-carousel__item a {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 280px;
        margin: 0;
        display: inline-block;

        img {
            height: 100%;
        }
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    .zero {
        a {
            display: inline-block;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .first {
        margin-top: 30px;

        a {
            display: inline-block;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
                height: 100%;
            }
        }
    }

    .second {
        margin-top: 30px;
        display: flex;
    }

    .vertical {
        width: 25%;
        display: inline-block;
        margin-right: 2%;

        a {
            width: 100%;

            img {
                width: 100%;
            }
        }
    }

    .vertical:last-child {
        margin-right: 0;
    }


    .lunbo {
        float: left;
        width: 1200px;
        height: 200px;
        margin: 30px auto;
        position: relative;
        overflow: hidden;

        ul {
            width: 1500px;
            height: 200px;
            position: absolute;
            left: 0;
            top: 0;
            animation: lunbo 10s linear infinite;
            white-space: nowrap;
        }

        &:hover ul {
            animation-play-state: paused;

        }

        li {

            float: left;
        }

        @keyframes lunbo {
            0% {
                left: 0;
            }

            100% {
                left: -300px;
            }


        }
    }

    .four {
        margin-top: 30px;

        /deep/ .el-tabs {
            display: flex;
            align-items: center;
        }

        /deep/ .el-tabs__header {
            width: 160px;
        }

        /deep/ .el-tabs__item {
            text-align: center;
            height: 50px;
        }

        /deep/ .el-tabs--left,
        .el-tabs--right {
            overflow: auto;
        }

        /deep/ .el-tabs__active-bar {
            height: 0 !important;
        }

        /deep/ .el-tabs--left .el-tabs__nav-wrap.is-left::after,
        .el-tabs--left .el-tabs__nav-wrap.is-right::after,
        .el-tabs--right .el-tabs__nav-wrap.is-left::after,
        .el-tabs--right .el-tabs__nav-wrap.is-right::after {
            width: 0;
        }

        .product-item {
            float: left;
            width: 200px;
        }
    }
</style>