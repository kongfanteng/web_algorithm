const { insert_sort } = require('./3_insert_sort.js')

/**
 * 合并两个有序数组
 * @param {number[]} A 原数组
 * @param {number} p 左半边开始位置
 * @param {number} q 左半边结束，右半边开始位置
 * @param {number} r 右半边结束
 * @returns {number} 合并后数组
 * @example
 *
 * ```js
    // 合并两个有序数组
    // p: 左半边开始，p = 0; 
    // q: 左半边结束，右半边开始 q = 4;
    // r: 右半边结束，r = 7;
    // 方法一：对 p-r 的元素执行插入排序，复杂度：O( (r-p)^2 )
    // 方法二：对 p-r 的元素执行 Array.sort，复杂度：O( (r-p)lg(r-p) )
    // 左半边临时空间 A1-slice(p, q); 右半边临时空间A2-slice(q, r)
    // 两边临时空间追加哨兵 push(Number.MAX_SAFE_INTEGER)
    // 循环不变式 
    // i: 指向 A1 中下一个要被放回的元素；
    // j：指向 A2 中下一个要被放回的元素；
    // k：指向 A 中下一个回写的位置。

    const A = [3, 27, 38, 43, 9, 10, 82]; // 左半边临时空间 A1-[0, 4)；右半边临时空间 A2-[4, 7)。
    // A1 = [3, 27, 38, 43, MAX_SAFE_INTEGER]; A2 = [9, 10, 82, MAX_SAFE_INTEGER]; 回写 A.
    console.log( merge(A, 0, 4, 7) )
 * ```
 * 
 */
function merge(A, p, q, r) {
  const A1 = A.slice(p, q) // 左半边临时空间 A1-slice(p, q)
  const A2 = A.slice(q, r) // 左半边临时空间 A2-slice(q, r)
  // 两边临时空间追加哨兵 push(Number.MAX_SAFE_INTEGER)
  A1.push(Number.MAX_SAFE_INTEGER)
  A2.push(Number.MAX_SAFE_INTEGER)
  for (let k = p, i = 0, j = 0; k < r; k++) {
    // 循环不变式
    // i: 指向 A1 中下一个要被放回的元素；
    // j：指向 A2 中下一个要被放回的元素；
    // k：指向 A 中下一个回写的位置。
    A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++]
  }
  return A
}

/**
 * 合并排序
 * @param {number} A 原数组
 * @param {number} p 左边界
 * @param {number} r 右边界
 * @example
 *
 * ```js
    // 流程：
      // 左边界 p 大于右边界 r 直接返回 undefined
      // 获取中间上边界索引 q
      // p -> q 递归，q + 1 到 r 递归
      // merge_sort 将原数组不断拆分，直至长度为 1
      // merge 不断将已排序数据合并知道再次合并成原数组
    // 调用
      const A = [100, 3, 27, 38, 43, 9, 10, 82];
      merge_sort(A, 0, A.length)
      console.log( A )
 * ```
 * 
 */
function merge_sort(A, p, r) {
  if (r - p < 2) return
  const q = Math.ceil((p + r) / 2)
  merge_sort(A, p, q)
  merge_sort(A, q + 1, r)
  merge(A, p, q, r)
}

/**
 * 合并排序（循环替代递归）
 * @param {number[]} A 原数组
 * @example
 *
 * ```js
    // 分析
      // 对长度 N 的数组
      // i = 1，step = 2，10 * 2，start = 0，mid = 1，end = 2，内部循环 2-2-2-2-2-2-2-2-2-2 调用 merge 排序，外部循环执行下次循环
      // i = 2，step = 4，5 * 4，start = 0，mid = 2，end = 4，内部循环 4-4-4-4-4 调用 merge 排序...
      // i = 4，step = 8，8 * 2 + 4，start = 0，mid = 4，end = 8，...
      // i = 8，step = 16，16 + 4，start = 0，mid = 8，end = 16，...
      // i = 12，step = 24，20，start = 0，mid = 12，end = min(24,20)，...
    // 调用
      const A = [3, 27, 38, 43, 9, 10, 82];
      merge_sort_for_loop(A)
      console.log(A)
    // 问题
      不均匀：i = 4，8 * 2 + 4
 * ```
 * 
 */
function merge_sort_for_loop(A) {
  for (let i = 1; i < A.length; i += i) {
    // 拆分的元素个数
    let step = i * 2
    for (let start = 0; start < A.length; start += step) {
      const end = Math.min(start + step, A.length)
      if (end - start > 1) {
        const mid = start + i
        merge(A, start, mid, end)
      }
    }
  }
}

/**
 * 求 2 的 (以 2 为底 val 的对数的下边界整数) 次方
 * @param {number} val 输入数字
 * @returns {number} 对数的下边界整数
 */
function floor_power_of2(val) {
  const floor_2 = Math.floor(Math.log(val) / Math.log(2))
  return Math.pow(2, floor_2)
}

/**
 * 合并排序（对数，平均分配）
 * @param {number[]} A 原数组
 * @example
 *
 * ```js
    // 分析
      // 2^0, 2^1, 2^2, 2^3, ..., 2^( floor(lgN) ), 平均分配：i*2*scale, scale = N/2^( floor(lgN)  )
      // 假如 N = 10，i = 1，scale = 10/2^( floor(lgN)  )
      // 2.5-2.5-2.5-2.5
      // [0, 2)-[2, 5)-[5, 7)-[7, 10)
    // 调用
      const A = [3, 27, 38, 43, 9, 10, 82, 5, 10, 11];
      merge_sort_for_log(A)
      console.log(A)
    // 问题
      // 为了减少递归，增加了计算（未必合算）
 * ```
 * 
 */
function merge_sort_for_log(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2
  for (let i = 1; i < p2; i += i) {
    for (let m = 0; m < p2; m += i * 2) {
      const start = Math.floor(m * scale)
      const mid = Math.floor((m + i) * scale)
      const end = Math.floor((m + i * 2) * scale)
      merge(A, start, mid, end)
    }
  }
}

/**
 * 旋转（针对合并两个有序数组）
 * @param {number[]} A 原数组：A1-[0, n), A2-[n, A.length)
 * @param {number} amount 旋转次数
 * @param {number} start 旋转区间开始
 * @param {number} end 旋转区间结束
 * @return {void} 无返回值
 * @example
 *
 * ```js
    // 分析
    // p 左边界索引 q 中间索引 r 右边索引
    // 交换 [p, q) [q, r) 的元素，A[r-1] < A[p]
    // 对 [p, r) 的子数组进行 r - q 次旋转操作
    // 合并两个有序数组

    // 旋转可以用三次反转作实现
    // 1. 将整个数组反转
    // 2. 将[start, start + amount) 反转
    // 3. 将[start + amount, end) 反转

    // 用例
    const A = [6, 7, 8, 1, 2, 3, 4]
    // 执行过程
    // 第一次反转 [4, 3, 2, 1, 8, 7, 6]
    // 第二次反转 [0, 4) [1, 2, 3, 4, 8, 7, 6]
    // 第三次反转 [4, 7) [1, 2, 3, 4, 6, 7, 8]
    rotate(A, 4, 0, A.length)
 * ```
 * 
 */
function rotate(A, amount, start, end) {
  const A0 = A.slice(start, end)
  // 1. 将整个数组反转
  A0.reverse()
  // 2. 将[start, start + amount) 反转
  const A1 = A0.slice(0, amount)
  A1.reverse()
  // 3. 将[start + amount, end) 反转
  const A2 = A0.slice(amount, end - start)
  A2.reverse()
  const A3 = A1.concat(A2)
  A3.forEach(a => A[start++] = a)
}

/**
 * 合并排序（旋转）
 * @param {number[]} A 原数组
 * @return {void} 无返回
 * @example
 *
 * ```js
    // 调用
    const A = [6, 11, 44, 111, 7, 8, 1, 2, 3, 4]
    merge_sort_for_rotate(A)
    console.log(A)
 * ```
 * 
 */
function merge_sort_for_rotate(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2
  for (let i = 1; i < p2; i += i) {
    for (let m = 0; m < p2; m += i * 2) {
      const start = Math.floor(m * scale)
      const mid = Math.floor((m + i) * scale)
      const end = Math.floor((m + i * 2) * scale)

      if (A[end - 1] < A[start]) {
        rotate(A, mid - start, start, end)
      } else {
        merge(A, start, mid, end)
      }
    }
  }
}

/**
 * 程序执行消耗时间
 * @param {number[]} A 原数组
 * @param {Function} fn 执行函数
 */
function func_exec_timer(A, fn) {
  console.time()
  fn(A)
  console.timeEnd();
}

/**
 * 合并排序（使用插入排序）
 * @param {number[]} A 原数组
 * @return {void} 无返回
 * @example
 *
 * ```js
    // 以 16 个元素为一组，使用插入排序对每 16-31 个元素的底层分开进行排序
    // 使用合并有序数组的方法对这些块逐层排序

    // L = 16，使用循环，数组每 16 个进行一次排序

    // 调用
    const A = []
    for(let i = 0; i < Math.pow(2, 20); i++) {
      A.push(Math.ceil( i * Math.random() ))
    }
    console.time()
    merge_sort_for_insert(A)
    console.timeEnd();
 * ```
 *  
 */
function merge_sort_for_insert(A) {
  const p2 = floor_power_of2(A.length)
  const scale = A.length / p2
  const L = 16

  for (let i = 0; i < p2; i += L) {
    // TODO 待优化，此循环不变式会拖慢代码执行...
    const start = Math.floor(i * scale)
    const end = Math.floor( start + L * scale)
    const A1 = A.slice(start, end)
    insert_sort(A1)
    for (let j = 0; j < A1.length; j++) {
      A[start+j] = A1[j]    
    }
  }

  for (let i = 1; i < p2; i += i) {
    for (let m = 0; m < p2; m += i * 2) {
      const start = Math.floor(m * scale)
      const mid = Math.floor((m + i) * scale)
      const end = Math.floor((m + i * 2) * scale)

      if (A[end - 1] < A[start]) {
        rotate(A, mid - start, start, end)
      } else {
        merge(A, start, mid, end)
      }
    }
  }
}

// 调用
const A = []
for(let i = 0; i < Math.pow(2, 10); i++) {
  A.push(Math.ceil( i * Math.random() ))
}
console.time()
merge_sort_for_rotate(A)
console.timeEnd();