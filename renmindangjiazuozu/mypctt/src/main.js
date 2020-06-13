import Vue from 'vue'
import App from './App.vue'
//引入路由与配置
import router from './router/index'
//引入axios的库
import axios from './common/common'
//因为axios是通用方法所以需要将他挂载到vue的原型上面
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  //将配置好的路由添加到里面
  router,
  render: h => h(App),
}).$mount('#app')
