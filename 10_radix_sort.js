/**
 * 基数排序
 * @param {number[]} A 原数组
 * @return {void} 无返回
 * @example
 *
 * ```js
		// 分析
		// 按照相同位有效数字额值分组排序整数
		// const A = [255, 171, 632, 715, 241, 120]
		// 首位 5, 1, 2, 5, 1, 0 -> xx0, xx1, xx1, xx2, xx5, xx5 -> 120, 341, 271, 632, 255, 745
		// 二次 2, 4, 7, 3, 5, 4 -> x2x, x3x, x4x, x4x, x5x, x7x -> 120, 632, 341, 745, 255, 271
		// 三次 1, 6, 3, 7, 2, 2 -> 1xx, 2xx, 2xx, 3xx, 6xx, 7xx -> 120, 255, 271, 341, 632, 745
		// 根据左边数第 i 位有效数字排序 A
		// 取得某一位数字，取第三位：6789 % 1000 = 789, 789 % 100 = 7.89, 去除小数点后得到 7
		// 算法要求：维持当前顺序：比较位值相同；排序：比较位值不同；
		// 按位排序的一种实现：先入先出-队列
		// 数组最大值 max，放置每位数的桶 buckets [0, 9]，有效数位 m，
		// 循环不变式 m < max，函数最后下一个位数 m *= 10
		// 根据元素位置把元素放入桶中 ~~( (number %  (m * 10) ) / m )
		// 从桶中取出元素

		// 调用
		const A = [255, 171, 632, 715, 241, 120]
		radix_sort(A)
		console.log(A)
 * ```
 * 
 */
function radix_sort(A) {
  // 数组最大值 max
  const max = Math.max(...A)
  // 放置每位数的桶 buckets [0, 9]
  const buckets = Array.from({ length: 10 }, () => [])
	// 有效数位 m
	let m = 1
  // 循环不变式 m < max，函数最后下一个位数 m *= 10
	while (m < max) {
		// 根据元素位置把元素放入桶中 ~~( (number %  (m * 10) ) / m )
		A.forEach(number => {
			const diget = ~~( ( number %  (m * 10) ) / m )
			buckets[diget]?.push(number)
		});
		// 从桶中取出元素
		let j = 0
		buckets.forEach(bucket => {
			while(bucket.length > 0) {
				A[j++] = bucket.shift()
			}
		});
		m *= 10
	}
}
