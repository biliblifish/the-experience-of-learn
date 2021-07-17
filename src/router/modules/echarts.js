import home from '@/view/Index/home'

export default {
    path: '/echarts',
    name: '统计数据',
    component: home,
    children: [{
            path: '/echarts/bigData',
            name: '大数据可视化',
            meta: {
                showMenu: true
            },
            component: () => import('@/view/Echarts/echarts.vue')
        },
        {
            path: 'echarts/world',
            name: '世界地图',
            component: () => import('@/view/Echarts/world.vue')
        }
    ]
}