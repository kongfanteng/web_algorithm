/**
 * 插入有序数组排序
 * @param {number[]} A 原数组
 * @param {number} x 需要插入的元素
 * @return {number[]}
 * @example
 *
 * ```js
  // find 查找数组中第一个大于 x 的数字 b
  // b 为 undefined 代表所有元素都比 x 小，直接 push 到数组尾部
  // b 不为 undefined 查找 b 对应数组 A 中的索引，使用 splice 插入数组
  const A = [2, 4, 7, 9, 13] // 原数组
  const x = 8 // 需要插入的元素
  console.log(insert1(A, x))
 * ```
 * 
 */
function insert1(A, x) {
  // find 查找数组中第一个大于 x 的数字 b
  const b = A.find(a => a > x)
  if (b === undefined) {
    // b 为 undefined 代表所有元素都比 x 小，直接 push 到数组尾部
    A.push(x)
  } else {
    // b 不为 undefined 查找 b 对应数组 A 中的索引，使用 splice 插入数组
    const idx = A.indexOf(b)
    A.splice(idx, 0, x)
  }
  return A
}
/**
 * 插入有序数组排序
 * @param {number[]} A 原数组
 * @param {number} x 需要插入的数字
 * @returns {number[]}
 * @example
 *
 * ```js
  // find 查找数组中第一个大于 x 的数字 b
  // 查找 b 对应数组 A 中的索引，三元表达式计算插入位置，使用 splice 插入数组
  const A = [2, 4, 7, 9, 13] // 原数组
  const x = 8 // 需要插入的元素
  console.log(insert2(A, x))
 * ```
 * 
 */
function insert2(A, x) {
  // find 查找数组中第一个大于 x 的数字 b
  const b = A.find(a => a > x)
  const idx = A.indexOf(b)
  // 查找 b 对应数组 A 中的索引，三元表达式计算插入位置，使用 splice 插入数组
  A.splice(idx === -1 ? A.length : idx, 0, x)
  return A
}
/**
 * 插入有序数组排序
 * @param {number[]} A 原数组
 * @param {number} x 需要插入的数字
 * @returns {number[]}
 * @example
 *
 * ```js
    // 定义 p 指向下一个需要比较的元素，初始为 A.length - 1
    // p + 1 指向空位
    // 从数组末尾向前比较，大于 x 继续比较，小于 x 停止 while 循环不变式
    // 此时 p + 1 索引为需要插入的数字的位置，进行赋值
    const A = [2, 4, 7, 9, 13] // 原数组
    const x = 8 // 需要插入的元素
    console.log(insert3(A, x))
 * ```
 * 
 */
function insert3(A, x) {
  // 定义 p 指向下一个需要比较的元素，初始为 A.length - 1
  // p + 1 指向空位
  let p = A.length - 1
  // 从数组末尾向前比较，大于 x 继续比较，小于 x 停止 while 循环不变式
  while (p >= 0 && A[p] > x) {
    A[p+1] = A[p]
    p--
  }
  A[p+1] = x
  return A
}

/**
 * 有序插入数组
 * @param {number[]} A 原数组
 * @param {number} i 下一个需要比较的元素
 * @param {number} x 需要插入的元素
 * @returns {number[]}
 * @example
 *
 * ```js
    // p 指向下一个需要比较的元素，初始为 i - 1
    // p + 1 指向空位
    // 从数组末尾向前比较，大于 x 继续比较，把 p 索引值赋给 p+1 索引上
    // 小于 x 停止 while 循环不变式
    // 此时 p + 1 索引为需要插入的数字的位置，进行赋值
    const A = [2, 4, 7, 9, 13] // 原数组
    const x = 8 // 需要插入的元素
    console.log(insert(A, i, x))
 * ```
 * 
 */
function insert(A, i, x) {
  // p 指向下一个需要比较的元素，初始为 i - 1
  // p + 1 指向空位
  let p = i - 1
  // 从数组末尾向前比较，大于 x 继续比较，小于 x 停止 while 循环不变式
  while (p >= 0 && A[p] > x) {
    A[p + 1] = A[p]
    p--
  }
  // 此时 p + 1 索引为需要插入的数字的位置，进行赋值
  A[p+1] = x
  return A
}
/**
 * 插入排序
 * @param {number[]} A 原数组
 * @returns 有序数组
 * @example
 *
 * ```js
  // 循环 A 数组，不断调用 insert 函数进行插入排序
  const A = [13, 7, 9, 3, 2] // 原数组
  console.log(insert_sort(A))
 * ```
 * 
 */
function insert_sort(A) {
  for (let i = 1; i < A.length; i++) {
    insert(A, i, A[i]);
  }
  return A
}

module.exports = {
  insert_sort,
  insert,
}