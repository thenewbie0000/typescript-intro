"use strict";
function detectType(val) {
    if (typeof val === "string")
        return val.toLowerCase();
    return val + 3;
}
function provideId(id) {
    if (!id)
        console.log("Please! provide ID");
    id === null || id === void 0 ? void 0 : id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
