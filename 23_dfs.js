/**
 * 深度优先搜索（dfs）算法
 * @param {Node} node - 节点
 * @return {void} - 无返回
 * @example
 *
 * ```js
    // 深度优先搜索（DFS）
    // Depth First Search，递归总是向着最深的节点而去
    // 1 > (2 > ( 3 + 4 ) + 5 > 6)
    // 遍历过程：Stack 先入后出(FILO)
    // - 首先插入 1；
    // - 移除 1 插入 2，5，输出 1；
    // - 移除 2 插入 3，4，输出 1, 2；
    // - 移除 3，输出 1, 2, 3
    // - 移除 4，输出 1, 2, 3, 4
    // - 移除 5，插入 6 ，输出 1, 2, 3, 4,5
    // - 移除 6，输出 1, 2, 3, 4, 5, 6

    // 树的抽象
    function Node(key) {
      this.children = []
      this.key = key
    }
    const n1 = new Node('1')
    const n2 = new Node('2')
    const n3 = new Node('3')
    const n4 = new Node('4')
    const n5 = new Node('5')
    const n6 = new Node('6')
    n1.children.push(n2)
    n1.children.push(n5)
    n2.children.push(n3)
    n2.children.push(n4)
    n5.children.push(n6)

    // 函数描述
    // - 定义栈 stack 存放节点数据
    // - 循环不变式 while，循环条件为栈 stack 中数据不为空
    // - 取出栈 stack 中第一个元素 first 并打印 key 值
    // - 取出第一个元素 first 的子元素，先进行 slice 拷贝，再进行反转 reverse，再进行遍历 forEach
    // - 把取到的子节点放到栈 stack 的首部

    // 调用
    function Node(key) {
      this.children = []
      this.key = key
    }
    const n1 = new Node('1')
    const n2 = new Node('2')
    const n3 = new Node('3')
    const n4 = new Node('4')
    const n5 = new Node('5')
    const n6 = new Node('6')
    n1.children.push(n2)
    n1.children.push(n5)
    n2.children.push(n3)
    n2.children.push(n4)
    n5.children.push(n6)
    dfs(n1)

    // dfs
    // - 递归是天然的 dfs
    // - 上述用 stack 实现的代码等价于
    function dfs_nature (node) {
      console.log(node.key)
      node.children.forEach(dfs)
    }
    // - 递归具有天然的 DFS 结构
    // - 程序语言使用栈实现递归
 * ```
 * 
 */
function dfs(node) {
  // - 定义栈 stack 存放节点数据
  const stack = [node]
  // - 循环不变式 while，循环条件为栈 stack 中数据不为空
  while(stack.length > 0) {
    // - 取出栈 stack 中第一个元素 first 并打印 key 值
    const first = stack.shift()
    console.log(first.key)
    // - 取出第一个元素 first 的子元素，先进行 slice 拷贝，再进行反转 reverse，再进行遍历 forEach
    first.children.slice().reverse().forEach(
      // - 把取到的子节点放到栈 stack 的首部
      child => stack.unshift(child)
    )
  }
}