/**
 * 数网格中的路径
 * @example
 *
 * ```js
    // 数网格中的路径
    // - 小虫子从 A 到 B，只能沿着网格走，每次只能向右或向下，求有多少种走法？
    // - x > 0, y > 0: f(x, y) = f(x-1, y) + f(x, y-1)
    // - x = 0, y = 0: f(x, y) = 0
    // - x > 0, y = 0: f(x, y) = f(x-1, y)
    // - x = 0, y > 0: f(x, y) = f(x, y-1)
    
    // 函数描述
    // - 四种情况分别计算 x > 0, y > 0 else x > 0 else y > 0 else 返回 1
    
    // 调用
    console.log(f(4, 3))

    // 问题
    // - 递归暴力解法（复杂度高，重复计算）
 * ```
 * @param {number} x - 表格中横向数量
 * @param {number} y - 表格中纵向数量
 * @return {number} 共有几种走法
 */
function f(x, y) {
  // - 四种情况分别计算 x > 0, y > 0 else x > 0 else y > 0 else 返回 1
  if (x > 0 && y > 0) {
    return f(x - 1, y) + f(x, y - 1)
  } else if (x > 0) {
    return f(x - 1, y)
  } else if (y > 0) {
    return f(x, y - 1)
  } else {
    return 1
  }
}

/**
 * @example
 *
 * ```js
    // 使用数组 {@link dp} 缓存以计算过的数据

    // 调用
    console.log(f_cache(4, 3)) // 35
 * ```
 * @param {number} x - 横向表格数量
 * @param {number} y - 纵向表格数量
 * @param {number[][]} dp - 缓存数组
 */
function f_cache(x, y, dp = []) {
  // 使用数组 {@link dp} 缓存以计算过的数据
  if (!dp[y]) {
    dp[y] = []
  }
  if (dp[y][x] !== undefined) {
    return dp[y][x]
  }
  // - 四种情况分别计算 x > 0, y > 0 else x > 0 else y > 0 else 返回 1
  if (x > 0 && y > 0) {
    dp[y][x] = f(x - 1, y) + f(x, y - 1)
  } else if (x > 0) {
    dp[y][x] = f(x - 1, y)
  } else if (y > 0) {
    dp[y][x] = f(x, y - 1)
  } else {
    dp[y][x] = 1
  }
  return dp[y][x]
}

/**
 * 数网格中的路径（循环不变式）
 * @param {number} x - 横向表格数量
 * @param {number} y - 纵向表格数量
 * @example
 *
 * ```js
    // 函数描述
    // 定义缓存空数组 {@link dp}
    // - 循环 for 遍历 y 次
    // - - 循环 for 遍历 x 次

    // 调用
    console.log(f_cache(4, 3)) // 35
 * ```
 * 
 */
function f_for(x, y) {
  /** @type {number[][]} dp - 缓存已计算数据 */
  let dp = []
  for (let j = 0; j <= y; j++) {
    dp[j] = []
    for (let i = 0; i <= x; i++) {
      if (i > 0 && j > 0) {
        dp[j][i] = f(i - 1, j) + f(i, j - 1)
      } else if (i > 0) {
        dp[j][i] = f(i - 1, j)
      } else if (j > 0) {
        dp[j][i] = f(i, j - 1)
      } else {
        dp[j][i] = 1
      }
    }
  }
  return dp[y][x]
}