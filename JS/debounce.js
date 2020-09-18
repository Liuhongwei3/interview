//  固定时间内再次触发事件则重新计算该固定时间，使得事件在固定时间后才执行
//  延迟执行
function debounce(func, wait) {
    let timer
    return function(...args) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, ...args)
        }, delay)
    }
}

//  开始时先立即执行
function debounce(func, wait) {
    let timeout;
    return function() {
        if (timeout) {
            clearTimeout(timeout);
        }
        let callNow = !timeout;
        tiemout = setTimeout(() => {
            timeout = null;
        }, wait);
        if (callNow) {
            func.apply(this);
        }
    }

    // var timerId = null;
    // var flag = true;
    // return function() {
    //     clearTimeout(timerId);
    //     if (flag) {
    //         fn.apply(this, arguments);
    //         flag = false
    //     }
    //     timerId = setTimeout(() => { flag = true }, wait)
    // }
}


function debounce(method, wait, immediate) {
    let timeout
    return function(...args) {
        let context = this
        if (timeout) {
            clearTimeout(timeout)
        }
        // 立即执行需要两个条件，一是immediate为true，二是timeout未被赋值或被置为null
        if (immediate) {
            // 如果定时器不存在，则立即执行，并设置一个定时器，wait毫秒后将定时器置为null
            // 这样确保立即执行后wait毫秒内不会被再次触发
            let callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) {
                method.apply(context, args)
            }
        } else {
            // 如果immediate为false，则函数wait毫秒后执行
            timeout = setTimeout(() => {
                // args是一个类数组对象，所以使用fn.apply
                // 也可写作method.call(context, ...args)
                method.apply(context, args)
            }, wait)
        }
    }
}

let a = () => console.log(1);
debounce(a, 2000, true)


function debounce(method, wait, immediate = false) {
    let timeout, result
    let debounced = function(...args) {
        // 返回一个Promise，以便可以使用then或者Async/Await语法拿到原函数返回值
        return new Promise(resolve => {
            let context = this
            if (timeout) {
                clearTimeout(timeout)
            }
            if (immediate) {
                let callNow = !timeout
                timeout = setTimeout(() => {
                    timeout = null
                }, wait)
                if (callNow) {
                    result = method.apply(context, args)
                    // 将原函数的返回值传给resolve
                    resolve(result)
                }
            } else {
                timeout = setTimeout(() => {
                    result = method.apply(context, args)
                    // 将原函数的返回值传给resolve
                    resolve(result)
                }, wait)
            }
        })
    }

    debounced.cancel = function() {
        clearTimeout(timeout)
        timeout = null
    }

    return debounced
}