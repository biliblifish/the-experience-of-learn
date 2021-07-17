import home from '@/view/Index/home'

export default {
    path: '/data-source',
    name: '资源管理',
    component: home,
    children: [
        {
            path: '/data-source/data-list',
            name: '云资源配置',
            component: () => import('@/view/Data/index')
        }
    ]
}