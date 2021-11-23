# Scratchcard-js

![Build](https://travis-ci.org/Masth0/ScratchCard.svg?branch=v2)
![version](https://img.shields.io/npm/v/scratchcard-js.svg)

Scratcher is a js lib to simulate a scratchcard in browser with html5 and canvas.

## Install

Install with npm:

```
npm i --save scratch-box-js
```

## Getting started

```js
import Scratcher from "sratch-box-js/src/Scratcher"

const scratchCanvas = document.getElementById("scratcher")
const scratchCard = new Scratcher({
  canvas: scratchCanvas,
  scratchImageSrc: "./images/scratchcard.png",
  brushImageSrc: "./images/brush.png",
  percentToFinish: 100,
  brushSize: 150,
  responsive: true,
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

`responsive` If the card should scale with the parent container on window resize

## Events

**'scratcher.complete'**
Fires when you've scratched of the specified percent

```js
canvas.addEventListener("scratcher.complete", () => {
  console.log("complete!")
})
```
