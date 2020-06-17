<!--  -->
<template>
<div class='userdata'>
    <!-- 顶部的导航 -->
    <div class="title">
        <div :class="['title-item',{active:item.id === title }]"
        v-for="item,index in navs" :key="item.id"
        @click.stop="changetitle(item.id)"
         >{{item.text}}</div>
    </div>
    <!-- 下面的内容展示 -->
    <div class="content">
        <!-- 如果是账户名则显示下面内容 -->
        <div class="name">
            <div class="updatauser">
                <!-- 顶部内容 -->
                <div class="top">
                    <div class="text">名称</div>
                    <!-- 修改用户名的框 -->
                    <input type="text" v-model="nickname">
                </div>
                <!-- 上传头像 -->
                <div class="middle">
                    <div class="text">头像</div>
                    <div class="img">
                    <img :src="updataimg" alt="">
                    <input type="file" @change.stop="changeimg">
                    </div>
                </div>
                <!-- 底部确认修改 -->
                <div class="bottom" @click.stop="updatauser">更新资料</div>
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
components: {},
data() {
//这里存放数据
return {
    nickname:this.$store.state.userInfo.nickname,
    updataimg:this.$store.state.userInfo.avator,
//标题初始化名
title:"name",
//标题的切换项变量
navs:[{
    id:"name",
    text:"账号信息"
},{
    id:"password",
    text:"密码管理"
}
],

};
},
//监听属性 类似于data概念
computed: {
    //在本地缓存中拿到用户名赋值给用户名文本框
    userInfo:function(){
        return this.$store.state.userInfo
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //用户名确认修改上传
    updatauser:function(){
        if(!this.nickname){
            this.$message({
                msg:"请输入正确用户名"
            })
            return
        }

    },
    //标题切换的方法
    changetitle(id){
        this.title = id
    },
    //修改头像方法
    changeimg:function(e){
        Array.from(e.target.files).forEach( f => {
            //构造一个表单参数来存储图像的参数
            let params = new FormData()
            params.append("file" , f)
            //构造好过后发请求
            this.$axios.post("/aliossUpload",params)
            .then(res => {
                // console.log(res)
                this.updataimg = res.url
            })
            .catch(err => {
                console.error(err); 
            })

        })
    }

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
    //挂载完成请求到数据

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
.userdata {
  .title {
      display: flex;
      border-bottom: 1px solid #dddddd;
    .title-item {
        width: 100px;
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .active{
        border-bottom: 2px solid var(--themeColor);
        color:#46a0fc;
    }
  }
  .content {
 

  .name {
    .updatauser {
      

      .top {
          padding: 5px;
          display: flex;

        .text {
            flex: 1;
            width: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 600;
            


        }


        input {
            flex: 9;
            width: 100%;
            height: 30px;
            border: 1px solid #dddddd;
        }
      }

      .middle {
          display: flex;
          padding: 5px;
        .text {
            flex: 1;
            width: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 600;
        }

        .img {
            position: relative;
            flex: 9;
            // border: 1px dashed #dddddd;

            img {
                height: 120px;
                width: 120px;
                border-radius: 15px;
                // background-color: red;
                border: 1px dashed rgb(0, 247, 255);
            }

            input {
                position: absolute;
                top: 0;
                left: 0;
                width: 120px;
                height: 120px;
                opacity: 0;

            }
        }
      }

      .bottom {
        height: 40px;
        line-height: 40px;
        text-align: center;
        width: 100px;
        background-color: #46a0fc;
        color: white;
        font-size: 16px;
        margin-left: 110px;
        border-radius: 5px;   
      }
    }
  }
}
}
</style>