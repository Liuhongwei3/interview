function doSth(arr) {
    if (arr.length === 0) {
        return;
    }
    arr = arr.map(item => item.map(mini => parseInt(mini)));
    let res = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let x = arr[i][1] - arr[i + 1][1];
        let y = arr[i][2] - arr[i + 1][2];
        let z = arr[i][3] - arr[i + 1][3];
        let s = Math.scqrt(x * x, y * y, z * z);
        let t = arr[i + 1][0] - arr[i][0];
        res.push(Math.floor(s / t));
    }
    let max = Math.max(...res);
    console.log(res)
    return res.findIndex(item => item === max) + 1;
}

let arr = [
    ["2", -9, 2, 3],
    [4, "9", 9, 8],
    [9, 2, 3, 4],
    [13, 4, 5, 6]
];
console.log(doSth(arr))




let arr = [{
    n: 5,
    m: 5,
    x: 2,
    y: 2,
    a: 0,
    b: 20,
    c: 0,
    d: 0,
    maps: [
        ["o", "o", "o", "o", "o"],
        ["o", "x", "x", "x", "o"],
        ["o", "x", "o", "x", "o"],
        ["o", "x", "o", "x", "o"],
        ["o", "o", "o", "o", "o"]
    ]
}]

function pass(maps, x, y) {
    let first = [maps[x - 1][y], maps[x + 1][y], maps[x][y - 1], maps[x][y + 1]];
    let temp = [];
    for (let k = 0; k < 4; k++) {
        if (first[k] === "o") {
            temp.push(k);
            break;
        }
    }
    return temp.length === 0 ? -1 : temp;
}

function doSth(arr) {
    debugger
    let len = arr.length;
    let res = [];
    for (let i = 0; i < len; i++) {
        let { x, y, a, b, c, d, maps } = arr[i];
        let number = [a, b, c, d];
        while (x > 0 || y > 0) {
            if (x >= 1 && y >= 1) {
                let min = -1;
                let right = pass(maps, x, y);
                let direction = 0;
                if (Array.isArray(right)) {
                    min = Infinity;
                    for (let index of right) {
                        min = Math.min(min, number[index]);
                        direction = index;
                    }
                }
                res.push(min);
                if (direction === 0) {
                    x--;
                } else if (direction === 1) {
                    x++;
                } else if (direction === 2) {
                    y--;
                } else if (direction === 3) {
                    y++;
                }
                continue;
            } else {
                res.push(0);
                break;
            }
        }
    }
    for (let z = 0; z < res.length; z++) {
        if (res[z] !== -1) {
            console.log(res[z])
        }
    }
    for (let j = 0; j < res.length; j++) {
        console.log(`Case #${j}: ${res[j]}`);
    }
}

doSth(arr);