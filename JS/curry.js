//	参数不够时递归，否则执行返回结果
let curry = (fn, ...args) =>
    fn.length > args.length ?
    (...arguments) => curry(fn, ...args, ...arguments) :
    fn(...args)