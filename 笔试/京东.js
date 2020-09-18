let line = 1000;

let a = parseInt(line.toString().split("").reverse().join(""));
let stack = [],
    res = 0;
while (a) {
    stack.push(a % 5);
    a = Math.floor(a / 5);
}
for (let i = 0; i < stack.length; i++) {
    res += stack[i] * (10 ** i)
}
console.log(res);

let line = parseInt(read_line());
let ops = [];
for(let i=0; i<line; i++){
    let temp = read_line().split(" ");
    ops.push(temp);
}




let ops = [
    // ["1", "2", "3"],
    // ["1", "2", "4"],
    // [3],
    // [1, 2, 5],
    [1, 2, 6],
    [3],
    [2, 1],
    [3],
    [2, 2],
    ["3"]
];
for (let i = 0; i < ops.length; i++) {
    for (let j = 0; j < ops[i].length; j++) {
        ops[i][j] = parseInt(ops[i][j]);
    }
}
let arr = [];
for (let i = 0; i < 100; i++) {
    arr[i] = undefined;
}

console.log(ops);

for (let i = 0; i < ops.length; i++) {
    let type = ops[i][0];
    if (type === 1) {
        let index = ops[i][1] - 1;
        let value = ops[i][2]
        if (!arr[index]) {
            arr.splice(index, 0, value);
        } else {
            arr[index] = value;
        }
    } else if (type === 2) {
        arr.splice(ops[i][1] - 1, 1);
    } else if (type === 3) {
        arr.push(undefined)
        console.log(arr.join(" "));
    }
}