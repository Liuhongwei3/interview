function numIsEqual(x, y) {
    let EPSILON = Number.EPSILON ? Number.EPSILON : Math.pow(2,-52)
    return Math.abs(y - x) < EPSILON
}