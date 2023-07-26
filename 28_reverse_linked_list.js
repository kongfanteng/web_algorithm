/**
 * 链表节点生成
 * @param {number|string|boolean|Array|object} key - 数据或者卫星数据的地址
 * @return {void} 无返回
 */
function ListNode(key) {
  this.key = key
  /** @type {ListNode|null} */
  this.next = null
}
/**
 * @example
 *
 * ```js
    // 反转单向链表
    // H -> 1 -> 2 -> 3 -> 4 -> NULL
    // NULL -> 1 -> 2 -> 3 -> 4 -> H

    // 反转过程
    // - 指针 p 指向倒数第二个元素
    // - 将 p 指向 p 的前一个元素，并将 p 的下一个元素反转
    // - 最后一步将 p 所在的元素指向 null

    // 问题：如何构造逆序指针 p
    // - 利用递归，可以构造逆序指针 p
    // - 【处理 p】第一次执行发生在倒数第 2 个元素
    class Linked {
      ...
      reverse (p = this.head) {
        if (p.next) {
          reverse(p.next)
          // 处理 p
        }
      }
    }
 * ```
 */
class LinkedList {
  constructor() {
    /** @type {ListNode|null} */
    this.head = null
  }
  /**
   * 
   * @param {ListNode} node 插入节点
   */
  insert(node) {
    // - 判断实例的头部 head 不为空时，把插入节点的  next 指针指向这个头部 head
    if (this.head !== null) {
      node.next = this.head
    }
    // - 把实例的头部 head 指向插入节点
    this.head = node
  }
  /**
   * 反转单向链表
   * @param {ListNode|null} p 反转的节点首部，默认为链表头部节点
   * @returns {void} 无返回
   * @example
   *
   * ```js
      // 函数描述
      // - 递归结束条件：递归到链表尾部后，此时 p 为尾部节点，把节点赋给链表头部 head
      // - 在节点 p 的 next 不为空，即非尾部节点，调用递归函数，使 p 的 next 的 next 指向 p 并置 p 的 next 指向 null
      
      // 调用
      const list = new LinkedList()
      const node1 = new ListNode(1)
      list.insert(node1)
      const node2 = new ListNode(2)
      list.insert(node2)
      console.log(list) // 2 -> 1
      list.reverse()
      console.log(list) // 1 -> 2 为执行成功
   * ```
   * 
   */
  reverse (p = this.head) {
    if (p.next) {
      // - 在节点 p 的 next 不为空，即非尾部节点，调用递归函数，使 p 的 next 的 next 指向 p 并置 p 的 next 指向 null
      this.reverse(p.next)
      p.next.next = p
      p.next = null
    } else {
      // - 递归结束条件：递归到链表尾部后，此时 p 为尾部节点，把节点赋给链表头部 head
      this.head = p
    }
  }
}
