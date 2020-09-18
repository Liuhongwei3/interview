function maxCandies(candies, coin, n) {
    // write code here
    let res = [],
        len = coin.length,
        pad = [],
        compose = [];
    if (len <= n) {
        return candies.slice(0, len).reduce((accum, curr) => accum + curr, 0);
    }
    for (let i = 0; i < n; i++) {
        pad[i] = 0;
    }
    for (let i = 0; i <= len - n; i++) {
        let temp = Array.from(coin);
        temp.splice(i, n, ...pad);
        compose.push(temp);
    }
    console.log(compose)
    for (let arr of compose) {
        let m = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === 0) {
                m += candies[j];
            }
        }
        res.push(m);
    }
    return Math.max(...res);
}

console.log(maxCandies([3, 5, 7, 2, 8, 8, 15, 3], [1, 1, 1, 0, 1, 1, 1], 3))



function getMaxArea(x1, y1, x2, y2, x3, y3, x4, y4) {
    // write code here
    // 对角线上
    let x = 0,
        y = 0,
        res = [];
    if (x1 === y1 && x2 === y2 && x3 === y3 && x4 === y4) {
        //  中间
        x = x3 - x2, y = 10;
        res.push(x * y);
        x = 10 - x2, y = y3;
        res.push(x * y);
    }
    x = x3 - x2, y = 10;
    res.push(x * y);
    x = 10 - x2, y = 10 - y3;
    res.push(x * y);
    x = 10, y = y1;
    res.push(x * y);
    x = 10, y = y3 - y2;
    res.push(x * y);
    return Math.max(...res)
}

console.log(getMaxArea(0, 0, 1, 1, 9, 9, 10, 10))