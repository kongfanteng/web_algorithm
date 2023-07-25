/**
 * @example
 *
 * ```js
    // 尾递归
    // - 尾递归，通常是单个递归调用体作为程序的最后返回
    function factorial(n) {
      if (n === 0) return 1
      return n * factorial(n - 1)
    }
    // 另一种写法
    function factorial(n, f = 1) {
      if (n === 0) return 1
      return factorial(n - 1, f * n)
    }
    
    // - 因为单个递归发生在递归体最后，因此可以和循环互相转换
    function factorial(n) {
      if (n === 0) return 1
      return n * factorial(n - 1)
    }
    // 转换为循环
    function factorial(n) {
      let f = 1
      while (true) {
        if (n === 0) return 1
        f = n * f
        n = n - 1
      }
      return f
    }

    function factorial(n, f = 1) {
      if (n === 0) return 1
      return factorial(n - 1, f * n)
    }
    // 转换为循环
    function factorial(n, f = 1) {
      while(true){
        if (n === 0) return f
        [n, f] = [n - 1, f * n]
      }
    }

    // 因为可以简单的将尾递归改写成循环，所以编译器通常会用循环对尾递归进行优化（在 Node 上会，浏览器上不会）

    // 斐波那契数列尾递归转循环
    function fib(n, a = 1, b = 1) {
      if (n <= 1) return b
      return fib(n - 1, b, a + b)
    }
    // 转换循环
    function fib(n) {
      let a = 1, b = 1
      for(let i = 2; i <= n; i++) {
        [b, a] = [a + b, b]
      }
      return b
    }

    // 尾递归-快速排序
    // 在原本递归的尾部有两个 qsort 递归调用。这两次递归可以优化成一次，减少调用时间。如何简化？
    function qsort(A, lo = 0, hi = A.length) {
      if (hi - lo <= 1) return
      const p = partition(A, lo, hi)
      qsort(A, lo, p)
      qsort(A, p + 1, hi)
    }
    // 快速排序优化
    function qsort(A, lo = 0, hi = A.length) {
      while (lo < hi) {
        const p = partition(A, lo, hi)
        qsort(A, lo, p)
        lo = p + 1
      }
    }
 * ```
 * 
 */