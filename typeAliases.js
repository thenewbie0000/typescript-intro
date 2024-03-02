"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(user) {
    return { name: "", email: "", isActive: false };
}
createUser({ name: "", email: "", isActive: false });
var myCustomer = {
    _id: '25675',
    name: 'Rojesh',
    email: 'shrestharojesh34@gmail.com',
    isActive: true,
};
myCustomer.email = 'rs@gmail.com';
// myCustomer._id = '54545'   CANNOT BE MODIFIED
console.log(myCustomer);
var creditCard = {
    cardNumber: '545654654',
    cardDate: '2024/03/02',
    cvv: 2080
};
console.log(creditCard);
