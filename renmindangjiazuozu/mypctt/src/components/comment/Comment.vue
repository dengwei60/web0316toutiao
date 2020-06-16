<!--  -->
<template>
<div class='comment'>
    <!-- 切换头部标题开始 -->
    <div class="title">
        <div :class="['titile-item',{'active':activeTab === item.id}]" v-for="item,index in title"
        :key="title.id"
        @click.stop="activeChange(item.id)"
        >{{item.text}}
        </div>
    </div>
    <!-- 切换头部标题结束 -->
    <!-- 中间的输入内容区域开始 -->
    <div class="content">
        <!-- 当标题是微头条的时候 -->
        <div class="content-top" v-show="activeTab === 'toutiao'">
            <!-- 文本输入的开始 -->
            <textarea v-model="ttcontent" class="input" name="" id="" cols="30" rows="10" placeholder="想说什么呢"></textarea>
            <!-- 文本输入的结束 -->
            <!-- 底部的图片上传以及发布评论模块开始 -->
            <div class="bottom">
                <!-- 左边 -->
                <div class="left">
                    <!-- 可以点击的那个按钮 -->
                    <div class="left-title" @click.stop="changeUpload">图片</div>
                    <!-- 点击过后会产生的按钮区域-->
                    <div class="upload-imgs" v-show="showAddImgs">
                        <!--按钮区域开始 -->
                        <div class="upload">
                            <div class="title">+</div>
                            <input type="file" multiple @change="handleImages" accept=".jpg,.png">
                        </div>
                        <!-- 按钮区域结束 -->
                        <!--添加图片的区域开始-->
                        <div class="img-item" v-for="item,index in uploadImgs">
                            <img :src="item" alt="">
                            <div class="delImg" @click.stop="delImg(index)">×</div>
                        </div>
                        <!-- 添加图片区域结束 -->
                    </div>
                </div>
                <!-- 右边 -->
                <div class="right" @click.stop="addTouTiao">发布</div>
            </div>
        <!-- 底部的图片上传以及发布评论模块结束 -->
        </div>
        <!-- 当标题是文章评论 -->
        <div class="content-top1" v-show="activeTab === 'article'">
            <!-- 文本框 -->
            <input type="text" placeholder="请输入内容..." v-model="articlecontent">
            <!--安装vue2-editor -->
            <vue-editor class="richText" v-model="richContent"></vue-editor>
            <!-- 发布的按钮 -->
            <div class="sendbox">
                <div class="sendbtn" @click.stop="addArticle">发布</div>
                </div>
        </div>
    </div>
    <!-- 中间输入的内容区域结束 -->


</div>
</template>




<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
//2.1引入vue2-editor
import {VueEditor} from 'vue2-editor';
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    //2.2引人的vueeditor注入到对象
    VueEditor,
},
data() {
//这里存放数据
return {
    //头条的发布内容变量
    ttcontent:"",
    //头条文章的内容变量
    articlecontent:"",
    //评论头部数据
    title:[
        {id:"toutiao",text:"发微头条"},
        {id:"article",text:"写文章"},
    ],
    //评论选中变量
    activeTab:'toutiao',
    //评论中的添加图片区域是否显现的变量
    showAddImgs:false,
    //上传的图片的集合
    uploadImgs:[],
    //评论文章的中间变量
    richContent:"",
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //发布文章的方法绑定
    addArticle:function(){
        if(!this.articlecontent || !this.richContent){
            this.$message({
                msg:"发表的文章内容不能为空"
            })
        }
        this.$axios.post("/createArticle",{
            content:this.richContent,
            img:"",
            title:this.articlecontent
        }).then(res => {
            this.$message({
                msg:res.msg
            })
        })
    },
    //发布头条的方法绑定
    addTouTiao:function(){
        let content = this.ttcontent
        //如果头条输入为空的话
        if(!content){
            this.$message({
                msg:"微头条输入内容不能为空"
            })
            return;
        }
        this.$axios.post("/createTT",{
            // 参入参数
            content,
            imgs:this.uploadImgs.join(",")
        }).then(res => {
            this.$message({
                msg:res.msg
            })

        })
    },
    //删除上传图片的方法
    delImg(id){
        this.uploadImgs.splice(id,1)
    },

    //改变选项的方法
    activeChange:function(id){
        this.activeTab = id
    },
    //上传图片的方法
    handleImages:function(e){
        //内置的功能,点击后产生e
        console.log(e)
        Array.from(e.target.files).forEach( f => {
            //构造请求的参数
            // {
            //     file:文件的数据
            // }
            //将拿到的文件已参数的形式传递入
            let params = new FormData();
            params.append("file",f)
            
            
            //发请求
            this.$axios.post("/aliossUpload",params).then((res) => {
                this.uploadImgs.push(res.url)
            })
        })
    },
    //点击是否显示图片上传
    changeUpload:function(){
        this.showAddImgs = !this.showAddImgs
    },
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
.comment {
    .title {
        border: 1px solid #ddd;
        display: flex;
        width: 100%;
        .titile-item{
        //   background-color: rgb(224, 160, 64);
        height: 40px;
        width: 80px;
        line-height: 40px;
        text-align: center;
        font-size: 14px;
        margin-right: 20px;
            }
        .active{
            border-bottom: 2px solid var(--themeColor);
            color: var(--themeColor);
        }
    }
    .content {
            .content-top{
                
                .input {
                    width: 100%;
                    border: 1px solid #ddd;
                    // color: #ddd;
                    background-color: #f4f5f6;
                }
                    .bottom {
                        display: flex;
                        justify-content: space-between;
                    .left {

                        .left-title {
                            height: 30px;
                            line-height: 30px;
                            font-size: 16px;
                        }

                        .upload-imgs {
                            display: flex;
                            flex-wrap: wrap;
                            width: 302px;
                            border: 1px dashed #ddd;

                            .upload {
                                position: relative;
                                width: 100px;
                                height: 100px;
                                // background-color: turquoise;
                                //遮挡表单控件的假动作
                                .title {
                                    display:flex;
                                    justify-content: center;
                                    align-items: center;
                                    line-height: 100px;
                                    font-size: 50px;
                                    text-align: center;
                                    font-weight: 200;
                                    // background-color: tomato;
                                }
                                
                                input {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    opacity: 0;
                                }
                            }
                            .img-item {
                                padding: 5px;
                                width: 100px;
                                height: 100px;
                                position: relative;
                                // border: 1px solid red;
                                
                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }

                                    .delImg {
                                        display: none;
                                        position: absolute;
                                        top: 50%;
                                        left: 50%;
                                        transform: translate(-50%,-50%);
                                    }
                                    &:hover{
                                        background-color: #7f7f7f;
                                        opacity: 0.7;
                                        // filter: grayscale(100%);
                                        transition: all 0.5s;
                                        .delImg {
                                            display: block;
                                            color: white;
                                        }
                                    }
                            }
                        }
                    }
                    .right{
                        height: 30px;
                        line-height: 30px;
                        width: 100px;
                        text-align: center;
                        font-size: 16px;
                        background-color: var(--themeColor);
                        // border-radius: 3px;
                        color: white;
                    }
                }
            }
            .content-top1{

                input {
                    padding: 10px;
                    background-color: #ddd;
                    width: 100%;
                    height: 40px;
                    // color: #ddd;
                    border:none;
                }

                .richText {
                    width: 100%;
                }

                .sendbox{
                    margin-top: 3px;
                    width:100%;
                    height: 40px;
                    display: flex;
                    flex-direction: row-reverse;
                    .sendbtn{
                        height: 30px;
                        width: 100px;
                        line-height: 30px;
                        text-align: center;
                        color: white;
                        background-color: var(--themeColor);
                    }
                }
            }
    }
}
</style>