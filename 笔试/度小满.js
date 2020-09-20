function doMap(s) {
    let map1 = new Map();
    for (let v of s) {
        let num = map1.has(v) ? map1.get(v) : 1;
        if (map1.has(v)) {
            map1.set(v, num += 1);
        } else {
            map1.set(v, num);
        }
    }
    return map1;
}

function doSth(s, t) {
    let map1 = new Map(),
        map2 = new Map(),
        res = 0;
    map1 = doMap(s.split(""));
    map2 = doMap(t.split(""));
    for (let k of map2.keys()) {
        let num1 = map1.has(k) ? map1.get(k) : 0;
        let num2 = map2.get(k);
        console.log(k, num1, num2)
        let num = num1 <= num2 ? num1 : num2;
        res += num;
    }
    return res;
}

console.log(doSth("AAB", "ABC"))




let arr = [
    ["A", "B", "A", "B"],
    ["A", "A", "A"]
];

function isRight(arr) {
    let len = arr.length,
        jump = 3;
    for (let i = 0; i < len; i += 2 * jump) {
        if (arr.join("").substr(i, jump - 1) !== arr.join("").substr(i + jump, jump - 1)) {
            return false;
        }
    }
    return true;
}

function doSth(arr) {
    let res = [];
    for (let k of arr) {
        let map = doMap(k);
        if (map.size === 1) {
            res.push("Yes");
        } else {
            if (isRight(k)) {
                res.push("Yes");
                continue;
            }
            res.push("No")
        }
    }
    for (let v of res) {
        console.log(v);
    }
}

doSth(arr);