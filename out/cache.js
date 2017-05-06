"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sizes_1 = require("./sizes");
var dom_1 = require("./dom");
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
        set = sizes_1.Glyphs;
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
 * @constructor
 */
function AddNewGlyphToCache(selector, glyph) {
    var element = dom_1.AddToBody(dom_1.PrepareSampleElement(selector));
    AddGlyphToCache(selector, glyph, element);
    dom_1.RemoveFromBody(element);
}
exports.AddNewGlyphToCache = AddNewGlyphToCache;
/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @param element
 * @constructor
 */
function AddGlyphToCache(selector, glyph, element) {
    if (typeof RetrieveGlyphSet(selector) === 'undefined') {
        GlyphCache[selector] = {};
    }
    GlyphCache[selector][glyph] = sizes_1.MeasureGlyphSize(element, glyph);
}
exports.AddGlyphToCache = AddGlyphToCache;
