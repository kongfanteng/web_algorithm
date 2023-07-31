/**
 * 基础数据结构：队
 * @class
 * @example
 *
 * ```js
    // 队列（FIFO）
    // - size=4：队列的大小
    // - max=7：队列的最大容量
    // - p：入队指针
    // - q：出队指针
    // - Queue Overflow：队列溢出
    // - Queue Underflow：队列下溢
    
    // 入队示例
    // - queue.size = 0; q = 0, p = 0; queue.enqueue(1); queue.size = 1; q = 0, p = 1;

    // 出队示例
    // - queue.size = 0; q = 0, p = 0; queue.dequeue(); Queue Underflow;

    // 入队溢出
    // - queue.size = 7; q = 0, p = 0; queue.enqueue(8); Queue Overflow;

    // 队满出队
    // - queue.size = 7; q = 0, p = 0; queue.dequeue(); queue.size = 6; q = 1, p = 0;

 * ```
 * 
 */
class Queue {
  /**
   * @contructor
   * @param {number} max - 队最大容量
   */
  constructor (max = 1000) {
    /** @type {number[]} data - 存储队中数据 */
    this.data = Array(max)
    /** @type {number} p - 入队指针 */
    this.p = 0
    /** @type {number} q - 出队指针 */
    this.q = 0
    /** @type {number} max - 队列的最大容量 */
    this.max = max
    /** @type {number} size - 队列的数据量大小 */
    this.size = 0
  }
  /**
   * 元素入队
   * @param {number} item - 入队数据
   * @throws {string} 队列溢出 Queue Overflow
   * @example
   *
   * ```js
      // 函数描述
      // - 判断队数据已满，抛出入队溢出错误
      // - 队存储数组 {@link data} 根据入队指针 {@link p} 赋值且指针加一
      // - 队列大小 {@link size} 加一
      // - 入队指针 {@link p} 等于最大容量 {@link max} 时，{@link p} 置为 0

      // 调用
      const queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      console.log(queue) // Queue { data: [ 1, 2, 3, <997 empty items> ], p: 3, q: 0, max: 1000, size: 3 }
   * ```
   * 
   */
  enqueue(item){
    // - 判断队数据已满，抛出入队溢出错误
    if (this.size === this.max) throw 'Queue Overflow'
    // - 队存储数组 {@link data} 根据入队指针 {@link p} 赋值且指针加一
    this.data[this.p++] = item
    // - 队列大小 {@link size} 加一
    this.size++
    // - 入队指针 {@link p} 等于最大容量 {@link max} 时，{@link p} 置为 0
    if (this.p === this.max) this.p = 0
  }
  /**
   * 元素出队
   * @throws {string} 队列下溢 Queue Underflow
   * @example
   *
   * ```js
      // 函数描述
      // - 判断队列无数据，抛出错误 Queue Underflow
      // - 队列存储数组 {@link data} 根据出队指针 {@link q} 查找到对应数据并定义 {@link item} 且指针 {@link q} 加一
      // - 队列大小 {@link size} 加一
      // - 出队指针 {@link q} 等于最大容量 {@link max} 时，{@link q} 置为 0
      // - 返回出队的数据 {@link item}

      // 调用
      const queue = new Queue()
      queue.enqueue(1)
      queue.enqueue(2)
      queue.enqueue(3)
      console.log(queue.dequeue()) // 1
      console.log(queue.dequeue()) // 2
   * ```
   * 
   */
  dequeue(){
    // - 判断队列无数据，抛出错误 Queue Underflow
    if (this.size === 0) throw 'Queue Underflow'
    // - 队列存储数组 {@link data} 根据出队指针 {@link q} 查找到对应数据并定义 {@link item} 且指针 {@link q} 加一
    const item = this.data[this.q++]
    // - 队列大小 {@link size} 加一
    this.size--
    // - 出队指针 {@link q} 等于最大容量 {@link max} 时，{@link q} 置为 0
    if(this.q === this.max) this.q = 0
    // - 返回出队的数据 {@link item}
    return item
  }
  /**
   * 查看一下队列下一个需要出队的元素
   * @return {null|number} 返回为对应值或 null
   */
  peek () {
    if (this.size === 0) return null
    return this.data[this.q]
  }
  /**
   * 队列中元素个数
   * @returns {number} 队列中元素个数
   */
  size (){
    return this.size
  }
}
module.exports = {
  Queue
}