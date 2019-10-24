import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
    Loading
} from "element-ui";
import router from './router'
import store from './store'
import axios from "axios";
import md5 from "js-md5";
import App from './App.vue'
import i18n from './i18n'
import BASE_URL from "../public/park_BASE_URL"; //配置全局URL
import {
    addCookie,
    getCookie,
    delCookie
} from "./common/js/cookie.js";
import '@/common/css/common.css'
import '@/common/css/normalize.css'
import '@/common/css/reset.css'
import '@/common/css/common1.css'
import '@/fonts/iconfont.css'
import {
    currency
} from './util/currency'


Vue.config.productionTip = false
Vue.prototype.$md5 = md5;
Vue.prototype.$ajax = axios;
//添加使用cookie
Vue.prototype.$cookieStore = {
    addCookie,
    getCookie,
    delCookie
};

// axios.defaults.baseURL = BASE_URL.BASE_URL; //设置全局URL
axios.defaults.baseURL = "http://47.100.79.150:8000"; //设置全局URL
// axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
// axios.defaults.headers.post["Content-Type"] = "application/json";

Vue.use(ElementUI);

Vue.filter("currency", currency);


/*------------------------------------ Loading加载 ------------------------------------*/
let loading;

function startLoading() {
    loading = Loading.service({
        lock: true,
        text: "拼命加载中...",
        target: document.querySelector(".mainBox")
    });
}

function endLoading() {
    loading.close(); // 关闭 loading
}

/*------------------------------------ Loading加载 ------------------------------------*/

/**------------------------------------- 请求拦截器 --------------------------------*/
axios.interceptors.request.use(
    config => {
        // let token = Vue.prototype.$cookieStore.getCookie("gn_request_token");
        // if (token == null) {
        //     token = "";
        // }
        // config.headers.gn_request_token = token;
        let token  = window.sessionStorage.getItem("authentication");
        if (token) {
            config.headers['Authorization'] = token;
        }
        startLoading();
        return config;
        // authorization
    },
    error => {
        console.log("error", error);
    }
);
/**------------------------------------- 请求拦截器 --------------------------------*/

/**------------------------------------- 响应拦截器 --------------------------------*/
axios.interceptors.response.use(
    response => {
        // if (response.data.code != 200) {
        //     park.$alert(response.data.message, "系统异常", {
        //         confirmButtonText: "确定",
        //         callback: action => {}
        //     });
        //     endLoading();
        //     return null;
        // } else {
        //     endLoading();
        //     return response;
        // }
        endLoading();
        return response;
    },
    error => {
        park.$alert("服务器发生未知异常，请联系管理员", "系统异常", {
            confirmButtonText: "确定",
            callback: action => {}
        });
        endLoading();
    }
);
/**------------------------------------- 响应拦截器 --------------------------------*/

/**------------------------------------- 导航守卫 --------------------------------*/
// router.beforeEach((to, from, next) => {
//     //判断该路由是否需要登录权限
//     let token = Vue.prototype.$cookieStore.getCookie("gn_request_token");
//     if (to.path === '/login' || token) {
//         // 有token，放行
//         next()
//     } else {
//         next('/login')
//     }
// });
/**------------------------------------- 导航守卫 --------------------------------*/


let park = new Vue({
    router,
    store,
    methods: {
        checkLogin() {
            axios.get("users/checkLogin").then(res => {
                var res = res.data;
                if (res.status == "0") {
                    this.$store.commit("updateUserInfo", res.result);
                } else {
                    if (this.$route.path != "/goods") {
                        this.$router.push("/goods");
                    }
                }
            });
        },
        getCartCount() {
            axios.get("users/getCartCount").then(res => {
                var res = res.data;
                if (res.status == "0") {
                    this.$store.commit("updateCartCount", res.result);
                }
            });
        }
    },
    i18n,
    render: h => h(App)
}).$mount('#app')