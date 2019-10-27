<template>
    <div class="index">
        <div class="zero cm-Layout">
            <div class="zeroLeft">
                <div class="carousel__slide slide slick-slide slick-active" style="width: 203px;">
                    <div class="promo-style">
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
        <div class="two cm-Layout clearfix">
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toDetail(1, 'Basswood shutters')">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/BASS_DSC_0311.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                {{ $t('public.BasswoodName') }}
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>
                            {{ $t('public.BasswoodDetail') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toDetail(2, 'Paulownia shutters')">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/PAU_DSC_0208.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                {{ $t('public.PaulowniaName') }}
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>{{ $t('public.PaulowniaDetail') }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="carousel__slide slick-slide slick-active" style="width: 203px;">
                <div class="promo-style" @click="toDetail(3, 'PVC shutters')">
                    <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/PVC_DSC_0113.jpg" alt>
                        </a>
                    </div>
                    <div class="content" data-mh="style-content" style="height: 165px;">
                        <h4 class="heading">
                            <a href="javascript:;" class="icon--arrow" tabindex="0">
                                {{ $t('public.PVCName') }}
                                <i class="el-icon-diy-youjiantou"></i>
                            </a>
                        </h4>
                        <p>
                            {{ $t('public.PVCDetail') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="four cm-Layout">
            <el-carousel :interval="4000" type="card" height="250px">
                <el-carousel-item v-for="(item, index) in imgArr3" :key="index">
                    <a class="alink" :href="item.linkHref">
                        <img class="aimg" :src="item.imgSrc" alt>
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            imgArr0: [{
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
        toDetail (type, material) {
            var type = type;
            window.sessionStorage.setItem("type", type);
            window.sessionStorage.setItem("material", material)
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