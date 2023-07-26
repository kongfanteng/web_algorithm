/**
 * 链表节点生成
 * @param {number|string|boolean|Array|object} key - 数据或者卫星数据的地址
 * @return {void} 无返回
 */
function ListNode(key) {
  this.key = key
  this.next = null
}
/**
 * @example
 *
 * ```js
    // 双向链表（Double Linked-List）
    // - 追加（append/push）- O(1)
    // - 索引 - 访问/修改（A[idx] = ...）- O(n)
    // - 插入（insert）- O(1)
    // - 删除（delete/remove）- O(1)
    // - 合并 - O(1)

    // 单向链表
    // - 头指针-指向链表的第一个节点
    // - 链表节点包括 key 和 next 指针
    // - - key 可以是数据或卫星数据的地址
    // - - next 指针指向下一个链表节点
    // - HEAD -> [key, next 指针] -> key ...

    // 单向节点内部
    // - 线性排列

    // 链表节点
    function ListNode(key) {
      this.key = key
      this.next = null
    }
    // 单向链表
    class LinkedList {
      constructor(){
        this.head = null
      }
    }
    // 向空链表中插入元素 T
    // - 创建一个空链表，HEAD 指针指向 NULL
    const list = new LinkedList()
    // - 创建一个包含数据 1 的节点
    const node = new ListNode(1)
    // - 将 HEAD 指针指向节点
    list.head = node
    // - 链表结构
    LinkedList {
      head: ListNode {
        key: 1, next: null
      }
    }
    // - 再创建一个包含数据 2 的节点
    const node2 = new ListNode(2)
    // - 将节点 2 的 next 指针指向节点 1
    node2.next = node
    // - 调整 HEAD 指针指向节点 2
    list.head = node2
    // - 链表结构
    LinkedList {
      head: ListNode {
        key: 2,
        next: ListNode {
          key: 1, next: null
        }
      }
    }
 * ```
 * 
 */
class LinkedList {
  constructor () {
    this.head = null
  }
  /**
   * 链表插入的程序
   * @param {ListNode} node 
   * {@link ListNode}
   * @example
   *
   * ```js
      // 时间复杂度 - O(1)

      // 函数描述
      // - 判断实例的头部 head 不为空时，把插入节点的  next 指针指向这个头部 head
      // - 把实例的头部 head 指向插入节点

      // 调用
      const list = new LinkedList()
      const node1 = new ListNode(1)
      list.insert(node1)
      console.log(list.head.key) // 打印 1 表示程序执行成功
   * ```
   * 
   */
  insert(node){
    // - 判断实例的头部 head 不为空时，把插入节点的  next 指针指向这个头部 head
    if (this.head !== null) {
      node.next = this.head
    }
    // - 把实例的头部 head 指向插入节点
    this.head = node
  }
  /**
   * 在链表中查找节点 - O(n)
   * @param {ListNode} node - 查找的节点
   * {@link ListNode}
   * @return {ListNode|null} 在链表中找到返回节点，否则返回 null
   * @example
   *
   * ```js
      // 函数描述
      // - 遍历指针，找到链表头部指向的节点 p
      // - 循环遍历直到找到和 node 相同的节点
      // - 如果 node 链表中 p = node，否则返回 null

      // 调用
      const list = new LinkedList()
      const node1 = new ListNode(1)
      list.insert(node1)
      const node2 = new ListNode(2)
      list.insert(node2)
      console.log(list.find(node2)) // 打印 node2 节点结构表示执行成功
   * ```
   * 
   */
  find(node) {
    // - 遍历指针，找到链表头部指向的节点 p
    let p = this.head
    // - 循环遍历直到找到和 node 相同的节点
    while(p && p !== node) {
      p = p.next
    }
    // - 如果 node 链表中 p = node，否则返回 null
    return p
  }
  /**
   * 在链表中删除节点
   * @param {ListNode} node - 需要删除的节点
   * {@link ListNode}
   * @return {boolean} 是否删除成功
   * @example
   *
   * ```js
    // 函数描述
    // - 遍历指针，找到链表头部指向的节点 p，定义 prevNode 为删除节点之前的节点
    // - 循环遍历直到找到和 node 相同的节点并为 prevNode 赋值，把删除节点的 next 指向 null
    // - 如果 node 在链表中 p = node 返回 true 表示删除成功，否则返回 false

    // 调用
    const list = new LinkedList()
    const node1 = new ListNode(1)
    list.insert(node1)
    const node2 = new ListNode(2)
    list.insert(node2)
    console.log(list.delete(node2)) // 返回 true 表示删除成功
   * ```
   * 
   */
  delete (node) {
    // - 遍历指针，找到链表头部指向的节点 p，定义 prevNode 为删除节点之前的节点
    let p = this.head, prevNode = this.head
    // - 循环遍历直到找到和 node 相同的节点并为 prevNode 赋值，把删除节点的 next 指向 null
    while(p && p !== node) {
      prevNode = p
      p = p.next
    }
    // - 如果 node 在链表中 p = node 返回 true 表示删除成功，否则返回 false
    if (p) {
      prevNode.next = node.next
      node.next = null
      return true
    }
    return false
  }
}