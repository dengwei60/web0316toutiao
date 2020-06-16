//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//vue使用vuex
Vue.use(Vuex)
//配置vuex的参数
const state = {
    //通过本地缓存来拿到用户数据
    userInfo:JSON.parse(localStorage.getItem("userInfo")) || {}
}
const mutations = {
    //这个方法来在本地缓存里面存储用户的数据
    //建立一个方法来存储到当时的登录用户数据
    updateUserInfo:function(state,userInfo){
        localStorage.setItem("userInfo",JSON.stringify(userInfo))
        state.userInfo = userInfo
    }
    
}

//导出这个vuex
export default new Vuex.Store({
    // 里面的是vuex的配置
    state,mutations
})