/**
 * PrepareSampleElement
 * @param selector
 * @returns HTMLSpanElement
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
 * @returns HTMLSpanElement
 */
export function AddToBody(element: HTMLSpanElement): HTMLSpanElement {
    document.body.appendChild(element);
    return element;
}


/**
 * RemoveFromBody
 * @param element
 * @returns HTMLSpanElement
 */
export function RemoveFromBody(element: HTMLSpanElement): HTMLSpanElement {
    document.body.removeChild(element);
    return element;
}