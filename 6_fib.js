/**
 * 斐波那契数列前 n 项之和
 * @param {number} n 斐波那契数列前 n 项
 * @returns {number} 斐波那契数列前 n 项之和
 * @example
 *
 * ```js
    // 斐波那契数列 1, 1, 2, 3, 5, 8, 13, 21, 34
    // f(n) = f(n - 1) + f(n - 2), n > 2
    // f(n) = 1, // n = 1
    // f(n) = 1, // n = 2

    console.log(fib(6))
 * ```
 * 
 */
function fib(n) {
  return n < 2 ? 1 : fib(n - 1) + fib(n - 2)
}
console.log(fib(8))