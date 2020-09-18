/*
    斐波那契数列
*/
function fib(n) {
    let dp = [];
    dp[1] = dp[2] = 1;
    if (n < 0) {
        return false;
    }
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    // return fib(n - 1) + fib(n - 2);
    return dp[n];
}

console.log(fib(200));

/*
    跳台阶 --- 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法
    相比较上面的递归 空间复杂度可降为 O(1)
*/
function jump(n) {
    if (n < 1) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return n;
    }

    let a = 1,
        b = 2,
        temp = 0;

    for (let i = 3; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return temp;
}

/*
    矩形组合 --- 用 2*1 的小矩形横着或者竖着去覆盖更大的矩形。请问用 n 个 2*1 的小矩形无重叠地覆盖一个 2*n 的大矩形，总共有多少种方法
    f(10) 为例
    竖着放时，右边剩余 2x9 ---> f(8)
    横着放时，左下角只有一种（同样横放），那么右边剩余 2x8 ---> f(8)
    so f(10) = f(9) + f(8)
*/
function fillRect(n) {
    if (n < 0) {
        return 0;
    }
    //  初始状态
    let f = [];
    //  base case
    f[1] = 1, f[2] = 2;
    //  状态递推 转移
    for (let i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n];
}

// console.log(fillRect(10));

/*
    对于一个有正有负的整数数组，给定一个int数组A和数组大小n，请返回最大的连续数列的和。保证n的大小小于等于3000。
*/
// function maxSum(arr, n) {
//     let max = arr[0],
//         sum = 0;
//     n = n || arr.length;
//     for (let i = 0; i < n; i++) {
//         sum += arr[i];
//         max = Math.max(sum, max);
//         if (sum < 0) sum = 0;
//     }
//     return max;
// }

// console.log(maxSum([1, -6, 2, 3, -4, 1]));

/*
    寻找一条从顶部到底边的路径，使得路径上所经过的数字之和最大
    More: https://blog.csdn.net/baidu_28312631/article/details/47418773
*/
function trigle() {
    let D = [
        [7],
        [3, 8],
        [8, 1, 0],
        [2, 7, 4, 4],
        [4, 5, 2, 6, 5]
    ]
    let n = D.length - 1;
    let maxSum = D[n];

    for (let i = n - 1; i >= 0; --i) {
        for (let j = 0; j <= i; ++j) {
            maxSum[j] = Math.max(maxSum[j], maxSum[j + 1]) + D[i][j];
        }
    }
    return maxSum[0];
}

// console.log(trigle());

//  Java --- 877 --- https://leetcode-cn.com/problems/stone-game/ 
//  --- /solution/jie-jue-bo-yi-wen-ti-de-dong-tai-gui-hua-tong-yong/
/* 返回游戏最后先手和后手的得分之差 */
// int stoneGame(int[] piles) {
//     int n = piles.length;
//     // 初始化 dp 数组
//     Pair[][] dp = new Pair[n][n];
//     for (int i = 0; i < n; i++)
//         for (int j = i; j < n; j++)
//             dp[i][j] = new Pair(0, 0);
//     // 填入 base case
//     for (int i = 0; i < n; i++) {
//         dp[i][i].fir = piles[i];
//         dp[i][i].sec = 0;
//     }
//     // 斜着遍历数组
//     for (int l = 2; l <= n; l++) {
//         for (int i = 0; i <= n - l; i++) {
//             int j = l + i - 1;
//             // 先手选择最左边或最右边的分数
//             int left = piles[i] + dp[i + 1][j].sec;
//             int right = piles[j] + dp[i][j - 1].sec;
//             // 套用状态转移方程
//             if (left > right) {
//                 dp[i][j].fir = left;
//                 dp[i][j].sec = dp[i + 1][j].fir;
//             } else {
//                 dp[i][j].fir = right;
//                 dp[i][j].sec = dp[i][j - 1].fir;
//             }
//         }
//     }
//     Pair res = dp[0][n - 1];
//     return res.fir - res.sec;
// }

//  466 --- 两个精明的玩家谁会是赢家 --- https://leetcode-cn.com/problems/predict-the-winner/
function doGame(nums) {
    let n = nums.length;
    let dp = [];
    //初始化
    for (let i = 0; i < n; i++) {
        dp[i] = new Array();
        dp[i][i] = nums[i];
    }
    // DP --- 玩家 1 比玩家 2 多的分数
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    return dp[0][n - 1] >= 0;
}

console.log(doGame([1, 5, 2]));


/*
    找零钱
*/
var coinChange = function(coins, amount) {
    if (amount < 0) {
        return -1;
    }
    let dp = [];
    for (let i = 0; i <= amount; i++) {
        dp[i] = amount + 1;
    }
    dp[0] = 0;
    for (let i = 0; i < dp.length; i++) {
        for (let coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }
    return (dp[amount] == amount + 1) ? -1 : dp[amount];
};

/*
    路径最小
*/
const minimumTotal = (triangle) => {
    const height = triangle.length;
    const width = triangle[0].length;
    const dp = new Array(height);
    for (let i = 0; i < height; i++) {
        dp[i] = new Array(width);
    }
    for (let i = height - 1; i >= 0; i--) {
        for (let j = triangle[i].length - 1; j >= 0; j--) {
            if (i == height - 1) {
                dp[i][j] = triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
            }
        }
    }
    return dp[0][0];
};
minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
])