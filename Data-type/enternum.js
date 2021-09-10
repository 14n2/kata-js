"use strict";

function readNumber() {
    let num;

    do {
        num = prompt("Enter a number: ", "42");
        if (num === null || num === "") {
            return null;
        }
    } while (!isFinite(num));
    return +num;
}

alert(readNumber());
