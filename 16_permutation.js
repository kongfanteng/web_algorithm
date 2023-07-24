
/**
 * 字符串全排列
 * @param {string} str - 字符串
 * @param {string} decisions - str 的子集
 * @return {string[]} 返回的全排列组合
 * @example
 *
 * ```js
    // 全排列抽象问题抽象
    function permutation(str, decisions) {
      // 所有决策都已经完成
      if (decisions 中包含了 str 中全部字符) {
        返回结果
      }
      let r = []
      for(c in str 中所有不在 decisions 中的字符) {
        r = r.concat( permutaion(str, decisions + c) )
      }
      return r
    }

    // exhaustive_search 穷举搜索
    // 枚举问题可以转换成决策问题
    // 画出问题的决策树，然后根据决策树写出递归程序
    function exhaustive_search(state, decisions) {
      if (所有决策都完成) {
        返回结果
      }
      根据当前状态算出所有可能的决策
      递归调用这些决策
      收集递归的结果，返回
    }

    // 调用
    const str = 'abc'
    console.log( permutation(str) )
 * ```
 * 
 */
function permutation(str, decisions = '') {
  // 所有决策都已经完成
  if (str.length === decisions.length) {
    return decisions
  }
  let r = []
  // 遍历 str 中所有不在 decisions 中的字符
  
  let notInDecisions = ''
  for (k in str) {
    if (decisions.indexOf(str[k]) === -1) {
      notInDecisions += str[k]
    }
  }
  for(c in notInDecisions) {
    r = r.concat( permutation(str, decisions + notInDecisions[c]) )
  }
  return r
}