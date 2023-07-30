/**
 * N 个数字和为 M 的问题
 * @param {number[]} A - 正整数集合
 * @param {number} n - N 个数字
 * @param {number} m - 和为 M
 * @param {number} i - 递归次数，默认 0
 * @param {number[]} decisions - 存储的合规数字，默认 []
 * @return {null | number[]} 和为 M 的数组或为 null
 * @example
 *
 * ```js
    // 调用
    const A = [1, 3, 8, 5, 2]
    console.log( sumN(A, 2, 11) ) // [3, 8]
    console.log( sumN(A, 4, 3) ) // null

    // 优化：剪枝
    // - 结束条件增加一条判断 m < 0
    // - 利用位运算
    // - - 对于 A = [1, 2, 3, 4, 5] 二进制数 10011 代表 [1, 4, 5]
    function sumByBinaryCode(A, code) {
      const max = 1 << A.length
      const p = []
      let sum = 0
      for(let i = 0; i < A.length; i++) {
        if (code & (1 << i)) {
          sum += A[i]
          p.push(A[i])
        }
      }
      return { sum, p }
    }
 * ```
 * 
 */
function sumN(A, n, m) {
  const max = 1 << A.length // max = 2^(A.length)
  for (let i = 0; i < max; i++) {
    const { sum, p } = sumByBinaryCode(A, i)
    if (sum === m) {
      return p
    }
  }
  return null
}
function sumByBinaryCode(A, code) {
  const max = 1 << A.length
  console.log('max:', max)
  const p = []
  let sum = 0
  for(let i = 0; i < A.length; i++) {
    if (code & (1 << i)) {
      sum += A[i]
      p.push(A[i])
    }
  }
  return { sum, p }
}


