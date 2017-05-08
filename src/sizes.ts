import {RetrieveGlyphSet} from "./cache";
import {CacheGlyphSet, RetrieveGlyphSize, AddNewGlyphToCache} from "./index";

const BasicGlyphSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const UppercaseBasicGlyphSet = BasicGlyphSet.map((glyph) => glyph.toUpperCase());
const NumberGlyphSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const SpecialGlyphSet = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', '-', ' '];

export const Glyphs = BasicGlyphSet
    .concat(UppercaseBasicGlyphSet)
    .concat(NumberGlyphSet)
    .concat(SpecialGlyphSet);

/**
 * CalculateStringSize
 * @param selector
 * @param string
 * @constructor
 */
export function CalculateStringSize(selector: string, string: string): number {
    if (typeof RetrieveGlyphSet(selector) === 'undefined') CacheGlyphSet(selector);

    return string.split("").reduce((acc: number, letter: string) => {
        if (typeof RetrieveGlyphSize(selector, letter) === 'undefined') {
            AddNewGlyphToCache(selector, letter);
        }

        return acc + RetrieveGlyphSize(selector, letter);
    }, 0);
}


/**
 * MeasureGlyphSize
 * @param element
 * @param glyph
 * @returns {number}
 * @constructor
 */
export function MeasureGlyphSize(element: HTMLSpanElement, glyph: string): number {
    element.innerHTML = glyph;
    return element.getBoundingClientRect().width;
}
