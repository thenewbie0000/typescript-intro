"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myArray1 = [];
myArray1.push('Shaktiman');
myArray1.push('Chandraman');
//const myArray2: number[]= []
var myArray2 = [];
myArray2.push(1);
myArray2.push(2);
var myArray3 = [];
myArray3 = myArray2.map(String).concat(myArray1);
console.log(myArray1);
console.log(myArray2);
console.log(myArray3);
var allUsers = [];
allUsers.push({ name: 'rojesh', isActive: true });
allUsers.push({ name: "", isActive: false });
console.log(allUsers);
var MLModels = [
    [255, 255, 255],
    [0, 0, 0]
];
console.log(MLModels);
