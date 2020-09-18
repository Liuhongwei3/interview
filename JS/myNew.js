/*
	创建一个新的对象;
	将构造函数的作用域赋给新的对象;
	执行构造函数中的代码;
	返回新的对象;
*/

function myNew(constructor, ...args) {
    if (typeof constructor !== 'function') {
        return constructor;
    }
    //创建新的对象,关联构造函数的原型对象
    // let obj = {};
    // obj.__proto__ = constructor.prototype;
    const _constructor = Object.create(constructor.prototype);
    //执行构造函数
    const obj = constructor.apply(_constructor, args);
    //如果构造函数执行结果是对象则返回执行结果
    return typeof obj === 'object' ? obj : _constructor;
}

function Fun(name, sex) {
    this.name = name
    this.sex = sex
}
Fun.prototype.getUserInfo = function() {
    return `我的姓名${this.name},我的性别${this.sex}`
}

const fun = myNew(Fun, 'Tadm', '男')
console.log(fun.getUserInfo())