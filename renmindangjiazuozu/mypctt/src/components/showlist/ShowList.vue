<!--  -->
<template>
<div class="showList">
    <!-- 上面的点击刷新 -->
    <div class="showlist-top" @click.stop="refreshpage">点击刷新</div>
    <!-- 下面的展示列表 -->
    <div class="showList-item" v-for="item,index in article" :key="index"
    @click.stop="gotodetail(item.nid)">
        <div class="left" v-if="item.img">
            <!-- 左边大图 -->
            <img :src="item.img" alt="">
        </div>
        <div class="right">
            <!-- 右边的标题 -->
            <div class="right-title">{{item.title}}</div>
            <!-- 右边的内容 -->
            <div class="right-content">
                <!-- 右边的图像 -->
                <img :src="item.user.avator" alt="">
                <!-- 右边的名字 -->
                <div class="right-content-name">{{item.user.nickname}}</div>
                <!-- 右边的时间 -->
            </div>
            <div class="right-content-data">{{item.created_at}}</div>            
        </div>
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
    lastid:0,//最新一条咨询的id
    page:0,//初始列表页码
    number:20,//一页的内容量
    article:[],//文章列表
    //是否在继续请求的开关
    onLoading:false
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //跳转到详情页的方法
    gotodetail:function(id){
        //这里要传一个参数所以要用到传参的写法
        this.$router.push(
            {
                //配置路由的hash
                path:"/listDetail",
                //传入参数
                    query:{
                        nid:id
                    }
                })
    },
    refreshpage:function(){
    window.location.reload()
    },
// 刷新的数据
refresh:function(){
    //当请求开关打开的时候
    this.onLoading = true

    this.$axios.post("/getArticles",{
        lastid:this.lastid,
        page:this.page++,
        number:this.number
    }).then(res => {
        console.log(res)
        // 加最新的数据拼接到现有的数据上,通过数组concat方法
        this.article = (this.article).concat(res.articles || [])
        //当加载的时候这时候的页面会自增
        // this.page = res.current_page//设置当前的页码
        console.log(this.page)
        //判断是否是最后一行的关系
        //当前的条数/每行的条数
        if(res.counts/this.number <= res.current_page){
            this.$message({
                msg:"最后一页了,别再拉了"
            })
        }
    }).catch( err => {
        this.onLoading = false
    })
}
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //挂载完成的时候
    //为了防止this指向出现错误,先将this指定给这个实例
    let _this=this
    //既然有滚动事件那么我们就需要拿到整个的滚动高度,和实时的滚动高度和屏幕高度做比较
    //当滚动的距离是0的时候
    //整体的可滚动高度-屏幕高度=滚动的高度(0)
    //实时的懒加载
    window.addEventListener("scroll",function(){
        console.log('我在滚了')
        //获取屏幕高度
        let iHeight = document.documentElement.clientHeight
        //获取屏幕可滚动的整个高度
        let scrollHeight = document.documentElement.scrollHeight
        //获取屏幕的实时滚动距离
        let scrollTop = document.documentElement.scrollTop
        //还有一个关系
        //console.log(scrollHeight-scrollTop <= iHeight ? "触底":"请继续拉")
        //这样就在每一次挨着底部的时候就来调用请求数据的加载方法
        scrollHeight-scrollTop <= iHeight?_this.refresh():"";
    })
        //如果触底就显示下一个页面
    this.refresh();

    // this.$axios.post("/getArticles",{lastid:this.lastid})
    // .then(res => {
    //     console.log(res);
    //     //结果里面获取文章的数组
    //     this.article = res.articles || []
    //     if(this.article.length > 0){
    //         //获取最后一条文章的id
    //         // this.lastid = this.article[0].nid
    //     }
    // })
    // .catch(err => {
    //     console.error(err); 
    // })

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
.showList {
  .showlist-top {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #3192d5;
      border-radius: 5px ;
      color: #3192d5;
      background-color:rgba(111, 209, 255, 0.1);
      margin: 10px 0px;
  }
    .showList-item {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;

        .left {
        flex: 1;
        height: 100px;
        width: 155px;
        padding: 5px;

            img {
                height: 100%;
                width: 100%;
            }
        }

        .right {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;

            .right-title {
                
                font-weight: 600;

            }

            .right-content {
            display: flex;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50px;
                }

                .right-content-name {
                    width: 100px;
                    height: 30px;
                    color:#7b7b7b;
                    line-height: 30px;
                    font-size: 16px;
                    margin-left: 10px;
                }

            }
            .right-content-data {
                 color:#7b7b7b;
            font-size: 16px;
            }
            
                    
        }
    }
  
}
</style>