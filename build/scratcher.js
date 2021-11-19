/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Scratcher.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n\nmodule.exports = _arrayLikeToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\nmodule.exports = _arrayWithHoles;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n\n  var _s, _e;\n\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\nmodule.exports = _iterableToArrayLimit;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\nmodule.exports = _nonIterableRest;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ \"../node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\n\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\n\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\n\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ \"../node_modules/@babel/runtime/helpers/nonIterableRest.js\");\n\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\n\nmodule.exports = _slicedToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\n\nmodule.exports = _unsupportedIterableToArray;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./Background.js":
/*!***********************!*\
  !*** ./Background.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Background = /*#__PURE__*/function () {\n  function Background(bgImage) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Background);\n\n    this.parentWidth = 0;\n    this.parentHeight = 0;\n    this.borderSize = 20;\n    this.canvas = document.createElement(\"canvas\");\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.bgImage = bgImage;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Background, [{\n    key: \"centerImageBounds\",\n    value: function centerImageBounds(image) {\n      var ratio = image.height / image.width;\n      var width, height;\n\n      if (ratio < this.parentHeight / this.parentWidth) {\n        height = this.parentHeight;\n        width = image.width / image.height * height;\n      } else {\n        width = this.parentWidth;\n        height = width * (image.height / image.width);\n      }\n\n      var x = (this.parentWidth - width) / 2;\n      var y = (this.parentHeight - height) / 2;\n      return {\n        width: width,\n        height: height,\n        x: x,\n        y: y\n      };\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(parentWidth, parentHeight) {\n      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      if (this.parentWidth === parentWidth && this.parentHeight === parentHeight && force === false) {\n        return;\n      }\n\n      this.canvas.width = this.parentWidth = parentWidth;\n      this.canvas.height = this.parentHeight = parentHeight; // draw and center background\n\n      var _this$centerImageBoun = this.centerImageBounds(this.bgImage),\n          x = _this$centerImageBoun.x,\n          y = _this$centerImageBoun.y,\n          width = _this$centerImageBoun.width,\n          height = _this$centerImageBoun.height;\n\n      this.ctx.drawImage(this.bgImage, x, y, width, height);\n      this.ctx.save();\n    }\n  }]);\n\n  return Background;\n}();\n\n\n\n//# sourceURL=webpack:///./Background.js?");

/***/ }),

/***/ "./Mask.js":
/*!*****************!*\
  !*** ./Mask.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Mask; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Mask = /*#__PURE__*/function () {\n  function Mask(brush, size, width, height) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mask);\n\n    this.brush = brush;\n    this.brushSize = size !== null && size !== void 0 ? size : 150;\n    this.canvas = document.createElement(\"canvas\");\n    this.canvas.width = width;\n    this.canvas.height = height;\n    this.parentWidth = 0;\n    this.parentHeight = 0;\n    this.ctx = this.canvas.getContext(\"2d\"); // window.addEventListener('resize', () => {\n    //   this.handleResize()\n    // })\n  } // handleResize() {\n  //   this.parentWidth = window.innerWidth\n  //   this.parentHeight = window.innerHeight\n  //   const newCanvas = document.createElement('canvas')\n  //   newCanvas.width = this.parentWidth\n  //   newCanvas.height = this.parentHeight\n  //   const newCtx = newCanvas.getContext('2d')\n  //   const { x, y, width, height } = this.centerImageBounds(this.canvas)\n  //   this.ctx.drawImage(this.canvas, x, y, width, height)\n  //   this.canvas = newCanvas\n  //   this.ctx = newCtx\n  // }\n  // centerImageBounds(image) {\n  //   const ratio = image.height / image.width\n  //   let width, height\n  //   if (ratio < this.parentHeight / this.parentWidth) {\n  //     height = this.parentHeight\n  //     width = (image.width / image.height) * height\n  //   } else {\n  //     width = this.parentWidth\n  //     height = width * (image.height / image.width)\n  //   }\n  //   const x = (this.parentWidth - width) / 2\n  //   const y = (this.parentHeight - height) / 2\n  //   return {\n  //     width,\n  //     height,\n  //     x,\n  //     y,\n  //   }\n  // }\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mask, [{\n    key: \"checkPercent\",\n    value: function checkPercent() {\n      var stride = 32;\n      var alphaPixels = 0;\n      var totalPixels = this.canvas.width * this.canvas.height;\n      var data = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height).data;\n\n      for (var i = 3; i < data.length; i += 4 * stride) {\n        if (data[i] > 0) {\n          alphaPixels++;\n        }\n      }\n\n      return alphaPixels / (totalPixels / stride);\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(xPercent, yPercent) {\n      var x = xPercent * this.canvas.width;\n      var y = yPercent * this.canvas.height;\n      this.ctx.drawImage(this.brush, x - this.brushSize / 2, y - this.brushSize / 2, this.brushSize, this.brushSize);\n      this.ctx.save();\n    }\n  }]);\n\n  return Mask;\n}();\n\n\n\n//# sourceURL=webpack:///./Mask.js?");

/***/ }),

/***/ "./Scratcher.js":
/*!**********************!*\
  !*** ./Scratcher.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scratcher; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"../node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Background */ \"./Background.js\");\n/* harmony import */ var _Mask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Mask */ \"./Mask.js\");\n\n\n\n\n\nvar MAX_WIDTH = 1400;\n\nvar Scratcher = /*#__PURE__*/function () {\n  function Scratcher(config) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Scratcher);\n\n    this.canvas = config.canvas;\n    this.percentToFinish = config.percentToFinish || 1;\n    this.brushSize = config.brushSize || 150;\n    this.ASSETS = {\n      background: config.scratchImageSrc,\n      brush: config.brushImageSrc\n    };\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.images = {\n      background: \"\",\n      brush: \"\"\n    };\n    this.inputDown = this.inputDownHandler.bind(this);\n    this.inputMove = this.inputMoveHandler.bind(this);\n    this.inputUp = this.inputUpHandler.bind(this);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Scratcher, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      return new Promise(function (resolve) {\n        _this.canvas.addEventListener(\"mousedown\", _this.inputDown);\n\n        _this.canvas.addEventListener(\"mousemove\", _this.inputMove);\n\n        _this.canvas.addEventListener(\"mouseup\", _this.inputUp);\n\n        _this.canvas.addEventListener(\"touchstart\", _this.inputDown);\n\n        _this.canvas.addEventListener(\"touchmove\", _this.inputMove);\n\n        _this.canvas.addEventListener(\"touchend\", _this.inputUp);\n\n        _this.canvas.width = _this.canvas.offsetWidth;\n        _this.canvas.height = _this.canvas.offsetHeight;\n        _this.renderWidth = 0;\n        _this.renderHeight = 0;\n        _this.resize = _this.resizeHandler.bind(_this);\n\n        _this.resize();\n\n        window.addEventListener(\"resize\", _this.resize);\n\n        _this.loadImages().then(function () {\n          _this.loaded = true;\n          _this.background = new _Background__WEBPACK_IMPORTED_MODULE_3__[\"default\"](_this.images.background);\n          _this.mask = new _Mask__WEBPACK_IMPORTED_MODULE_4__[\"default\"](_this.images.brush, _this.brushSize, _this.canvas.width, _this.canvas.height);\n\n          _this.background.draw(_this.renderWidth, _this.renderHeight);\n\n          _this.render();\n        });\n\n        resolve();\n      });\n    }\n  }, {\n    key: \"resizeHandler\",\n    value: function resizeHandler() {\n      var ratio = window.innerHeight / window.innerWidth;\n      this.renderWidth = Math.min(MAX_WIDTH, window.innerWidth);\n      this.renderHeight = this.renderWidth * ratio;\n      this.canvas.width = this.renderWidth;\n      this.canvas.height = this.renderHeight;\n\n      if (this.loaded) {\n        this.draw();\n        this.background.draw(this.renderWidth, this.renderHeight);\n      }\n    }\n  }, {\n    key: \"loadImages\",\n    value: function loadImages() {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        _this2.totalLoaded = 0;\n        var entries = Object.entries(_this2.ASSETS);\n        _this2.assetCount = entries.length;\n\n        for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {\n          var _entries$_i = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_entries[_i], 2),\n              key = _entries$_i[0],\n              value = _entries$_i[1];\n\n          _this2.images[key] = new Image();\n          _this2.images[key].src = value;\n\n          _this2.images[key].onload = function () {\n            _this2.totalLoaded++;\n\n            if (_this2.totalLoaded === _this2.assetCount) {\n              resolve();\n            }\n          };\n        }\n      });\n    }\n  }, {\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.drawImage(this.background.canvas, 0, 0);\n      this.ctx.globalCompositeOperation = \"destination-out\";\n      this.ctx.drawImage(this.mask.canvas, 0, 0);\n      this.ctx.globalCompositeOperation = \"destination-over\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.raf = requestAnimationFrame(this.render.bind(this));\n      this.resize();\n      this.draw();\n    }\n  }, {\n    key: \"handleInput\",\n    value: function handleInput(event, target) {\n      if (event) {\n        var xPer = (event.clientX - target.offsetLeft) / target.offsetWidth;\n        var yPer = (event.clientY - target.offsetTop) / target.offsetHeight;\n        this.mask.draw(xPer, yPer);\n\n        if (this.mask.checkPercent() > this.percentToFinish) {\n          var complete = new Event(\"scratcher.complete\");\n          this.canvas.dispatchEvent(complete);\n        }\n      }\n    } // event handlers\n\n  }, {\n    key: \"inputDownHandler\",\n    value: function inputDownHandler(e) {\n      this.drawing = true;\n      e.preventDefault();\n      var event = e.type === \"touchstart\" ? e.touches[0] : e;\n      var target = event.target;\n      this.handleInput(event, target);\n    }\n  }, {\n    key: \"inputMoveHandler\",\n    value: function inputMoveHandler(e) {\n      if (this.drawing === false) {\n        return;\n      }\n\n      e.preventDefault();\n      var event = e.type === \"touchmove\" ? e.touches[0] : e;\n      var target = event.target;\n      this.handleInput(event, target);\n    }\n  }, {\n    key: \"inputUpHandler\",\n    value: function inputUpHandler() {\n      this.drawing = false;\n    }\n  }]);\n\n  return Scratcher;\n}();\n\n\n\n//# sourceURL=webpack:///./Scratcher.js?");

/***/ })

/******/ });