/**
 * 求最大子序列数
 * @param {string} s - 一参
 * @param {string} t - 二参
 * @returns {number} 返回最大子序列数
 * @example
 *
 * ```js
    // 动态规划-Dynamic Programming
    // - 动态规划处理的是一类可以被递归描述的问题，处理最优化问题的方法
    // - 和一般递归问题不同，这类问题总往往有很多被重复计算的子结构
    // - 我们从底部向上构造整个解，使得所子问题计算都只有一次
    function fib(n) {
      let a = 1, b = 1
      for(let i = 2; i <= n; i++) {
        [b, a] = [a+b, b]
      }
      return b
    }
    // - 但有时候问题没有那么简单，缓存数据可以是一个二维数组或者其他，例如：公共子序列问题

    // 什么是子序列？
    // - 子序列，就是原序列不改变顺序，但是可以删除元素得到的序列。ABC 有 8 个子序列：
    // - - A; B; C; AB; AC; BC; ABC; 空字符串;
    // - 为什么要求公共子序列呢？
    // - - ACGGTGTCGTGCTATGCTGATGCTGACTTATATGCTA
    // - - CGTTCGGCTATCGTACGTTCTATTCTATGATTTCTAA
    // - - LCS=CGTTCGGCTATGCTTCTACTTATTCTA

    // 例子：lcs(ABCBDAB, BDCABA)
    // - LCS 长度=4，BDAB, BCAB, BCBA
    // - 暴力求解
    // - - ABCBDAB 有 2^7 个子序列
    // - - BDCABA 有 2^6 个子序列
    // - - 把他们都求出来 -> 求交集（128*64）
    // - - 暴力求解的复杂度 O(2^M) + O(2^N)
    // - - 暴力求解是将原问题直接拆分成了最小的粒度，这样做有性能问题（复杂度不是多项式，而是指数级别）
    // - - 思考是否可以通过另外的拆解方法，从而简化计算量---动态规划（Dynamic Programming）

    // 原问题的拆分
    // - Case 1：结尾字母相同，例如：BANANA, ATANA
    // - - a > 最后一个字符都在 lcs，lcs(BANANA, ATANA) = lcs(BANAN, ATAN) + A
    // - - b > 最后一个字符都不在 lcs，lcs(BANANA, ATANA) = lcs(BANAN, ATAN)，这种情况不成立
    // - - c > 最后一个字符其中一个在 lcs 中，这样得到的 lcs 至少不会比情况 a 大，这种情况不用考虑
    // - Case 2：结尾字母不相同，例如：BANA, AT
    // - - lcs(BANA, AT) = max( lcs(BANA, A), lcs(BAN, AT) )
    // - - 解决 lcs 问题
    // - - 对字符串 M<m1, m2, m3, ..., mp> 和字符串 N<n1, n2, n3, ..., nq>
    // - - mp = nq ---> lcs(m1m2m3...mp,n1n2n3...nq) = lcs(m1m2m3...mp-1, n1n2n3...nq-1) + mp
    // - - mp != nq ---> max( lcs(m1...mp, n1...nq-1), lcs(m1...mp-1, n1...nq) )
    // - - p == 0 或 q == 0 ---> 空字符串

    // 函数描述
    // - 一参 {@link s} 为空或二参 {@link t} 为空时，直接返回 0
    // - {@link s} 和 {@link t} 最后一位字符相同时，递归调用函数 {@link lcs} 并对结果加一表示此时多一个共同子序列
    // - 否则，返回 lcs 中 {@link s} 的上一位与 lcs 中 {@link t} 上一位的最大返回值比较

    // 调用
    const s = 'BANANA', t = 'ATANA'
    console.log(lcs(s,t))

    // 问题
    // - 仅为一个递归，不是最优解
 * ```
 * 
 */
function lcs(s, t) {
  // - 一参 {@link s} 为空或二参 {@link t} 为空时，直接返回空字符串
  if (s === '' || t === '') return 0
  // - {@link s} 和 {@link t} 最后一位字符相同时，递归调用函数 {@link lcs} 并对结果加一表示此时多一个共同子序列
  if (s[s.length - 1] === t[t.length - 1]){
    return lcs( 
      s.substr(0, s.length - 1), s.substr(0, t.length - 1) ) + 1
  } else {
    // - 否则，返回 lcs 中 {@link s} 的上一位与 lcs 中 {@link t} 上一位的最大返回值比较
    return Math.max( lcs( s.substr(0, s.length - 1), t ), lcs( s, t.substr(0, t.length - 1) ) )
  }
}