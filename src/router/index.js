
import Vue from 'vue'
import aa from 'vue-router'
//import Home from '../components/Home'

Vue.use(aa)
const router = new aa({
    routes: [
        // '/'
        {
            path: '/',
            redirect: '/login',
            hidden:true,
            component: () => import('../components/Login.vue')
        },
        // '/login'
        {
            path: '/login',
            name: 'Login',
            
            hidden:true,
            component: () => import('../components/Login.vue')
        },
        //'学生管理'
        {
            path: '/home',
            name: '学生管理',
            iconClass: 'fa fa-users',
            component: () => import('../components/Home.vue'),
            redirect: '/home/student',
            children: [{
                path: '/home/student',
                name: '学生列表',
                iconClass: 'fa fa-list',
                component: () => import('../components/students/SutudentList.vue'),
            }, {
                path: '/home/info',
                name: '信息列表',
                iconClass: 'fa fa-list-alt',
                component: () => import('../components/students/InfoList.vue'),
            }, {
                path: '/home/infos',
                name: '信息管理',
                iconClass: 'fa fa-list-alt',
                component: () => import('../components/students/InfoManage.vue'),
            }, {
                path: '/home/work',
                name: '作业列表',
                iconClass: 'fa fa-list-ul',
                component: () => import('../components/students/WorkList.vue'),
            }, {
                path: '/home/works',
                name: '作业管理',
                iconClass: 'fa fa-list-alt',
                component: () => import('../components/students/WorkManage.vue'),
            },]
        },
        //'数据分析'
       /*  {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('../components/Home.vue'),
            redirect: '/home/student',
            children: [{
                path: '/home/dataoverview',
                name: '数据概览',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/DataOverview.vue'),
            }, {
                path: '/home/mapview',
                name: '地图概览',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/MapView.vue'),
            }, {
                path: '/home/TravelMap',
                name: '旅游地图',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/TravelMap.vue'),
            }, {
                path: '/home/ScoreMap',
                name: '分数地图',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/ScoreMap.vue'),
            },]
        }, */
        {
            path: '/home',
            name: '数据分析',
            iconClass: 'fa fa-bar-chart',
            component: () => import('../components/Home.vue'),
            redirect: '/home/student',
            children: [{
                path: '/home/dataview',
                name: '数据概览',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/DataView.vue'),
            }, {
                path: '/home/mapview',
                name: '地图概览',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/MapView.vue'),
            }, {
                path: '/home/TravelMap',
                name: '旅游地图',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/TravelMap.vue'),
            }, {
                path: '/home/ScoreMap',
                name: '分数地图',
                iconClass: 'fa fa-bar-chart',
                component: () => import('../components/dataAnalysis/ScoreMap.vue'),
            },]
        },
        //'用户中心'
        {
            path: '/users',
            name: '用户中心',
            iconClass: 'fa fa-user',
            redirect: '/users/user',
            component: () => import('../components/Home.vue'),
            children: [{
                path: '/users/user',
                name: '用户权限管理',
                iconClass: 'fa fa-user',
                component: () => import('../components/users/User.vue'),
            },],
        },
        //404
        {
            path: '/404',
            name: '404',
            
            hidden:true,
            component: () => import('../components/404.vue')
        },
        // /*
        {
            path: '/*',
            hidden:true,
            redirect: '/404',
        }
    ],
    //mode: 'history'
})
export default router