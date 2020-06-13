//引入Vue
import Vue from 'vue'
//引入路由组件
import VueRouter from 'vue-router'
//使用vuerouter
Vue.use(VueRouter)
//引入路由的配置
import Index from '../components/Index'
//配置路由
let roter = [{
    path:'/',
    name:"index",
    component:Index
}]
//导出实例,构造函数内属性不可写错.
export default new VueRouter({
    routes: roter
})