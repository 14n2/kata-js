"use strict"

let res = prompt("What is the \"official\" name of JavaScript?");
if (res === "ECMAScript") {
    alert("Bingo!");
} else {
    alert("Wrong! The correct response is \"ECMAScript\"")
}

let num = prompt("Enter a random number:");
if (+num > 0) {
    alert("1");
} else if (+num < 0) {
    alert("-1");
} else {
    alert("0");
}

let result = (+num + 42 < 51) ? "Below" : "Over";

let login;
let message = (login === "Empoyee") ? "Hello" :
    (login === "Director") ? "Greetings" :
    (login === "") ? "No login" :
    "";