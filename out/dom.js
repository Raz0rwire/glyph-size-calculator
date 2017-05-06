"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * PrepareSampleElement
 * @param selector
 * @returns HTMLSpanElement
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
 * @returns HTMLSpanElement
 */
function AddToBody(element) {
    document.body.appendChild(element);
    return element;
}
exports.AddToBody = AddToBody;
/**
 * RemoveFromBody
 * @param element
 * @returns HTMLSpanElement
 */
function RemoveFromBody(element) {
    document.body.removeChild(element);
    return element;
}
exports.RemoveFromBody = RemoveFromBody;
