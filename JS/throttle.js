//  持续触发事件但固定的时间才执行一次该函数
function throttle(func, wait) {
    let timeout = null;
    return function () {
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null;
                func.apply(this);
            }, wait);
        }
    }
}

//  时间戳方式
function throttle(func, wait) {
    let prev = 0;
    return function () {
        let now = Date.now();
        if (now - prev > wait) {
            func.apply(this);
            prev = now;
        }
    }
}

//delay 延迟
//time  在time时间内必须执行一次
function throttle(fun, delay, time) {
    let timeout,
        startTime = new Date();

    return function(...args) {
        let context = this,
            curTime = new Date();

        timeout && clearTimeout(timeout);
        // 如果达到了规定的触发时间间隔，触发 handler
        if (curTime - startTime >= time) {
            fun.apply(context, args);
            startTime = curTime;
            // 没达到触发间隔，重新设定定时器
        } else {
            timeout = setTimeout(fun, delay);
        }
    };
};
