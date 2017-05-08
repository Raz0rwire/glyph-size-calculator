/**
 * RetrieveGlyphSet
 * @param selector
 * @returns GlyphCacheItem
 * @constructor
 */
export declare function RetrieveGlyphSet(selector: string): {
    [glyph: string]: number;
};
/**
 * RetrieveGlyphSize
 * @param selector
 * @param glyph
 * @returns {number}
 * @constructor
 */
export declare function RetrieveGlyphSize(selector: string, glyph: string): number;
/**
 * CacheGlyphSet
 * @param selector
 * @param set
 * @constructor
 */
export declare function CacheGlyphSet(selector: string, set?: string[]): void;
/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @constructor
 */
export declare function AddNewGlyphToCache(selector: string, glyph: string): void;
/**
 * AddGlyphToCache
 * @param selector
 * @param glyph
 * @param element
 * @constructor
 */
export declare function AddGlyphToCache(selector: string, glyph: string, element: HTMLSpanElement): void;
