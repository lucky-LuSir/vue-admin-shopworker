<template>
    <div class="about cm-Layout">
        <!-- <h1>This is an about page1111</h1> -->
        <!-- 关于我们 -->
        <section class="section-container">
            <div class="container-wrapper yq-Layout clearfix">
                <div class="left-wrapper fl">
                    <section class="title-box">
                        <h1>BW shutters and blinds </h1>
                        <!-- <p>Shanghai Kuyuan Network Technology Co., Ltd. </p> -->
                    </section>
                </div>
                <div class="right-wrapper fr">
                    <section class="introduce-box">
                        <div class="introduce-view">
                            <h2>Company Location：</h2>
                            <p>HEZE JIEMING SHUTTER CO.,LTD is located in Heze City,Shandong Province.We covers an area of 25 thousand square meters.It is an export enterprise for processing and trading,</p>
                        </div>
                    </section>
                    <section class="idea-box">
                        <div class="introduce-view">
                            <h2>Main business：</h2>
                            <p>Our main products are shutters and louvers,the materials are paulownia wood ,basswood and PVC,and you can choose any colour,any style,any size of the shutters,and we believe one of them will always satisfy you.</p>
                        </div>
                    </section>
                    <section class="idea-box">
                        <div class="introduce-view">
                            <h2>Quality service：</h2>
                            <p>We have always been insisting on the enterprise aim of ‘living on quality,developing on quality’,Our products quality has always been the best in the same business, and has been praised by foreign clients.Has an abundant technology strength,advanced processing equipment,and excellent managerment.Our company takes credit for quality as its life and sincerely,welcomes clients to invest cooperation and negotiate trade with us.</p>
                        </div>
                    </section>
                    <section class="idea-box">
                        <div class="introduce-view">
                            <h2>Contact information：</h2>
                            <ul class="content">
                                <li>
                                    <i class="iconfont el-icon-diy-zuobiaofill"></i>
                                    <span><em>Factory address</em>：INDUSTRY ZONE,CHENJI TOWN,DINGTAO COUNTY,HEZE CITY, SHANDONG ,CHINA </span>
                                </li>
                                <li>
                                    <i class="iconfont el-icon-diy-gongsi"></i>
                                    <span><em>Office address</em>：No.98 ,ZhongHua Road,Heze City, ShanDong ,China. 274000</span>
                                </li>
                                <li>
                                    <i class="iconfont el-icon-diy-dianhua1"></i>
                                    <span><em>iphone</em>: 400-820-2058</span>
                                </li>
                                <li>
                                    <i class="iconfont el-icon-diy-chuzu"></i>
                                    <span><em>Fax</em>： 0530-2205865 </span>
                                </li>
                                <li>
                                    <i class="iconfont el-icon-diy-youxiang"></i>
                                    <span><em>mailbox</em>：info@jmshutter.net </span>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>



<style lang="less" scoped>
    .content {
        margin-top: 50px;

        li {
            // height: 20px;
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 20px;
            margin-bottom: 12px;
            cursor: pointer;
            position: relative;

            .iconfont {
                font-size: 18px;
                margin-right: 12px;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }

            span {
                margin-left: 26px;
                padding-left: 12px;
                /* padding-left: 33px; */
                border-left: 1px solid #999999;
                display: block;
            }

            .zuobiao {
                margin-left: -3px;
                font-size: 21px;
            }

            .youxiang {
                font-size: 14px;
                margin-right: 14px;
                margin-left: 2px;
            }
        }
    }

    // 轮播图
    .section-banner {
        padding-top: 60px;

        img {
            width: 1200px;
            height: 340px;
        }
    }

    .section-container {
        padding-top: 80px;
        padding-bottom: 50px;

        .left-wrapper {
            width: 50%;
            float: left;
        }

        .right-wrapper {
            width: 50%;
            float: right;
        }
    }

    .title-box {
        text-align: left;

        h1 {
            font-size: 20px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(97, 97, 97, 1);
            line-height: 28px;
        }

        p {
            margin-top: 7px;
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(156, 156, 156, 1);
            line-height: 20px;
        }
    }

    // 介绍信息
    .introduce-view {
        text-align: left;

        h2 {
            font-size: 20px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(97, 97, 97, 1);
            line-height: 28px;
        }

        p {
            margin-top: 18px;
            width: 498px;
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
            line-height: 28px;
        }
        em {
            color: #7c6666;
            font-weight: 600;
        }
    }

    // 公司理念
    .idea-box {
        margin-top: 50px;
    }

    // 历史
    .history-box {
        text-align: left;
        margin-top: 60px;
        position: relative;

        h2 {
            font-size: 20px;
            font-family: PingFangSC;
            font-weight: 400;
            color: rgba(97, 97, 97, 1);
            line-height: 28px;
        }

        .history-list {
            padding-left: 25px;
            padding-top: 45px;

            .history-item {
                width: 100%;
                font-size: 14px;
                font-family: PingFangSC;
                font-weight: 400;
                color: rgba(153, 153, 153, 1);
                margin-top: 20px;
                line-height: 24px;
            }

            .history-item:first-child {
                margin-top: 0;
            }
        }

        .spot-list {
            position: absolute;
            left: 0;
            top: 79px;

            &:before {
                content: '';
                width: 16px;
                height: 16px;
                display: inline-block;
                background-color: #fff;
                border-radius: 50%;
                border: 1px solid #6c6c6c;
                position: absolute;
                left: -4px;
                top: -4px;
            }

            .spot-item {
                position: absolute;
                left: 0;
                width: 8px;
                height: 8px;
                background: rgba(153, 153, 153, 1);
                border: 1px solid rgba(151, 151, 151, 1);
                border-radius: 50%;
                z-index: 1;
            }

            .spot-item:nth-child(1) {
                top: 0;
                background-color: #606060;
            }

            .spot-item:nth-child(2) {
                top: 44px;
            }

            .spot-item:nth-child(3) {
                top: 89px;
            }

            .spot-item:nth-child(4) {
                top: 132px;
            }

            .spot-item:nth-child(5) {
                top: 200px;
            }

            .spot-item:nth-child(6) {
                top: 245px;
            }

            .spot-item:nth-child(7) {
                top: 288px;
            }
        }

        .line {
            width: 0;
            height: 276px;
            border-left: 1px dashed #979797;
            position: absolute;
            left: 4px;
            top: 91px;
        }
    }
</style>