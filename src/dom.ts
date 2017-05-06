/**
 * PrepareSampleElement
 * @param selector
 * @returns {HTMLSpanElement}
 * @constructor
 */
export function PrepareSampleElement(selector: string): HTMLSpanElement {
    const sourceElement = document.querySelector(selector);
    const span: any = document.createElement('span');
    const style: any = window.getComputedStyle(sourceElement, null);

    const toCopy = [
        'letterSpacing',
        'fontSize',
        'fontFamily',
        'fontWeight',
        'textTransform'
    ];

    toCopy.forEach(function (one) {
        if (style[one] !== undefined) {
            span.style[one] = style[one]
        }
    });

    return span;
}


/**
 * AddToBody
 * @param element
 * @constructor
 */
export function AddToBody(element: HTMLSpanElement): HTMLSpanElement {
    document.body.appendChild(element);
    return element;
}


/**
 * RemoveFromBody
 * @param element
 * @constructor
 */
export function RemoveFromBody(element: HTMLSpanElement): HTMLSpanElement {
    document.body.removeChild(element);
    return element;
}