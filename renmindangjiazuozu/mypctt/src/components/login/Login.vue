<!--  -->
<template>
<div class='login'>
    <p class="text">登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</p>
    <div class="btn">登录</div>
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
</style>