/**
 * 交换数组两个索引的值
 * @param {number[]} A 原数组
 * @param {number} i 较大值索引
 * @param {number} j 较小值索引
 * @returns {void} 无返回值
 * @example
 *
 * ```js
    // 定义 t，保存 i 索引的值，赋值：i 索引为 j 索引的值，j 索引值为 t
 * ```
 * 
 */
function swap (A, i, j) {
  // 定义 t，保存 i 索引的值，赋值：i 索引为 j 索引的值，j 索引值为 t
  // const t = A[i]
  // A[i] = A[j]
  // A[j] = t
  [A[i], A[j]] = [A[j], A[i]]
}
/**
 * 冒泡排序
 * @param {number[]} A 原数组
 * @returns {number[]} 排序数组
 * @example
*
 * ```js
    // 双 for 循环，前一个值大于后一个值，进行位置交换
    const A = [13, 7, 9, 3, 2] // 原数组
    console.log(bubble_sort(A))
 * ```
 * 
 */
function bubble_sort(A){
  // 双 for 循环，前一个值大于后一个值，进行位置交换
  for (let idx = A.length - 1; idx >= 1; idx--) {
    for (let j = 1; j <= idx; j++) {
      A[j - 1] > A[j] && swap(A, j-1, j)
    }
  }
  return A
}

module.exports = {
  swap
}
