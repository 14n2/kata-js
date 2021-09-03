"use strict";

let user = {};
user["name"] = "John";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];

function isEmpty(obj) {
    for (const objKey in obj) {
        return false;
    }
    return true;
}

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (const salariesKey in salaries) {
    sum += salaries[salariesKey];
}

function multiplyNumeric(obj) {
    for (const objKey in obj) {
        if (typeof obj[objKey] === "number") {
            obj[objKey] *= 2;
        }
    }
}