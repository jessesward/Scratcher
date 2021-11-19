import Background from "./Background"
import Mask from "./Mask"

const MAX_WIDTH = 1400
export default class Scratcher {
  constructor(config) {
    this.canvas = config.canvas
    this.percentToFinish = config.percentToFinish || 1
    this.brushSize = config.brushSize || 150
    this.ASSETS = {
      background: config.scratchImageSrc,
      brush: config.brushImageSrc,
    }
    this.ctx = this.canvas.getContext("2d")
    this.images = {
      background: "",
      brush: "",
    }
    this.inputDown = this.inputDownHandler.bind(this)
    this.inputMove = this.inputMoveHandler.bind(this)
    this.inputUp = this.inputUpHandler.bind(this)
  }

  init() {
    return new Promise((resolve) => {
      this.canvas.addEventListener("mousedown", this.inputDown)
      this.canvas.addEventListener("mousemove", this.inputMove)
      this.canvas.addEventListener("mouseup", this.inputUp)

      this.canvas.addEventListener("touchstart", this.inputDown)
      this.canvas.addEventListener("touchmove", this.inputMove)
      this.canvas.addEventListener("touchend", this.inputUp)

      this.canvas.width = this.canvas.offsetWidth
      this.canvas.height = this.canvas.offsetHeight

      this.renderWidth = 0
      this.renderHeight = 0

      this.resize = this.resizeHandler.bind(this)
      this.resize()
      window.addEventListener("resize", this.resize)

      this.loadImages().then(() => {
        this.loaded = true
        this.background = new Background(this.images.background)
        this.mask = new Mask(
          this.images.brush,
          this.brushSize,
          this.canvas.width,
          this.canvas.height
        )
        this.background.draw(this.renderWidth, this.renderHeight)
        this.render()
      })
      resolve()
    })
  }

  resizeHandler() {
    const ratio = window.innerHeight / window.innerWidth
    this.renderWidth = Math.min(MAX_WIDTH, window.innerWidth)
    this.renderHeight = this.renderWidth * ratio
    this.canvas.width = this.renderWidth
    this.canvas.height = this.renderHeight

    if (this.loaded) {
      this.draw()
      this.background.draw(this.renderWidth, this.renderHeight)
    }
  }

  loadImages() {
    return new Promise((resolve) => {
      this.totalLoaded = 0
      const entries = Object.entries(this.ASSETS)
      this.assetCount = entries.length
      for (const [key, value] of entries) {
        this.images[key] = new Image()
        this.images[key].src = value
        this.images[key].onload = () => {
          this.totalLoaded++
          if (this.totalLoaded === this.assetCount) {
            resolve()
          }
        }
      }
    })
  }

  draw() {
    this.ctx.drawImage(this.background.canvas, 0, 0)
    this.ctx.globalCompositeOperation = "destination-out"
    this.ctx.drawImage(this.mask.canvas, 0, 0)
    this.ctx.globalCompositeOperation = "destination-over"
  }

  render() {
    this.raf = requestAnimationFrame(this.render.bind(this))
    this.resize()
    this.draw()
  }

  handleInput(event, target) {
    if (event) {
      const xPer = (event.clientX - target.offsetLeft) / target.offsetWidth
      const yPer = (event.clientY - target.offsetTop) / target.offsetHeight
      this.mask.draw(xPer, yPer)
      if (this.mask.checkPercent() > this.percentToFinish) {
        const complete = new Event("scratcher.complete")
        this.canvas.dispatchEvent(complete)
      }
    }
  }

  // event handlers
  inputDownHandler(e) {
    this.drawing = true
    e.preventDefault()
    const event = e.type === "touchstart" ? e.touches[0] : e
    const target = event.target
    this.handleInput(event, target)
  }

  inputMoveHandler(e) {
    if (this.drawing === false) {
      return
    }
    e.preventDefault()
    const event = e.type === "touchmove" ? e.touches[0] : e
    const target = event.target
    this.handleInput(event, target)
  }

  inputUpHandler() {
    this.drawing = false
  }
}
