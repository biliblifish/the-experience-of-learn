import App from './App.vue' 
import Vue from 'vue'
import router from './router/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/main.css'
import store from './store/store'
import '@/assets/js/china'

Vue.use(ElementUI)

let baseURL
if (process.env.NODE_ENV === 'development') {
    baseURL = '这是开发环境的api'
} else {
    baseURL = '默认是生产环境的api'
}
console.log(baseURL)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})