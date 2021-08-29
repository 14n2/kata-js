function min(a, b) {
    return +a < +b ? +a : +b;
}

function pow(x, n) {
    let res = x;
    for (let i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

let x = prompt("x = ?");
let n = prompt("n = ?");
alert(pow(+x, +n));