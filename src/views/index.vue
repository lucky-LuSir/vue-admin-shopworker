<template>
    <div class="index">
        <div class="zero cm-Layout">
            <div class="zeroLeft">
                <div class="carousel__slide slide slick-slide slick-active" style="width: 203px;">
                    <!-- <img src="../img/DSC_0231.JPG" alt=""> -->
                    <div class="promo-style">
                        <!-- <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0180.jpg" alt>
                        </a>
                    </div> -->
                        <div class="content" data-mh="style-content">
                            <h4 class="heading">
                                <a href="javascript:;" class="icon--arrow" tabindex="0">
                                    Tier on Tier
                                    <i class="el-icon-diy-youjiantou"></i>
                                </a>
                            </h4>
                            <p>Shutters have been used as fine window furniture for centuries.They can create a warm,peaceful and welcoming atmosphere in any home,whether you seek a contemporary look or classic appearance.Shutters can also help you maintain a comfortable environment and allow you to take control of light and ventilation,as well as offer excellent privacy.Timeless beauty ,capturing the very essence of classic and modern style and the level of function,make shutters the most versatile window covering available in the market. Our shutters are custom made especially for your home needs,providing some extra stylish decoration and adding character and value in the process.With superior finishes,our shutters ensure resistance to cracking,chipping or peeling.They’re also an excellent insulator,and will help to reduce your cooling and heating energy costs throughout the year.Options include fixed,hinged,bi-folding and sliding shutters in a choice of 64mm,89mm and 114mm slat sizes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="(item, index) in imgArr0" :key="index">
                    <a :href="item.linkHref">
                        <img :src="item.imgSrc" alt>
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
    </div>-->
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
    </div>-->
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
    </div>-->
        <div class="two cm-Layout clearfix">
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toCart()">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0125.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                Paulownia shutters
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>Paulownia wood has a straight texture, the material is light and soft, and has a strong grain pattern. Paulownia wood is wear resistant, corrosion resistant and does not conduct electricity.The wood grain texture is bright, prominent and beautiful with stained colours.
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toCart()">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0253.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                Basswood shutters
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>Basswood has become one of the most widely used materials for shutters in the global market. This is due to its resistance to warping, easy workability, durability, and its acceptance of a variety of colors and finishes. Basswood (tilia americana) is a member of the hardwood family, with all our Basswood being plantation grown. Basswood shutters are manufactured for indoors only, and are not recommended for wet areas.</p>
                    </div>
                </div>
            </div>
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toCart()">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0159.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                PVC shutters
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>PVC is extruded using a Foamwood material, and has been developed to make shutters suitable for wet areas such as bathrooms and above kitchen sinks. Our Fauxwood is a solid product and uses the same painted finishes as our Basswood Range. Aluminium reinforcement is used in the stiles to reduce weight and increase the strength of the shutters. Fauxwood shutters are termite and fire resistant. Whilst Fauxwood shutters are suitable for wet areas, they are not recommended for outdoor use.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="three cm-Layout clearfix">
            <div class="lunbo">
                <ul>
                    <li>
                        <a href="#">
                            <img src="//img30.360buyimg.com/mobilecms/s150x150_jfs/t2974/96/1802531561/76680/78b522f0/57907469N4606eb75.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img13.360buyimg.com/mobilecms/s150x150_jfs/t19351/270/2218804636/107637/5990df9f/5aebcd1bN4397a219.png.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img12.360buyimg.com/mobilecms/s150x150_jfs/t19075/170/353403504/22771/507844ec/5a701a3bNc4b2da12.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img14.360buyimg.com/mobilecms/s150x150_jfs/t23821/150/1383390870/44273/e2ece9db/5b5ae2f6N6b00abe4.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t7132/178/1374552914/147347/13ebb5af/598ac825Nfb21aa9a.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t9058/32/1425324216/82939/1780753c/59b9d9b2Nbec847a8.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img10.360buyimg.com/mobilecms/s150x150_jfs/t1/21826/12/11535/26975/5c90436eE23255ab7/3ec3905dd7014690.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img14.360buyimg.com/mobilecms/s150x150_jfs/t6955/354/2437854130/24982/df79b865/598bf21eN0cc8561d.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img30.360buyimg.com/mobilecms/s150x150_jfs/t6757/289/934005318/361057/e1d45eea/5947c46bN32013c68.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//img11.360buyimg.com/mobilecms/s150x150_jfs/t1894/31/88096034/321096/8980fded/55ed2e24N7f04c71b.jpg!q70.jpg.webp" alt>
                        </a>
                    </li>
                </ul>
            </div>
        </div> -->
        <div class="four cm-Layout">
            <el-carousel :interval="4000" type="card" height="250px">
                <!-- <el-carousel-item v-for="(item, index) in imgArr3" :key="index">
                    <h3 class="medium">{{ item }}</h3>
                </el-carousel-item> -->
                <el-carousel-item v-for="(item, index) in imgArr3" :key="index">
                    <a class="alink" :href="item.linkHref">
                        <img class="aimg" :src="item.imgSrc" alt>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <!-- <img src="../img/img1.png" alt=""> -->
        <!-- <img src="../img/DSC_0180.jpg" alt=""> -->
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgArr0: [{
                imgSrc: require("../img/DSC_0316.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0161.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0159.jpg"),
                linkHref: "javascript:;"
            }
            ],
            imgArr1: [{
                imgSrc: "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "//img.alicdn.com/tfs/TB1EmdmghD1gK0jSZFKXXcJrVXa-520-280.jpg_q90_.webp",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "//img.alicdn.com/tfs/TB1VALdgrY1gK0jSZTEXXXDQVXa-520-280.jpg_q90_.webp",
                linkHref: "javascript:;"
            }
            ],
            imgArr2: [{
                imgSrc: "//img.alicdn.com/bao/uploaded/i2/98964646/O1CN01DO9bMm1kBufqKZUQo_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "//img.alicdn.com/bao/uploaded/i6/TB1GZZVnpGWBuNjy0FbYXH4sXXa_M2.SS2_200x200q90.jpg_.webp",
                linkHref: "javascript:;"
            },
            {
                imgSrc: "//img.alicdn.com/bao/uploaded/i4/105888541/TB24Bslw29TBuNjy0FcXXbeiFXa_!!0-saturn_solar.jpg_200x200q90.jpg_.webp",
                linkHref: "javascript:;"
            }
            ],
            imgArr3: [{
                imgSrc: require("../img/slide_001.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/slide_002.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/slide_003.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/slide_004.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/slide_005.jpg"),
                linkHref: "javascript:;"
            }
            ],
        };
    },
    async created () { },
    mounted () {
        (function (d, w, c) {
            w.ChatraID = "2qS6JBTv5v2i599Xn";
            var s = d.createElement("script");
            w[c] =
                w[c] ||
                function () {
                    (w[c].q = w[c].q || []).push(arguments);
                };
            s.async = true;
            s.src = "https://call.chatra.io/chatra.js";
            if (d.head) d.head.appendChild(s);
        })(document, window, "Chatra");
    },
    methods: {
        async ccc () {
            var _mainObj = window.sessionStorage.getItem("_mainObj");
            _mainObj = JSON.parse(_mainObj);
            var token = _mainObj.token;
            console.log(token)

            const res = await this.$ajax.get(`/user/`, {
                headers: {
                    'Authorization': 'JWT ' + token
                },
            });
            console.log(res)
        },
        async aaa () {
            //   console.log(111121);
            var obj = {
                password: "ewrw1325135",
                password2: "ewrw1325135",
                username: "lusir",
                email: "hhpbaby@126.com",
                first_name: "sdfs",
                last_name: "aaaa",
                gender: "222",
                company: "夏数",
                allow: "true"
            };
            const res = await this.$ajax.post(`/users/`, obj);
            console.log(res);
        },
        toCart () {
            this.$router.push("/detail");
        }
    }
};
</script>

<style scoped lang="less">
.two {
    display: flex;
    .promo-style {
        p {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 6;
            overflow: hidden;
            height: 110px;
        }
    }
}

.four {
    .alink {
        height: 100%;
    }
    .aimg {
        width: 100%;
        height: 100%;
    }
}
.carousel__slide {
    float: left;
    margin-right: 20px;
    width: 33.33% !important;
    // width: 275px !important;
    // width: 470px !important;

    .promo-style {
        border: 1px solid rgba(0, 0, 0, 0.16);
        // box-shadow: 4px 4px 0 0 rgba(50, 50, 50, 0.07);
        box-sizing: border-box;
    }

    .promo-style .style-image {
        width: 100%;
    }

    h4 {
        color: #282323;
        font-size: 20px;
        font-family: Lato, Arial, sans-serif;
        font-weight: 700;
        margin-bottom: 7px;
        line-height: normal;

        a {
            color: inherit;
        }
    }

    p {
        // font-size: 13px;
        font-size: 14px;
        // height: 126px;
        line-height: 18px;
        height: 236px;
        overflow: hidden;
        text-align: left;
        text-indent: 2em;
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

.carousel__slide:nth-child(3n) {
    margin-right: 0;
}

.slide {
    width: 430px !important;
    margin-right: 0;

    .promo-style {
        height: 300px;
    }
}

.index /deep/ .el-carousel__indicators--outside {
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

.el-carousel__item:nth-child(2n + 1) {
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