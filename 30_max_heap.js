/**
 * @typedef {Object} HeapData
 * @property {number} HeapData.key - 堆数据
 */
/**
 * @class
 */
class MaxHeap {
  /**
   * 最大堆的构造函数
   * @constructor
   * @param {HeapData[]} data - 堆数据
   * @param {number} Max - 堆的最大值
   * @example
   *
   * ```js
      // 函数描述
      // - 定义类的数组属性 list 用以存储堆数据，最大值为 {@link Max}
      // - 循环 for 遍历初始化传入堆数据 {@link data} 赋值给 list
      // - 定义类的属性 heapSize 表示堆数据大小
      // - 调用类的方法 build 创建堆

      // 调用
      const data = [ {key: 12}, {key: 15}, {key: 2}, {key: 4}, {key: 3}, {key: 8}, {key: 7}, {key: 6}, {key: 5} ]
      const maxHeap = new MaxHeap(data)
      console.log(maxHeap)
   * ```
   * 
   */
  constructor (data, Max = 10000) {
    /** @type {HeapData[]} 定义类的数组属性 list 用以存储堆数据，最大值为 {@link Max} */
    this.list = new Array(Max)
    // - 循环 for 遍历初始化传入堆数据 {@link data} 赋值给 list
    for (let i = 0; i < data.length; i++) {
      this.list[i] = data[i]
    }
    /** @type {number} 定义类的属性 heapSize 表示堆数据大小 */
    this.heapSize = data.length
    // - 调用类的方法 build 创建堆
    this.build()
  }
  /**
   * 建堆
   * @private
   * @example
   *
   * ```js
      // 函数描述
      // - 分支节点数为堆的大小除以 2，程序执行从 0 开始，所以减一得到用以循环的分支节点数 {@link i}
      // - 循环 while，条件为 i 不小于 0，调用最大堆化函数 {@link max_heapify}（为递归函数）

      // 调用，类内部方法
      this.build()
   * ```
   * 
   */
  build(){
    // - 分支节点数为堆的大小除以 2，程序执行从 0 开始，所以减一得到用以循环的分支节点数 i
    let i = Math.floor(this.heapSize/2) - 1
    // - 循环 while，条件为 i 不小于 0，调用最大堆化函数（为递归函数）
    while (i >= 0) {
      this.max_heapify(i--)
    }
  }
  /**
   * 最大堆化
   * @param {number} i - 分支节点数
   * @example
   *
   * ```js
      // 函数描述
      // - 父节点 2 * i，左子节点 2 * i + 1，右子节点 2 * i + 2
      // - 求最大值与最小值，进行交换 [A[i], A[j]] = [A[j], A[i]]
   * ```
   * 
   */
  max_heapify (i) {
    // - 父节点 i，左子节点 2 * i + 1，右子节点 2 * i + 2
    // - 求最大值，进行交换： [A[i], A[j]] = [A[j], A[i]]
    const pIndex = i
    const lIndex = 2 * i + 1
    const rIndex = 2 * i + 2
    if (this.list[pIndex].key < this.list[lIndex].key) {
      [this.list[pIndex], this.list[lIndex]] = [this.list[lIndex], this.list[pIndex]]
    }
    if (rIndex + 1 <= this.heapSize && this.list[pIndex].key < this.list[rIndex].key) {
      [this.list[pIndex], this.list[rIndex]] = [this.list[rIndex], this.list[pIndex]]
    }
  }
}