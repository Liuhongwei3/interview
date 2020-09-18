// let x = parseInt(read_line());
// let arr = [];

// for (let i = 0; i < x; i++) {
//     let line = read_line().split(" ");
//     let n = line[0];
//     let m = line[1];
//     let k = line[2];
//     let temp = [];
//     for (let j = 0; j < n; j++) {
//         temp.push(read_line().split(" "));
//     }
//     arr.push([n, m, k, temp]);
// }


let arr = [
    [3, 3, 400, [
        [1, 2, 200],
        [1, 3, 300],
        [2, 3, 500]
    ]],
    [3, 3, 400, [
        [1, 2, 500],
        [1, 3, 600],
        [2, 3, 700]
    ]]
]

function doSth(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i][0],
            m = arr[i][1],
            k = arr[i][2];
        let temp = arr[i][3],
            min = temp[0][2],
            temp2 = [];
        for (let v of temp) {
            min = Math.min(min, v[2]);
            if (v[2] < k) {
                temp2.push(temp);
            }
        }
        res.push(temp2.length >= n - 1 ? "Yes" : "No");
    }
    for (let v of res) {
        console.log(v);
    }
}

doSth(arr);


function doSth(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i][0],
            m = arr[i][1],
            k = arr[i][2];
        let temp = arr[i][3],
            temp2 = [],
            newTemp = [];
        for (let v of temp) {
            if (v[2] < k) {
                temp2.push([v[0], v[1]]);
            }
        }
        for (let k of temp2) {
            newTemp.push(...k);
        }
        newTemp = newTemp.reduce((accum, curr) => accum.includes(curr) ? accum : accum.concat(curr), []);
        res.push(newTemp.length === n ? "Yes" : "No");
    }
    for (let v of res) {
        console.log(v);
    }
}

doSth(arr);