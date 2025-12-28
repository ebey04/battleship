/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/imgs/cat-3971519.svg */ \"./src/imgs/cat-3971519.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/hor-cat.svg */ \"./src/imgs/hor-cat.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/ver-cat.svg */ \"./src/imgs/ver-cat.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body, main {\r\n    height: 100%;\r\n    background-color: #cc0000;\r\n    overflow-y: hidden;\r\n    position: relative;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: 800px;\r\n    background-repeat: no-repeat;\r\n    background-position: center top;\r\n  }\r\n\r\n\r\n\r\n#title {\r\n    color: black;\r\n    text-align: center;\r\n    font-family: 'Eater', sans-serif;\r\n    font-size: clamp(2rem, 6vw, 3.5rem);\r\n    letter-spacing: .5rem;\r\n    padding: .25rem 0;\r\n}\r\n\r\n#game-wrapper {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    gap: 1rem;\r\n    height: 90%;\r\n}\r\n\r\n#boards-container {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    gap: 1.5rem;\r\n    width: 100%;\r\n    height: 70%;\r\n    padding: .5rem;\r\n  transform: scale(0.9);\r\n  transform-origin: top center;\r\n}\r\n\r\n.board {\r\n    display: grid;\r\n    grid-template-columns: repeat(10, 1fr);\r\n    gap: 4px;                 /* space between squares */\r\n    width: 90%;               /* limit width so cells don’t stretch */\r\n    max-width: 500px;         /* stops it from becoming massive */\r\n    margin: 0 auto;           /* centers each board */\r\n    aspect-ratio: 1 / 1;      /* makes entire board a square */\r\n    padding: 1rem;\r\n    border: 2px solid black;\r\n    box-shadow: 0 5px 10px rgba(7, 7, 7, 0.4);\r\n    position: relative;\r\n}\r\n\r\n#enemy-board{\r\n    cursor: pointer;\r\n}\r\n\r\n.subheads {\r\n    padding: .5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.cell {\r\n    border: 1px solid black;\r\n    aspect-ratio: 1 / 1;      /* forces each cell to be a perfect square */\r\n    background-color: #ff000020; \r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.disabled {\r\n    pointer-events: none;\r\n    opacity: 0.6;\r\n}\r\n\r\n\r\n#overlay, #reset-overlay {\r\n    position: fixed;\r\n    inset: 0;\r\n    background: rgba(0,0,0,0.6);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1000;\r\n}\r\n\r\n/**BUTTONS **/\r\n\r\n#start-game, #reset-game{\r\n    font-size: 2rem;\r\n    padding: 1rem;\r\n    border-radius: 8px;\r\n    cursor: pointer;\r\n    box-shadow: 0 4px 8px rgb(126, 250, 128);\r\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\r\n    font-family: sans-serif;\r\n}\r\n\r\n\r\n#deploy{\r\n    width: 15rem;\r\n    margin-left: 12rem;\r\n    margin-top: 1rem;\r\n    font-size: 1.2rem;\r\n    padding: .5rem;\r\n    border-radius: 8px;\r\n    border: none;\r\n    box-shadow: 0 4px 8px rgb(126, 250, 128);\r\n    cursor: pointer;\r\n    transition: transform 0.15s ease, box-shadow 0.15s ease;\r\n    font-family: sans-serif;\r\n}\r\n\r\nbutton:hover {\r\n    transform: translate(-3px, -2px);\r\n    box-shadow: 0 4px 8px rgb(126, 250, 128);\r\n}\r\n\r\nbutton:active {\r\n    transform: translateY(0);\r\n    box-shadow: 0 4px 8px rgba(126, 250, 128, 0.792);\r\n}\r\n\r\nbutton:focus{\r\n    background-color:rgba(126, 250, 128, 0.792);\r\n    border: none;\r\n}\r\n\r\n/**MESSAGE CENTER**/\r\n#messages {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    background: rgba(0, 0, 0, 0.7);\r\n    color: white;\r\n    padding: 1rem 2rem;\r\n    border-radius: 10px;\r\n    font-size: 1.25rem;\r\n    text-align: center;\r\n    z-index: 2000;\r\n\r\n    max-width: 80%;\r\n    display: none; /* start hidden */\r\n}\r\n\r\n/** SMOKE PUFF ANIMATION **/\r\n\r\n.smoke-plume {\r\n    position: relative;\r\n    overflow: visible;\r\n}\r\n\r\n.smoke-plume::before,\r\n.smoke-plume::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    border-radius: 50%;\r\n    background: rgba(98, 97, 97, 0.33);\r\n    filter: blur(2px);\r\n    pointer-events: none;\r\n}\r\n\r\n/* Main puff */\r\n.smoke-plume::before {\r\n    width: 35px;\r\n    height: 35px;\r\n    transform: translate(-50%, -50%);\r\n    animation: puff-main 0.9s ease-out forwards;\r\n}\r\n\r\n/* Secondary puff */\r\n.smoke-plume::after {\r\n    width: 22px;\r\n    height: 22px;\r\n    transform: translate(-50%, -50%);\r\n    animation: puff-secondary 1s ease-out forwards;\r\n}\r\n\r\n@keyframes puff-main {\r\n    0% {\r\n        opacity: 0.9;\r\n        transform: translate(-50%, -50%) scale(0.5);\r\n    }\r\n    80% {\r\n        opacity: 0.5;\r\n        transform: translate(-50%, -65%) scale(1.8);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translate(-50%, -80%) scale(2.3);\r\n    }\r\n}\r\n\r\n@keyframes puff-secondary {\r\n    0% {\r\n        opacity: 0.9;\r\n        transform: translate(-50%, -50%) scale(0.3);\r\n    }\r\n    80% {\r\n        opacity: 0.4;\r\n        transform: translate(-50%, -70%) scale(1.4);\r\n    }\r\n    100% {\r\n        opacity: 0;\r\n        transform: translate(-50%, -90%) scale(1.7);\r\n    }\r\n}\r\n\r\n/** SHIP IMAGES **/\r\n\r\n.ship-start {\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: center;\r\n    aspect-ratio: unset;\r\n    background-color: transparent;\r\n    border: none;\r\n    position: relative;\r\n}\r\n\r\n.ship-start::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    inset: 0;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    background-position: left center;\r\n    pointer-events: none;\r\n    z-index: 10;\r\n}\r\n\r\n/* horizontal ship */\r\n.ship-start.horizontal::after {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n    width: calc(100% * var(--ship-length));\r\n    height: 100%;\r\n}\r\n\r\n/* vertical ship */\r\n.ship-start.vertical::after {\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n    height: calc(100% * var(--ship-length));\r\n    width: 100%;\r\n}\r\n.ship-body{\r\n    visibility: hidden;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _sounds_cat_yowl_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sounds/cat-yowl.mp3 */ \"./src/sounds/cat-yowl.mp3\");\n/* harmony import */ var _sounds_angry_cat_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sounds/angry-cat.mp3 */ \"./src/sounds/angry-cat.mp3\");\n\r\n\r\n\r\n\r\n\r\n// STATIC HTML ELEMENTS\r\n    const fleetBoard = document.getElementById(\"fleet-board\");\r\n    const enemyBoard = document.getElementById(\"enemy-board\");\r\n    const overlay = document.getElementById(\"overlay\");\r\n    const startGameBtn = document.getElementById(\"start-game\");\r\n    const deployBtn = document.getElementById(\"deploy\");\r\n    const resetGameBtn = document.getElementById(\"reset-game\");\r\n    const resetOverlay = document.getElementById(\"reset-overlay\");\r\n    const messages = document.getElementById(\"messages\");\r\n\r\n// MESSAGE DISPLAY FUNCTION\r\n\r\nlet messageTimeout = null;\r\n\r\nfunction showMessage(text) {\r\n    // Clear any existing message timeout\r\n    if (messageTimeout) {\r\n        clearTimeout(messageTimeout);\r\n        messageTimeout = null;\r\n    }\r\n\r\n    // Show message\r\n    messages.textContent = text;\r\n    messages.style.display = \"block\";\r\n\r\n    // Auto-clear after 2 seconds\r\n    messageTimeout = setTimeout(() => {\r\n        messages.textContent = \"\";\r\n        messages.style.display = \"none\";\r\n        messageTimeout = null;\r\n    }, 2000);\r\n}\r\n\r\n\r\n//SOUNDS\r\n\r\nconst yowlSound = new Audio(_sounds_cat_yowl_mp3__WEBPACK_IMPORTED_MODULE_1__);\r\nyowlSound.preload = \"auto\";\r\n\r\nconst explodeSound = new Audio(_sounds_angry_cat_mp3__WEBPACK_IMPORTED_MODULE_2__);\r\nexplodeSound.preload = \"auto\"\r\n\r\n//WAKE THE CATS BUTTON\r\n\r\nfunction gridCreation(boardElement) {\r\n    for (let i = 0; i < 10; i++) {\r\n        for (let j = 0; j < 10; j++) { \r\n            const div = document.createElement('div'); \r\n            div.classList.add('cell'); \r\n            div.dataset.row = i\r\n            div.dataset.col = j\r\n            boardElement.appendChild(div);\r\n            }\r\n        }\r\n    }\r\n\r\nstartGameBtn.addEventListener(\"click\", () => {\r\n    yowlSound.currentTime = 0;\r\n    yowlSound.volume = 0.4; \r\n    yowlSound.play();\r\n\r\n    overlay.classList.add(\"hidden\");\r\n    gridCreation(fleetBoard)\r\n    gridCreation(enemyBoard)\r\n    deployBtn.classList.remove(\"hidden\");\r\n})\r\n\r\n// BOARD RENDERING\r\n\r\nfunction shipStart(grid,row, col) {\r\n    let ship = grid[row][col];\r\n\r\n    if (!ship || typeof ship !== \"object\") {\r\n        return false;\r\n    }\r\n\r\n    if (row > 0 && grid[row-1][col] === ship) {\r\n        return false;\r\n    }\r\n\r\n    if (col > 0 && grid[row][col-1] === ship) {\r\n        return false;\r\n    }\r\n\r\n    return true;\r\n}\r\n\r\nfunction shipDir(grid, row, col) {\r\n    let ship = grid[row][col];\r\n\r\n    if (!ship || typeof ship !== \"object\") {\r\n        return null;\r\n    }\r\n\r\n    if (col < 9 && grid[row][col + 1] === ship) {\r\n        return \"horizontal\";\r\n        \r\n    }\r\n    if (row < 9 && grid[row + 1][col] === ship){\r\n        return \"vertical\";\r\n    }\r\n    return null;\r\n}\r\n\r\nfunction renderFleetBoard(boardElement, grid) {\r\n    const cells = boardElement.querySelectorAll(\".cell\");\r\n\r\n    for (let row = 0; row < 10; row++) {\r\n        for (let col = 0; col < 10; col++) {\r\n            const index = row * 10 + col;\r\n            const cellDiv = cells[index];\r\n\r\n            cellDiv.className = \"cell\";\r\n            cellDiv.style.gridColumn = \"\";\r\n            cellDiv.style.gridRow = \"\";\r\n            cellDiv.style.backgroundColor = \"\";\r\n\r\n            if (grid[row][col] === null) {\r\n                cellDiv.style.backgroundColor = \"blue\";\r\n            } \r\n            else if (grid[row][col] === \"hit\") {\r\n                cellDiv.style.backgroundColor = \"red\";\r\n            } \r\n            else if (grid[row][col] === \"miss\") {\r\n                cellDiv.style.backgroundColor = \"white\";\r\n            } \r\n            else if (typeof grid[row][col] === \"object\") {\r\n                if (shipStart(grid, row, col)) {\r\n                    const ship = grid[row][col];\r\n                    const dir = shipDir(grid, row, col);\r\n\r\n                    cellDiv.classList.add(\"ship-start\", dir);\r\n                    cellDiv.style.setProperty(\"--ship-length\", ship.length);\r\n                } else {\r\n                    cellDiv.classList.add(\"ship-body\");\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction renderEnemyBoard(boardElement, grid) {\r\n    const cells = boardElement.querySelectorAll(\".cell\");\r\n\r\n    for (let row = 0; row < 10; row++){\r\n        for (let col = 0; col < 10; col++) {\r\n            \r\n            const index = row * 10 + col;\r\n            const cellDiv = cells[index];\r\n    \r\n            if (grid[row][col] === \"miss\") {\r\n                cellDiv.style.backgroundColor = \"white\";\r\n            }\r\n            else if (grid[row][col] === \"hit\") {\r\n                cellDiv.style.backgroundColor = \"red\";\r\n            }\r\n            else {\r\n                cellDiv.style.backgroundColor = \"blue\";\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n//ENEMY CLICK HANDLER \r\n\r\nlet canClick = true;\r\n\r\nasync function enemyClickHandler(event) {\r\n    if (!canClick) return;\r\n    if (!event.target.classList.contains(\"cell\")) return;\r\n\r\n    canClick = false;\r\n\r\n    const row = Number(event.target.dataset.row);\r\n    const col = Number(event.target.dataset.col);\r\n    const coord = [row, col];\r\n\r\n    const turnPromise = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.handleTurn)(coord);\r\n\r\n    renderFleetBoard(fleetBoard, _index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.grid);\r\n    renderEnemyBoard(enemyBoard, _index_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.grid);\r\n\r\n    const humanResult = _index_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.grid[row][col];\r\n\r\n    if (humanResult === \"hit\") {\r\n        explodeSound.currentTime = 0;\r\n        explodeSound.volume = 0.4;\r\n        explodeSound.play();\r\n        showMessage(\"Direct hit to the enemy's clowder!\");\r\n\r\n        const clickedCell = event.target;\r\n        clickedCell.classList.add(\"smoke-plume\");\r\n\r\n        setTimeout(() => {\r\n        clickedCell.classList.remove(\"smoke-plume\");\r\n        }, 1100);\r\n\r\n    } else if (humanResult === \"miss\") {\r\n        showMessage(\"Your shot missed the enemy cats.\");\r\n    }\r\n\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.computer.board.allShipsSunk()) {\r\n        showMessage(\"You win! All enemy cats exploded!\");\r\n        enemyBoard.classList.add(\"disabled\");\r\n        resetGameBtn.classList.remove(\"hidden\");\r\n        resetOverlay.classList.remove(\"hidden\");\r\n        return; // stay locked\r\n    }\r\n\r\n    await turnPromise;\r\n\r\n    renderFleetBoard(fleetBoard, _index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.grid);\r\n\r\n    const lastMove = _index_js__WEBPACK_IMPORTED_MODULE_0__.computer.prevMoves[_index_js__WEBPACK_IMPORTED_MODULE_0__.computer.prevMoves.length - 1];\r\n    if (lastMove) {\r\n        const [cRow, cCol] = lastMove;\r\n        const compResult = _index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.grid[cRow][cCol];\r\n\r\n        if (compResult === \"hit\") {\r\n            explodeSound.currentTime = 0;\r\n            explodeSound.volume = 0.2;\r\n            explodeSound.play();\r\n            showMessage(\"The enemy exploded one of your cats!\");\r\n        } else if (compResult === \"miss\") {\r\n            showMessage(\"The enemy missed their shot.\");\r\n        }\r\n    }\r\n\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.allShipsSunk()) {\r\n        showMessage(\"Defeat... The enemy exploded your entire clowder.\");\r\n        enemyBoard.classList.add(\"disabled\");\r\n        resetGameBtn.classList.remove(\"hidden\");\r\n        resetOverlay.classList.remove(\"hidden\");\r\n        return; \r\n    }\r\n\r\n    canClick = true;\r\n}\r\n\r\n\r\n\r\n// DEPLOY BUTTON\r\n\r\ndeployBtn.addEventListener(\"click\", () => {\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\r\n    renderFleetBoard(fleetBoard, _index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.grid);\r\n\r\n    showMessage(\"Clowder deployed! Begin your attack.\");\r\n\r\n    enemyBoard.addEventListener(\"click\", enemyClickHandler);\r\n})\r\n\r\n// RESET BUTTON\r\n\r\nresetGameBtn.addEventListener(\"click\", () => {\r\n    canClick = true;\r\n\r\n    messages.textContent = \"\";\r\n    messages.style.display = \"none\";\r\n\r\n\r\n    fleetBoard.innerHTML = \"\";\r\n    enemyBoard.innerHTML = \"\";\r\n\r\n    resetGameBtn.classList.add(\"hidden\");\r\n    resetOverlay.classList.add(\"hidden\");\r\n\r\n    gridCreation(fleetBoard);\r\n    gridCreation(enemyBoard);\r\n\r\n    enemyBoard.classList.remove(\"disabled\");\r\n\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.startGame)();\r\n\r\n    renderFleetBoard(fleetBoard, _index_js__WEBPACK_IMPORTED_MODULE_0__.human.board.grid);\r\n})\n\n//# sourceURL=webpack://battleship/./src/dom.js?\n}");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\r\n        constructor() {\r\n            this.grid = Array.from({length: 10}, () => \r\n                        Array.from({length: 10}, () => null));\r\n            this.missedShots = [];\r\n            this.ships = [];\r\n            }\r\n\r\n        placeShip(ship, startingCoor, direction) {\r\n            let plannedCoord = [];\r\n            let startRow = startingCoor[0];\r\n            let startCol = startingCoor[1];\r\n\r\n            if (\r\n                startCol < 0 || startCol > 9 ||\r\n                startRow < 0 || startRow > 9\r\n            ) {\r\n                return false;\r\n            }\r\n\r\n            for (let i = 0; i < ship.length; i++) {\r\n                let row = startRow;\r\n                let col = startCol;\r\n\r\n                if (direction === \"horizontal\") {\r\n                    col = startCol + i;\r\n                    if (col < 0 || col > 9) {\r\n                        return false;\r\n                    }\r\n                } else if (direction === \"vertical\") {\r\n                    row = startRow + i;\r\n                    if (row < 0 || row > 9) {\r\n                        return false;\r\n                    }\r\n                }\r\n\r\n                plannedCoord.push([row, col]);\r\n            }\r\n\r\n            for (let [row, col] of plannedCoord) {\r\n                if (this.grid[row][col] !== null) {\r\n                    return false;\r\n                }\r\n            }\r\n\r\n            plannedCoord.forEach(([row, col]) => {\r\n                this.grid[row][col] = ship;\r\n        });\r\n\r\n        this.ships.push(ship);\r\n\r\n        return true;\r\n    }\r\n        receiveAttack([row, col]) {\r\n        const target = this.grid[row][col];\r\n\r\n        if (target !== null && target !== \"hit\" && target !== \"miss\") {\r\n            target.hit();\r\n            this.grid[row][col] = \"hit\";\r\n        } \r\n        else {\r\n            this.missedShots.push([row, col]);\r\n            this.grid[row][col] = \"miss\";\r\n        }\r\n    }\r\n\r\n\r\n        allShipsSunk() {\r\n            return this.ships.every(ship => ship.isSunk())\r\n        }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/gameboard.js?\n}");

/***/ }),

/***/ "./src/imgs/cat-3971519.svg":
/*!**********************************!*\
  !*** ./src/imgs/cat-3971519.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"955c57ec12f9d024eba0.svg\";\n\n//# sourceURL=webpack://battleship/./src/imgs/cat-3971519.svg?\n}");

/***/ }),

/***/ "./src/imgs/hor-cat.svg":
/*!******************************!*\
  !*** ./src/imgs/hor-cat.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"826be19877b7b568c113.svg\";\n\n//# sourceURL=webpack://battleship/./src/imgs/hor-cat.svg?\n}");

/***/ }),

/***/ "./src/imgs/ver-cat.svg":
/*!******************************!*\
  !*** ./src/imgs/ver-cat.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"432627caac907bcc5590.svg\";\n\n//# sourceURL=webpack://battleship/./src/imgs/ver-cat.svg?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   computer: () => (/* binding */ computer),\n/* harmony export */   handleTurn: () => (/* binding */ handleTurn),\n/* harmony export */   human: () => (/* binding */ human),\n/* harmony export */   startGame: () => (/* binding */ startGame)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship.js */ \"./src/ship.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.js */ \"./src/player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));\r\n\r\n// CREATE PLAYERS\r\nlet human;\r\nlet computer;\r\n\r\n// CREATE FLEETS\r\n\r\nlet humanFleet;\r\nlet computerFleet;\r\n\r\n//STARTER LOGIC\r\n\r\nlet currentPlayer;\r\nlet gameOver = false\r\n\r\n// WORLD RULES/HELPER FUNCTIONS\r\nfunction randomizeFleet(player, fleetArray) {\r\n    for (let ship of fleetArray) {\r\n        let placed = false;\r\n        let attempts = 0;\r\n\r\n        while (!placed) {\r\n            attempts++;\r\n\r\n            // safety valve to avoid infinite loops\r\n            if (attempts > 2000) {\r\n                console.warn(\"Restarting fleet placement due to overflow…\");\r\n                player.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();   // reset board\r\n                return randomizeFleet(player, fleetArray); \r\n            }\r\n\r\n            const row = Math.floor(Math.random() * 10);\r\n            const col = Math.floor(Math.random() * 10);\r\n            const coord = [row, col];\r\n            const direction = Math.random() < 0.5 ? \"horizontal\" : \"vertical\";\r\n\r\n            placed = player.board.placeShip(ship, coord, direction);\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction getOpponent(player) {\r\n    return player === human ? computer : human;\r\n}\r\n\r\nfunction endGame(winner) {\r\n    gameOver = true;\r\n    console.log(`${winner === human ? 'Human' : 'Computer'} wins!`);\r\n}\r\n\r\n//MAIN GAMEPLAY ENGINE\r\n\r\nasync function handleTurn(coord) {\r\n    if (gameOver) return { ended: true };\r\n\r\n    const opponent = getOpponent(currentPlayer);\r\n\r\n    let humanResult = null;\r\n    if (currentPlayer === human) {\r\n        humanResult = currentPlayer.attack(opponent.board, coord); \r\n    }\r\n\r\n    if (opponent.board.allShipsSunk()) {\r\n        endGame(currentPlayer);\r\n        return { ended: true, winner: \"human\" };\r\n    }\r\n\r\n    await sleep(1100);\r\n\r\n    currentPlayer = computer;\r\n    const compCoord = computer.attack(human.board);\r\n\r\n    if (human.board.allShipsSunk()) {\r\n        endGame(computer);\r\n        return { ended: true, winner: \"computer\", compCoord };\r\n    }\r\n\r\n    currentPlayer = human;\r\n    return { ended: false, compCoord };\r\n}\r\n\r\n\r\n\r\n// START THE GAME\r\n\r\nconst catColors = [\r\n    \"#1a1a1a\",   // black\r\n    \"#d98c3c\",   // orange tabby\r\n    \"#8b5a2b\",   // brown tabby\r\n    \"#c0c0c0\",   // grey\r\n    \"#f2f2f2\"    // white\r\n];\r\n\r\nfunction startGame() {\r\n    human = new _player_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](false); \r\n    computer = new _player_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](true); \r\n\r\nhumanFleet = [\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5, catColors[0]),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4, catColors[1]),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, catColors[2]),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, catColors[3]),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2, catColors[4]),\r\n];\r\n\r\n    computerFleet = [\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](5),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](4),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3),\r\n    new _ship_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](2),\r\n];\r\n\r\n    randomizeFleet(human, humanFleet);\r\n    randomizeFleet(computer, computerFleet);\r\n\r\n    currentPlayer = human;\r\n\r\n    gameOver = false;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?\n}");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/gameboard.js\");\n\r\n\r\nclass Player {\r\n    constructor(isComputer = false) {\r\n        this.isComputer = isComputer;\r\n        this.board = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.prevMoves = [];\r\n    }\r\n\r\n    attack(opponentBoard, coord) {\r\n        if (this.isComputer) {\r\n            const row = Math.floor(Math.random() * 10);\r\n            const col = Math.floor(Math.random() * 10);\r\n            coord = [row, col];\r\n        }\r\n        if (this.prevMoves.some(move => move[0] === coord[0] && move[1] === coord[1])) {\r\n            return false;\r\n        }\r\n        opponentBoard.receiveAttack(coord);\r\n        this.prevMoves.push(coord);\r\n\r\n        return coord;\r\n    }\r\n}\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/player.js?\n}");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\r\n    constructor(length, color = \"gray\") {\r\n        this.length = length;\r\n        this.hits = 0;\r\n        this.color = color;   // <-- now 'color' IS a parameter\r\n    }\r\n\r\n    hit() {\r\n        this.hits++;\r\n    }\r\n\r\n    isSunk() {\r\n        return this.hits >= this.length;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\r\n\n\n//# sourceURL=webpack://battleship/./src/ship.js?\n}");

/***/ }),

/***/ "./src/sounds/angry-cat.mp3":
/*!**********************************!*\
  !*** ./src/sounds/angry-cat.mp3 ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"769e47cd694383decf68.mp3\";\n\n//# sourceURL=webpack://battleship/./src/sounds/angry-cat.mp3?\n}");

/***/ }),

/***/ "./src/sounds/cat-yowl.mp3":
/*!*********************************!*\
  !*** ./src/sounds/cat-yowl.mp3 ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"df2668158037bb963b51.mp3\";\n\n//# sourceURL=webpack://battleship/./src/sounds/cat-yowl.mp3?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;