const { insert_sort } = require("./3_insert_sort");

/**
 * 桶排序
 * @param {number[]} A 原数组
 * @param {number} k 桶的数量
 * @param {number} A 每只桶的大小
 * @return {number[]} 排序好的数组
 * @example
 *
 * ```js
    // 分析
    // 非比较型
    // 排序键为数字的集合
    // 计数排序是一种特殊的桶排序
    // 桶的数量 = 数组中元素最大值 + 1
    // const A = [29, 25, 3, 49, 9, 37, 21, 43]
    // [0, 9] - 3, 9; [10-19] - null; [20, 29] - 29, 25, 21; [30, 39] - 37; [40, 49] - 49, 43;
    // 最坏情况 O(n^2); 最好情况 O(n + k); 平均情况 O(n + k); 最坏情况空间复杂度 O(n + k);
    // 第一步：了解输入，划分桶；最大值 max = 49，桶数 k = 5，桶容量 S = 10；
    // 第二步：遍历数组，将元素放入对应的桶中；此过程可以使用一组链表来实现上述过程；
    // 第三步：对每个桶中的数据进行排序，排序使用插入排序完成；例如，[20, 29] - 29, 25, 21 ==> 21, 25, 29；

    // 代码描述
    // 创建空桶数组
    // 循环 A 把元素放入桶中 ~~( A[i] / S )
    // 使用插入排序对每个桶进行排序
    // 取出数据

    // 调用
    const A = [29, 25, 3, 49, 9, 37, 21, 43]
    console.log(bucket_sort(A, 5, 10))
 * ```
 * 
 */
function bucket_sort(A, k, S) {
  // 创建空桶数组
  const buckets = Array.from({length: k}, () => [])
  // 循环 A 把元素放入桶中 ~~( A[i] / S )
  for (let i = 0; i < A.length; i++) {
    const diget = ~~( A[i] / S )
    buckets[diget].push(A[i])
  }
  // 使用插入排序对每个桶进行排序
  buckets.forEach(bucket => {
    insert_sort(bucket)
  });
  // 取出数据
  return [].concat(...buckets)
}