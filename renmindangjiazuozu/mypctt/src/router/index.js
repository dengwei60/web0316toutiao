    //引入Vue
    import Vue from 'vue'
    //引入路由组件
    import VueRouter from 'vue-router'
    //使用vuerouter
    Vue.use(VueRouter)
    //引入路由的配置
    import Index from '../components/Index'
    //配置登录的界面路由
    import UserLogin from "../components/login/UserLogin.vue"
    //配置注册的界面路由
    import UserRegister from "../components/login/UserRegister.vue"
    //配置跳转到文章详情的路由
    import ListDetail from '../components/showlist/ListDetail.vue'
    //跳转到用户中心页面
    import UserCenter from '../components/user/UserCenter.vue'
    //跳转到用户数据界面
    import UserData from '../components/user/UserData.vue'


    //配置路由
    let roter = [{
        path:'/',
        name:"index",
        component:Index
    },{
        path:'/userlogin',
        name:"userlogin",
        component:UserLogin
    },{
        path:'/userRegister',
        name:"userRegister",
        component:UserRegister
    },{
        path:'/listDetail',
        name:"listDetail",
        component:ListDetail
    },{
        path:'/userCenter',
        name:"userCenter",
        component:UserCenter
    },
    {
        path:'/userData',
        name:"userData",
        component:UserData
    },
    ]
    //导出实例,构造函数内属性不可写错.
    export default new VueRouter({
        routes: roter
    })