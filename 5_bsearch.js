/**
 * 二分查找（递归）
 * @param {number[]} A 原数组
 * @param {number} p 左边界索引
 * @param {number} r 右边界索引 
 * @param {number} x 需要查找的数字
 * @returns {number} 查找到的索引，未查找到返回 -1
 * @example
 *
 * ```js
    // guess 等于 l,r 的中间位置
    // p >= r 时，在 A 中未找到 x 返回 -1
    // A[guess] === x，找到返回索引
    // guess 猜测位置值大于查找值 x，赋 guess + 1 为 p，否则赋 guess - 1 为 r
    const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
    const x = 4
    console.log( bsearch(A, 0, A.length - 1, 2) )
 * ```
 * 
 */
function bsearch(A, p, r, x) {
  // guess 等于 l,r 的中间位置
  const guess = Math.floor( (r + p)/2 )
  // p >= r 时，在 A 中未找到 x 返回 -1
  if (A[guess] === x) return guess
  if (p >= r) { return -1 }
  // A[guess] === x，找到返回索引
  // guess 猜测位置值大于查找值 x，赋 guess + 1 为 p，否则赋 guess - 1 为 r
  return A[guess] > x ? bsearch(A, p, guess - 1, x) : bsearch(A, guess + 1, r, x)
}
const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
const x = 78
const r = A.length - 1
console.log(bsearch(A, 0, r, x))
