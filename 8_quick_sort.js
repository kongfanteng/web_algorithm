const { swap } = require("./4_bubble_sort")

/**
 * 快速排序（要点，选取最后一位中心点，数组左右数值分别和中心点比较）
 * @param {number[]} A 原数组
 * @param {number} lo - 数组左边索引，默认 0
 * @param {number} hi - 数组右边索引，默认 A.length
 * @return {void} 无返回
 * @example
 *
 * ```js
  // 分析 
    // 快速排序，类似合并排序
    // 相同点（分治策略）1、都会先拆解问题；2、然后分别处理；3、平均执行时间 O(nlgn)；
    // 不同点 1、快速排序空间复杂度 O(1)；2、快速排序常数时间更少；3、合并排序更适合并发环境；
    // 关键子问题-根据中心点拆分数组
    // const A = [10, 80, 30, 90, 40, 50, 70] 
    // 选取 70 为中心点，把 <= 中心点的值放到中心点左边，> 中心点的值放到右边；左 [10, 30, 40, 50]；右 [80, 90]；
    // 左第一个大于 70 的值和右第一个小于 70 的值交换，80 <--> 50，[10, 50, 30, 90, 40, 80, 70] 
    // 左第二个大于 70 的值和右第二个小于 70 的值交换，90 <--> 40，[10, 50, 30, 40, 90, 80, 70] 
    // 70 和左第一个大于 70 的值交换，90 <--> 70，[10, 50, 30, 40, 70, 80, 90] 
    // <= 中心点的值 [lo, i), 未确认的值 [i, j), > 中心点的值 [j, hi - 1], 中心点 hi
    // 数组 A，i = 0, j = 6；<= 中心点：[0, 0)；大于中心点：[6, 6)；未处理：[0, 5]
    // A[i] 大于中心点 -> swap(A, i, --j)
    // i === j 循环结束（没有未处理）
    // 70 和左第一个大于 70 的值交换 swap(hi - i, j)

  // 调用
    const A = [10, 80, 30, 90, 40, 50, 70] 
    qsort(A)
    console.log(A)
  
  // 如何优化快速排序？
    // 让拆分更加平均：1、随机打乱原数组 O(n)；2、使用中位数做中点 O(n) 累计；3、找三个数，取中间数字 O(1) 累计；  
 * ```
 * 
 */
function qsort(A, lo = 0, hi = A.length) {
  if (hi - lo <= 1) return
  const p = partition(A, lo, hi)
  qsort(A, lo, p)
  qsort(A, p + 1, hi)
}

/**
 * 中心点左右值计算后交换
 * @param {number[]} A 原数组
 * @param {number} lo 开始位置（闭区间）
 * @param {number} hi 结束位置（开区间）
 * @return {number} 中心点所在的位置
 * @desc 副作用：[lo, hi) 区间被中心点分成两个区域  
 */
function partition(A, lo, hi) {
  // <= 中心点的值 [lo, i), 未确认的值 [i, j), > 中心点的值 [j, hi - 1], 中心点 hi
  // 中心点 hi
  const pivot = A[hi - 1]
  let i = lo, j = hi - 1
  while (i !== j) {
    if (A[i] <= pivot) {
      i ++
    } else {
      swap(A, i, --j)
    }
  }
  swap(A, j, hi - 1)
  return j
}

const A = [10, 80, 30, 90, 40, 50, 70] 
    qsort(A)
    console.log(A)
