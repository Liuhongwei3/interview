Array.prototype.myReduce = function (cb, initValue) {
    if (!Array.isArray(this)) {
        throw new TypeError("not array.")
    }else if(this.length === 0){
        throw new TypeError("should not null array.")
    }
    let arr = this;
    var num = initValue == undefined ? num = arr[0] : initValue;
    var i = initValue == undefined ? 1 : 0
    for (i; i < arr.length; i++) {
        num = cb(num, arr[i], i)
    }
    return num
}

let a = [1, 2, 3]
let result = a.myReduce((accumulator, current) => accumulator + current, 0)
console.log(result);