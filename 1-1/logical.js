"use strict"

let age = 42, ageOk;

if (age >= 14 && age <= 90) {
    ageOk = true;
}

if (!(age >= 14 && age <= 90)) {
    ageOk = false;
}
if (age < 14 || age > 90) {
    ageOk = false;
}

let login = prompt("Login: ");
if (login === "Admin") {
    let password = prompt("Password: ");
    if (password === "TheMaster") {
        console.log("Welcome!");
    } else if (!password) {
        console.log("Canceled");
    } else {
        console.log("Wrong password");
    }
} else if (!login) {
    console.log("Canceled");
} else {
    console.log("I don't know you");
}