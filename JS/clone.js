//  浅拷贝 --- obj-copy 互相影响
//  Object.assign()
//  loadsh --- _.clone()
//  {...} [...]
//  Array.prototype.concat()/slice()
//  shallowCopy()
function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}


function checkType(target) {
    // "[object Number]"
    // return Object.prototype,toString.call(target).slice(8,-1);
    return Reflect.toString.call(target).slice(8, -1);
}

//  深拷贝 --- obj-copy 不互相影响
//  JSON.parse(JSON.stringify()) --- 不能处理函数和正则
//  loadsh --- _.cloneDeep()
//  deepClone(0)
function deepClone(target) {
    debugger
    let result, type = checkType(target);

    if (type === "Object") {
        result = {};
    } else if (type === "Array") {
        result = [];
    } else if (type === "RegExp") {
        return new RegExp(target);
    } else if (type === "Date") {
        return new Date(target);
    } else {
        return target;
    }

    for (let key in target) {
        if (target.hasOwnProperty(key)) {
            let element = target[key];
            if (checkType(element) === "Object" || checkType(element) === "Array") {
                result[key] = deepClone(element);
            } else {
                result[key] = element;
            }
        }
    }
    return result;
}

let obj = {
    first: {
        second: 3
    }
}

console.log(obj);
let copy = deepClone(obj);
console.log(copy);
copy.first.second = [6, 6, 6];
console.log(obj);
console.log(copy);