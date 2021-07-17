import axios from 'axios'

const service = axios.create({
    baseURL: '',
    timeout: ''
})

// 请求拦截器
service.interceptors.request.use( function(config) {
    console.log(config)
    return config
}, function(err) {
    console.log(err)
    return Promise.reject(err)
})


//响应拦截器
service.interceptors.response.use( function(res) {
    if ( res.code == '404') {
        // 跳转到404页面
        this.$router.push('/404')
    }
    console.log(res)
    return res
}, function(err) {
    console.log(err)
    return Promise.reject(err)
})

export default service