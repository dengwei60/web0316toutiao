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
        <div class="name" v-if="title === 'name'">
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
        <!-- 如果显示的是账号密码 -->
        <div class="password" v-if="title === 'password'">
            <div class="updatapwd">
                <!-- 当前密码部分 -->
                <div class="cutpwd">
                    <div class="text">当前密码</div>
                    <input type="password" v-model="oldpwd">
                </div>
                <!-- 新密码部分 -->
                <div class="newpwd">
                    <div class="text">新密码</div>
                    <input type="password" v-model="newpwd">
                </div>
                <!-- 修改栏 -->
                <div class="changepwd" @click.stop="changepwd">提交修改</div>
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
    //用户信息变量
    nickname:this.$store.state.userInfo.nickname,
    updataimg:this.$store.state.userInfo.avator,
    //用户密码变量
    oldpwd:"",
    newpwd:"",
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
    //修改密码并上传密码
    changepwd:function(e){
        // 获取不到密码
        // console.log(e)
        if(!this.oldpwd || !this.newpwd){
            this.$message({
                msg:"请输入正确的密码"
            })
            return
        }
        // this.$router.push({path:"/userData"})
        //发送密码请求
        this.$axios.post("/updatePassword",{
            currentPassword:this.oldpwd,
            updatePassword:this.newpwd
        })
        .then(res => {
            console.log(res)
            //不正确继续改
            if(res.msg === '当前密码不对'){
                this.$message({
                    msg:res.msg
                })
                return;
            }else{
                //正确就跳转到渲染得主页
                this.$message({
                    msg:res.msg
                })
                setTimeout(() => {   
                    this.$router.push({path:"/"})
                }, 3000);
            }
        })
        .catch(err => {
            console.error(err); 
        })

    },
    //用户名确认修改上传
    updatauser:function(){
        if(!this.nickname){
            this.$message({
                msg:"请输入正确用户名"
            })
            return;
        }
        //发送参数到后台请求修改参数
        this.$axios.post("/updateUserInfo",{
            nickname:this.nickname,
            avator:this.updataimg
        })
        .then(res => {
            console.log(res)
            this.$message({
                msg:res.msg
            })
            //传参拿到结果后渲染并覆盖存储到本地缓存的数据中
             let userInfo = this.$store.state.userInfo
             userInfo.nickname = this.nickname
             userInfo.avator = this.updataimg
             //将数据传入vuex
             console.log(userInfo)
             this.$store.commit("updateUserInfo",userInfo)
        })
        .catch(err => {
            console.error(err); 
        })
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
  .password {
  .updatapwd {
      padding: 20px;
    .cutpwd {
        display: flex;
        margin-bottom: 5px;
      .text {
          flex: 1;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 20px;
          font-weight: 300;
          color: #46a0fc;

      }

      input {
          flex: 9;
          height: 30px;
          width: 100%;
          border: 1px solid #dddddd;
      }
    }

    .newpwd {
         display: flex;
        margin-bottom: 5px;
      .text {
          flex: 1;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 20px;
          font-weight: 300;
          color: #46a0fc;
      }

      input {
          flex: 9;
          height: 30px;
          width: 100%;
          border: 1px solid #dddddd;
      }
    }

    .changepwd {
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