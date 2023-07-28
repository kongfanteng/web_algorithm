/**
 * @class
 * @example
 *
 * ```js
    // 栈(FILO)
    // - size：栈的大小
    // - max：栈的最大容量
    // - sp：栈指针
    // - Stack Overflow: 栈溢出
    // - Stack Underflow：栈下溢

    // FILO
    const stack = new Stack()
    for(let i = 0; i < 4; i++){
      stack.push(i)
    }
    console.log( stack.pop() )
    console.log( stack.pop() )
    console.log( stack.pop() )
    console.log( stack.pop() )
    // 输出 3 2 1 0
 * ```
 * 
 */
class Stack {
  /**
   * @constructor
   * @param {number} max 栈的最大大小，默认为 1000
   */
  constructor (max = 1000) {
    /** @type {number} max - 栈的最大大小 */
    this.max = max
    /** @type {number} sp - 初始指针，默认 -1 */
    this.sp = -1
    /** @type {number[]} data - 栈存储 */
    this.data = Array(max)
  }
  /**
   * 入栈
   * @param {number} item - 入栈数据 
   * @example
   *
   * ```js
      // 函数描述
      // - 指针 {@link sp} 超出栈最大大小 {@link max}，抛出栈溢出错误
      // - 入栈

      // 调用
      const stack = new Stack()
      stack.push(0)
      console.log(stack) // Stack { max: 1000, sp: -1, data: [ <1000 empty items>, 0 ] }
   * ```
   * 
   */
  push(item) {
    // - 指针 {@link sp} 超出栈最大大小 {@link max}，抛出栈溢出错误
    if (this.sp === this.max - 1) {
      throw 'Stack Overflow'
    }
    // - 入栈
    this.data[++this.sp] = item
  }
  /**
   * 出栈
   * @return {number} 返回栈数据
   * @example
   * 
   * ```js
      // 函数描述
      // - 指针 {@link sp} 为 -1 时，抛出栈下溢错误
      // - 返回指针对应的数据

      // 调用
      const stack = new Stack()
      stack.push(0)
      console.log(stack.pop()) // 0
      console.log(stack.pop()) // 抛出错误
   * ```
   * 
   */
  pop() {
    // - 指针 {@link sp} 为 -1 时，抛出栈下溢错误
    if (this.sp === -1) {
      throw 'Stack Underflow'
    }
    // - 返回指针对应的数据
    console.log('this.data[this.sp--]:', this.data)
    return this.data[this.sp--]
  }
}
