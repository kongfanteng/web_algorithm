/**
 * 广度优先搜索（bfs）算法
 * @param {Node} node - 节点
 * @return {void} 无返回
 * @example
 *
 * ```js
    // 广度优先搜索（BFS）
    // Breadth First Search，自上而下，自左向右遍历
    // 1 > (2 > ( 3 + 4 ) + 5 > 6) => 1, 2, 5, 3, 4, 6
    // 遍历过程：Queue 先入先出(FILO)
    // - 首先插入 1；
    // - 移除 1 插入 2，5，输出 1；
    // - 移除 2 追加 3，4，输出 1, 2；
    // - 移除 5，追加 6，输出 1, 2, 5
    // - 移除 6，输出 1, 2, 5, 3, 4, 6

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
    // - 定义队列 queue 存放节点 node 数据
    // - 循环不变式 while，循环条件：队列 queue 不为空
    // - 取出对了 queue 中第一个元素 first 并打印结果 key
    // - 取出 first 子节点，遍历 forEach
    // - 将子节点压入队列 queue

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
    bfs(n1) // 1, 2, 5, 3, 4, 6
    
 * ```
 * 
 */
function bfs(node) {
  // - 定义队列 queue 存放节点 node 数据
  const queue = [node]
  while(queue.length > 0) {
    // - 循环不变式 while，循环条件：队列 queue 不为空
    // - 取出对了 queue 中第一个元素 first 并打印结果 key
    const first = queue.shift()
    console.log(first.key)
    // - 取出 first 子节点，遍历 forEach
    first.children.forEach(
      // - 将子节点压入队列 queue
      child => queue.push(child)
    )
  }
}