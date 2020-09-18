// function doSth(arr) {
//     // debugger
//     if (arr.length === 0 || arr[0] === 0) {
//         return Infinity;
//     }
//     let len = arr.length,
//         res = [],
//         num = 0,
//         index = 0;
//     // for (let j = 0; j < len; j++) {
//     //     let v = arr[j],
//     //         res1 = [];
//     //     while (v >= 1) {
//     for (let i = 0; i < len; i++) {
//         if (index === len - 1) {
//             res.push(num);
//             index = 0;
//             num = 0;
//             break;
//         }
//         // if (i === index) {
//         //     index += v;
//         // } else {
//         index += arr[index];
//         // }
//         num++;
//         //     }
//         //     v--;
//     }
//     // res.push(Math.min(...res1))
//     return Math.min(...res)
// }
// // return res;
// // }

// function jump(value, arr) {
//     while (v >= 1) {
//         for (let i = 0; i < arr.length; i++) {
//             if (index === len - 1) {
//                 res1.push(num);
//                 index = 0;
//                 num = 0;
//                 break;
//             }
//             if (i === index) {
//                 index += v;
//             } else {
//                 index += arr[index];
//             }
//             num++;
//         }
//         v--;
//     }
// }

//	跳跃游戏
let jump = function(nums) {
    let steps = 0
    let end = 0
    let maxPos = 0
    //  最后一个元素不需要访问，因为在访问最后一个之前，边界已经大于等于最后一个位置了
    for (var i = 0; i < nums.length - 1; ++i) {
        //  找能跳的最远的，i + nums[i] 为 i 位置跳到下一个最大位置的索引
        maxPos = Math.max(maxPos, nums[i] + i)；

        if (i === end) {
            //  遇到边界，就更新边界，并且步数加一
            end = maxPos;
            ++steps;
        }
    }
    return steps
};

let arr = [2, 3, 1, 1, 4, 2, 1];
console.log(jump(arr));


function doSth(a, b) {
    let reg = new RegExp(/\.{1}/),
        len = 0,
        res = a * b;
    if (reg.test(a)) {
        a += '';
        len = a.split(".")[1].length;
        // a *= Math.pow(10, len);
    }
    if (reg.test(b)) {
        b += '';
        let len2 = b.split(".")[1].length;
        len += len2;
        // b *= Math.pow(10, len2);
    }
    if (reg.test(res)) {
        let first = res.toString().split(".")[0];
        let rest = res.toString().split(".")[1].toString().substr(0, len + 1);
        let end = parseInt(rest.substring(rest.length - 2));
        if (end >= 50) {
            end += 10;
            end = Math.floor(end / 10);
        }
        res = rest.substring(0, rest.length - 2) + end;
        res = first + "." + res;
    }

    // let temp = (a * b).toString().split("");
    // temp.splice(temp.length - len, 0, ".");
    // res = temp.join("");

    return Number(res);
}

console.log(doSth(3.0004, 2.002))