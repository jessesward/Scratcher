export default class Mask {
  constructor(brush, size, width, height) {
    this.brush = brush
    this.brushSize = size ?? 150
    this.canvas = document.createElement("canvas")
    this.canvas.width = width
    this.canvas.height = height
    this.parentWidth = 0
    this.parentHeight = 0
    this.ctx = this.canvas.getContext("2d")
    // window.addEventListener('resize', () => {
    //   this.handleResize()
    // })
  }

  // handleResize() {
  //   this.parentWidth = window.innerWidth
  //   this.parentHeight = window.innerHeight
  //   const newCanvas = document.createElement('canvas')
  //   newCanvas.width = this.parentWidth
  //   newCanvas.height = this.parentHeight
  //   const newCtx = newCanvas.getContext('2d')
  //   const { x, y, width, height } = this.centerImageBounds(this.canvas)
  //   this.ctx.drawImage(this.canvas, x, y, width, height)
  //   this.canvas = newCanvas
  //   this.ctx = newCtx
  // }

  // centerImageBounds(image) {
  //   const ratio = image.height / image.width
  //   let width, height
  //   if (ratio < this.parentHeight / this.parentWidth) {
  //     height = this.parentHeight
  //     width = (image.width / image.height) * height
  //   } else {
  //     width = this.parentWidth
  //     height = width * (image.height / image.width)
  //   }
  //   const x = (this.parentWidth - width) / 2
  //   const y = (this.parentHeight - height) / 2
  //   return {
  //     width,
  //     height,
  //     x,
  //     y,
  //   }
  // }

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
