<!--  -->
<template>
<div class="showlist">
    <!-- 上面的点击刷新 -->
    <div class="showlist-top">点击刷新</div>
    <!-- 下面的展示列表 -->
    <div class="showList-item">
        <div class="left">
            <!-- 左边大图 -->
            <img src="http://wlanya.oss-cn-shenzhen.aliyuncs.com/2020_06_11/1c872634-9527-7d84-5da2-a72e5911078b.jpg" alt="">
        </div>
        <div class="right">
            <!-- 右边的标题 -->
            <div class="right-title">删除文章</div>
            <!-- 右边的内容 -->
            <div class="right-content">
                <!-- 右边的图像 -->
                <img src="http://sf1-ttcdn-tos.pstatp.com/img/pgc-image/f6cc8e95467f44e3bcdcf9d4ca0a58f6~120x256.image" alt="">
                <!-- 右边的名字 -->
                <div class="right-content-name">无为尔默</div>
                <!-- 右边的时间 -->
            </div>
            <div class="right-content-data">2020-06-12 11:30:51</div>            
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
.showlist {
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