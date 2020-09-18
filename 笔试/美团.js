function check(arr) {
    debugger
    let res = [],
        flag = "",
        firstCheck = new RegExp(/^[a-zA-Z]{1}/),
        allCheck = new RegExp(/^[a-zA-Z0-9]+$/g),
        charCheck = new RegExp(/\w+/g),
        numCheck = new RegExp(/\d+/g);
    for (let name of arr) {
        flag = "Accept";
        if (!firstCheck.test(name.substr(0, 1)) || !allCheck.test(name)) {
            flag = "Wrong";
        }
        if (!charCheck.test(name) || !numCheck.test(name)) {
            flag = "Wrong";
        }
        res.push(flag);
    }
    for (let right of res) {
        console.log(right);
    }
}

console.log(check(["Ooook", "Hhhh666", "ABCD", "Meituan", "6666"]));

let weight = [3, 2, 4, 4, 5]
let op = [4, 3, 5, 2, 1]
let res = []
let size = weight.length

let sum = arr => {
    return arr.reduce((accum, cuur) => accum + cuur, 0)
}

function getMaxWeight(weight) {
    // debugger
    for (let k of op) {
        k--
        let len = weight.length
        let arr1 = []
        let arr2 = []
        if (k !== len - 1 && k !== size - 1) {
            arr1 = weight.slice(0, k)
            arr2 = weight.slice(k + 1, len)
        } else {
            arr1 = weight.slice(0, len - 1)
        }

        let v = Math.max(sum(arr1), sum(arr2) || 0);
        res.push(v)
        if (k === size - 1) {
            weight.splice(len - 1, 1)
        } else {
            weight.splice(k, 1)
        }

    }
}
getMaxWeight(weight)
console.log(res);