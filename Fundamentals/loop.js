"use strict"

for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

let num;
do {
    num = prompt("Enter a number:");
} while (num && +num < 100);