function count(str) {
    let len = str.length,
        map = new Map(),
        arr = [];
    if (len === 0) {
        return -1;
    }
    for (let i = 0; i < len; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], i);
        }
    }
    if (map.size === len) {
        return -1;
    }

    for (let j = 0; j < map.size; j++) {
        for (let i = 0; i < len; i++) {
            if (map.has(str[i])) {
                if (map.get(str[i]) === i) {
                    continue;
                }
                arr.push(i - map.get(str[i]) - 1);
            }
        }
    }
    return Math.min(...arr)
}

console.log(count("我是对我是中国中国人"));



function rotate(str) {
    let arr = str.split(":");
    let h = parseInt(arr[0]),
        m = parseInt(arr[1]);
    // if (hour >= 12) {
    //     hour -= 12;
    // }
    // if (hour > 6) {
    //     hour -= 6;
    // }
    // let a = hour * 30;
    // if (minute > 30) {
    //     minute -= 30;
    // }
    // let b = minute * 6;
    // let res = 0;
    // if
    // res = a - b;
    // return res;


    if (h < 24 && m < 60) {
        let num1 = h % 12 * 30 + m * 0.5;
        let num2 = m * 6;
        //夹角
        return Math.abs(num1 - num2);
    }
}

console.log(rotate("15:10"));