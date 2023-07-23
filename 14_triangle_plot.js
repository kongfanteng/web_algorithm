/**
 * 等边三角形绘制
 * @param {CanvasRenderingContext2D} ctx - canvas 上小文
 * @param {number[]} p - [x, y] 绘制开始的位置
 * @param {number} a - 方向
 * @param {number} h - 等边三角形的高度
 * @param {number} L - 递归深度
 * @return {void} - 无返回值
 * @example
 *
 * ```js
    // 结束条件 L > 10 结束递归

    // 调用（在浏览器中执行）
    let canvas = document.createElement('canvas')
    canvas.height = 1000;
    canvas.width = 1200;
    let ctx = canvas.getContext('2d')
    let p = [600, 200]
    triangle_plot(ctx, p, 0, 500, 0)
    document.getElementsByTagName("html")[0].appendChild(canvas)
 * ```
 * 
 */
function triangle_plot(ctx, p, h, L) {
  // 递归结束条件
  if (L > 10) return
  ctx.beginPath()
  // const [x, y] = p
  const x = p[0]
  const y = p[1]
  ctx.moveTo(x, y)
  // 三角形左下角点的坐标 [x - Math.sin(Math.PI / 3) , y + h]
  ctx.lineTo(x - h / Math.sin(Math.PI / 3) / 2 , y + h)
  // 三角形右下角点的坐标 [x + Math.sin(Math.PI / 3) , y + h]
  ctx.lineTo(x + h / Math.sin(Math.PI / 3) / 2 , y + h)
  ctx.strokeStyle = 'blue'
  ctx.closePath()
  ctx.stroke()
  triangle_plot(ctx, p, h / 2, L + 1)
  triangle_plot(ctx, [x - h / Math.sin(Math.PI / 3) / 4 , y + h / 2 ], h / 2, L + 1)
  triangle_plot(ctx, [x + h / Math.sin(Math.PI / 3) / 4 , y + h / 2], h / 2, L + 1)
}