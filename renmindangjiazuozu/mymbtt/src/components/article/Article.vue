<!--  -->
<template>
<div class='article'>
    <!-- 头部的导航条 -->
    <div class="nav">
        <div class="left">
            <img src="./img/toutiao.png" alt="">
        </div>
        <div class="right">打开</div>
    </div>
    <h1 class="title">{{article.title}}</h1>
    <div class="content" v-html="article.content"></div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    article:[]

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
    
    let nid = localStorage.getItem("nid")
    this.$axios.post("http://tt.linweiqin.com/api/tt/getArticleById",{
        nid:nid
    }).then(res => {
        console.log(res)
        this.article = res.data.article
    })
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

    .article {
        // position: relative;
        .nav {
            // position: fixed;
            // top: 0;
            // left: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // background-color: tomato;
            padding: 0.5rem;
            height: 5rem;
            box-shadow: 2px 2px 2px 2px #dddddd;
            .left {
                width: 5rem;
                height: 5rem;
                line-height: 6rem;
                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .right {
                font-size: 1.6rem;
                color: white;
                width: 5rem;
                height: 3rem;
                background-color: red;
                line-height: 3rem;
                text-align: center;
                border-radius: 1.5rem;
            }
        }

        .title {
            font-weight: 300;
            padding: 2rem;
            // margin-bottom: 2rem;
        }

        .content {
            padding: 2rem;
            // position: absolute;
            // top:6rem;
            // left: 0%;

        }
    }


</style>