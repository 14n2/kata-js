"use strict";

function random(min, max) {
    return min + Math.random() * (max - min);
}

alert(random(1, 5));
alert(random(3, 5));
alert(random(-1, 5));

function randomInt(min, max) {
    let random = min + Math.random() * (max + 1 - min);
    return Math.floor(random);
}

for (let i = 0; i < 10; i++) {
    alert(randomInt(0, 3));
}
