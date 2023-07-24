/**
 * 枚举子集
 * @param {number[]} S - 全集
 * @param {boolean[]} decisions - 布尔型数组，默认 []
 * @return {number[]} 返回子集合
 * @example
 *
 * ```js
    // 求集合 {a, b, c} 的所有子集
    // {a, b, c} {a, b} {a, c} {b, c} {a} {b} {c} {}
    // 决策树1 a -Y-> b -Y-> c -Y-> {a, b, c}
    // 决策树2 a -N-> c -N-> b -N-> {} ...
    // 决策树的每个决策代表选择一个字符放入子集
    // 决策树的路径代表完整的决策
    // 决策树的叶子节点代表最终结果
    // 枚举一个集合的所有子集，可以转换成依次决策要不要选择集合中的某个元素的决策问题
    // 每一步有两个选择（是或否），一共有 n 步，因此一共有 2 的 n 次方种结果

    // 代码描述
    // 所有决策都已完成 S.length === decisions.length，返回计算结果
    // 定义返回数组 r，对每次递归返回结果进行数组合并，decisions 中两种结果
    // 最后返回最终数组集合 r

    // 调用
    const S = ['a', 'b', 'c']
    console.log(find_subsets(S, []))
 * ```
 * 
 */
function find_subsets(S, decisions = []) {
  // 所有决策都已完成 S.length === decisions.length，返回计算结果
  if (S.length === decisions.length) {
    const res = []
    decisions.forEach((decision, i) => decision && res.push(S[i]));
    return [res]
  }
  // 定义返回数组 r，对每次递归返回结果进行数组合并，decisions 中两种结果
  let r = []
  r = r.concat(find_subsets(S, decisions.concat(true)))
  r = r.concat(find_subsets(S, decisions.concat(false)))
  // 最后返回最终数组集合 r
  return r
}
