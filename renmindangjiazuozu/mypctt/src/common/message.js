
// 需要构造一个消息的控件,来显示是否成功获取的账号密码等消息
// 这个方法包含着两个参数,传入的信息和显示这个模块的时间长度
//通过解构赋值将参数建立成一个对象

function Message(options={msg:""}) {
    //测试并打印这个方法是否被添加
    console.log("我是提示的消息控件")
    //设定并提取options里面的参数
    let msg = options.msg
    //假设里面的显示总时间的变量是3s
    let duration = options.duration || 3000
    //在body里面创建一个
    let newLi = document.createElement("div")
    newLi.innerHTML = msg
    //需要给这个提示框添加一个样式
    newLi.classList.add("tt-message")
    document.body.appendChild(newLi)
    setTimeout(() => {
        document.body.removeChild(newLi)
    }, duration);
    
}
//将消息的控件导出
export { Message }