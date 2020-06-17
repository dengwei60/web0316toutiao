<!--  -->
<template>
<!-- 登录有账号的情况 -->
<div class='login' v-if="!userInfo.oauth_token" >
    <p class="text">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
    <div class="btn" @click="gotoUserLogin">登录</div>
    <div class="img">
        <div class="qq">
        <img src="./img/qq.png" alt="">
        <p>QQ</p>
        </div>
        <div class="wx">
        <img src="./img/wx.png" alt="">
        <p>微信</p>
        </div>
    </div>
</div>
<!-- 登录有账号的情况-->
<div v-else class="tt-index-login">
      <div class="logout" @click="logout">退出登陆</div>
      <div class="imagerWrapper" @click.stop="goToUserCenter">
        <img :src="userInfo.avator" alt />
      </div>
      <div class="nickname">{{userInfo.nickname}}</div>
      <div class="bottom">
        <div class="left">
          <div class="count">{{userInfo.tt_count}}</div>
          <div class="text">头条数</div>
        </div>
        <div class="right">
          <div class="count">{{userInfo.article_count}}</div>
          <div class="text">文章数</div>
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

};
},
//监听属性 类似于data概念
computed: {
//计算属性算出userInfo
userInfo:function(){
    return this.$store.state.userInfo
}
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //用户中心路由
    goToUserCenter:function(){
      this.$router.push({name:"userCenter"})
    },
    //用户登录路由
    gotoUserLogin:function(){
        this.$router.push({name:"userlogin"})
    },
    // 登出的时候将传入的登录数据清空
    logout:function(){
        // 传入一个空的账号登录数据
        this.$axios.post("/logout")
        .then(res => {
            console.log(res)
            this.$store.commit("updateUserInfo",{})
        })
        .catch(err => {
            console.error(err); 
        })
    }
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
.login {
    margin-top: 10px;
    width: 350px;
    display: flex;
    padding: 50px;
    border: 1px solid #ddd;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    // background-color: violet;
  .text {
      text-align: center;
      font-size: 12px;
      font-weight: 200;
      color: #777777;
  }

  .btn {
      width: 250px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      background-color: var(--themeColor);
      margin-top: 10px;
      border-radius: 5px;
      color: white;
  }

  .img {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .qq{
          text-align: center;
          img {
              margin: 20px;
              width: 30px;
              height: 30px;
              border-radius: 50%;
          }
      }
      .wx{
          text-align: center;
          img {
              margin: 20px;
              width: 30px;
              height: 30px;
              border-radius: 50%;
          }
      }
  }
}
.tt-index-login {
  width: 350px;
  border: 1px solid #ddd;
  margin-top: 10px;
  padding: 5px;
  .logout {
    text-align: right;
    font-size: 14px;
    color: #dbdbdb;
  }

  .imagerWrapper {
    text-align: center;
    margin-bottom: 20px;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
    }
  }

  .nickname {
    text-align: center;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    .left {
      .count {
        text-align: center;
      }

      .text {
        text-align: center;
        font-size: 16px;
      }
    }

    .right {
      .count {
        text-align: center;
      }

      .text {
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
</style>