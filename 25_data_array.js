/**
 * @example
 *
 * ```js
    // 数组（Array）
    // - 追加（append/push) - O(1)
    // - 索引 修改/访问(A[idx] = ...) - O(1)
    // - 插入（insert）- O(n)
    // - 删除（delete/remove）- O(n)
    // - 合并（concat/merge）- O(m + n)
    
    // 数组实现
    // - 元素在内存中呈现连续性排列
    // - 每个元素可以存储字节数相同数据（或地址）
    
    // 卫星数据（存储地址）
    // 数组元素用于存储地址时，这些地址指向的数据被称为卫星数据

    // 访问/修改 - 索引 - O(1)
    // - a[3] = 10
    // - - a = 0xA000
    // - -  a[3] = 0xA000 + 3 * 8 = 0xA018
    // - - LOAD A 10
    // - - STORE A 0xA018

    // 追加元素的复杂度？
    // - 数组有一块区域为预留区域，此时追加为 O(1)，追加超出预留区域需要再内存中另选一块地方，此时复杂度就上升了
    // - 一种分配算法
    // - - 对任意数组，元素个数为 n 10，实际分配空间为你 N 20，N = 2n
    // - - 例如：对 n = k，N = 2k 的数组追加 k + 1 个元素
    // - - 对 k 次追加，每次执行常数时间
    // - - 对 k + 1 次追加，需要拷贝 2k 个元素到新的内存区域
    // - - 平均情况进行 k + 1 次追加和 2k 次拷贝
    // - - T = (3k + 1)/k，约等于 3c

    // 插入元素 O(n)
    // - [1, 2, 3, 4, 5, 6] 值 7 插入到第 2 个位置，需要将 3, 4, 5, 6 依次向后移动，留出需要 7 需要插入的位置

    // 删除元素 O(n)
    // - [1, 2, 3, 4, 5, 6] 删除值 3，需要依次将 4, 5, 6 向前移动一个位置

    // 合并数组 - O(m+n)
    // - 数组 A 长度为 n，数组 B 长度为 m，合并后得到数组 C = [a1, a2, ..., an, b1, b2, ...,bn, 预留区域]

    // 数组方法复杂度
    // - push - O(1); pop - O(1); shift - O(n); unshift - O(n); slice - O(n); concat - O(n);
    // - splice - O(n); find - O(n); filter - O(n); every - O(n);

 * ```
 * 
 */