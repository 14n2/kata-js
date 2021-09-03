"use strict";

let calculator = {
    read() {
        this.a = +prompt("First number a = ?", "42");
        this.b = +prompt("Second number b = ?", "51");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // 显示当前的 step
        alert( this.step );
        return this;
    }
};

ladder.up().up().showStep().down().showStep();