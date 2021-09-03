function Calculator() {

    this.read = function () {
        this.a = +prompt("First number a = ?", "42");
        this.b = +prompt("Second number b = ?", "51");
    };

    this.sum = () => {
        return this.a + this.b;
    };

    this.mul = () => {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = () => {
        let newValue = +prompt("Enter the number: ", "42");
        this.value += newValue;
    }
}
let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);