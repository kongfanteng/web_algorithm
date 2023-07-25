
/**
 * 搜索问题（n 皇后）
 * @desc 问题：一个 8*8 的国际象棋棋盘，如何放置 8 个皇后，互相不能攻击，皇后可以攻击上下左右和左上右上左下右下八个方面
 * @param {number} n - 皇后的数量和棋盘的大小
 * @param {number[]} decisions - 决策（1 维数组） 
 * @return {number[]} 返回所有可能的决策
 * @example
 *
 * ```js
    // 搜索问题（8 皇后）
    // 问题：一个 8*8 的国际象棋棋盘，如何放置 8 个皇后，互相不能攻击
    // 搜索问题：利用递归对所有状态进行枚举。所有状态称作状态空间
    // 4 皇后问题
    // - 4 个皇后，放到 4*4 的棋盘上，一共有多少种方法？
    // - 从 16 个位置中拿出 4 个放皇后，一共 (16 4) 中；(16 4) = 16! / ((16 - 4)! * 4!) = 1820
    // 8 皇后问题
    // - 8 个皇后，放到 8*8 的棋盘上，一共有多少种方法？
    // - 从 64 个位置中拿出 8 个放皇后，一共 (64 8) 中；(64 8) = 64! / ((64 - 8)! * 8!) = 4426165368
    // n 皇后问题的解 - 抽象
    // - 4 皇后一种可能的解 decisions = [1, 7, 8, 14]

    // 函数描述
    // - 递归结束条件，决策数组长度等于皇后总数量，判断是否为最终决策 is_goal 来决定是否返回
    // - 定义 r 空数组用以放置决策，循环棋盘总大小 n*n，决策中无当前位置执行下一步
    // - r 合并递归函数 queen 返回的决策
    // - 返回决策集合 r

    // 调用
    const n = 4
    console.log(queen(n)) // 此时有重复解 [ 1, 7, 8, 14 ], [ 1, 7, 14, 8 ]
 * ```
 * 
 */
function queen(n, decisions = []) {
  // - 递归结束条件，决策数组长度等于皇后总数量，判断是否为最终决策 is_goal 来决定是否返回
  if (decisions.length === n) {
    return is_goal(n, decisions) ? [decisions] : []
  }
  // - 定义 r 空数组用以放置决策，循环棋盘总大小 n*n，决策中无当前位置执行下一步
  let r = []
  for (let i = 0; i < n * n; i++) {
    if (decisions.indexOf(i) === -1) {
      // - r 合并递归函数 queen 返回的决策
      r = r.concat( queen(n, decisions.concat(i)) )
    }    
  }
  // - 返回决策集合 r
  return r
}
/**
 * 搜索问题（n 皇后去掉重复解：使用 hash）
 * @desc 问题：一个 8*8 的国际象棋棋盘，如何放置 8 个皇后，互相不能攻击，皇后可以攻击上下左右和左上右上左下右下八个方面
 * @param {number} n - 皇后的数量和棋盘的大小
 * @param {number[]} decisions - 决策（1 维数组） 
 * @return {number[]} 返回所有可能的决策
 * @example
 *
 * ```js
    // 函数描述，解决重复解：
    // - 函数参数新增数组用以存储哈希对象集合 hset
    // - 对符合皇后数量的决策进行排序 sort
    // - 定义哈希值 hash 为决策使用横线拼接的字符串 join('-')
    // - 在哈希集合 hset 中已有的不进行操作
    // - 在哈希集合 hset 中没有的进行赋值为 1，hset[hash] = 1

    // 调用
    const n = 4
    console.log(queen_not_repeat(n)) // 不在有重复解 [ 1, 7, 8, 14 ], [ 1, 7, 14, 8 ] 为执行成功，返回 [ [ 1, 7, 8, 14 ], [ 2, 4, 11, 13 ] ]

    // 问题
    // - 去掉重复解后，考虑性能问题，5 皇后问题以后执行越来越慢，无法解决 8 皇后问题
 * ```
 * 
 */
function queen_not_repeat(n, decisions = [], hset = {}) {
  // - 递归结束条件，决策数组长度等于皇后总数量，判断是否为最终决策 is_goal 来决定是否返回
  if (decisions.length === n) {
    // - 函数参数新增数组用以存储哈希对象集合 hset
    // - 对符合皇后数量的决策进行排序 sort
    decisions.sort((a,b) => a - b)
    // - 定义哈希值 hash 为决策使用横线拼接的字符串 join('-')
    const hash = decisions.join('-')
    // - 在哈希集合 hset 中已有的不进行操作
    if (hset[hash]) return []
    // - 在哈希集合 hset 中没有的进行赋值为 1，hset[hash] = 1
    hset[hash] = 1
    return is_goal(n, decisions) ? [decisions] : []
  }
  // - 定义 r 空数组用以放置决策，循环棋盘总大小 n*n，决策中无当前位置执行下一步
  let r = []
  for (let i = 0; i < n * n; i++) {
    if (decisions.indexOf(i) === -1) {
      // - r 合并递归函数 queen_not_repeat 返回的决策
      r = r.concat( queen_not_repeat(n, decisions.concat(i), hset) )
    }    
  }
  // - 返回决策集合 r
  return r
}

/**
 * 搜索问题（解决 5 皇后问题以上执行慢问题：不去判断 is_goal）
 * @desc 问题：一个 8*8 的国际象棋棋盘，如何放置 8 个皇后，互相不能攻击，皇后可以攻击上下左右和左上右上左下右下八个方面
 * @param {number} n - 皇后的数量和棋盘的大小
 * @param {number[]} decisions - 决策（1 维数组） 
 * @return {number[]} 返回所有可能的决策
 * @example
 *
 * ```js
    // 函数描述，is_goal 无需判断
    // - 去掉 is_goal 函数判断
    // - 遍历棋盘皇后时，直接遍历决策数组调用 compatible 函数来判断是否合并到决策集合 r

    // 调用
    const n = 5
    console.log(queen_not_is_goal(n)) // 解决 5 皇后问题以上执行慢问题

    // 问题
    // - 解 7 皇后以下问题速度可以，解 7 皇后速度很慢，更无法解 8 皇后问题
 * ```
 * 
 */
function queen_not_is_goal(n, decisions = [], hset = {}) {
  // - 递归结束条件，决策数组长度等于皇后总数量，判断是否为最终决策 is_goal 来决定是否返回
  if (decisions.length === n) {
    // - 函数参数新增数组用以存储哈希对象集合 hset
    // - 对符合皇后数量的决策进行排序 sort
    decisions.sort((a,b) => a - b)
    // - 定义哈希值 hash 为决策使用横线拼接的字符串 join('-')
    const hash = decisions.join('-')
    // - 在哈希集合 hset 中已有的不进行操作
    if (hset[hash]) return []
    // - 在哈希集合 hset 中没有的进行赋值为 1，hset[hash] = 1
    hset[hash] = 1
    // - 去掉 is_goal 函数判断
    return [decisions]
  }
  // - 定义 r 空数组用以放置决策，循环棋盘总大小 n*n，决策中无当前位置执行下一步
  let r = []
  for (let i = 0; i < n * n; i++) {
    if (decisions.indexOf(i) === -1) {
      // - 遍历棋盘皇后时，直接遍历决策数组调用 compatible 函数来判断是否合并到决策集合 r
      if (decisions.every(j => compatible(j, i, n))){
        // - r 合并递归函数 queen_not_is_goal 返回的决策
        r = r.concat( queen_not_is_goal(n, decisions.concat(i), hset) )
      }
    }    
  }
  // - 返回决策集合 r
  return r
}
/**
 * 搜索问题（解决 8 皇后问题以上执行慢问题：对决策数组已有的值及之前的数不去进行循环）
 * @desc 问题：一个 8*8 的国际象棋棋盘，如何放置 8 个皇后，互相不能攻击，皇后可以攻击上下左右和左上右上左下右下八个方面
 * @param {number} n - 皇后的数量和棋盘的大小
 * @param {number[]} decisions - 决策（1 维数组） 
 * @return {number[]} 返回所有可能的决策
 * @example
 *
 * ```js
    // 函数描述，is_goal 无需判断
    // - 定义开始循环位置 start 为决策最后一位值，不存在默认为 1
    // - 循环棋盘时，从 start + 1 开始循环

    // 调用
    const n = 8
    console.log(queen_deal_up_8(n)) // 解决 5 皇后问题以上执行慢问题

    // 问题：
    // - 保证 decisions 递增，但 10 皇后以上问题执行很慢
 * ```
 * 
 */
function queen_deal_up_8(n, decisions = [], hset = {}) {
  // - 递归结束条件，决策数组长度等于皇后总数量，判断是否为最终决策 is_goal 来决定是否返回
  if (decisions.length === n) {
    // - 函数参数新增数组用以存储哈希对象集合 hset
    // - 对符合皇后数量的决策进行排序 sort
    decisions.sort((a,b) => a - b)
    // - 定义哈希值 hash 为决策使用横线拼接的字符串 join('-')
    const hash = decisions.join('-')
    // - 在哈希集合 hset 中已有的不进行操作
    if (hset[hash]) return []
    // - 在哈希集合 hset 中没有的进行赋值为 1，hset[hash] = 1
    hset[hash] = 1
    // - 去掉 is_goal 函数判断
    return [decisions]
  }
  // - 定义 r 空数组用以放置决策，循环棋盘总大小 n*n，决策中无当前位置执行下一步
  let r = []
  // - 定义开始循环位置 start 为决策最后一位值，不存在默认为 1
  const start = decisions[decisions.length - 1] || -1
  // - 循环棋盘时，从 start + 1 开始循环
  for (let i = start + 1; i < n * n; i++) {
    if (decisions.indexOf(i) === -1) {
      // - 遍历棋盘皇后时，直接遍历决策数组调用 compatible 函数来判断是否合并到决策集合 r
      if (decisions.every(j => compatible(j, i, n))){
        // - r 合并递归函数 queen_deal_up_8 返回的决策
        r = r.concat( queen_deal_up_8(n, decisions.concat(i), hset) )
      }
    }    
  }
  // - 返回决策集合 r
  return r
}

/**
 * 判断棋盘上两个皇后是否互相攻击 
 * @param {number} p - 其中一个皇后位置的索引
 * @param {number} q - 另一个皇后位置的索引
 * @param {number} n - 棋盘的大小
 * @return {boolean} - 两个皇后是否相互攻击，相互攻击返回 false，不相互攻击返回 true
 * @example
 *
 * ```js
  // 函数描述
  // - "~~" 表示的就是两次取反的自然结果，保持原值，得到整数 
  // - 计算 p 皇后的 x, y 值，x = ~~(p/n); y = p % n;
  // - 计算 q 皇后的 x, y 值，x = ~~(q/n); y = q % n;
  // - p 和 q 不能在彼此的四面八方，即 x1 - x2 的绝对值不能等于 y1 - y2，x1 !== x2，y1 !== y2

  // 调用
  const p = 1, q = 7, n = 4
  console.log(compatible(p, q, n))
 * ```
 * 
 */
function compatible(p, q, n) {
  // - 计算 p 皇后的 x, y 值，x = ~~(p/n); y = p % n;
  // - 计算 q 皇后的 x, y 值，x = ~~(q/n); y = q % n;
  const [x1, y1] = [~~(p/n), p % n]
  const [x2, y2] = [~~(q/n), q % n]
  // - p 和 q 不能在彼此的四面八方，即 x1 - x2 的绝对值不能等于 y1 - y2，x1 !== x2，y1 !== y2
  return x1 !== x2 && y1 !== y2 && Math.abs(x1 - x2) !== Math.abs(y1 - y2)
}
/**
 * 判断一组决策是不是最终答案
 * @param {number} n - 棋盘大小
 * @param {number[]} decisions - 决策
 * @return {boolean} 是答案返回 true，不是答案返回 false
 * @example
 *
 * ```js
    // 函数描述
    // - 双循环遍历每两个皇后的位置
    // - 两次循环到同一个皇后时，跳出循环，继续下一个循环
    // - 通过 compatible 函数判断两个皇后是否会相互攻击，相互攻击直接抛出 false，表示决策不是最终答案
    // - 循环完成发现决策中每两个皇后不会相互攻击，返回 true，表示决策是最终答案

    // 调用
    const n = 4, decisions = [1, 7, 8, 14]
    console.log( is_goal(n, decisions) ) // 返回 true 表示函数执行成功
    console.log( is_goal(n, [1, 2, 8, 14]) ) // 返回 false 表示函数执行成功
 * ```
 * 
 */
function is_goal(n, decisions) {
  // - 双循环遍历每两个皇后的位置
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n; j++) {
      // - 两次循环到同一个皇后时，跳出循环，继续下一个循环
      if (i === j) continue
      // - 通过 compatible 函数判断两个皇后是否会相互攻击，相互攻击直接抛出 false，表示不是最终答案
      if (!compatible(decisions[i], decisions[j], n)) return false
    }
  }
  // - 循环完成发现决策中每两个皇后不会相互攻击，返回 true，表示决策是最终答案
  return true
}