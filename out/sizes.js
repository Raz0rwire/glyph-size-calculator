"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cache_1 = require("./cache");
var index_1 = require("./index");
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
        index_1.CacheGlyphSet(selector);
    return string.split("").reduce(function (acc, letter) {
        if (typeof index_1.RetrieveGlyphSize(selector, letter) === 'undefined') {
            index_1.AddNewGlyphToCache(selector, letter);
        }
        return acc + index_1.RetrieveGlyphSize(selector, letter);
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
