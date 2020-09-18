function html(total) {
    if (total <= 1) return '';
    if (total <= 5) {
        let res = '<ul class="pagination">';
        for (let i = 0; i < total; i++) {
            res += `<li>${i+1}</li>`
        }
        res += "</ul>"
        return res;
    }
    //TODO: 生成组件的内部html字符串
    return '';
}
console.log(html(4));

let root = document.getElementById("root")
root.innerHTML = html(4)

function choice(n, m, request, rest) {
    let res = [];
    for (let i = 0; i < n; i++) {
        let temp = [];
        let index = -1;
        for (let j = 0; j < rest.length; j++) {
            if (rest[j] < request[i]) {
                continue;
            } else {
                temp.push(rest[j])
            }
        }
        temp.sort();
        if (temp.length !== 0) {
            index = rest.findIndex(item => item === temp[0]) + 1
        }
        rest.splice(index - 1, 1);
        console.log(rest);
        res.push(index);
    }
    console.log(res.join(" "));
}

// choice(3, 6, [33, 66, 99], [3, 6, 9, 30, 60, 90])


function doSth(arr) {
    if (arr.length === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        let n = temp[0][0];
        let m = temp[0][1];
        let request = temp[1];
        let rest = temp[2];
        choice(n, m, request, rest)
    }
}

doSth([
    [
        [3, 6],
        [33, 66, 99],
        [3, 6, 9, 30, 60, 90]
    ],
    [
        [3, 6],
        [26, 66, 99],
        [3, 6, 9, 30, 60, 90]
    ],
])

// 会输出
Promise.all([]).then(() => console.log("object"));.
// 不会输出 
Promise.race([]).then(() => console.log("object"), () => console.log("object2"));


#test {
    height: 200px;
    /* max-height 比 height 小时，max-height 覆盖 height */
    max-height: 160px;
    /* max-height 比 min-height 小时，max-height 覆盖 min-height */
    /* max-height: 120px; */
    min-height: 150px;
    border: 1px solid red;
}