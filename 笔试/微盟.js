function compose(nums) {
    let len = nums.length,
        res = [];

    dfs([]);

    function dfs(path = []) {
        //  如果已经到了最下面一层则 push 
        if (path.length === len) {
            res.push([...path]);
            return;
        }
        for (let = 0; i < len; i++) {
            //  当前元素已经在路径则跳出继续下一次循环
            if (path.includes(nums[i])) {
                continue;
            }
            //  继续 push
            path.push(nums[i]);
            //  递归
            dfs(path);
            //  回溯
            path.pop();
        }
        return res;
    }
}


function addIt(str) {
    // write code here
    let len = str.length;
    if (len === 0) {
        return;
    } else if (len % 2 === 0) {
        return str;
    } else {
        let index = Math.floor(len / 2);
        str = str.split("");
        str.splice(index, 0, "+");
        return str.join("");
    }
}

console.log(addIt("微盟微生态"))

function doMap(first) {
    let map1 = new Map();
    for (let i = 0; i < first.length; i++) {
        if (map1.has(first[i])) {
            let num = map1.get(first[i]) + 1;
            map1.set(first[i], num);
            continue;
        }
        map1.set(first[i], 1);
    }
    return map1;
}

function isEctopic(first, second) {
    // write code here
    let len1 = first.length,
        len2 = second.length;
    if (len1 !== len2 || len1 === 0 || len2 === 0) {
        return false;
    }
    let map1 = doMap(first),
        map2 = doMap(second);
    if (map1.size !== map2.size) {
        return false;
    }
    for (let k of map1.keys()) {
        if (map2.has(k) && map2.get(k) !== map1.get(k)) {
            return false;
        }
    }
    return true;
}

console.log(isEctopic("abcbdcc", "ccbbdac"))
console.log(isEctopic("", ""))