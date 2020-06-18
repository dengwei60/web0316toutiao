import Vue from 'vue'
import App from './App.vue'
//在这里引入配置好的路由属性
import router from './router/index'
//引入axios
import axios from 'axios'
//引入自适应的根标签的尺寸
import setRem from './utils/setRem'
setRem()
//在原型上创建一个方法axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  //添加路由属性
  router,
  render: h => h(App),
}).$mount('#app')
