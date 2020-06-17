<!--  -->
<template>
<div class="usercenter">
    <!-- 顶部的缓存里面的内容 -->
    <div class="header">
        <img :src="userInfo.avator" alt="">
        <span>{{userInfo.nickname}}</span>
        <button @click.stop="goTotoUserData">编辑</button>
    </div>
    <!-- 文章的内容中心 -->
    <div class="content">
            <!-- 顶部的标题导航 -->
        <div class="title">
            <div :class="['title-item',{active:item.id === activetab}]" v-for="item,index in navs"
            :key="item.id"
            @click.stop="changeTab(item.id)"
            >
                {{item.text}}
            </div>
        </div>
        <!-- 内容部分 -->
        <div class="content-c">
            <!-- 如果是头条展示头条的内容 -->
            <div class="toutiao" v-if="activetab === 'toutiao'">
                <div class="toutiao-item" v-for="item,index in toutiaos">
                    <div class="top">
                        <img :src="userInfo.avator" alt="">
                        <span>{{userInfo.nickname}}</span>
                    </div>
                    <div class="middle">{{item.title}}</div>
                    <div class="bottom">
                        <div class="left">{{item.created_at}}</div>
                        <div class="right" @click.stop="delcurrentitem(item.nid)">删除</div>
                    </div>
                </div>
            </div>

            <!-- 如果是文章的内容 -->
            <div class="toutiao" v-if="activetab === 'article'">
                <div class="toutiao-item" v-for="item,index in articles">
                    <div class="top">
                        <img :src="userInfo.avator" alt="">
                        <span>{{userInfo.nickname}}</span>
                    </div>
                    <div class="middle">{{item.title}}</div>
                    <div class="bottom">
                        <div class="left">{{item.created_at}}</div>
                        <div class="right" @click.stop="delcurrentitem(item.nid)">删除</div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
    
},
data() {
//这里存放数据
return {
    //选中样式的中间变量
    activetab:"toutiao",
    // 头条的内容变量,
    toutiaos:[],
    //文章的内容变量
    articles:[],
    //标题的数组
    navs:[
        {
        id:"toutiao",
        text:"微头条"
        },
        {
        id:"article",
        text:"文章"
        },
    ]
};
},
//监听属性 类似于data概念
computed: {
    userInfo:function(){
        return this.$store.state.userInfo
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //点击切换头部标题导航的方法
    changeTab(id){
        this.activetab = id
    },
    //删除当前文章或者微头条的内容的方法
    delcurrentitem(nid){
        //首先通过对应的api,请求到对应的数据
        this.$axios.post("/deleteArticle",{
            nid:nid
        }).then(
            //拿到请求的结果并显示提示框
            res=>{
                this.$message({
                    msg:res.msg
                })
                //在res的status === 0 的时候是成功的
                if(res.status === 0){
                    // debugger
                    // 如果是文章内容就只会去找到文章的对应的index
                    let index = this.articles.findIndex( item => item.nid === nid)
                    if( index !== -1){
                        this.articles.splice(index,1)
                        //
                        return this.articles
                    }
                    // 在是头条内容上的时候就只会去找到头条的内容对应的index
                    let  indextt = this.toutiaos.findIndex( item => item.nid === nid)
                    if(indextt !== -1){
                        this.toutiaos.splice(indextt,1)
                        //
                        return this.toutiaos
                    }
                }
            }
        )
    }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //挂载的时候将头条的内容和文章的内容通过axios请求拿到并赋值给data
    // 头条的内容
    this.$axios.post("/getArticlesByType",{
        //传参
        type:"TT"
    }).then(res => {
        console.log(res)
        this.toutiaos = res.articles
    })
    //文章的内容
    this.$axios.post("/getArticlesByType",{
        //传参
        type:"article"
    }).then(res => {
        this.articles = res.articles
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
    .usercenter {
        
        .header {
            height: 110px;
            margin: 20px 0;
            display: flex;
            align-items: center;
            margin-left: 20px;
            padding: 5px;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }

            span {
                margin: 0 20px;
            }

            button {
                background-color: rgb(0, 251, 255);
                border: 1px solid  rgb(0, 30, 255);
            }
        }

        .content {
            .title{
                display: flex;
                margin-left: 20px;
                border-bottom: 1px solid #dddddd;   
                .title-item{
                    width: 100px;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                }
                .active{
                    border-bottom: 2px solid var(--themeColor);
                    color: #66b0fd;
                }
            }
            .content-c {

                .toutiao{
                    .toutiao-item {
                        height: 150px;
                        display: flex;
                        padding: 20px;
                        flex-direction: column;
                        justify-content: space-around;
                        border-bottom: 1px dashed #dddddd;
                    .top {
                        display: flex;
                        align-items: center;
                        img {
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            margin-right: 5px;
                        }

                        span {

                        }
                    }

                    .middle {
                        font-size: 16px;
                    }
                    // 鼠标的浮动出现删除按钮
                    &:hover{
                        .bottom{
                            .right{
                                display: block;
                            }
                        }
                    }

                    .bottom {
                        display: flex;
                        justify-content: space-between;
                        .left {
                            font-size: 14px;
                            color: rgb(4, 197, 250);
                        }

                        .right {
                            background-color: red;
                            color: white;
                            display: none;
                        }
                    }
                    }
                }
            }
        }
    }
</style>