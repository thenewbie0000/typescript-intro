"use strict";
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        console.log(`${account} is admin`);
        return account.isAdmin;
    }
    else {
        console.log(`${account} is User`);
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        console.log(typeof x);
    }
    else {
        console.log(x.toUpperCase());
        console.log(typeof x);
    }
}
logValue(new Date());
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
