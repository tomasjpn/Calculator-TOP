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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*gesamter <Body>*/\nbody {\n    background: aliceblue;\n    display: flex; \n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    transform: scale(0.7);\n    margin-bottom: 5px;\n}\n\n/*Titel*/\nh1 {\n    text-align: center;\n    color: rgba(24, 24, 27, 0.252);\n    font-weight: bold;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n\n/*Container vom Taschenrechner*/\n.container{\n    background: rgba(24,24,27,0.1);\n    border-radius: 25px;\n    margin-top: 0px;\n    margin-left: 200px;\n    margin-right: 200px;\n    max-width: 450px;\n    max-height: 770px;\n    overflow: hidden;\n    align-items: center;\n    justify-content: center;\n    animation: shadow 4s ease-in-out forwards, slideUp 1.5s ease-out forwards;\n}\n\n\n/*Animation: Shatten*/\n@keyframes shadow{\n    from {\n        box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);\n    }\n    to{\n        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.186);\n    }\n}\n\n/* Animation: hoch sliden */\n@keyframes slideUp {\n    from {\n        transform: translateY(100vh);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n\n\n/*Anzeige des Taschenrechners*/\n.input-display{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n\n#inputDisplay{\n    width: 100%;\n    border: none;\n    border-radius: 25px;\n    height: 150px;\n    background-color: rgba(24, 24, 27, 0.068);\n    font-size: 75px;\n    text-align: right;\n    padding-right: 20px;\n    padding-left: 20px;\n    color:aliceblue;\n}\n\n/*Tasten des Taschenrechners*/\n.calc-buttons{\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 10px;\n    padding: 50px;\n    align-items: center;\n    justify-content: center;\n    margin-left: 5px;\n    margin-right: 5px;\n    margin-bottom: 10px;\n}\n\nbutton{\n    width: 90px;\n    height: 90px;\n    font-size: 36px;\n    font-weight: bold;\n    border: none;\n    border-radius: 30px;\n    cursor: pointer;\n    color: rgb(255, 255, 255);\n    background-color: rgba(24, 24, 27, 0.068);\n    opacity: 0; \n    animation: fadeIn 0.5s ease-out forwards; \n}\n\n/* Animation: Fade-In für Buttons */\n@keyframes fadeIn {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n/* Verschiedene Verzögerungen für Buttons */\nbutton:nth-child(1) {\n    animation-delay: 0s;\n}\nbutton:nth-child(2) {\n    animation-delay: 0.1s;\n}\nbutton:nth-child(3) {\n    animation-delay: 0.2s;\n}\nbutton:nth-child(4) {\n    animation-delay: 0.3s;\n}\nbutton:nth-child(5) {\n    animation-delay: 0.4s;\n}\nbutton:nth-child(6) {\n    animation-delay: 0.5s;\n}\nbutton:nth-child(7) {\n    animation-delay: 0.6s;\n}\nbutton:nth-child(8) {\n    animation-delay: 0.7s;\n}\nbutton:nth-child(9) {\n    animation-delay: 0.8s;\n}\nbutton:nth-child(10) {\n    animation-delay: 0.9s;\n}\nbutton:nth-child(11) {\n    animation-delay: 1s;\n}\nbutton:nth-child(12) {\n    animation-delay: 1.1s;\n}\n\n/*hover Animation*/\nbutton:hover{\n    background-color: rgba(24, 24, 27, 0.111);\n    transition: background-color 0.3s;\n}\n\n/* Spezielle Buttons */\n#operatorBtn, .equal, #clearBtn, #delBtn {\n    animation: fadeIn 0.5s ease-out forwards;\n}\n\n/* Animation Delay für spezielle Buttons */\n#operatorBtn { animation-delay: 1.2s; }\n.equal { animation-delay: 1.3s; }\n#clearBtn { animation-delay: 1.4s; }\n#delBtn { animation-delay: 1.5s; }\n\n#operatorBtn{\n    color: rgb(249, 169, 160);\n}\n\n.equal{\n    background-color: rgb(251, 142, 130);\n    height: 200px;\n    grid-row: span 2;\n}\n\n.button-container{\n    margin-bottom: 10px;\n    grid-column: span 3;\n    margin-top: 20px;\n}\n\n#clearBtn, #delBtn{\n    background-color: rgba(251, 142, 130, 0.586);\n    width: 140px;\n    height: 90px;\n}\n#clearBtn{\n    margin-right: 5px;\n}\n\n#clearBtn:hover, #delBtn:hover {\n    background-color: rgba(251, 142, 130, 0.895);\n    transition: background-color 0.3s;\n}\n\n.equal:hover{\n    background-color: rgba(247, 88, 70, 0.797);\n    transition: background-color 0.3s;\n}\n\n/*Optimiert für kleinere Screens*/\n@media only screen and (max-width: 730px) {\n    body{\n        transform: scale(0.7);\n    }\n}\n\n@media only screen and (max-width: 400px) {\n    body{\n        transform: scale(0.7);\n    }\n}\n\n@media only screen and (max-width: 1280px) {\n    body{\n        transform: scale(0.7);\n    }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator-top/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://calculator-top/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator-top/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator-top/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator-top/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logic_calculateInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic/calculateInput.js */ \"./src/logic/calculateInput.js\");\n/* harmony import */ var _logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/clearInput.js */ \"./src/logic/clearInput.js\");\n/* harmony import */ var _logic_displayValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/displayValue.js */ \"./src/logic/displayValue.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _utils_keyboardFunc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/keyboardFunc.js */ \"./src/utils/keyboardFunc.js\");\n\n\n\n\n\n\nwindow.displayVal = _logic_displayValue_js__WEBPACK_IMPORTED_MODULE_2__.displayVal;\nwindow.calculateVal = _logic_calculateInput_js__WEBPACK_IMPORTED_MODULE_0__.calculateVal;\nwindow.clearInput = _logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__.clearInput;\nwindow.deleteLastInput = _logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__.deleteLastInput;\n\n(0,_utils_keyboardFunc_js__WEBPACK_IMPORTED_MODULE_4__.keyboardFunc)();\n\n//# sourceURL=webpack://calculator-top/./src/index.js?");

/***/ }),

/***/ "./src/logic/calculateInput.js":
/*!*************************************!*\
  !*** ./src/logic/calculateInput.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateVal: () => (/* binding */ calculateVal)\n/* harmony export */ });\n/* harmony import */ var _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domElm.js */ \"./src/utils/domElm.js\");\n\n\n// Berechnet die Eingabe Werte\nconst calculateVal = () =>{\n    try {\n        _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = eval(_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value);  // eval() -> Interpretiert den String z.B. \"2 + 2\" und berechnet\n    } catch {\n        _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = 'Error';\n    }\n}\n\n\n\n//# sourceURL=webpack://calculator-top/./src/logic/calculateInput.js?");

/***/ }),

/***/ "./src/logic/clearInput.js":
/*!*********************************!*\
  !*** ./src/logic/clearInput.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearInput: () => (/* binding */ clearInput),\n/* harmony export */   deleteLastInput: () => (/* binding */ deleteLastInput)\n/* harmony export */ });\n/* harmony import */ var _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domElm.js */ \"./src/utils/domElm.js\");\n\n\n// Setzt den die Eingabe im Taschenrechner komplett zurück\nconst clearInput = () =>{\n    _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = '0';\n}\n\n// Löscht den zuletzt eingegebenen Wert\nconst deleteLastInput = () =>{\n    _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value.slice(0, -1);\n    if (_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value === '') {\n        _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = '0';\n    }\n}\n\n\n\n//# sourceURL=webpack://calculator-top/./src/logic/clearInput.js?");

/***/ }),

/***/ "./src/logic/displayValue.js":
/*!***********************************!*\
  !*** ./src/logic/displayValue.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayVal: () => (/* binding */ displayVal)\n/* harmony export */ });\n/* harmony import */ var _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domElm.js */ \"./src/utils/domElm.js\");\n\n\n// Zeigt die eingegebenen Wert an\nconst displayVal = (num) =>{\n    if (_utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value === '0') {\n        _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value = num;\n    } else {\n        _utils_domElm_js__WEBPACK_IMPORTED_MODULE_0__.inputDisplay.value += num;\n    }\n}\n\n\n\n//# sourceURL=webpack://calculator-top/./src/logic/displayValue.js?");

/***/ }),

/***/ "./src/utils/domElm.js":
/*!*****************************!*\
  !*** ./src/utils/domElm.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inputDisplay: () => (/* binding */ inputDisplay)\n/* harmony export */ });\n// Elemente aus der DOM\nconst inputDisplay = document.getElementById(\"inputDisplay\");\n\n//# sourceURL=webpack://calculator-top/./src/utils/domElm.js?");

/***/ }),

/***/ "./src/utils/keyboardFunc.js":
/*!***********************************!*\
  !*** ./src/utils/keyboardFunc.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keyboardFunc: () => (/* binding */ keyboardFunc)\n/* harmony export */ });\n/* harmony import */ var _logic_calculateInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/calculateInput.js */ \"./src/logic/calculateInput.js\");\n/* harmony import */ var _logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/clearInput.js */ \"./src/logic/clearInput.js\");\n/* harmony import */ var _logic_displayValue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logic/displayValue.js */ \"./src/logic/displayValue.js\");\n\n\n\n\n// Tastatureingaben für den Taschenrechner\nconst keyboardFunc = () =>{\n    document.addEventListener(\"keydown\", function(event){\n        const key = event.key;\n    \n        if((key >= '0' && key <= '9') || key === '.'){ // Begrenzt die Eingabe auf Zahlen 0 - 9 und \".\", sowie Rechenoperatoren\n            (0,_logic_displayValue_js__WEBPACK_IMPORTED_MODULE_2__.displayVal)(key);\n        } else if (key === '+' || key === '-' || key === '*' || key === '/') {\n            (0,_logic_displayValue_js__WEBPACK_IMPORTED_MODULE_2__.displayVal)(key);\n        } else if (key === 'Enter' || key === '='){ // bei \"Enter\" oder \"=\" werden die Werte kalkuliert\n            event.preventDefault();\n            (0,_logic_calculateInput_js__WEBPACK_IMPORTED_MODULE_0__.calculateVal)();\n        } else if (key === 'Backspace') {// Bei \"Lösch-Taste\" wird die letzte Eingabe gelöscht\n            (0,_logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__.deleteLastInput)();\n        } else if (key === 'Escape' || key === 'c') { // Bei \"Escape\" oder \"c\" wird die gesamte Eingabe zurückgesetzt\n            (0,_logic_clearInput_js__WEBPACK_IMPORTED_MODULE_1__.clearInput)();\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://calculator-top/./src/utils/keyboardFunc.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;