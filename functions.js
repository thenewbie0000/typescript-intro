"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //return 'hello';
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    isPaid ? console.log(name + ' has paid his subscription through ' + email) :
        console.log(name + ', please pay your monthly subscription through' + email);
}
var loginUser = function (name, email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
    isLoggedIn ? console.log(name + " logged in with " + email) :
        console.log("Please provide your authentication through " + email);
};
var add = addTwo(5);
console.log(add);
console.log(getUpper('rojesh'));
signUpUser('Rojesh', 'shrestharojesh34@gmail.com', true);
loginUser('Rojesh', 'shrestharojesh34@gmail.com');
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK";
}
console.log(getValue(10));
var getHello = function (s) {
    return s + '  ....';
};
var heros = ['thor', 'spiderman', 'ironman'];
var newArray = heros.map(function (hero) {
    return "".concat(hero, " is my favorite");
});
console.log(newArray);
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
