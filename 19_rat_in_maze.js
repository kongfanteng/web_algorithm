/**
 * 回溯算法 - 老鼠走出迷宫问题
 * @param {number[][]} - maze 迷宫矩阵
 * @param {number[]} pos - 当前位置
 * @param {number[][]} path - 路径，二维数组
 * @param {number[][]} transverse - 到过的地方记录
 * @return {number[][]} - 正确的路径
 * @example
 *
 * ```js
    // 回溯算法（BackTracking）
    // - 迷宫里有一只老鼠，在左上角的位置
    // - 老鼠想要找到出口走出迷宫（左下）
    // - 灰色区域代表墙，白色区域可以行走
    // - 每次老鼠走一格
    // - 写一个算法帮助老鼠走出迷宫

    // 递归天然的回溯结构
    // - 每次递归（节点）可以看成迷宫的一个格子
    // - 老鼠在每一个格子都面临选择
    // - 利用递归它可以逐一尝试每个选择
    // - 如果某次选择没有达成最终目的可以进行回溯
    // - 直到找到问题的解

    // 回溯算法函数，终止条件：到达终点；子问题：找到所有没有走过的选择，递归前往每个选择
    // 利用递归，思考完整的走迷宫，变成了思考一步要做什么

    // 代码描述
    // - 结束条件 maze[x][y] === 2 返回 path
    // - 记录走过当前位置
    // - 找到可能的选择
    // - 对每个选择，继续递归，寻找路径

    // 调用
    const maze = [
      [0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 0],
      [0, 0, 0, 1, 0, 1],
      [1, 1, 0, 0, 0, 1],
      [0, 0, 0, 1, 1, 1],
      [2, 1, 0, 0, 0, 0],
    ]
    console.log(rat_in_maze(maze))
 * ```
 * 
 */
function rat_in_maze(maze, pos = [0, 0], path = [[...pos]], transverse = []) {
  // - 结束条件 maze[x][y] === 2 返回 path
  const [x, y] = pos
  if (maze[x][y] === 2) {
    return path
  }
  // - 记录走过当前位置
  transverse[x * maze.length + y] = 1
  // - 找到可能的选择
  const choices = [
    [x + 1, y],
    [x - 1, y],
    [x, y + 1],
    [x, y - 1],
  ].filter(([x, y]) => {
    return (
      x >= 0 &&
      y >= 0 &&
      x < maze.length &&
      y < maze[0].length &&
      maze[x][y] !== 1 &&
      !transverse[x * maze.length + y]
    )
  })
  // - 对每个选择，继续递归，寻找路径
  for (let [x, y] of choices) {
    const p = rat_in_maze(maze, [x, y], path.concat([[x, y]]), transverse)
    if (p) return p
  }
}
const maze = [
  [0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 1],
  [2, 1, 0, 0, 0, 0],
]
console.log(rat_in_maze(maze))
