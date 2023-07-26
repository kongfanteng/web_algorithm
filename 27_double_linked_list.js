/**
 * 双向节点的节点结构
 * @param {any} key - 节点存储数据
 * @return {void} 无返回
 */
function ListNode(key) {
  this.key = key
  /**
   * @type {null|ListNode} next 
   */
  this.next = null
  /**
   * @type {null|ListNode} type
   */
  this.prev = null
}

/**
 * 双向链表 DoubleLinkedList 结构
 * @typedef {object} DoubleLinkedList
 * @property {string} DoubleLinkedList.head - 头部描述
 */

/**
 * @class
 * @example
 * ```js
    // 双向链表
    // - 链表节点
    function ListNode(key) {
      this.key = key
      this.next = null
      this.prev = null
    }
    // - 双向链表
    class DoubleLinkedList{
      constructor(){
        this.head = null
      }
    }
    // - 删除节点 node2
    // - 节点 node2 的前一个节点（节点 1）的 next 指针指向节点 2 的下一个节点（节点 3）
    // - - node2.prev.next = node2.next
    // - 节点 node2 的后一个节点（节点 3）的 prev 指向节点 2 的前一个节点（节点 1）
    // - - node2.next.prev = node2.prev
    // - 删除节点 2 的指针，减少引用计数
    // - - delete node2.prev; delete node2.next;

 * ```
 * 
 */
class DoubleLinkedList{
  constructor(){
    /**
     * @type {null | ListNode}
     */
    this.head = null
    /**
     * @type {number}
     */
    this.length = 0
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
    // - 判断实例的头部 head 不为空时，把插入节点的 next 指针指向这个头部 head
    if (this.head !== null) {
      this.head.prev = node
      node.next = this.head
    }
    // - 把实例的头部 head 指向插入节点
    this.head = node
    this.length++
  }
  /**
   * 删除链表中的节点
   * @param {ListNode} node - 删除的节点
   * @return {boolean} 删除成功返回 true，未找到返回 false
   * @example
   *
   * ```js
      // 函数描述
      // - 遍历指针，找到链表头部指向的节点 p
      // - 循环遍历直到找到和 node 相同的节点
      // - 如果 node 在链表中 p === node
      // - - 改变上一个节点的下一个指向和下一个节点的上一个指向
      // - - 删除当前节点的上下指针指向
      // - - 返回 true
      // - 否则返回 false

      // 调用
      const list = new DoubleLinkedList()
      const node1 = new ListNode(1)
      list.insert(node1)
      const node2 = new ListNode(2)
      list.insert(node2)
      console.log(list.delete(node2)) // 返回 true 表示删除成功
   * ```
   * 
   */
  delete (node) {
    // - 遍历指针，找到链表头部指向的节点 p
    let p = this.head
    // - 循环遍历直到找到和 node 相同的节点
    while(p && p !== node) {
      p = p.next
    }
    // - 如果 node 在链表中 p === node
    if (p) {
      // - - 改变上一个节点的下一个指向和下一个节点的上一个指向
      p.prev && (p.prev.next = p.next)
      p.next && (p.next.prev = p.prev)
      // - - 删除当前节点的上下指针指向
      p.prev = null
      p.next = null
      this.length--
      // - - 返回 true
      return true
    }
    // - 否则返回 false
    return false
  }
}