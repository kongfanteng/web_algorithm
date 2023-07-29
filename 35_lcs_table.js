/**
 * 求最大子序列数
 * @param {string} s - 求 lcs 的一参
 * @param {string} t - 求 lcs 的二参
 * @returns {number} 返回最大子序列数
 * @example
 *
 * ```js
    // 动态规划-填表法
    
    // lcs 的长度
    // - 对字符串 M<m1,m2,m3,...,mp>和字符串 N<n1,n2,n3,...nq>
    // - Vij 代表 m1 - mi 和 n1 - nj 的 lcs 长度
    // - Vi0 代表 m1 - mi 和空字符串的 lcs 长度
    // - V0j 代表空字符和 n1 - nj 的 lcs 长度
    
    // 计算量是否减少
    // - mi = nj, Vij = Vi-1j-1 + 1
    // - mi != nj, Vij = max(Vi(j-1), V(i-1)j)
    // - i = 0 or j = 0, Vij = 0
    // - 根据递推式填表
    // - - A T A N A
    // - 0 0 0 0 0 0
    // B 0 0 0 0 0 0
    // A 0 1 1 1 1 1
    // N 0 1 1 1 2 2
    // A 0 1 1 2 2 3
    // N 0 1 1 2 3 3
    // A 0 1 1 2 3 4

    // 函数描述
    // - 定义数组 {@link dp} 存储表格
    // - 循环 for 遍历二参 {@link t}，设置 dp[y] 为空数组
    // - 循环 for 遍历一餐 {@link s}
    // - 循环体中
    // - i = 0 or j = 0 -> 表格中对应置于 0，dp[y][x] = 0
    // - mi === mj -> 表格中对应为左上角值加一，dp[y][x] = dp[y-1][x-1]
    // - 其他 mi !== mj -> 表格中对应值为上值和左值中较大值，d[y][x] = max( dp[y-1][x], d[y][x-1] )
    // - 返回表格中最右下角位置中值 dp[t.length][s.length]

    // 调用
    const s = 'ATANA', t = 'SANANAN'
    console.log( lcs(s, t) ) // 4 为正确返回

 * ```
 * 
 */
function lcs(s, t) {
  /** @type {number[][]} dp - 定义数组 {@link dp} 存储表格 */
  const dp = []
  // - 循环 for 遍历二参 {@link t}，设置 dp[y] 为空数组
  for (let y = 0; y <= t.length; y++) {
    dp[y] = []
    console.log('dp:', dp)
    // - 循环 for 遍历一餐 {@link s}
    for (let x = 0; x <= s.length; x++) {
      // - 循环体中
      if (x === 0 || y === 0) {
        // - x = 0 or y = 0 -> 表格中对应置于 0，dp[y][x] = 0
        dp[y][x] = 0
      } else if (s[x-1] === t[y-1]) {
        // - m(x-1) === n(y-1) -> 表格中对应为左上角值加一，dp[y][x] = dp[y-1][x-1] + 1
        dp[y][x] = dp[y-1][x-1] + 1
      } else {
        // - 其他 mi !== mj -> 表格中对应值为上值和左值中较大值，d[y][x] = max( dp[y-1][x], d[y][x-1] )
        dp[y][x] = Math.max( dp[y-1][x], dp[y][x-1] )
      }
      // - 返回表格中最右下角位置中值 dp[t.length][s.length]
    }    
  }
  return dp[t.length][s.length]
}