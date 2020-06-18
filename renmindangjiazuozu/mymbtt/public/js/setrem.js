(function(){
    //立即执行函数
    //在每次进入页面的时候
    function resize(){
        //拿到ui设计给的宽度
        let uiWidth = 750
        //那都ui给的字体大小
        let uiFontSize = 20
        //计算根元素 html 的字体大小

        //首先获取设备的宽度
        let clientWidth = document.documentElement.clientWidth
        //我们要明确的就是ui给的宽度和字体的比值,和我们每次屏幕刷新屏幕和根元素
        //的比值是一样的
        // html 的字体大小为htmlfontsize
        //所以htmlfontsize/clientwidth = uifontsize / uiwidth
        //所以
        let htmlFontSize = uiFontSize * clientWidth / uiWidth
        //这时候我们就根元素的fontsize计算出来了
        //然后将他赋值给根标签的字体

        document.documentElement.style.fontSize = htmlFontSize + "px"
        //可以测试打印
        console.log(htmlFontSize)
    }
    //屏幕口监听事件
    window.addEventListener("resize",resize)
    //横屏事件
    window.addEventListener("orientationchange",resize)
    resize();
})()