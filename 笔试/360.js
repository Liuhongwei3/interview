function check(arr) {
    let reg = new RegExp(/^[a-zA-Z]+$/);
    let res = 0;
    for (let item of arr) {
        if (item.length <= 10 && reg.test(item)) {
            res++;
        }
    }
    return res;
}

console.log(check(["BA", "aOWVXARgUbJDG", "OPPCSKNS", "HFDJEEDA", "ABBABBBBAABBBAABAAA"]));
console.log(check(["E_DB2C", "D333C", "HFDJEEDA"]));


function doOp(arr, op) {
    let len = arr.length;
    for (let o of op) {
        if (o === 1) {
            arr.push(arr.shift());
        } else if (o === 2) {
            for (let j = 1; j < len; j += 2) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
            }
        }
    }
    // return arr;
    for (let k of arr) {
        console.log(k + " ");
    }
}

console.log(doOp([1, 2, 3, 4], [1, 2, 1]));



/*
	重考场
*/


let res = [];

function formatStr(str) {
    if (str.length === 0) {
        return res.push("");
    }
    let temp = str;
    str = str.split("n");
    if (str.length === temp.length + 1) {
        return res.push("N" + temp.substr(1));
    }
    let item = "";

    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
            if (str[i].length === 0) {
                continue;
            }
            item = str[i][0].toUpperCase() + str[i].substr(1);
        } else if (i === str.length - 1) {
            item = "N" + str[i];
        } else {
            item = "N" + str[i] + "n";
        }
        res.push(item);
    }
}

formatStr("helloccngh");
res.map(item => {
    console.log(item);
})

let m = 2,
    n = 3,
    arr = [
        [5, 6, 7],
        [7, 8, 9]
    ];

function doMax() {
    let res = [];
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            res.push(parseInt(arr[i][j]) + parseInt(arr[i + 1][n - 2 - j]))
        }
    }
    print(Math.max(...res));
}

doMax()