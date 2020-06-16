import axios from "axios"
//基础的源
axios.defaults.baseURL = "http://tt.linweiqin.com/api/tt/"
axios.interceptors.request.use(config => {
    // Do something before request is sent
    console.log(1)
    console.log(config)
    //如果为空的时候那么请求的时候传入的config就是一个空对象
    //那么就需要一个防御性的拦截代码
    let data = config.data || {}
    //1,发送请求之前我们需要拿到本地缓存
    let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {}
    // 2在本地缓存中包含有token的数据我们将他提取出来
    let oauth_token = userInfo["oauth_token"] || ""
    //如果token不为空,那么就将token传入到请求的配置里面
    if (oauth_token) {
        data["oauth_token"] = oauth_token
    }
    //再次赋值给config的data
    config.data = data
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    // Do something before response is sent
    console.log(response)
    return response.data;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});
//拦截修改后导出这个axios
export default axios;