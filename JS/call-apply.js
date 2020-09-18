//	实现apply只要把下一行中的 ...args(剩余参数) 换成 args 即可 
Function.prototype.myCall = function(context, ...args) {
    let func = this;
    if (typeof func !== "function") {
        throw new TypeError("This is not function")
    }
    context = context == null ? window : context;
    let fn = Symbol("fn");
    context[fn] = func;

    let res = context[fn](...args); //利用this指向，相当于context.caller(...args)

    delete context[fn];
    return res;
}

let a = function(a) {
    console.log(1, a);
}
a.myCall(null, 2);