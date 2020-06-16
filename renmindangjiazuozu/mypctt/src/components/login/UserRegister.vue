<!--  -->
<template>
<div class='userlogin'>
    <!-- 左上标识 -->
    <div class="left-title">今日头条</div>
    <!-- 中间的背景图 -->
    <div class="img"></div>
    <!-- 登录的盒子-->
    <div class="login-box">
        <!-- 盒子里面的标题-->
        <div class="login-title">账号注册</div>
        <!-- 账号框 v-model="username"-->
        <input type="text" placeholder="请输入账号" v-model="username">
        <!-- 密码框 v-model="password"-->
        <input type="password" placeholder="请输入密码" size="8" v-model="password">
        <!-- 登录确认框 -->
        <div class="confirm" @click.stop="confirm">确认</div>
        <!-- 下面的协议栏 -->
        <div class="login-content">
            <div class="left">登陆/注册即表示你同意
          <a href="#">用户协议</a>和
          <a href="#">隐私条款</a>
          </div>
            <div class="right" @click.stop="goToLogin"><a href="#">登录</a></div>
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
    // 添加需要的账号值变量
    username:"",
    // 添加需要的密码的变量
    password:""

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    goToLogin:function(){
        this.$router.push({name:"userlogin"})
    },
    //确认并添加账号信息
    confirm:function(){
        let username = this.username
        let password = this.password
        if(!username || !password){
            this.$message({
                msg:"!账号密码不能为空"
            })
            return;
        }
        //不是空的时候发送一个用户信息给后台post请求

        this.$axios.post("/createUser",{
            username,
            password
        }).then((res)=>{
            //这里的res会有一个可以显示在控件上面标状态的信息
            console.log(res)
            this.$message({
                msg:res.msg
            })
            if(res.status === 0){
                //登录成功的状态
                //1,将用户的信息保存到本地存储
                //2,将用户的信息使用vuex存起来方便组件之间的数据共享
                //跳转页面
                // this.$store.commit("updateUserInfo",res.wdata)
                // 跳转回首页
                this.$router.push({"name":"userlogin"})
            }
        })
        
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
    .userlogin {
        position: relative;
        width: 100vw;
        height: 100vh;
        background-image: url('https://s3b.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/login_bg_7584f6a.png');
        // background-size: 100% 100%;
        .left-title{
            position: absolute;
            top: 0px;
            left: 0px;
            font-size: 40px;
            color: red;
        }
        .img{
            position: absolute;
            top: 0;
            left:0;
            width: 80vw;
            height: 100vh;
            background-image: url("https://s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/login/slogan_c6bab2f.png");
            background-repeat: no-repeat;
        }

    .login-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        height: 250px;
        padding: 10px;
        background-color: white;
        z-index: 10;

        .login-title {
            text-align: center;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            border-bottom: 1px solid #ddd;
            
        }
        input {
            border: 1px solid #dddddd;
            width: 100%;
            height: 45px;
            margin: 5px 0;
            padding: 20px;
            font-size: 14px;
        }

        .confirm {
            height: 40px;
            background-color: var(--themeColor);
            border-radius: 5px;
            line-height: 40px;
            text-align: center;
            color: white;
            margin-bottom: 5px;

        }

        .login-content {
            display: flex;
            font-size: 12px;
            color: rgb(196, 196, 196);
            justify-content: space-between;
            .left {
                a {
                    text-decoration: none;
                }
            }

            .right {
                a {
                    text-decoration: none;
                }
            }
        }
    }
}
</style>