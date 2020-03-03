
let k = null;
function everyReduce(x, y) {
    return x.reduce(y, true)

}
function everyBase(x, y) {
    for (let a of x) {
        if (!(y(a))) return false;
    }
    return true
}


console.log(everyReduce([10, 2, 6, -12, 8, 2], (k, y) => { return (y % 2) === 0 && k }));
