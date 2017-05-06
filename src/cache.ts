import {Glyphs, MeasureGlyphSize} from "./index";
import {AddToBody, PrepareSampleElement, RemoveFromBody} from "./dom";

interface GlyphCache {
    [key: string]: GlyphCacheItem
}

type GlyphCacheItem = {
    [glyph: string]: number
};

const GlyphCache: GlyphCache = {};


/**
 * RetrieveGlyphSet
 * @param selector
 * @returns GlyphCacheItem
 * @constructor
 */
export function RetrieveGlyphSet(selector: string) {
    return GlyphCache[selector];
}


/**
 * RetrieveGlyphSize
 * @param selector
 * @param glyph
 * @returns {number}
 * @constructor
 */
export function RetrieveGlyphSize(selector: string, glyph: string) {
    return RetrieveGlyphSet(selector)[glyph];
}


/**
 * CacheGlyphSet
 * @param selector
 * @param set
 * @constructor
 */
export function CacheGlyphSet(selector: string, set: string[] = null) {
    if (!set) set = Glyphs;
    GlyphCache[selector] = {};

    const element = AddToBody(PrepareSampleElement(selector));
    set.forEach((glyph) => {
        AddGlyphToCache(selector, glyph, element);
    });

    RemoveFromBody(element);
}


/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @constructor
 */
export function AddNewGlyphToCache(selector: string, glyph: string) {
    const element = AddToBody(PrepareSampleElement(selector));
    AddGlyphToCache(selector, glyph, element);
    RemoveFromBody(element);
}

/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @param element
 * @constructor
 */
export function AddGlyphToCache(selector: string, glyph: string, element: HTMLSpanElement) {
    if (typeof RetrieveGlyphSet(selector) === 'undefined') {
        GlyphCache[selector] = {};
    }

    GlyphCache[selector][glyph] = MeasureGlyphSize(element, glyph);
}