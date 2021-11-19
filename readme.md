# Scratchcard-js

![Build](https://travis-ci.org/Masth0/ScratchCard.svg?branch=v2)
![version](https://img.shields.io/npm/v/scratchcard-js.svg)

ScratchCard is a js lib to simulate a scratchcard in browser with html5 and canvas.

You can see the [**demo page**](https://masth0.github.io/ScratchCard/).

## Install

You can install ScratchCard with npm:

```
npm install --save scratchcard-js
```

or just clone this repo:

```
git clone https://github.com/Masth0/ScratchCard.git
```

and pick in the folder **./build** the file **scratchard.min.js**

## Getting started

```js
import Scratcher from "scratcher-js"

const scratchCanvas = document.getElementById("scratcher")
const scratchCard = new Scratcher({
  canvas: scratchCanvas,
  scratchImageSrc: "./images/scratchcard.png",
  brushImageSrc: "./images/brush.png",
  percentToFinish: 0.8,
  brushSize: 150,
})

// Init
scratchCard.init().then(() => {
  console.log("scratcher loaded")
})
```

## Options

`canvas` The canvas element

`scratchImageSrc` The path to the overlay image that will be scratched off

`brushImageSrc` The path to the image that will be used for the brush

`percentToFinish` The percentage of the overlay that needs to be scratched off before firing the `scratcher.complete` event

`brushSize` The size of the brush

## Events

**'scratch.complete'**
Fires when you've scratched of the specified percente

```js
canvas.addEventListener("scratcher.complete", () => {
  console.log("complete!")
})
```
