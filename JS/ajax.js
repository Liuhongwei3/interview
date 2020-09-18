//	创建对象
var request = new XMLHttpRequest();
//	初始化
//	Ajax 只能 Get,第三个是否开启异步
request.open('GET', url, true);
//	监听处理
request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
    }
};
//	发送请求
request.send();