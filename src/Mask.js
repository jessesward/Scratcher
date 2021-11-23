export default class Mask {
  constructor(brush, size, width, height) {
    this.brush = brush
    this.brushSize = size || 150
    this.canvas = document.createElement("canvas")
    this.canvas.width = width
    this.canvas.height = height
    this.ctx = this.canvas.getContext("2d")
  }

  checkPercent() {
    const stride = 32
    let alphaPixels = 0
    const totalPixels = this.canvas.width * this.canvas.height
    const data = this.ctx.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    ).data
    for (let i = 3; i < data.length; i += 4 * stride) {
      if (data[i] > 0) {
        alphaPixels++
      }
    }
    return alphaPixels / (totalPixels / stride)
  }

  draw(xPercent, yPercent) {
    const x = xPercent * this.canvas.width
    const y = yPercent * this.canvas.height
    this.ctx.drawImage(
      this.brush,
      x - this.brushSize / 2,
      y - this.brushSize / 2,
      this.brushSize,
      this.brushSize
    )
    this.ctx.save()
  }
}
