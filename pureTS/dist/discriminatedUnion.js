"use strict";
function getTrueShape(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side ** 2;
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'sqaure':
            return shape.side ** 2;
        case 'rectangle':
            return shape.length * shape.width;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}
