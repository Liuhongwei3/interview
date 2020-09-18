/*
    111 --- 二叉树的最小深度 --- https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
*/
function minDepth(root) {
    debugger
    if (!root) {
        return 0;
    }
    //  定义一个队列
    let q = [];
    q.push(root);
    // root 本身就是一层，depth 初始化为 1
    let depth = 1;

    while (q.length !== 0) {
        let sz = q.length;
        /* 将当前队列中的所有节点向四周扩散 */
        for (let i = 0; i < sz; i++) {
            let cur = q.shift();
            /* 判断是否到达终点 */
            if (cur.left === null && cur.right === null) {
                return depth;
            }
            /* 将 cur 的相邻节点加入队列 */
            if (cur.left !== null)
                q.push(cur.left);
            if (cur.right !== null)
                q.push(cur.right);
        }
        /* 这里增加步数 */
        depth++;
    }
    return depth;
}