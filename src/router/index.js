import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/view/Index/home'
import EchartsRouter from './modules/echarts'
import DataRouter from './modules/data'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({showSpinner: false})
Vue.use(VueRouter)

const routes = [
    EchartsRouter,
    DataRouter,
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/Login/login.vue')
    },
    {
         path: '/home',
         name: 'home',
         component: layout,
    },
    {
        path: '/pages',
        name: '404',
        component: layout,
        children: [
            {
                path: '/404',
                component: () => import('@/view/Pages/404.vue')
            },
            {
                path: '/403',
                component: () => import('@/view/Pages/403')
            }
        ]
    },
    {
        path: '/userInfo',
        name: 'user',
        component: layout,
        children:[
            {
                path: '/userInfo',
                component: () => import('@/view/UserInfo/index')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

// 判断用户是否有访问当前路由的权限
router.beforeEach( (to, from, next) => {
    NProgress.start()
    console.log('router=====>>>');
	console.log(to.name);
    // 登录不拦截
    if (to.name == 'login') {
        next()
        return
    }
     // 首先需要登录
    if (!localStorage.getItem('userInfo')) {
        next({ path: 'login' })
        return
    }
    // 要token, 要权限
    // 不要token, 不要权限
    next()
})

router.afterEach( () => {
    console.log('<<<<=======router')
    NProgress.done()
})

export default router