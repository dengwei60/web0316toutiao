<!--  -->
<template>
<div class='mymbtt'>
    <!-- 页头开始 -->
    <div class="header">
        <div class="shoucang">收藏</div>
        <div class="text">今日头条</div>
        <div class="serch">🔍</div>
    </div>
    <!-- 页头结束 -->
    <!-- 导航条开始 -->
    <div class="navs">
        <div class="navs-items">
        <a href="#">推荐</a>
        <a href="#">视屏</a>
        <a href="#">热点</a>
        <a href="#">社会</a>
        <a href="#">娱乐</a>
        <a href="#">军事</a>
        <a href="#">故事</a>
        </div>
        <div class="add">+</div>
    </div>
    <!-- 导航条结束 -->
    <!-- 内容开始 -->
    <div class="content">
        <div class="content-item" v-for="item,index in article" @click.stop="goutoarticle(item.nid)">
        <div class="item-text">{{item.title}}</div>
        <div class="item-time">{{item.created_at}}</div>
        </div>
    </div>
    <!-- 内容结束 -->
    
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
goutoarticle(nid){
    localStorage.setItem("nid",nid)
    this.$router.push({name:"article"})
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    this.$axios.post("http://tt.linweiqin.com/api/tt/getArticles",{
        lastid:0,
        page:0,
        number:20
    })
    .then(res => {
        console.log(res)
        localStorage.setItem
        let articles = res.data.articles
        this.article = articles
    })
    .catch(err => {
        console.error(err); 
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
    html{
        font-size: 62.5%;
    }
    .mymbtt {
        
        //页头
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            height: 2.5rem;
            background-color: var(--themeColor);
            font-weight: 300;
            color: white;
            .shoucang {

            }

            .text {
                font-weight: 600;
                font-size: 1.5rem;
            }

            .serch {

            }
        }
        //导航
        .navs {
            position: relative;
            .navs-items {
                width: 100%;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                overflow: hidden;
                white-space: nowrap;
                overflow-x: scroll;
                overflow-y: hidden;
                background-color: rgb(242, 242, 242);
                a {
                    display: inline-block;
                    width: 18%;
                    text-decoration: none;
                    color: black;
                }
            }
            .navs-items::-webkit-scrollbar{
                display: none;
            }

            .add {
                position: absolute;
                right: 0;
                top: 0;
                height: 3rem;
                width: 1.5rem;
                line-height: 3rem;
                background-color: white;
                text-align: center;
                font-size: 1.5rem;
                font-weight: 200;
                color: var(--themeColor);  
            }
        }
        //内容
        .content {
            overflow: hidden;
            overflow-x: hidden;
            overflow-y: scroll;
            .content-item {
                height: 5rem;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                border-bottom: 1px solid #ddd;
                .item-text {
                    font-size:1.5rem;
                }

                .item-time {
                    font-size:0.5rem;
                    color:#9a9a9a;
                }
            }
        }
        .content::-webkit-scrollbar{
            display: none;
        }
    }
</style>