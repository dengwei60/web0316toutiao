<!--  -->
<template>
<div class='mypctt'>
    <!-- 页头开始 -->
    <div class="header">
        <!-- 在模板内引入组件 -->
        <Header></Header>
    </div>
    <!-- 页头结束 -->
    <!-- 首页内容开始-->
    <div class="content">
        <!-- 内容的左边 -->
        <div class="conten-left">
            <!-- 引入左边导航 -->
            <Nav class="nav"></Nav>
        </div>
        <!-- 内容的中间 -->
        <div class="content-middle">
            <!-- 引入中间内容添加评论的栏 -->
            <Comment></Comment>
            <ShowList></ShowList>
        </div>
        <!-- 内容的右边 -->
        <div class="content-right">
            <!-- 引入右边的搜索栏 -->
             <SerchInput></SerchInput>
             <!-- 引入右边的登录栏 -->
             <Login></Login>
        </div>
    </div>
    <!-- 首页内容结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//1.1脚本内引入组件
//引入头部
import Header from '../components/header/Header'
//引入左边导航
import Nav from '../components/nav/Nav'
//引入右边的搜索框
import SerchInput from '../components/SerchInput/SerchInput'
//引入右边的登录框
import Login from '../components/login/Login'
//引入评论栏
import Comment from '../components/comment/Comment'
//引入评论
import ShowList from '../components/showlist/ShowList'



export default {
//import引入的组件需要注入到对象中才能使用
components: {
    //将引入的组件添加到当前的组件中,
    Header,
    Nav,
    SerchInput,
    Login,
    Comment,
    ShowList
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
    .mypctt {
  

        .header {
        
            header {

            }
        }

        .content {
            width: 100%;
            padding: 10px 5vw 10px 10vw;
            display: flex;

            .conten-left {
                flex: 1;
                // background-color: rgb(255, 151, 132);
            .nav {
                margin: 0 auto;
            }
            }

            .content-middle {
                flex: 2;
                // background-color: rgb(148, 255, 244,.1);
                // border: 1px solid #ddd;

            }

            .content-right {
                flex: 2;
                padding: 0 20px;
                // background-color: rgb(150, 250, 78);

            }
    }
}
</style>