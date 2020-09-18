/*
    全排列
    [1,2,3] --> 123,132,213,231,312,321
*/
function compose(nums) {
    let len = nums.length,
        res = [];

    dfs([]);

    function dfs(path = []) {
        //  如果已经到了最下面一层则 push 
        if (path.length === len) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < len; i++) {
            //  当前元素已经在路径则跳出继续下一次循环
            if (path.includes(nums[i])) {
                continue;
            }
            //  继续 push
            path.push(nums[i]);
            //  递归
            dfs(path);
            //  回溯
            path.pop();
        }
        return res;
    }
}


/*
    111 --- 二叉树的最小深度 --- https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
*/
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let min = Infinity;
    //  已经为叶子结点
    if (root.left === null && root.right === null) {
        return 1;
    }
    //  left
    if (root.left) {
        min = Math.min(min, minDepth(root.left));
    }
    if (root.right) {
        min = Math.min(min, minDepth(root.right));
    }
    //  还需要加上根结点
    return min + 1;
};