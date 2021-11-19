export default class Background {
  constructor(bgImage) {
    this.parentWidth = 0
    this.parentHeight = 0
    this.borderSize = 20
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.bgImage = bgImage
  }

  centerImageBounds(image) {
    const ratio = image.height / image.width
    let width, height
    if (ratio < this.parentHeight / this.parentWidth) {
      height = this.parentHeight
      width = (image.width / image.height) * height
    } else {
      width = this.parentWidth
      height = width * (image.height / image.width)
    }
    const x = (this.parentWidth - width) / 2
    const y = (this.parentHeight - height) / 2
    return {
      width,
      height,
      x,
      y,
    }
  }

  draw(parentWidth, parentHeight, force = false) {
    if (
      this.parentWidth === parentWidth &&
      this.parentHeight === parentHeight &&
      force === false
    ) {
      return
    }

    this.canvas.width = this.parentWidth = parentWidth
    this.canvas.height = this.parentHeight = parentHeight

    // draw and center background
    const { x, y, width, height } = this.centerImageBounds(this.bgImage)
    this.ctx.drawImage(this.bgImage, x, y, width, height)

    this.ctx.save()
  }
}
