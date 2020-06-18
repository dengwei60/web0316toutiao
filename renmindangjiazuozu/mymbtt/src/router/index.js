import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter)
//将每一条的路由的配置添加到routes这个vuerouter的options参数里面
import Index from '../components/Index.vue'
//引入详情页
import Article from '../components/article/Article.vue'

//配置跳转到主页文件
let routes = [{
    //首页进去显示的路由配置
    path:"/",
    name:"index",
    component:Index
},{
    path:"/article",
    name:"article",
    component:Article
}]
export default new VueRouter({
    //这是构造器里面的属性名不能随意调换
    routes,
})