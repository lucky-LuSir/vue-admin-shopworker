import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from '@/components/index'
import product from '@/components/product'
import support from '@/components/support'
import account from '@/components/account'
import about from '@/components/about'
import editCart from '@/components/editCart'
import mailInforma from '@/components/mailInforma'
import success from '@/components/success'
import error from '@/components/error'
import user from '@/components/user'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/index'
        }, {
            path: '/home',
            name: 'home',
            component: Home,
            children: [{
                    path: '/index',
                    name: 'index',
                    component: index
                },
                {
                    path: '/product',
                    name: 'product',
                    component: product
                },
                {
                    path: '/support',
                    name: 'support',
                    component: support
                },
                {
                    path: '/account',
                    name: 'account',
                    component: account
                },
                {
                    path: '/about',
                    name: 'about',
                    component: about
                },
                {
                    path: '/editCart',
                    name: 'editCart',
                    component: editCart
                },
                {
                    path: '/mailInforma',
                    name: 'mailInforma',
                    component: mailInforma
                },
                {
                    path: '/success',
                    name: 'success',
                    component: success
                },
                {
                    path: '/error',
                    name: 'error',
                    component: error
                },
                {
                    path: '/user',
                    name: 'user',
                    component: user
                }
            ]
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import( /* webpackChunkName: "about" */ './views/Login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import( /* webpackChunkName: "about" */ './views/Register.vue')
        },
        {
            path: '/editPassword',
            name: 'editPassword',
            component: () => import( /* webpackChunkName: "about" */ './views/editPassword.vue')
        }

    ]
})