/**
 * 求子问题结构的构造结果
 * @param {number[][]} dp - lcs 对应表格
 * @param {string} s - lcs 的一参
 * @param {string} t - 求lcs 的二参
 * @param {number} i - 表格 dp 的横向位置
 * @param {number} j - 表格 dp 的纵向位置索引
 * @param {string} result - 构造结果
 * @example
 *
 * ```js
    // 动态规划-构造结果

    // 步骤
    // - 1、思考递归解
    // - 2、确定子问题结构和递归表达式
    // - 3、利用填表法右底部向上构造解
    // - 4、利用程序从表中读取结果

    // 函数描述
    // - 判断 i 为 0 或 j 为 0，直接返回结果 {@link result}
    // - 判断 m(i-1) 等于 n(j-1)，递归调用函数
    // - 否则判断表格 Vij 的上一个值 dp[j-1][i] 大于表格左一个值 dp[j][i-1]
    // - - 上大于左，递归调用函数，其中 j-1
    // - - 否则，递归调用，其中 i-1

    // 调用
    const dp = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1],
      [0, 1, 1, 2, 2, 2],
      [0, 1, 1, 2, 2, 3],
      [0, 1, 1, 2, 3, 4],
    ]
    console.log( get_result(dp, 'ATANA', 'BANANA'))

    // 总结
    // - 动态规划通过将复杂问题拆解成与之相似的子问题，然后通过巧妙的安排解决顺序，每个子问题只解决一次，来最终优化解决原问题需要的资源
 * ```
 * 
 */
function get_result(dp, s, t, i = s.length, j = t.length, result = '') {
  // - 判断 i 为 0 或 j 为 0，直接返回结果 {@link result}
  if (i === 0 || j === 0) return result
  // - 判断 m(i-1) 等于 n(j-1)，递归调用函数
  if (s[i - 1] === t[j - 1]) {
    return get_result(dp, s, t, i - 1, j - 1, result + s[i - 1])
  } else {
    // - 否则判断表格 Vij 的上一个值 dp[j-1][i] 大于表格左一个值 dp[j][i-1]
    if (dp[j - 1][i] > dp[j][i - 1]) {
      // - - 上大于左，递归调用函数，其中 j-1
      return get_result(dp, s, t, i, j - 1, result)
    } else {
      // - - 否则，递归调用，其中 i-1
      return get_result(dp, s, t, i - 1, j, result)
    }
  }
}