import Vue from 'vue'
import App from './App.vue'
//引入路由与配置
import router from './router/index'
//引入axios的库
import axios from './common/common'
//引入消息的控件 
import {Message} from './common/message'
//将vuex引入到vue的配置里面
import store from './vuex/store'
//因为axios是通用方法所以需要将他挂载到vue的原型上面
Vue.prototype.$axios = axios
//将消息的组件添加到vue的原型上面
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  //将配置好的路由添加到里面
  router,
  //导入配置好的vuex
  store,
  //将vuex配置到vue上面
  render: h => h(App),
}).$mount('#app')
