<!--  -->
<template>
<div class='detail'>
    <div class="lefttop">
        <h1>今日头条</h1>
    </div>
    <div class="artdetail">
        <h1 class="titile">{{article.title}}</h1>
        <div class="content">
            <span class="name">{{name}}</span>
            <span class="time">{{article.created_at}}</span>
        </div>
        <div class="detaile" v-html="article.content"></div>
    </div>   
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
    //设定一个可以渲染的文章信息变量
    article:{},
    //姓名变量
    name:""

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
    //页面挂载完成的时候会请求到对应的nid对应的文章内容,那么久需要获取到文章的数据
    // 既然前面通过路由传递过来了对应的nid那么久在router里面去拿到传递过来的nid的参数
    //首先我们打印出router的内容
    console.log(this.$router)
    //拿到对应的nid的值
    let nid = this.$router.history.current.query.nid
    //再通过axios请求来拿到渲染页面的数据
    this.$axios.post("/getArticleById",{
        nid:nid
    }).then(res => {
        console.log(res)
        //拿到这个请求后将结果赋值给this.article
        this.article = res.article
        this.name = res.article.n_user.nickname
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
.detail {
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #dddddd;
  .lefttop {
      position: absolute;
      left: 30px;
      top: 30px;
    h1 {
        color: var(--themeColor);
    }
  }

  .artdetail {
      position: absolute;
      left: 300px;
      top: 100px;
    //   background-color:white;
    .titile {
        margin: 30px 0;
        border-bottom: 1px solid black;
    }

    .content {
        display: flex;
      .name {
          margin: 0 20px;
      }

      .time {
          margin: 0 20px;

      }
    }

    .detaile {
        margin: 20px;
    }
  }
}
</style>