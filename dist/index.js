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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = __webpack_require__(1);
var BasicGlyphSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var UppercaseBasicGlyphSet = BasicGlyphSet.map(function (glyph) { return glyph.toUpperCase(); });
var NumberGlyphSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var SpecialGlyphSet = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', '-', ' '];
exports.Glyphs = BasicGlyphSet
    .concat(UppercaseBasicGlyphSet)
    .concat(NumberGlyphSet)
    .concat(SpecialGlyphSet);
/**
 * CalculateStringSize
 * @param selector
 * @param string
 * @constructor
 */
function CalculateStringSize(selector, string) {
    if (typeof cache_1.RetrieveGlyphSet(selector) === 'undefined')
        cache_1.CacheGlyphSet(selector);
    return string.split("").reduce(function (acc, letter) {
        if (typeof cache_1.RetrieveGlyphSize(selector, letter) === 'undefined') {
            cache_1.AddNewGlyphToCache(selector, letter);
        }
        return acc + cache_1.RetrieveGlyphSize(selector, letter);
    }, 0);
}
exports.CalculateStringSize = CalculateStringSize;
/**
 * MeasureGlyphSize
 * @param element
 * @param glyph
 * @returns {number}
 * @constructor
 */
function MeasureGlyphSize(element, glyph) {
    element.innerHTML = glyph;
    return element.getBoundingClientRect().width;
}
exports.MeasureGlyphSize = MeasureGlyphSize;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var dom_1 = __webpack_require__(2);
var GlyphCache = {};
/**
 * RetrieveGlyphSet
 * @param selector
 * @returns GlyphCacheItem
 * @constructor
 */
function RetrieveGlyphSet(selector) {
    return GlyphCache[selector];
}
exports.RetrieveGlyphSet = RetrieveGlyphSet;
/**
 * RetrieveGlyphSize
 * @param selector
 * @param glyph
 * @returns {number}
 * @constructor
 */
function RetrieveGlyphSize(selector, glyph) {
    return RetrieveGlyphSet(selector)[glyph];
}
exports.RetrieveGlyphSize = RetrieveGlyphSize;
/**
 * CacheGlyphSet
 * @param selector
 * @param set
 * @constructor
 */
function CacheGlyphSet(selector, set) {
    if (set === void 0) { set = null; }
    if (!set)
        set = index_1.Glyphs;
    GlyphCache[selector] = {};
    var element = dom_1.AddToBody(dom_1.PrepareSampleElement(selector));
    set.forEach(function (glyph) {
        AddGlyphToCache(selector, glyph, element);
    });
    dom_1.RemoveFromBody(element);
}
exports.CacheGlyphSet = CacheGlyphSet;
/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @param element
 * @constructor
 */
function AddNewGlyphToCache(selector, glyph) {
    var element = dom_1.AddToBody(dom_1.PrepareSampleElement(selector));
    AddGlyphToCache(selector, glyph, element);
    dom_1.RemoveFromBody(element);
}
exports.AddNewGlyphToCache = AddNewGlyphToCache;
function AddGlyphToCache(selector, glyph, element) {
    GlyphCache[selector][glyph] = index_1.MeasureGlyphSize(element, glyph);
}
exports.AddGlyphToCache = AddGlyphToCache;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PrepareSampleElement
 * @param selector
 * @returns {HTMLSpanElement}
 * @constructor
 */
function PrepareSampleElement(selector) {
    var sourceElement = document.querySelector(selector);
    var span = document.createElement('span');
    var style = window.getComputedStyle(sourceElement, null);
    var toCopy = [
        'letterSpacing',
        'fontSize',
        'fontFamily',
        'fontWeight',
        'textTransform'
    ];
    toCopy.forEach(function (one) {
        if (style[one] !== undefined) {
            span.style[one] = style[one];
        }
    });
    return span;
}
exports.PrepareSampleElement = PrepareSampleElement;
/**
 * AddToBody
 * @param element
 * @constructor
 */
function AddToBody(element) {
    document.body.appendChild(element);
    return element;
}
exports.AddToBody = AddToBody;
/**
 * RemoveFromBody
 * @param element
 * @constructor
 */
function RemoveFromBody(element) {
    document.body.removeChild(element);
    return element;
}
exports.RemoveFromBody = RemoveFromBody;


/***/ })
/******/ ]);