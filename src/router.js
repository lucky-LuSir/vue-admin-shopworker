import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import index from '@/views/index'
import product from '@/views/product'
import support from '@/views/support'
import account from '@/views/account'
import about from '@/views/about'
import cart from '@/views/cart'
import orderConfirm from '@/views/orderConfirm'
import orderSuccess from '@/views/orderSuccess'
import address from '@/views/address'
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
            redirect: '/index',
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
                    path: '/orderConfirm',
                    name: 'orderConfirm',
                    component: orderConfirm
                },
                {
                    path: '/cart',
                    name: 'cart',
                    component: cart
                },
                {
                    path: '/address',
                    name: 'address',
                    component: address
                },
                {
                    path: '/orderSuccess',
                    name: 'orderSuccess',
                    component: orderSuccess
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
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        // },
        {
            path: '/login',
            name: 'login',
            component: () => import( /* webpackChunkName: "about" */ './Login/views/login.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import( /* webpackChunkName: "about" */ './Login/views/register.vue')

        },
        {
            path: '/editPassword',
            name: 'editPassword',
            component: () => import( /* webpackChunkName: "about" */ './Login/views/editPassword.vue')
        }

    ]
})