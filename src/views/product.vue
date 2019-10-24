<template>
    <div class="product">
        <el-main>
            <div class="zero cm-Layout">
                <div class="zeroLeft">
                    <div class="carousel__slide slide slick-slide slick-active" style="width: 203px;">
                        <!-- <img src="../img/DSC_0231.JPG" alt=""> -->
                        <div class="promo-style" @click="toCart()">
                            <!-- <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0180.jpg" alt>
                        </a>
                    </div> -->
                            <div class="content" data-mh="style-content">
                                <h4 class="heading">
                                    <a href="javascript:;" class="icon--arrow" tabindex="0">
                                        Basswood shutters
                                        <i class="el-icon-diy-youjiantou"></i>
                                    </a>
                                </h4>
                                <p>Basswood has become one of the most widely used materials for shutters in the global market. This is due to its resistance to warping, easy workability, durability, and its acceptance of a variety of colors and finishes. Basswood (tilia americana) is a member of the hardwood family, with all our Basswood being plantation grown. Basswood shutters are manufactured for indoors only, and are not recommended for wet areas.
                                </p>
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
            <div class="zero cm-Layout">
                <div class="zeroLeft">
                    <div class="carousel__slide slide slick-slide slick-active" style="width: 203px;">
                        <!-- <img src="../img/DSC_0231.JPG" alt=""> -->
                        <div class="promo-style" @click="toCart()">
                            <!-- <div class="style-image">
                        <a href="javascript:;" alt>
                            <img style="height: 200px;" src="../img/DSC_0180.jpg" alt>
                        </a>
                    </div> -->
                            <div class="content" data-mh="style-content">
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
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(item, index) in imgArr0" :key="index">
                        <a :href="item.linkHref">
                            <img :src="item.imgSrc" alt>
                        </a>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="zero cm-Layout">
                <div class="zeroLeft">
                    <div class="carousel__slide slide slick-slide slick-active" style="width: 203px;">
                        <!-- <img src="../img/DSC_0231.JPG" alt=""> -->
                        <div class="promo-style" @click="toCart()">
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
        </el-main>
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
                imgSrc: require("../img/DSC_0250.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0253.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0274.jpg"),
                linkHref: "javascript:;"
            }
            ],
            imgArr2: [{
                imgSrc: require("../img/DSC_0130.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0119.jpg"),
                linkHref: "javascript:;"
            },
            {
                imgSrc: require("../img/DSC_0113.jpg"),
                linkHref: "javascript:;"
            }
            ],
        }
    },
};
</script>

<style lang="less" scoped>
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
    margin-top: 10px;
    margin-bottom: 10px;
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
</style>