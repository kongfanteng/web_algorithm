
/**
 * 汉诺塔问题（伪代码，不可执行）
 * @param {number} n - 共有几个碟子
 * @example
 *
 * ```js
    // 递归如何处理问题：
    // 问题足够简单，直接解决，否则将问题拆解成和原问题有相同结构的更小问题，解决每个这样的更小问题，返回整个结果
    // 递归将原问题拆分成为若干个规模更小、独立的若干个可以被解决的子问题
    // 递归优点：通过递归我们避免了陷入解决重复的细节

    // 递归例子 1：阶乘
    function factorial (n) {
      if (n === 0) {
        return 1
      } else {
        return n * factorial(n - 1)
      }
    }

    // 递归例子 1：汉诺塔问题
    // 1、把 3 个碟子从 A 移动到 C；2、每次只能移动一个；3、大碟子不能放到小碟子上面；
    // 仅有一个碟子时：
    moveTower 1 A -> C use B {
      moveDisk A -> C
    }
    // 2 个碟子时：
    moveTower 2 A -> C use B {
      moveTower 1 A -> B use C
      moveDisk A -> C
      moveTower 1 B -> C use A
    }
    // 3 个碟子时：
    moveTower 3 A -> C use B {
      moveTower 2 A -> B use C
      moveDisk A -> C
      moveTower 2 B -> C use A
    }
    // 4 个碟子时：
    moveTower 4 A -> C use B {
      moveTower 3 A -> B use C
      moveDisk A -> C
      moveTower 3 B -> C use A
    }
    // n 个碟子时：
    moveTower n A -> C use B {
      moveTower n-1 A -> B use C
      moveDisk A -> C
      moveTower n-1 B -> C use A
    }

    // 代码执行
    // 递归结束条件，只有一个碟子需要移动，moveDisk(from, to)
    // 递归问题：1、moveTower(n - 1, from, use, to); 2、moveDisk(from, to); 3、moveTower(n - 1, use, to, from)

    // 调用
    const n = 3
    const from = [3, 2, 1]
    const to = []
    const use = []
    moveTower(3, from, to, use)
    console.log('from, to, use:', from, to, use)
 * ```
 * 
 */
function moveTower(n, from, to, use) {
  // 递归结束条件，只有一个碟子需要移动，moveDisk(from, to)
  if (n === 1) {
    moveDisk(from, to)
    return
  }
  // 递归问题：1、moveTower(n - 1, from, use, to); 2、moveDisk(from, to); 3、moveTower(n - 1, use, to, from)
  moveTower(n - 1, from, use, to);
  moveDisk(from, to);
  moveTower(n - 1, use, to, from)
}

/**
 * 碟子交换
 * @param {number[]} from 被交换数组
 * @param {number[]} to 交换到的数组
 */
function moveDisk(from ,to) {
  from.splice(0).forEach(f => to.push(f))
}