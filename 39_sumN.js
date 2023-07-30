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
    // N 个数字和为 M 的问题
    // - 给定一个不重复的正整数集合，从中取 N 个数字，使得他们的和 M，写一个函数，求这个 N 个数字。如有多个，只需要返回一个。

    // 举例
    // - sumN([1, 3, 8, 5, 2], 2, 11) -> [3, 8]
    // - sumN([1, 3, 8, 5, 2], 4, 3) -> null
    // - 考察点：递归+集合优化

    // 函数描述
    // - 判断和 {@link m} 为 0，直接返回空数组
    // - 判断递归次数 {@link i} 等于数组 {@link A} 的长度或者数字个数 {@link n} 为 0，返回 null
    // - 递归两次函数
    // - - n-1, i+1, 存储数组 {@link decisions} 合并
    // - - i + 1
    // - - 返回两次递归函数中有效返回

    // 调用
    const A = [1, 3, 8, 5, 2]
    console.log( sumN(A, 2, 11) ) // [3, 8]
    console.log( sumN(A, 4, 3) ) // null
 * ```
 * 
 */
function sumN(A, n, m, i = 0, decisions = []) {
  // - 判断和 {@link m} 为 0，直接返回空数组
  if (m === 0 && n === 0) return decisions
  // - 判断递归次数 {@link i} 等于数组 {@link A} 的长度或者数字个数 {@link n} 为 0，返回 null
  if (i === A.length || n === 0) return null
  // - 递归两次函数
  // - - n-1, i+1, 存储数组 {@link decisions} 合并
  // - - i + 1
  // - - 返回两次递归函数中有效返回
  return (
    sumN(A, n - 1, m - A[i], i + 1, decisions.concat(A[i])) ||
    sumN(A, n, m, i + 1, decisions)
  )
}

/**
 * @example
 *
 * ```js
    // 微优化，参数中只传必须的参数（如非必要，不建议使用）

    // 函数描述
    // - 定义最终结果 {@link r}
    // - 定义决策数组 {@link decisions} 为空数组
    // - 定义内部函数 {@link inner}，参数为递归次数 {@link i}，数字个数 {@link n} 和数字和 {@link m}
    // - 如果有结果，返回最终结果 {@link r}
    // - 如果计算的和 {@link m} 为 0，找到一个解，赋值最终结果 {@link r}，调用决策数组 slice，结束调用
    // - 没有找到的情况，递归次数等于计算数组长度或者数字个数为 0，结束调用
    // - A[i] 调用决策数组 {@link decisions} push 到尾部
    // - 递归调用 inner，i+1, n-1, m-A[i]
    // - 从决策数组中删除尾部元素 pop
    // - 调用inner，i+1
    // - 返回最终结果 {@link r}

    // 调用
    const A = [1, 2, 3, 4, 5]
    console.log( sumN_inner(A, 3, 10) ) // [1, 4, 5]
    console.log( sumN_inner(A, 4, 3) ) // null
 * ```
 * @param {number[]} A - 数组集合
 * @param {number} n - 数字个数
 * @param {number} m - 数字和
 */
function sumN_inner(A, n, m) {
  // - 定义最终结果 {@link r}，值为 null
  let r = null
  // - 定义决策数组 {@link decisions} 为空数组
  const decisions = []
  // - 定义内部函数 {@link inner}，参数为递归次数 {@link i}，数字个数 {@link n} 和数字和 {@link m}
  function inner(i, n, m) {
    // - 如果有结果，返回最终结果 {@link r}
    if (r) return
    // - 如果计算的和 {@link m} 为 0，找到一个解，赋值最终结果 {@link r}，调用决策数组 slice，结束调用
    if (m === 0 && n === 0) {
      r = decisions.slice()
      return
    }
    // - 没有找到的情况，递归次数等于计算数组长度或者数字个数为 0，结束调用
    if (i === A.length || n === 0) return
    // - A[i] 调用决策数组 {@link decisions} push 到尾部
    decisions.push(A[i])
    // - 递归调用 inner，i+1, n-1, m-A[i]
    inner(i + 1, n - 1, m - A[i])
    // - 从决策数组中删除尾部元素 pop
    decisions.pop(A[i])
    // - 调用inner，i+1
    inner(i + 1, n, m)
  }
  inner(0, n, m)
  // - 返回最终结果 {@link r}
  return r
}
