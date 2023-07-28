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
   */
  max_heapify (i) {
    // - 父节点 i，左子节点 2 * i + 1，右子节点 2 * i + 2
    // - 求最大值，进行交换： [A[i], A[j]] = [A[j], A[i]]
    const pIndex = i
    const lIndex = 2 * i + 1
    const rIndex = 2 * i + 2
    if (lIndex + 1 <= this.heapSize && this.list[pIndex].key < this.list[lIndex].key) {
      [this.list[pIndex], this.list[lIndex]] = [this.list[lIndex], this.list[pIndex]]
    }
    if (rIndex + 1 <= this.heapSize && this.list[pIndex].key < this.list[rIndex].key) {
      [this.list[pIndex], this.list[rIndex]] = [this.list[rIndex], this.list[pIndex]]
    }
  }
  /**
   * 堆排序（按顺序取出所有元素）
   * @example
   *
   * ```js
      // 函数描述
      // - 判断堆无数据返回 null
      // - 取出堆的头部为最大值 item
      // - 交换堆的头部和尾部值
      // - 堆的长度减一
      // - 调用最大堆化函数使堆的第一个分支节点父节点最大化
      // - 返回最大节点 item

      // 调用
      const data = [ {key: 12}, {key: 15}, {key: 2}, {key: 4}, {key: 3}, {key: 8}, {key: 7}, {key: 6}, {key: 5} ]
      const maxHeap = new MaxHeap(data)
      console.log(maxHeap.extract(), maxHeap)
   * ```
   * 
   */
  extract() {
    // - 判断堆无数据返回 null
    if (this.heapSize === 0) return null
    // - 取出堆的头部为最大值 item
    const item = this.list[0]
    // - 交换堆的头部和尾部值
    this.list[0] = this.list[this.heapSize-1]
    delete this.list[this.heapSize - 1]
    // - 堆的长度减一
    this.heapSize--
    // - 调用最大堆化函数使堆的第一个分支节点父节点最大化
    // this.max_heapify(0)
    this.build()
    // - 返回最大节点 item
    return item
  }
  /**
   * 堆中新增元素
   * @param {number} key - 新增的元素值
   * @example
   *
   * ```js
      // 增加新元素
      // - 增加权重（increase）
      // - 将新元素权重设置为负无穷
      // - 追加新元素到堆的末尾
      // - 提升权重

      // 调用
      const data = [ {key: 12}, {key: 15}, {key: 2}, {key: 4}, {key: 3}, {key: 8}, {key: 7}, {key: 6}, {key: 5} ]
      const maxHeap = new MaxHeap(data)
      maxHeap.add(100)
      console.log(maxHeap)
   * ```
   * 
   */
  add (key) {
    this.list[this.heapSize++] = {
      key: -Infinity
    }
    this.increase(this.heapSize - 1, key)
  }
  increase (i, key){
    while(this.list[i].key < this.list[Math.floor(i/2)].key) {
      [this.list[i], this.list[Math.floor(i/2)]] = [this.list[Math.floor(i/2)], this.list[i]]
      i = Math.floor(i/2)
    }
    this.list[i].key = key
  }
}

/**
 * 创建一个堆，依次堆中所有元素
 * @param {HeapData[]} A - 堆的原始数据
 * @example
 *
 * ```js
    // 调用
    const A = [ {key: 12}, {key: 15}, {key: 2}, {key: 4}, {key: 3}, {key: 8}, {key: 7}, {key: 6}, {key: 5} ]
    heap_sort(A)
    console.log(A)
 * ```
 * 
 */
function heap_sort(A) {
  const maxHeap = new MaxHeap(A)
  while(maxHeap.heapSize > 0) {
    // 最大值放在数组最后一条，递归填入从小到大的数组
    A[maxHeap.heapSize - 1] = maxHeap.extract()
  }
}