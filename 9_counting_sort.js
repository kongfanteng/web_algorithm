
/**
 * 计数排序
 * @param {number[]} A 原数组
 * @return {number[]} 结果数组
 * @example
 *
 * ```js
    // 分析
      // 遍历原数组，累计写入累计数组
      // 加和累计数组，得到元素位置
      // 原数组 A = [6, 5, 3, 3, 2, 2, 1]; 
      // 初始累计数组 B = [0, 0, 0, 0, 0, 0, 0]; 累计位递增后 B = [0, 1, 2, 2, 0, 1, 1]; 累计求和后 B = [0, 1, 3, 5, 5, 6, 7];
      // 结果数组 C = [1, 2, 2, 3, 3, 5, 6];
    // 调用
      const A = [6, 5, 3, 3, 2, 2, 1]
      console.log(counting_sort(A))
 * ```
 * 
 */
function counting_sort(A) {
  const max = Math.max(...A)
  // 累计数组
  const B = Array(max + 1).fill(0)
  // 结果数组
  const C = Array(A.length)
  // 累计位递增
  A.forEach((_, i) => B[A[i]]++)
  // 累计求和
  for (let i = 1; i < B.length; i++) {
    B[i] = B[i - 1] + B[i]
  } 
  // 结果取出
  for (let i = 0; i < A.length; i++) {
    const p = B[A[i]] - 1 // 回写位置
    B[A[i]]-- // 新回写位置
    C[p] = A[i] // 回写结果
  }
  return C
}