/**
  * 组合（从集合 S 中取 k 个）
  * @param {string[]} S 原数组
  * @param {number} k - 取出数组中元素的个数
  * @return {string[]} - 返回组合数组集合
  * @example
  *
  * ```js
      // 组合问题
      // 从集合 {a, b, c, d, e, f, g} 中取出 1 个元素，有多少种组合？程序如何实现？
      // 有 7 中组合
      for(let i = 0; i < 7; i++) {
        yield S[i]
      }
      // 从集合 {a, b, c, d, e, f, g} 中取出 2 个元素，有多少种组合？程序如何实现？
      // (7, 2) = (7!) / ( (7-2)!2! ) = 21
      for(let i = 0; i < 7; i++) {
        for(let j = i + 1; j < 7; j++) {
          yield S[i]::S[j]
        }
      }
      // 从集合 {a, b, c, d, e, f, g} 中取出 3 个元素，有多少种组合？程序如何实现？
      // (7, 3) = (7!) / ( (7-3)!3! ) = ...
      for(let i = 0; i < 7; i++) {
        for(let j = i + 1; j < 7; j++) {
          for(let k = j + 1; k < 7; k++){
            yield S[i]::S[j]::S[k]
          }
        }
      }

      // 组合问题分析
      // 从 ABCD 四个球中取出 2 个，如果选择 A，那么从 BCD 中再取 1 个，如果不选择 A，那么从 BCD 中再取 2 个

      // 递归条件（从集合 S 中取 k 个）
      // 初始条件 k = 0 或者 k === |S| 返回当前解
      // 递归
        // 选择一个元素 x
        // 递归：包含这个元素 x
        // 递归：不包含这个元素 x
        // 收集上面两步的结果
      
      // 调用
      const S = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
      console.log(combination(S, 3))

  * ```
  * 
  */
function combination(S, k) {
  // 初始条件 k = 0 或者 k === |S| 返回当前解
  if (k === 0 || S.length === k) {
    return [ S.slice(0, k) ]
  }
  // 选择第一个元素 first
  const [first, ...others] = S
  let r = []
  // 递归：包含这个元素 x
  r = r.concat(combination(others, k - 1).map(c => [first, ...c]))
  // 递归：不包含这个元素 x
  r = r.concat(combination(others, k))
  // 收集上面两步的结果
  return r
}