import Vue from 'vue'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import App from './App.vue'
import router from './router'
import store from './store'
import md5 from "js-md5";
import '@/common/css/common.css'
import '@/common/css/normalize.css'
import '@/fonts/iconfont.css'


Vue.config.productionTip = false
Vue.prototype.$md5 = md5;

import {Loading} from "element-ui";

Vue.use(ElementUI);


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

let needLoadingRequestCount = 0;
export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading();
    }
    needLoadingRequestCount++;
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return;
    needLoadingRequestCount--;
    if (needLoadingRequestCount === 0) {
        endLoading();
    }
}

/*------------------------------------ Loading加载 ------------------------------------*/

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
