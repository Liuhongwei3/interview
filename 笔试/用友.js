var arr = [],
    reg = "";
while (line = readline()) {
    var lines = line.split("|");
    arr = lines[0];
    reg = lines[1];
}

//function uniq(arr) {
//    return new Set([...arr]);
//}
arr = arr.slice(1, arr.length - 1).split(",").map(item => item.trim().valueOf())

let res = [];
let judge = [];
if (reg.toLowerCase() === "floor") {
    arr.map(item => {
        if (judge.indexOf(Math.floor(item)) === -1) {
            judge.push(Math.floor(item))
            res.push(item);
        }
    })
}

let str = "";
for (let v of res) {
    str = str + v + ","
}
console.log(str.slice(0, str.length - 1));






var invertTree = function(root) {
    if (!root) {
        return null;
    }
    [root.left, root.right] = [root.right, root.left];

    invertTree(root.left);
    invertTree(root.right);

    return root;
};
line = {
    "val": 4,
    "right": {
        "val": 7,
        "right": {
            "val": 9,
            "right": null,
            "left": null
        },
        "left": {
            "val": 6,
            "right": null,
            "left": null
        }
    },
    "left": { "val": 2, "right": { "val": 3, "right": null, "left": null }, "left": { "val": 1, "right": null, "left": null } }
};
var output = invertTree(JSON.parse(JSON.stringify(line)))
console.log(JSON.stringify(output));