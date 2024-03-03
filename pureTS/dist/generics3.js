"use strict";
function anotherFunction(valOne, valTwo) {
    return {
        valOne, valTwo
    };
}
anotherFunction(3, { userName: 'rojesh', connection: 'wifi', password: 'rs123' });
class Sale {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
