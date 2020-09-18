## 原理
> 首先将页面上的图片的 src 属性设为空字符串，而图片的真实路径则设置在 data-src 属性中，当页面滚动的时候需要去监听 scroll 事件，在 scroll 事件的回调中，判断我们的懒加载的图片是否进入可视区域,如果图片在可视区内将图片的 src 属性设置为 data-src 的值，这样就可以实现延迟加载。

## Example
```js
let img = document.getElementsByTagName("img");
let num = img.length;
let n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历

lazyload(); //页面载入完毕加载可是区域内的图片

window.onscroll = lazyload;

function lazyload() { //监听页面滚动事件
    var seeHeight = document.documentElement.clientHeight; //可见区域高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
    for (var i = n; i < num; i++) {
        if (img[i].offsetTop < seeHeight + scrollTop) {
            if (img[i].getAttribute("src") == "default.jpg") {
                img[i].src = img[i].getAttribute("data-src");
            }
            n = i + 1;
        }
    }
}
// 采用了节流函数
// window.addEventListener('scroll',throttle(lazyload,500,1000));
```