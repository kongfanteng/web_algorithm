/**
 * 树节点
 * @class
 * @example
 *
 * ```js
    // 调用
    const root = new TreeNode(1)
    root.left = new TreeNode(5)
    root.right = new TreeNode(9)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(3)
    root.right.right.left = new TreeNode(8)
    console.log(root)
    // - 打印
    TreeNode {
      left: TreeNode {
        left: TreeNode { left: null, right: null, value: 4 },
        right: TreeNode { left: null, right: null, value: 2 },
        value: 5
      },
      right: TreeNode {
        left: TreeNode { left: null, right: null, value: 7 },
        right: TreeNode { left: { left:null, right: null, value: 8 }, right: null, value: 3 },
        value: 9
      },
      value: 1
    }
 * ```
 * 
 */
    class TreeNode {
      /** 
       * @constructor
       * @param {number} value - 树节点数据
       */
      constructor(value) {
        /** @type { null | TreeNode } left - 树左节点结构 */
        this.left = null
        /** @type { null | TreeNode } right - 树右节点结构 */
        this.right = null
        /** @type { number } value - 树节点数据存储 */
        this.value = value
      }
    }
/**
 * @example
 *
 * ```js
    // 反转二叉树
    // Google: 90% of our engineers use the software you wrote (Homebrew), but you can't invert a binary tree on a writeboard so fuck off.

    // 函数描述
    // - 判断节点不存在，直接返回
    // - 定义 tmp 存储当前节点{@link node} 的左结构
    // - 使当前节点 {@link node} 的左节点 {@link left} 赋值为右节点 {@link right}
    // - 使当前节点 {@link node} 的右节点 {@link right} 赋值为左节点 {@link left}
    // - 递归调用两次，分别是左节点和右节点

    // 调用
    const root = new TreeNode(1)
    root.left = new TreeNode(5)
    root.right = new TreeNode(9)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(3)
    root.right.right.left = new TreeNode(8)
    console.log(root)
    reverseBTree(root)
    console.log(root)

    // TreeNode {
    //   left: TreeNode {
    //     left: TreeNode { left: null, right: null, value: 4 },
    //     right: TreeNode { left: null, right: null, value: 2 },
    //     value: 5
    //   },
    //   right: TreeNode {
    //     left: TreeNode { left: null, right: null, value: 7 },
    //     right: TreeNode { left: [TreeNode], right: null, value: 3 },
    //     value: 9
    //   },
    //   value: 1
    // }
    // TreeNode {
    //   left: TreeNode {
    //     left: TreeNode { left: null, right: [TreeNode], value: 3 },
    //     right: TreeNode { left: null, right: null, value: 7 },
    //     value: 9
    //   },
    //   right: TreeNode {
    //     left: TreeNode { left: null, right: null, value: 2 },
    //     right: TreeNode { left: null, right: null, value: 4 },
    //     value: 5
    //   },
    //   value: 1
    // }
 * ```
 * 
 */
function reverseBTree(node) {
  // - 判断节点不存在，直接返回
  if (!node) return
  // - 定义 tmp 存储当前节点{@link node} 的左结构
  const tmp = node.left
  // - 使当前节点 {@link node} 的左节点 {@link left} 赋值为右节点 {@link right}
  node.left = node.right
  // - 使当前节点 {@link node} 的右节点 {@link right} 赋值为左节点 {@link left}
  node.right = tmp
  // - 递归调用两次，分别是左节点和右节点
  reverseBTree(node.left)
  reverseBTree(node.right)
}




