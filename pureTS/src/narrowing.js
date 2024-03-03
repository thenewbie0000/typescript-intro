function isAdminAccount(account) {
    if ("isAdmin" in account) {
        console.log("".concat(account, " is admin"));
        return account.isAdmin;
    }
    else {
        console.log("".concat(account, " is User"));
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
