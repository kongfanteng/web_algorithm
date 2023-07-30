/**
 * 树节点
 * @class
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
 * 求树的轮廓
 * @param {TreeNode} node - 树节点结构
 * @param {number} d - 递归次数
 * @param {number[]} outline - 轮廓数组
 * @returns {number[]} 轮廓数组
 * @example
 *
 * ```js
    // 树的轮廓
    // - 求一个二叉树从左测看的轮廓？如何求每行的最大值？
    // - 解法-递归 + 决策树

    // 函数描述
    // - 判断树节点参数 {@link node} 不存在，直接返回
    // - 判断轮廓数组 {@link outline} 第 {@link d} 项无值，数组此项赋值为树节点的值
    // - 递归调用 2 次：左节点，递归次数加一；右节点，递归次数加一；
    // - 返回轮廓数组

    // 调用
    const root = new TreeNode(1)
    root.left = new TreeNode(5)
    root.right = new TreeNode(9)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(3)
    root.right.right.left = new TreeNode(8)
    console.log( leftoutlineTree(root) ) // [ 1, 5, 4, 8 ] 为正确返回
 * ```
 * 
 */
function leftoutlineTree(node, d = 0, outline = []) {
  // - 判断树节点参数 {@link node} 不存在，直接返回
  if (!node) return
  // - 判断轮廓数组 {@link outline} 第 {@link d} 项无值，数组此项赋值为树节点的值
  if (!outline[d]) outline[d] = node.value
  // - 递归调用 2 次：左节点，递归次数加一；右节点，递归次数加一；
  leftoutlineTree(node.left, d + 1, outline)
  leftoutlineTree(node.right, d + 1, outline)
  // - 返回轮廓数组
  return outline
}
/**
 * 求树节点每行最大值集合
 * @param {TreeNode} node - 树节点结构
 * @param {number} d - 递归次数
 * @param {number[]} outline - 每行最大值集合
 * @returns {number[]} 每行最大值集合
 * @example
 *
 * ```js
    // 函数描述
    // - 判断树节点参数 {@link node} 不存在，直接返回
    // - 判断每行最大值集合 {@link outline} 第 {@link d} 项与当前节点值比较，数组此项赋值为两者最大值
    // - 递归调用 2 次：左节点，递归次数加一；右节点，递归次数加一；
    // - 返回最大值集合

    // 调用
    const root = new TreeNode(1)
    root.left = new TreeNode(5)
    root.right = new TreeNode(9)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(2)
    root.right.left = new TreeNode(7)
    root.right.right = new TreeNode(3)
    root.right.right.left = new TreeNode(8)
    console.log( maxOfLine(root) ) // [ 1, 9, 7, 8 ]
 * ```
 * 
 */
function maxOfLine(node, d = 0, outline = []) {
  // - 判断树节点参数 {@link node} 不存在，直接返回
  if (!node) return
  // - 判断每行最大值集合 {@link outline} 第 {@link d} 项与当前节点值比较，数组此项赋值为两者最大值
  outline[d] = Math.max(outline[d] || -1, node.value)
  // - 递归调用 2 次：左节点，递归次数加一；右节点，递归次数加一；
  maxOfLine(node.left, d + 1, outline)
  maxOfLine(node.right, d + 1, outline)
  // - 返回最大值集合
  return outline
}
