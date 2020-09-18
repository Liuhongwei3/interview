// var line;
// var solveMeFirst = (a, b) => a + b;
// while ((line = read_line()) != '') {
//     let arr = line.split(' ');
//     let a = parseInt(arr[0]);
//     let b = parseInt(arr[1]);
//     let c = solveMeFirst(a, b);
//     print(c);
// }
// let line = read_line();

// function doMore(str) {
//     str = str.replace(/\s*/g, "");
//     let res = "",
//         len = str.length,
//         symb = ["+", "-", "*", "/", '%', '&', '|', '^', '<', '>', '='];
//     for (let i = 0; i < len; i++) {
//         if (symb.indexOf(str[i]) !== -1) {
//             res += " " + str[i] + " ";
//             continue;
//         }
//         res += str[i];
//     }
//     return res.trim();
// }

// console.log(doMore("1 + 1=2"));

let n = 3,
    m = 4;
let server = [5, 2, 3];
let client = [
    [2, 1],
    [3, 2],
    [3, 3],
    [1, 1]
]

let allServer = server.reduce((accum, curr) => {
    return accum += curr;
}, 0)
let allClient = 0,
    allPrice = 0;
for (let i = 0; i < m; i++) {
    allClient += client[i][0];
    allPrice += client[i][1];
}

function doMore() {
    console.log(allClient, allServer, allPrice);
    if (allClient < allServer) {
        return allPrice;
    }

    return 5;
}

console.log(doMore());