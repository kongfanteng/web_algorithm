/**
 * 递归绘制树
 * @param {CanvasRenderingContext2D} ctx - canvas 上下文，canvas.getContext('2d')
 * @param {number[]} p 绘制开始的位置 [x, y]
 * @param {number} a 方向（和垂直屏幕线的夹角度数）
 * @param {number} w 枝干的宽度
 * @param {number} h 枝干的长度
 * @param {number} L 递归深度
 * @example
 *
 * ```js
    // 函数体解析
    // 递归初始条件，深度大于 10 直接返回
    // 使用 canvas 绘制一个树干
    // 计算下一个绘制位置 nextp

    // 调用（在浏览器中执行）
    let canvas = document.createElement('canvas')
    canvas.height = 1000;
    canvas.width = 1000;
    let ctx = canvas.getContext('2d')
    let p = [500, 700]
    tree_plot(ctx, p, 0, 20, 80, 0)
    document.getElementsByTagName("html")[0].appendChild(canvas)
 * ```
 * 
 */
function tree_plot(ctx, p, a, w, h, L) {
  // 递归初始条件，深度大于 10 直接返回
  if (L > 10) return
  // const [x, y] = p
  const x = p[0]
  const y = p[1]
  // 使用 canvas 绘制一个树干
  ctx.translate(x, y)
  ctx.rotate((a * Math.PI) / 180)
  ctx.moveTo(-w / 2, 0)
  ctx.lineTo((-w * 0.65) / 2, -h)
  ctx.lineTo((w * 0.65) / 2, -h)
  ctx.lineTo(w / 2, 0)
  let gradient = ctx.createLinearGradient(0, 0, 170, 0)
  gradient.addColorStop('0', 'magenta')
  gradient.addColorStop('0.5', 'blue')
  gradient.addColorStop('1.0', 'red')
  // ctx.strokeStyle = color(L) // 函数未实现
  ctx.strokeStyle = gradient
  ctx.setTransform(1, 0, 0, 1, 0, 0)
  ctx.fill()
  // 计算下一个绘制位置 nextp
  const nextX = x + h * Math.sin((a * Math.PI) / 180)
  const nextY = y - h * Math.cos((a * Math.PI) / 180)
  tree_plot(ctx, [nextX, nextY], a + 15, w * 0.65, h * 0.9, L + 1)
  tree_plot(ctx, [nextX, nextY], a - 15, w * 0.65, h * 0.9, L + 1)
}
