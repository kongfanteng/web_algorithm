/**
 * 两个栈实现一个队列
 * @class
 * @example
 *
 * ```js
    // 给定两个栈，如何实现一个队列？
    // - 栈和队列的时间复杂度都为 O(1)

    // 函数描述
    // - 定义两个空数组 {@link s1} {@link s2}
    // - 入队：调用 {@link s1} 的 push 方法
    // - 出队：
    // - - 循环 while，条件第一个数组 {@link s1} 长度大于 0
    // - - - 调用 {@link s1} 的 pop 方法，调用 {@link s2} 的 push
    // - - 第二个数组 {@link s2} 的长度大于 0，返回 {@link s2} 的 pop

    // 调用
    const o = new Queue()
    o.enqueue(1)
    o.enqueue(2)
    o.enqueue(3)
    o.enqueue(4)
    o.enqueue(5)
    console.log(o.dequeue()) // 1
    console.log(o.dequeue()) // 2
 * ```
 * 
 */
class Queue {
  /** @constructor */
  constructor() {
    // - 定义两个空数组 {@link s1} {@link s2}
    /** * @type {number[]} s1 - 入队数组 */
    this.s1 = []
    /** * @type {number[]} s2 - 出队数组 */
    this.s2 = []
  }
  /**
   * 入队
   * @param {number} item - 入队元素
   */
  enqueue(item) {
    // - 入队：调用 {@link s1} 的 push 方法
    this.s1.push(item)
  }
  dequeue() {
    // - 出队：
    // - - 循环 while，条件第一个数组 {@link s1} 长度大于 0
    while (this.s1.length > 0) {
      // - - - 调用 {@link s1} 的 pop 方法，调用 {@link s2} 的 push
      this.s2.push(this.s1.pop())
    }
    // - - 第二个数组 {@link s2} 的长度大于 0，返回 {@link s2} 的 pop
    return this.s2.pop()
  }
}

