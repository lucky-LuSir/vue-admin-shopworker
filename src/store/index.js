import Vue from 'vue'
import Vuex from 'vuex'
import language from './modules/language.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        language
    },
    state: {
        nickName: '',
        cartCount: 0
    },
    mutations: {
        //更新用户信息
        updateUserInfo(state, nickName) {
            state.nickName = nickName;
        },
        updateCartCount(state, cartCount) {
            state.cartCount += cartCount;
        }
    }
})