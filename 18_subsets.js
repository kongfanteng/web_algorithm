/**
 * 枚举子集（优化：循环二进制数）
 * @param {string[]} S - 原数组
 * @return {void} - 无返回
 * @example
 *
 * ```js
    // 递归的空间优化
    // 枚举子集问题，每个决策节点都需要维护各自的决策数组，decisions = [xxx]
    // 构造一个顺序遍历所有的决策
    // 对集合 {a, b, c} 而言，决策是一个布尔类型数组（如[T, F, F]），可以使用循环二进制数构造
    for(let i = 0; i <= 0b111; i++){
      // 可以通过 i & (i << k) 判断第 k 位是不是选中
    }
    0b10100 & (1 << 2) = 0b10100 & 0b100 = 0b100

    // 调用
    const S = ['a', 'b', 'c']
    console.log([...subsets(S)])
 * ```
 * 
 */
function* subsets(S) {
  for (let i = 0; i < 1 << S.length; i++) {
    let s = []
    for (let k = 0; k < S.length; k++) {
      const take = i & (1 << k)
      take && s.push(S[k])
    }
    yield s.join('')
  }
}
/**
 * 全排列（基于交换）TODO: 结果有问题，待解决
 * @param {string[]} A - 原数组
 * @param {number} k - 前 k 个元素全排列， 默认 A.length
 * @example
 *
 * ```js
    // 全排列空间优化
    // {A, B, C} 的全排列，相当于枚举 ABC 所有可能得顺序
    // 可以设计一种基于交换的方法获得所有可能得序
    // 全排列 n 个元素
    // - 分别将第n，n - 1，n - 2，...，1 个元素交换到最后一个位置
    // - 然后分别全排列前 n - 1 个元素

    // 代码描述
    // 递归结束条件 k === 1，返回交换后的 A
    // 循环不变式，从 n - 1 开始交换到第一个元素
    // 交换两次 i 和 k - 1，中间递归调用 k - 1

    // 调用
    const A = ['a', 'b', 'c']
    console.log( permutation(A, 3) )
 * ```
 * 
 */
function permutation(A, k = A.length) {
  // 递归结束条件 k === 1，返回交换后的 A
  if (k === 1) {
    // 结束递归
    return [...A]
  }
  let r = []
  // 循环不变式，从 k - 1 开始交换到第一个元素
  for (let i = A.length - 1; i >= 0; i--) {
    // 交换两次 i 和 k - 1，中间递归调用 k - 1
    swap(A, i, k - 1)
    r.push(permutation(A, k - 1))
    swap(A, i, k - 1)
  }
  return r
}

/**
 * 数组中交换元素
 * @param {string[]} A - 原数组
 * @param {number} i - 交换的索引 1
 * @param {number} k - 交换的索引 2
 */
function swap(A, i, k) {
  [A[i], A[k]] = [A[k], A[i]]
}

const A = ['a', 'b', 'c']
console.log( permutation(A) )