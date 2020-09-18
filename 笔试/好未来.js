function getMaxDiff(arr) {
    // write code here
    let len = arr.length;
    if (len === 0) {
        return;
    }
    arr.sort();
    return arr[len - 1] - arr[0];
}

console.log(getMaxDiff([1, 3, 5, 8]))


function unique(arr) {
    // write code here
    return arr.reduce((accum, curr) => {
        return accum.includes(curr) ? accum : accum.concat(curr);
    }, [])
}

console.log(unique([1, 2, 2, 3, 4, 5, 4]));