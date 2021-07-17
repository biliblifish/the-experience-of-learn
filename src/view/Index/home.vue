<template>
    <div class="container">
        <el-container class="page-wrapper">
            <el-aside width="200px" v-show="!$route.meta.showMenu">
                <el-menu :default-active="$route.path" router unique-opened>
                    <div v-for="(items, index) of menuTotal" :key="index">
                        <el-submenu v-if="items.submenu" :index="items.index">
                            <template slot="title">
                                <i class="el-icon-user"></i>
                                <span>{{ items.title }}</span>
                            </template>
                            <el-menu-item
                                v-for="(subitem, index) of items.submenu"
                                :key="index"
                                :index="subitem.index"
                                >{{ subitem.subtitle }}</el-menu-item
                            >
                        </el-submenu>
                        <el-menu-item v-else :key="index" :index="items.index">
                            <template slot="title">
                                <i class="el-icon-user"></i>
                                <span>{{ items.title }}</span>
                            </template>
                        </el-menu-item>
                    </div>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header v-show="!$route.meta.showMenu">
                    <span>基于Vue2.0构建的后台管理系统</span>
                    <span>{{ username }}</span>
                    <el-button type="primary" size="mini" @click="out"
                        >login out</el-button
                    >
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer v-show="!$route.meta.showMenu">
                    CopyRight 2021 04-16</el-footer
                >
            </el-container>
        </el-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: localStorage.getItem('userInfo'),
            userInfo: {
                username: '',
                role: ''
            },
            menuTotal: [
                {
                    title: 'Data',
                    index: '/data-source/data-list',
                    meta: {
                        role: ['admin', 'user']
                    }
                },
                {
                    title: 'Echarts',
                    index: '/echarts',
                    meta: {
                        role: ['admin']
                    },
                    submenu: [
                        {
                            subtitle: '大数据',
                            index: '/echarts/bigData',
                            meta: {
                                role: ['admin', 'user']
                            }
                        },
                        {
                            subtitle: '世界数据',
                            index: 'echarts/world',
                            meta: {
                                role: ['admin', 'user']
                            }
                        }
                    ]
                },
                {
                    title: 'Setting',
                    index: '/setting',
                    meta: {
                        role: ['admin']
                    }
                },
                {
                    title: '一些错误页面',
                    index: '/page',
                    meta: {
                        role: ['admin', 'user']
                    },
                    submenu: [
                        {
                            subtitle: '404',
                            index: '/404',
                            role: ['user', 'admin']
                        },
                        {
                            subtitle: '403',
                            index: '/403',
                            role: ['user']
                        }
                    ]
                },
                {
                    title: 'UserIfo',
                    index: '/userinfo',
                    meta: {
                        role: ['user', 'admin']
                    }
                }
            ],
            menu: []
        }
    },
    mounted() {
        console.log(this.$store.state.role)
        // this.filterMenu(this.$store.state.role)
        console.log(this.menu)
    },
    methods: {
        out() {
            this.$confirm('你想要立刻退出本系统吗？', '提示', {
                confirmButtonText: 'confirm',
                cancelButtonText: 'cancel',
                type: 'warning'
            })
                .then(() => {
                    window.localStorage.clear()
                    this.$router.push('/login')
                    this.$message.success('退出成功')
                })
                .catch(() => {
                    this.$message.error('退出失败')
                })
        },
        // 根据角色动态生成菜单  递归封装一下，规律就是反复匹配数组里的role,接收一个数组和role，然后匹配数组里的role和接收的role
        filterMenu(role) {
            for (let i = 0; i < this.menuTotal.length; i++) {
                if (this.menuTotal[i].meta.role.includes(role)) {
                    if (this.menuTotal[i].submenu) {
                        this.menuTotal[i].submenu = this.menuTotal[
                            i
                        ].submenu.filter(item => item.role.includes(role))
                    }
                    this.menu.push(this.menuTotal[i])
                }
            }
        }
    }
}
</script>

<style>
.container {
    height: 100%;
    width: 100%;
}
.page-wrapper {
    height: 100%;
    width: 100%;
}
.el-header {
    line-height: 80px;
    background: #bcbcbc;
}
.el-aside {
    background: #f2f3ff;
}
.el-main {
    padding: 10px !important;
}
.el-footer {
    background: rgba(8, 21, 50, 0.5);
}
</style>
