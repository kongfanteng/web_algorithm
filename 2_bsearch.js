/**
 * 二分查找（循环不变式）
 * @param {number[]} A 数组 
 * @param {number} x 数字 
 * @return {number} 返回： x 在 A 中的位置，不存在返回 -1
 * @example
 *
 * ```js
    // const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
    // A.length = 11
    // find 68
    // 循环前：l 查找范围的左边界，r 查找范围的右边界，guess l,r 的中间位置
    // 循环后：l 新的查找范围的左边界，r 新的查找范围的右边界，guess -
    // 每次循环结束后，查找的值要么在位置 l-r 之间，要么不存在
    // init g=,l=0,r=11
    // first g=5,l=6,r=11
    // second g=8,l=9,r=11
    // third g=10,l=9,r=11
    // forth g=9,l=10,r=9
    const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
    console.log( bsearch(A, 19) )
 * ```
 * 
 */
function bsearch(A, x) {
  let l = 0, // l 查找范围的左边界
      r = A.length, // r 查找范围的右边界
      guess // 猜测位置
  while (l <= r) {
    guess = Math.floor( (l + r) / 2 )
    // 循环不变式
    // guess 等于 l,r 的中间位置
    // l：查找范围左 r：查找范围右
    if (A[guess] === x) return guess
    else if (A[guess] > x) r = guess - 1
    else l = guess + 1
    // l 新的查找范围的左边界，r 新的查找范围的右边界
  }
  
}