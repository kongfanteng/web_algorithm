const { Queue } = require('./33_queue')

/**
 * 火车车厢重排问题
 * @param {number[]} o 初始车厢数组
 * @param {number[]} t 重排车厢数组
 * @returns {boolean} 重排是否成功
 * @example
 *
 * ```js
    // 火车车厢重排问题
    // - 给定一列火车，利用左侧的环状铁轨对火车车厢进行重新排序
    // - 给定初始顺序和排序后的顺序，写一个函数，判断这样是否可行
    // - 思考
    // - - 12345 -> 13245 true
    // - - 12345 -> 54321 true
    // - - 12345 -> 15234 false
    // - - 12345 -> 15243 false
    // - 思路
    // - - 定义队列 Queue，与重排车厢匹配不理会，不匹配放入队列

    // 函数描述
    // - 定义空数组 {@link q} 作为队列存储不匹配数据
    // - 循环 for 遍历重排车厢 {@link t}，每次获取的元素为 {@link x}
    // - - 判断队列 {@link q} 尾部值为重排车厢值时，从队列尾部删除
    // - - 定义变量 {@link y} 用以初始车厢 {@link o} 的首元素赋值
    // - - 循环不变式：o 中下一个要么和 x 匹配，要么 o 为空
    // - - 循环 while，条件为初始车厢 {@link o} 不为空且每次对 y 赋值不等于 x
    // - - - 向 q 首部插入 y
    // - 判断 o 是否为空

    // 调用
    console.log(isTrans([1, 2, 3, 4, 5], [1, 3, 2, 4, 5])) // true
    console.log(isTrans([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])) // false
    console.log(isTrans([1, 2, 3, 4, 5], [1, 5, 2, 3, 4])) // true
    console.log(isTrans([1, 2, 3, 4, 5], [5, 1, 2, 4, 3])) // false

    // 问题
    // - unshift 为 O(n) 操作，总体复杂度为 O(n^2)
 * ```
 * 
 */
function isTrans(o, t) {
  // - 定义空数组 {@link q} 作为队列存储不匹配数据
  const q = []
  // - 循环 for 遍历重排车厢 {@link t}，每次获取的元素为 {@link x}
  for (let x of t) {
    // - - 判断队列 {@link q} 尾部值为重排车厢值时，从队列尾部删除
    if (q[q.length - 1] === x) q.pop()
    // - - 定义变量 {@link y} 用以初始车厢 {@link o} 的首元素赋值
    let y = null
    // - - 循环不变式：o 中下一个要么和 x 匹配，要么 o 为空
    // - - 循环 while，条件为初始车厢 {@link o} 不为空且每次对 y 赋值不等于 x
    while (o.length > 0 && (y = o.shift()) !== x) {
      // - - - 向 q 首部插入 y
      q.unshift(y)
    }
  }
  // - 判断 o 是否为空
  return q.length === 0
}

/**
 * 火车车厢重排问题(队列)
 * @param {Queue} o 初始车厢数组
 * @param {number[]} t 重排车厢数组
 * @returns {boolean} 重排是否成功
 * @example
 *
 * ```js
    // 队列降低复杂度(队列解决先入先出问题)
    // - peek() - 查看一下队列下一个需要出队的元素
    // - dequeue() - 出队
    // - enqueue(item) - 入队
    // - size() - 队列中元素个数

    // 函数描述
    // - 定义变量 {@link q} 为 {@link Queue} 的实例
    // - 循环 forof 遍历 {@link t} 元素 {@link x}
    // - 下一个要出队的元素 peek() 等于遍历元素 {@link x} 直接出队
    // - 定义变量 {@link y}，默认为 null
    // - 循环不变式 while，条件：初始队列队列 {@link o} 不为空且赋值 {@link y} 为 {@link o} 的出队元素不等于遍历元素 {@link x}
    // - - {@link x} 入队 {@link x}
    // - 返回 q 的大小为 0 判断

    // 调用
    const o = new Queue()
    o.enqueue(1)
    o.enqueue(2)
    o.enqueue(3)
    o.enqueue(4)
    o.enqueue(5)
    console.log(isTrans_queue(o, [1, 3, 2, 4, 5])) 
    console.log(isTrans_queue(o, [5, 4, 3, 2, 1])) 
    console.log(isTrans_queue(o, [1, 5, 2, 3, 4])) 
    console.log(isTrans_queue(o, [5, 1, 2, 4, 3])) 
 * ```
 * 
 */
function isTrans_queue(o, t) {
  // - 定义变量 {@link q} 为 {@link Queue} 的实例
  const q = new Queue()
  // - 循环 forof 遍历 {@link t} 元素 {@link x}
  for (const x of t) {
    // - - 下一个要出队的元素 peek() 等于遍历元素 {@link x} 直接出队
    if (q.peek() === x) q.dequeue()
    // - - 定义变量 {@link y}，默认为 null
    let y = null
    // - - 循环不变式 while，条件：初始队列队列 {@link o} 不为空且赋值 {@link y} 为 {@link o} 的出队元素不等于遍历元素 {@link x}
    while (o.size > 0 && (y = o.dequeue()) !== x) {
      // - - - {@link x} 入队 {@link q}
      q.enqueue(y)
    }
  }
  // - 返回 q 的大小为 0 判断
  return q.size === 0
}
